const { execSync } = require('child_process');
const fs = require('fs');

const MAJOR_COMMIT_TAGS = ['feat!', 'fix!'];
const MINOR_COMMIT_TAGS = ['feat:'];
const PATCH_COMMIT_TAGS = ['fix:'];

const PACKAGE_JSON_NAME = 'package.json';
const PACKAGE_JSON_FILE_PATH = 'package.json';

const VERSION_REGEX = /^\d+\.\d+\.\d+$/;
const AUTO_COMMIT_PREFIX = `Bump version in ${PACKAGE_JSON_NAME}`;

let majorVersion = 0;
let minorVersion = 1;
let patchVersion = 0;

let packageJson = undefined;

/**
 * Checks if the package.json file exists and loads it.
 * Checks if the package.json has the "version" field and a valid format
 */
try {
    packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_FILE_PATH, 'utf8'));

    if (!packageJson.version || !VERSION_REGEX.test(packageJson.version)) {
        throw new Error(
            `Invalid or missing "version" field in ${PACKAGE_JSON_NAME}`,
        );
    }
} catch (error) {
    console.error(`Error reading from ${PACKAGE_JSON_NAME}:`, error.message);
    process.exit(1);
}

/**
 * Gets the list of commit messages
 */

let commitMessages = [];

try {
    commitMessages = execSync('git log --full-history --pretty=format:%s', {
        encoding: 'utf8',
    })
        .split('\n')
        .reverse();
} catch (error) {
    console.error('Error fetching commit history:', error.message);
    process.exit(1);
}

/**
 * If the commitMessages empty, exit the script
 */
if (commitMessages.length < 0) {
    process.exit(0);
}

/**
 * If the last commit was the auto commit, exit the script to prevent re-execution
 */
const lastCommitMsg = commitMessages[commitMessages.length - 1];

if (lastCommitMsg.includes(AUTO_COMMIT_PREFIX)) {
    // console.error('Block nextVersion.js script re-execution');
    process.exit(0);
}

/**
 * Iterates over all commit messages and updates the version number
 */
for (const commitMessage of commitMessages) {
    if (MAJOR_COMMIT_TAGS.some((tag) => commitMessage.includes(tag))) {
        majorVersion++;
        minorVersion = 0;
        patchVersion = 0;
    } else if (MINOR_COMMIT_TAGS.some((tag) => commitMessage.includes(tag))) {
        minorVersion++;
        patchVersion = 0;
    } else if (PATCH_COMMIT_TAGS.some((tag) => commitMessage.includes(tag))) {
        patchVersion++;
    }
}

const newVersion = `${majorVersion}.${minorVersion}.${patchVersion}`;
const lastVersion = packageJson.version;

const commitMsg = `" ${AUTO_COMMIT_PREFIX} from ${lastVersion} to ${newVersion}"`;

const isNotSameVersion = newVersion !== lastVersion;

/**
 * Updates the version in package.json if it has changed
 */
if (isNotSameVersion) {
    packageJson.version = newVersion;

    try {
        fs.writeFileSync(
            PACKAGE_JSON_FILE_PATH,
            JSON.stringify(packageJson, null, 4),
        );
        console.log(commitMsg);
    } catch (error) {
        console.error(`Error writing to ${PACKAGE_JSON_NAME}:`, error.message);
        process.exit(1);
    }
} else {
    console.log(`The Current Version is: ${newVersion}`);
}

/**
 * If the --auto-commit flag is passed, commits the changes automatically
 */

if (process.argv.includes('--auto-commit') && isNotSameVersion) {
    try {
        execSync(`git add ${PACKAGE_JSON_NAME}`);
        execSync(` git commit --no-verify -m ${commitMsg}`);
    } catch (error) {
        console.error('Error during auto-commit:', error.message);
        process.exit(1);
    }
}

module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                // Adds a new feature
                'feat',

                // Fixes a bug
                'fix',

                // Change/Edit the Documentation
                'docs',

                // Clean up Code (no functional changes)
                'style',

                // Code refactoring (no behavior change)
                'refactor',

                // Performance improvements
                'perf',

                // Add or modified tests
                'test',

                // Changes to build system or dependencies
                'build',

                // Changes to CI/CD configuration
                'ci',

                // Routine tasks (no impact on code)
                'chore',

                // Reverts a previous commit
                'revert',

                // CUSTOM TYPES

                // Change to the testApi
                'testapi',

                // Changes only for dev env
                'dev',

                // Configuration file changes
                'config',
            ],
        ],
        'type-case': [2, 'always', 'lowerCase'],
        'type-empty': [2, 'never'],
        'subject-empty': [2, 'never'],
        'subject-case': [2, 'never', ['start-case']],
        'header-max-length': [2, 'always', 100],
    },
};

#!/bin/bash

# Initial versions
major_version=0
minor_version=4
patch_version=0

# Tags for version bump determination
MAJOR_COMMIT_TAGS=("feat!" "fix!")
MINOR_COMMIT_TAGS=("feat")
PATCH_COMMIT_TAGS=("fix")
COMMIT_TAGS=("${MAJOR_COMMIT_TAGS[@]}" "${MINOR_COMMIT_TAGS[@]}" "${PATCH_COMMIT_TAGS[@]}")

PACKAGE_JSON_FILE="package.json"

# Get commit messages
IFS=$'\n'
commit_messages=($(git log --full-history --pretty=format:"%s"))
unset IFS

# Process commit messages in reverse order
reversed_commit_messages=()
for (( i=${#commit_messages[@]}-1; i>=0; i-- )); do
    reversed_commit_messages+=("${commit_messages[i]}")
done

for commit_message in "${reversed_commit_messages[@]}"; do

    # Check for major version bump
    for tag in "${MAJOR_COMMIT_TAGS[@]}"; do
        if [[ $commit_message == *$tag* ]]; then
            major_version=$((major_version + 1))
            minor_version=0
            patch_version=0
            continue 2
        fi
    done

    # Check for minor version bump
    for tag in "${MINOR_COMMIT_TAGS[@]}"; do
        if [[ $commit_message == *"$tag:"* ]]; then
            minor_version=$((minor_version + 1))
            patch_version=0
            continue 2
        fi
    done

    # Check for patch version bump
    for tag in "${PATCH_COMMIT_TAGS[@]}"; do
        if [[ $commit_message == *"$tag:"* ]]; then
            patch_version=$((patch_version + 1))
            continue 2
        fi
    done

done

new_version="$major_version.$minor_version.$patch_version"

# Get last version from package.json
last_version=$(grep -a "\"version\":" "$PACKAGE_JSON_FILE" | tr -d ',\" :version')

# Update version in package.json
sed -i "s#\"version\":.*#\"version\": \"$new_version\",#" $PACKAGE_JSON_FILE

commit_msg="Bump version in $PACKAGE_JSON_FILE from $last_version to $new_version"
no_changes_msg="No changes are made."
auto_push_success_msg="Changes have been successfully pushed."

commit_changes() {
    if [[ "$new_version" != "$last_version" ]]; then
        git add "$PACKAGE_JSON_FILE"
        git commit --no-verify -m "$commit_msg"
        echo "$commit_msg"
    else
        echo "$no_changes_msg"
    fi
}

# Auto-Commit if flag is passed
if [[ " $@ " =~ " --auto-commit " ]]; then
    commit_changes
fi

# Auto-push if flag is passed
if [[ " $@ " =~ " --auto-push " ]]; then
    commit_changes
    git push
    echo "$auto_push_success_msg"
fi

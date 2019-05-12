#!/bin/bash

latest_commit=`git rev-parse HEAD`
echo $latest_commit

selected_service=`git diff-tree --no-commit-id --name-only $latest_commit`
echo $selected_service
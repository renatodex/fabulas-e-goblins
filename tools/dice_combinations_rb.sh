#!/bin/bash

# Check if Ruby is installed
if ! command -v ruby &> /dev/null
then
    echo "Ruby not found. Please install Ruby to run this script."
    exit 1
fi

# Execute the Ruby script
ruby dice_combination.rb "$@"
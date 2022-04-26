#!/usr/bin/env bash

[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1

# exit on first error after this point to avoid redeploying with successful build
set -e

echo --------------------------------------------
echo
echo "creating a subaccount 1. under $OWNER"
echo

near create-account sub1.$OWNER --masterAccount=$OWNER --initialBalance "10"

exit 0
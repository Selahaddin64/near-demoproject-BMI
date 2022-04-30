#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1


echo
echo ---------------------------------------------------------
echo "Step 1: We must add and calculate the default baselines just before deployment"
echo ---------------------------------------------------------
echo "About to call createBMI() on the contract"
echo near call $CONTRACT createBMI '{"weight":"$1", "height":"$2"}' --accountId $OWNER
echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo \$weight is [ $1 ] '(the weight value)'
echo \$height is [ $2 ] '(the height value)'
echo
near call $CONTRACT createBMI '{"weight": '"$1"', "height": '"$2"'}' --accountId $OWNER

echo
echo
echo ---------------------------------------------------------
echo "Step 2: We can update the data you have saved by accessing it."
echo ---------------------------------------------------------
echo \$TypeId is [ $3 ] '(the Type Id)'
echo

near call $CONTRACT updateBMI '{"id":'"$3"', "updates":{"weight":'"$1"', "height":'"$2"'} }' --accountId $OWNER


echo
echo
echo ---------------------------------------------------------
echo "Step 3: We can delete BMI calculation data."
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT delBMI '{"id":'"$3"'}' --accountId $OWNER
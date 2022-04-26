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
echo near call $CONTRACT createBMI '{"weight":$weight, "height":$height}' --accountId $OWNER
echo
echo \$CONTRACT is $CONTRACT
echo \$OWNER is $OWNER
echo \$weight is [ $weight ] '(the weight)'
echo \$height is [ $height ] '(the height)'

echo
near call $CONTRACT createBMI '{"weight":'$weight'50.5, "height":'$height'1.75}' --accountId $OWNER

echo
echo
echo ---------------------------------------------------------
echo "Step 2: We can update the data you have saved by accessing it."
echo ---------------------------------------------------------
echo \$TypeId is [ $TypeId ] '(the Type Id)'
echo

near call $CONTRACT updateBMI '{"id":'$TypeId'2286173548, "updates":{"weight":'$weight'60.6, "height":'$height'1.80} }' --accountId $OWNER


echo
echo
echo ---------------------------------------------------------
echo "Step 3: We can delete BMI calculation data."
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT delBMI '{"id":'$TypeId'2286173548}' --accountId $OWNER
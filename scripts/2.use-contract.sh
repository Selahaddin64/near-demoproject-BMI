#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 0: Check for environment variable with contract name"
echo ---------------------------------------------------------
echo

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1
[ -z "$CONTRACT" ] || echo "Found it! \$CONTRACT is set to [ $CONTRACT ]"
[ -z "$OWNER" ] && echo "Missing \$OWNER environment variable" && exit 1
[ -z "$OWNER" ] || echo "Found it! \$OWNER is set to [ $OWNER ]"

echo
echo
echo ---------------------------------------------------------
echo "Step 1: We must add and calculate the default baselines just before deployment"
echo
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT createBMI '{"weight":<WEİGHT_VALUE>, "height":<HEİGHT_VALUE>}' --accountId <YOUR_ACCOUNT>.testnet

echo
echo
echo ---------------------------------------------------------
echo "Step 2: We can get the body mass index account data by their ID."
echo ---------------------------------------------------------
echo

near view  $CONTRACT getBMIById '{"id":<TypeID>}'


echo
echo
echo ---------------------------------------------------------
echo "Step 3: We can update the data you have saved by accessing it."
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT updateBMI '{"id"<TypeID>:, "updates":{"weight":<WEİGHT_VALUE>, "height":<HEİGHT_VALUE>} }' --accountId <YOUR_ACCOUNT>.testnet


echo
echo
echo ---------------------------------------------------------
echo "Step 4: We can get the BMI list"
echo ---------------------------------------------------------
echo
echo

near view  $CONTRACT listAllBMI '{"offset":<OFFSET_VALUE>}' --accountId <YOUR_ACCOUNT>.testnet 


echo
echo
echo ---------------------------------------------------------
echo "Step 5: We can delete BMI calculation data."
echo ---------------------------------------------------------
echo
echo

near call $CONTRACT delBMI '{"id":TypeID}' --accountId <YOUR_ACCOUNT>.testnet
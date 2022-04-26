#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo "These are the environment variables being used:"
echo
echo "CONTRACT is [ $CONTRACT ]"
echo
echo

echo "--------------------------------------------"
echo Report for $CONTRACT
echo "--------------------------------------------"
echo "near view $CONTRACT getBMIById '{"id":$TypeId}'"
echo \$TypeId is [ $TypeId ] '(the Type Id)'
near view $CONTRACT getBMIById '{"id":'$TypeId'3150274785}'
echo

echo "near view  $CONTRACT listAllBMI '{"offset":$Offset_Value}' --accountId $OWNER"
echo \$Offset is [ $Offset_Value ] '(the Offset Value)'
near view  $CONTRACT listAllBMI '{"offset":'$Offset_Value'0}' --accountId $OWNER
echo
echo
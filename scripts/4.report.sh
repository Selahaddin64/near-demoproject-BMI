#!/usr/bin/env bash
set -e

[ -z "$CONTRACT" ] && echo "Missing \$CONTRACT environment variable" && exit 1

echo "These are the environment variables being used:"
echo
echo "CONTRACT is [ $CONTRACT ]"
echo
echo

echo "near view  $CONTRACT listAllBMI '{"offset":"$1"}' --accountId $OWNER"
echo \$Offset is [ $1 ] '(the Offset Value)'
near view  $CONTRACT listAllBMI '{"offset":'"$1"'}' --accountId $OWNER
echo
echo


echo "--------------------------------------------"
echo Report for $CONTRACT
echo "--------------------------------------------"
echo "near view $CONTRACT getBMIById '{"id":"$2"}'"
echo \$TypeId is [ $2 ] '(the Type Id)'
near view $CONTRACT getBMIById '{"id":'"$2"'}'
echo


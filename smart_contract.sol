pragma solidity ^0.4.11;


contract Ledger {

    mapping (bytes32 => uint8) public mMappingRecord;

    bytes32[] public mUserList;

    function Ledger(bytes32[] userList) {
        mUserList = userList;
    }

    function totalAssetsFor(bytes32 user) returns (uint8) {
        if (validUser(user) == false) {
            throw;
        } else {
            return mMappingRecord[user];
        }
    }

    function updateAssetsFor(bytes32 user, uint8 i) {
        if (validUser(user) == false) {
            throw;
        } else {
            mMappingRecord[user] += i;
        }
    }

    function validUser(bytes32 user) returns (bool) {
        for (uint i = 0; i < mUserList.length; ++i) {
            if (user == mUserList[i]) {
                return true;
            }
        }

        return false;
    }
}
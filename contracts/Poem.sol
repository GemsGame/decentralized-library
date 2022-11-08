// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

// this is to write a poem. whenever someone wants to add a line, he can call addLine.
// added text can never be removed
contract Poem {
    string public text;

    // retrieve the current status of the poem
    function get() public view returns (string memory) {
        return text;
    }

    // add text to the poem
    function addLine(string memory added_text) public {
        text = string(abi.encodePacked(text,added_text));
    }
}
/// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Treasury is Ownable {
    uint256 public Funds;
    bool public isReleased;

    constructor() payable {
        Funds = msg.value;
        isReleased = false;
    }

    function releaseFunds(address payable _payee) public onlyOwner {
        isReleased = true;
        payable(_payee).transfer(Funds);
    }
}

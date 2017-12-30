pragma solidity ^0.4.13;

import './KoalaCoin.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';

contract BuyTokens is Crowdsale {

  function BuyTokens(uint256 _startTime, uint256 _endTime, uint256 _rate, address _wallet) internal Crowdsale(_startTime, _endTime, _rate, _wallet) {
  }

  function createTokenContract() internal returns (MintableToken) {
    return new KoalaCoin();
  }
}

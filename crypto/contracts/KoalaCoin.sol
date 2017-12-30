pragma solidity ^0.4.17;

import 'zeppelin-solidity/contracts/token/PausableToken.sol';
import 'zeppelin-solidity/contracts/token/BurnableToken.sol';
import 'zeppelin-solidity/contracts/token/MintableToken.sol';
import './BancorContracts/BancorConverter.sol';
import './BancorContracts/BancorConverterExtensions.sol';

// We give more options to our coin
contract FinalCoin is MintableToken, BurnableToken, PausableToken {}

contract KoalaCoin is FinalCoin {
  string public name = "KoalaCoin";
  string public symbol = "KGC";
  uint256 public decimals = 8;
  uint256 public totalSupply = 10000000000000000;
}

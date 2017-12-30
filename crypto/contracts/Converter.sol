pragma solidity ^0.4.19;

import './BancorContracts/BancorConverter.sol';

// we should get the deployed coin from web3.
import './KoalaCoin.sol';


contract Converter is BancorConverter {

  // function connectorTokenCount() public constant returns (uint16 count)
  // function connectorTokens() public constant returns (address[] connectorTokens)
  // function connectors(address _connectorToken) public constant


  // function convert(address _fromToken, address _toToken, uint256 _amount, uint256 _minReturn)
}


KoalaCoin.deployed().then( function(instance) {

});

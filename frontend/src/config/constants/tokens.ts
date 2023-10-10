import { ChainId, Token } from '@pancakeswap/sdk'

export const CAKE: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(ChainId.MAINNET, '0xD89a1E2b55A1e63A6ef99A2AFf3F3B3A4882D620', 18, 'SYNC', 'PepeSync'),
  [ChainId.TESTNET]: new Token(ChainId.TESTNET, '0xD89a1E2b55A1e63A6ef99A2AFf3F3B3A4882D620', 18, 'SYNC', 'PepeSync'),
}
export const BUSD: { [chainId: number]: Token } = {
  [ChainId.MAINNET]: new Token(
    ChainId.MAINNET,
    '0xadf393f388BBd5EFbA07987dd734467F7c6e81f0',
    18,
    'BUSD',
    'Binance USD',
  ),
  [ChainId.TESTNET]: new Token(
    ChainId.TESTNET,
    '0xadf393f388BBd5EFbA07987dd734467F7c6e81f0',
    18,
    'BUSD',
    'Binance USD',
  ),
}

export const WBNB = new Token(ChainId.MAINNET, '0x937df41e7AE544c028494Bc2dCB69F2Ebf9eFb50', 18, 'WBNB', 'Wrapped BNB')

const tokens = {
  bnb: {
    symbol: 'ETH',
    projectLink: '',
  },
  wbnb: {
    symbol: 'WETH',
    address: {
      7777: '0x937df41e7AE544c028494Bc2dCB69F2Ebf9eFb50',
      7778: '0x937df41e7AE544c028494Bc2dCB69F2Ebf9eFb50',
    },
    decimals: 18,
    projectLink: '',
  },
  cake: {
    symbol: 'SYNC',
    address: {
      7777: '0xD89a1E2b55A1e63A6ef99A2AFf3F3B3A4882D620',
      7778: '0xD89a1E2b55A1e63A6ef99A2AFf3F3B3A4882D620',
    },
    decimals: 18,
    projectLink: 'https://leap.io/',
  },
}

export default tokens

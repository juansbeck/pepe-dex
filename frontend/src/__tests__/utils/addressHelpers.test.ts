import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    7778: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    7777: '0x52cd33c4c0CA3d0eD69Eff8cf423e4eBc3cBee27',
  }

  it(`get address for mainnet (chainId 7778)`, () => {
    process.env.REACT_APP_CHAIN_ID = '7778'
    const expected = address[7778]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[7778]
    expect(getAddress(address)).toEqual(expected)
  })
})

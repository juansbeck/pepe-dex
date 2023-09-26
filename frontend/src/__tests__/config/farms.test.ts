import { BigNumber } from 'ethers'
import farms from 'config/constants/farms'
import { Farm } from 'state/types'
import { getBep20Contract, getLpContract } from 'utils/contractHelpers'

// Test only against the last 10 farms, for performance concern
const farmsToTest: [number, Farm][] = farms
  .filter((farm) => farm.pid !== 0)
  .slice(0, 10)
  .map((farm) => [farm.pid, farm])

describe('Config farms', () => {
  it.each(farmsToTest)('Farm #%d has an unique pid', (pid) => {
    const duplicates = farms.filter((f) => pid === f.pid)
    expect(duplicates).toHaveLength(1)
  })

  it.each(farmsToTest)('Farm #%d has an unique address', (pid, farm) => {
    const duplicates = farms.filter((f) => farm.lpAddresses[882687] === f.lpAddresses[882687])
    expect(duplicates).toHaveLength(1)
  })

  it.each(farmsToTest)('Farm %d has the correct token addresses', async (pid, farm) => {
    const tokenAddress = farm.token.address[882687]
    const quoteTokenAddress = farm.quoteToken.address[882687]
    const lpContract = getLpContract(farm.lpAddresses[882687])

    const token0Address = (await lpContract.token0()).toLowerCase()
    const token1Address = (await lpContract.token1()).toLowerCase()

    expect(
      token0Address === tokenAddress.toLowerCase() || token0Address === quoteTokenAddress.toLowerCase(),
    ).toBeTruthy()
    expect(
      token1Address === tokenAddress.toLowerCase() || token1Address === quoteTokenAddress.toLowerCase(),
    ).toBeTruthy()
  })

  it.each(farmsToTest)('Farm %d has non 0 tokens amount', async (pid, farm) => {
    const tokenContract = getBep20Contract(farm.token.address[882687])
    const quoteTokenContract = getBep20Contract(farm.quoteToken.address[882687])

    const tokenAmount: BigNumber = await tokenContract.balanceOf(farm.lpAddresses[882687])
    const quoteTokenAmount: BigNumber = await quoteTokenContract.balanceOf(farm.lpAddresses[882687])

    expect(tokenAmount.gt(0)).toBeTruthy()
    expect(quoteTokenAmount.gt(0)).toBeTruthy()
  })

  // The first pid using the new factory
  const START_PID = 365
  const FACTORY_ADDRESS = '0xDc3D17217906b93aBf1be6BA6fa05bD1d9215451'
  const newFarmsToTest = farmsToTest.filter((farmSet) => farmSet[0] >= START_PID)

  it.each(newFarmsToTest)('farm %d is using correct factory address', async (pid, farm) => {
    const lpContract = getLpContract(farm.lpAddresses[882687])
    const factory = await lpContract.factory()
    expect(factory.toLowerCase()).toEqual(FACTORY_ADDRESS)
  })
})
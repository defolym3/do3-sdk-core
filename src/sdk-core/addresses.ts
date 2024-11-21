import { ChainId, SUPPORTED_CHAINS } from './chains';

type AddressMap = { [chainId: number]: string };

type ChainAddresses = {
  v3CoreFactoryAddress: string;
  multicallAddress: string;
  quoterAddress: string;
  v3MigratorAddress?: string;
  nonfungiblePositionManagerAddress?: string;
  tickLensAddress?: string;
  swapRouter02Address?: string;
  v1MixedRouteQuoterAddress?: string;
};

const DEFAULT_NETWORKS = [ChainId.SONEIUM_TESTNET, ChainId.BASE, ChainId.SHAPE_TESTNET,];

function constructSameAddressMap(address: string, additionalNetworks: ChainId[] = []): AddressMap {
  return DEFAULT_NETWORKS.concat(additionalNetworks).reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = address;
    return memo;
  }, {});
}

export const PROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.AMOY]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.ARBITRUM]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.ARBITRUM_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.AVALANCHE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BASE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BASE_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BSC]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BSC_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.FRAX_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.FUJI]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HEDERA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HEDERA_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HOLESKY]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.KAIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.KAIROS]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.METIS_TESTNET]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.MODE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.MODE_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OKX]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OPBNB_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OPTIMISM]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SCROLL]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SCROLL_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SHAPE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SHAPE_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SONEIUM_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.UNICHAIN_TESTNET]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
};

export const XPROTOCOL_TOKEN_ADDRESSES: AddressMap = {
  [ChainId.AMOY]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.ARBITRUM]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.ARBITRUM_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.AVALANCHE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BASE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BASE_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BSC]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.BSC_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.FRAX_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.FUJI]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HEDERA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HEDERA_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.HOLESKY]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.KAIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.KAIROS]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.METIS_TESTNET]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.MODE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.MODE_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OKX]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OPBNB_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.OPTIMISM]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SCROLL]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SCROLL_SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SEPOLIA]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SHAPE_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SHAPE]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.SONEIUM_TESTNET]: '0x4073de1f5f60f92C8d014251e1A6396589c10C09',
  [ChainId.UNICHAIN_TESTNET]:'0x4073de1f5f60f92C8d014251e1A6396589c10C09',
};

export const V2_FACTORY_ADDRESSES: AddressMap = {
  [ChainId.AMOY]:'0x1C929B974B48204DB9A385670F3029A4717D4e7A', //minato pancake factory
  [ChainId.ARBITRUM]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.ARBITRUM_SEPOLIA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.AVALANCHE]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.BASE]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.BASE_SEPOLIA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.BSC]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.BSC_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.FRAX_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.FUJI]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.HEDERA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.HEDERA_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.HOLESKY]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.KAIA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.KAIROS]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.METIS_TESTNET]:'0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.MODE]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.MODE_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.OKX]:'0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.OPBNB_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.OPTIMISM]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SCROLL]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SCROLL_SEPOLIA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SEPOLIA]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SHAPE_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SHAPE]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.SONEIUM_TESTNET]: '0x1C929B974B48204DB9A385670F3029A4717D4e7A',
  [ChainId.UNICHAIN_TESTNET]:'0x1C929B974B48204DB9A385670F3029A4717D4e7A',

};
export const V2_ROUTER_ADDRESSES: AddressMap = {
  [ChainId.AMOY]:'0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.ARBITRUM]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.ARBITRUM_SEPOLIA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.AVALANCHE]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.BASE]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.BASE_SEPOLIA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.BSC]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.BSC_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.FRAX_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.FUJI]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.HEDERA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.HEDERA_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.HOLESKY]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.KAIA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.KAIROS]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.METIS_TESTNET]:'0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.MODE]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.MODE_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.OKX]:'0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.OPBNB_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.OPTIMISM]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SCROLL]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SCROLL_SEPOLIA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SEPOLIA]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SHAPE_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SHAPE]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.SONEIUM_TESTNET]: '0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
  [ChainId.UNICHAIN_TESTNET]:'0x1B70477A9E75D9f5476e0BE78dE1b88293a30F55',
};

const AMOY_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
};

const ARBITRUM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xa3792B3678b61001839c404ffcD20EF103473f68', // @note This is the defiedge PoolDeployer
  multicallAddress: '0x3647c51266cc1610d1318edbdc1129da75db75c5', // Uni custom one
  quoterAddress: '0x3D3429862B7a4053003Ddfdb76f1b2da6aed21A1', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0x81F2c375AEDbdF02f11c1Ae125e2f51Efa777cEa',
  tickLensAddress: '0x4f881DAD698afDb3eb186f1F3fb7db15Abc0F86a',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const ARBITRUM_SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const AVALANCHE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const BASE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x38015D05f4fEC8AFe15D7cc0386a126574e8077B',
  multicallAddress: '0x091e99cb1C49331a94dD62755D168E941AbD0693', // Uni custom one
  quoterAddress: '0x4fDBD73aD4B1DDde594BF05497C15f76308eFfb9', // V2
  v3MigratorAddress: '0x596C5c71A079BddE96f940649C21a39201d4C47b',
  nonfungiblePositionManagerAddress: '0xDe151D5c92BfAA288Db4B67c21CD55d5826bCc93',
  tickLensAddress: '0x49a3A5cf91DE1b78c43Dc1adD03E8A71f1Ea2e30',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '0x73eFdC8039B47207Cc718b7ADcB3D0dC8E76c082',
};


const BASE_SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const BSC_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const BSC_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const FRAX_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};


const FUJI_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const HEDERA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};


const HEDERA_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const HOLESKY_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const KAIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const KAIROS_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};


const METIS_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const MODE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0x6E36FC34eA123044F278d3a9F3819027B21c9c32',
  multicallAddress: '0x7bb14ed986dae0c8423350a7f1c59a31b3c84509', // Uni custom one
  quoterAddress: '0xA642c56a9bCd863E52348798b31A8Db2BCdA5aee',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0xcc3726bCc27f232bC1CaAB40853AEa91ae43C216',
  tickLensAddress: '0x62e879c8979694DbC3A4EF1dd324b08Ee3Ac3688',
  swapRouter02Address: '0x7107112065dAF2EEedD56B06cdF185f3eFFF516D',
  v1MixedRouteQuoterAddress: '0xC6004410771E706F46d756f3a6fCE7B1Df934498',
};

const MODE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '0x30d273e96038cc14d1eedf0aa44e77be9caaa9b2', // Uni custom one
  quoterAddress: '', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const OKX_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const OPBNB_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const OPTIMISM_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x1F98415757620B543A52E61c46B32eB19261F984', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x74a52eb08d699CD8BE1d42dA4B241d526B8a8285',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  v1MixedRouteQuoterAddress: '',
};

const SCROLL_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xbF79915e80DE0A361A4F35175BA9bF2e91B10424',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x2ee99Be3c520B7Bd64f51641c3e7Ef28950E03B7',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x396F2cA2a470EfC92511fD3e99833d28D38CFf53',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '',
};

const SCROLL_SEPOLIA_ADDRESS: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '',
};

const SEPOLIA_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const SHAPE_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const SHAPE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const SONEIUM_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  v1MixedRouteQuoterAddress: '',
};

const UNICHAIN_ADDRESSES: ChainAddresses = {
  //same upper; 
  v3CoreFactoryAddress: '0xe52a36Bb76e8f40e1117db5Ff14Bd1f7b058B720',
  multicallAddress: '0x2B0A43DCcBD7d42c18F6A83F86D1a19fA58d541A', // Uni custom one
  quoterAddress: '0x6F1a2F63Ea06B475EDBf2E6393406058C12A7910', // V2
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '0x78a087d713Be963Bf307b18F2Ff8122EF9A63ae9',
  tickLensAddress: '0xFb68BBfaEF679C1E653b5cE271a0A383c0df6B45',
  swapRouter02Address: '0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB',
  v1MixedRouteQuoterAddress: '',
};

export const CHAIN_TO_ADDRESSES_MAP: Record<number, ChainAddresses> = {
  [ChainId.AMOY]: AMOY_ADDRESSES,
  [ChainId.ARBITRUM]:  ARBITRUM_ADDRESSES,
  [ChainId.ARBITRUM_SEPOLIA]: ARBITRUM_SEPOLIA_ADDRESSES,
  [ChainId.AVALANCHE]: AVALANCHE_ADDRESSES,
  [ChainId.BASE]: BASE_ADDRESSES,
  [ChainId.BASE_SEPOLIA]: BASE_SEPOLIA_ADDRESSES,
  [ChainId.BSC]: BSC_ADDRESSES,
  [ChainId.BSC_TESTNET]: BSC_TESTNET_ADDRESSES,
  [ChainId.FRAX_TESTNET]: FRAX_TESTNET_ADDRESSES,
  [ChainId.FUJI]: FUJI_ADDRESSES,
  [ChainId.HEDERA]: HEDERA_ADDRESSES,
  [ChainId.HEDERA_TESTNET]: HEDERA_TESTNET_ADDRESSES,
  [ChainId.HOLESKY]: HOLESKY_ADDRESSES,
  [ChainId.KAIA]: KAIA_ADDRESSES,
  [ChainId.KAIROS]: KAIROS_ADDRESSES,
  [ChainId.METIS_TESTNET]: METIS_TESTNET_ADDRESSES,
  [ChainId.MODE]: MODE_ADDRESSES,
  [ChainId.MODE_TESTNET]: MODE_TESTNET_ADDRESSES,
  [ChainId.OKX]: OKX_ADDRESSES,
  [ChainId.OPBNB_TESTNET]: OPBNB_TESTNET_ADDRESSES,
  [ChainId.OPTIMISM]: OPTIMISM_ADDRESSES,
  [ChainId.SCROLL]: SCROLL_ADDRESSES,
  [ChainId.SCROLL_SEPOLIA]: SCROLL_SEPOLIA_ADDRESS,
  [ChainId.SEPOLIA]: SEPOLIA_ADDRESSES,
  [ChainId.SHAPE]: SHAPE_ADDRESSES,
  [ChainId.SHAPE_TESTNET]: SHAPE_TESTNET_ADDRESSES,
  [ChainId.SONEIUM_TESTNET]: SONEIUM_TESTNET_ADDRESSES,
  [ChainId.UNICHAIN_TESTNET]:UNICHAIN_ADDRESSES,
};

export const SUBGRAPH_URL_MAP: Record<number, string> = {
  [ChainId.AMOY]:'',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_SEPOLIA]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
  [ChainId.BASE_SEPOLIA]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.FRAX_TESTNET]: '',
  [ChainId.FUJI]: '',
  [ChainId.HEDERA]: '',
  [ChainId.HEDERA_TESTNET]: '',
  [ChainId.HOLESKY]: '',
  [ChainId.KAIA]: '',
  [ChainId.KAIROS]: '',
  [ChainId.METIS_TESTNET]:'',
  [ChainId.MODE]: '',
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OKX]:'',
  [ChainId.OPBNB_TESTNET]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.SCROLL]: '',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SEPOLIA]: '',
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SHAPE]: '',
  [ChainId.SONEIUM_TESTNET]: '',
  [ChainId.UNICHAIN_TESTNET]:'',
    
};

export const V2_SUBGRAPH_URL_MAP: Record<number, string> = {
  [ChainId.AMOY]:'',
  [ChainId.ARBITRUM]: '',
  [ChainId.ARBITRUM_SEPOLIA]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.BASE]: '',
  [ChainId.BASE_SEPOLIA]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.FRAX_TESTNET]: '',
  [ChainId.FUJI]: '',
  [ChainId.HEDERA]: '',
  [ChainId.HEDERA_TESTNET]: '',
  [ChainId.HOLESKY]: '',
  [ChainId.KAIA]: '',
  [ChainId.KAIROS]: '',
  [ChainId.METIS_TESTNET]:'',
  [ChainId.MODE]: '',
  [ChainId.MODE_TESTNET]: '',
  [ChainId.OKX]:'',
  [ChainId.OPBNB_TESTNET]: '',
  [ChainId.OPTIMISM]: '',
  [ChainId.SCROLL]: '',
  [ChainId.SCROLL_SEPOLIA]: '',
  [ChainId.SEPOLIA]: '',
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SHAPE]: '',
  [ChainId.SONEIUM_TESTNET]: '',
  [ChainId.UNICHAIN_TESTNET]:'',
};

export const NFT_POOLS_SUBGRAPH_MAP: Record<number, string> = {
  [ChainId.AMOY]: '',
  [ChainId.BASE]: '',
  [ChainId.BSC]: '',
  [ChainId.OKX]: '',  
  [ChainId.SHAPE_TESTNET]: '',
  [ChainId.SONEIUM_TESTNET]: '',
}
/* V3 Contract Addresses */
export const V3_CORE_FACTORY_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].v3CoreFactoryAddress;
    return memo;
  }, {}),
};

export const V3_MIGRATOR_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const v3MigratorAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v3MigratorAddress;
    if (v3MigratorAddress) {
      memo[chainId] = v3MigratorAddress;
    }
    return memo;
  }, {}),
};

export const MULTICALL_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].multicallAddress;
    return memo;
  }, {}),
};

export const QUOTER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    memo[chainId] = CHAIN_TO_ADDRESSES_MAP[chainId].quoterAddress;
    return memo;
  }, {}),
};

export const NONFUNGIBLE_POSITION_MANAGER_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const nonfungiblePositionManagerAddress = CHAIN_TO_ADDRESSES_MAP[chainId].nonfungiblePositionManagerAddress;
    if (nonfungiblePositionManagerAddress) {
      memo[chainId] = nonfungiblePositionManagerAddress;
    }
    return memo;
  }, {}),
};

export const ENS_REGISTRAR_ADDRESSES: AddressMap = {
  ...constructSameAddressMap('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'),
};

export const TICK_LENS_ADDRESSES: AddressMap = {
  ...SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
    const tickLensAddress = CHAIN_TO_ADDRESSES_MAP[chainId].tickLensAddress;
    if (tickLensAddress) {
      memo[chainId] = tickLensAddress;
    }
    return memo;
  }, {}),
};

export const MIXED_ROUTE_QUOTER_V1_ADDRESSES: AddressMap = SUPPORTED_CHAINS.reduce<AddressMap>((memo, chainId) => {
  const v1MixedRouteQuoterAddress = CHAIN_TO_ADDRESSES_MAP[chainId].v1MixedRouteQuoterAddress;
  if (v1MixedRouteQuoterAddress) {
    memo[chainId] = v1MixedRouteQuoterAddress;
  }
  return memo;
}, {});

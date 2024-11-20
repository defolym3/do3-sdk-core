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

export const XPROTOCOL_TOKEN_ADDRESSES: AddressMap = {
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

export const V2_FACTORY_ADDRESSES: AddressMap = {
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
export const V2_ROUTER_ADDRESSES: AddressMap = {
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
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
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
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
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
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const MODE_TESTNET_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
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
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const SCROLL_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
};

const SCROLL_SEPOLIA_ADDRESS: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '',
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
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
  v3CoreFactoryAddress: '',
  multicallAddress: '', 
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
  v1MixedRouteQuoterAddress: '',
};

const UNICHAIN_ADDRESSES: ChainAddresses = {
  v3CoreFactoryAddress: '',
  multicallAddress: '',
  quoterAddress: '', 
  v3MigratorAddress: '',
  nonfungiblePositionManagerAddress: '',
  tickLensAddress: '',
  swapRouter02Address: '',
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

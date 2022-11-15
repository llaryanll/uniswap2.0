import { Goerli } from '@usedapp/core';

export const ROUTER_ADDRESS = '0xe14464DC5952208E34a15Ff890f82816111a5cE8';

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]:
      'https://eth-goerli.g.alchemy.com/v2/q15z8GLlWkys-auoB_7HdwcOeX-4Ko0o',
  },
};

//* Fixed values to be used through out the operation of the DAO.

export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
};

export interface networkConfigInfo {
  [key: string]: networkConfigItem
};

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
  kovan: {
    blockConfirmations: 6,
  },
};

export const developmentChains = ["hardhat", "localhost"];
export const proposalsFile = "proposals.json"; //stores all proposals with their proposal IDs.

// Governor Values
export const QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
export const MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact
// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 5; // blocks
export const VOTING_DELAY = 1; // 1 Block - How many blocks till a proposal vote becomes active
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const PAYEE_ADDRESS = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"; // address where funds are to be transferred in Treasury contract.
export const FUNC = "releaseFunds"; //function to be called on Box contract.
export const PROPOSAL_DESCRIPTION = "Proposal #1 Release funds!";

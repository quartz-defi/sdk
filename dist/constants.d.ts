import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum Blockchain {
    ETHEREUM = 1,
    BINANCE_SMART_CHAIN = 2,
    HARMONY = 3
}
export declare enum ChainId {
    MAINNET = 1,
    ROPSTEN = 3,
    RINKEBY = 4,
    GÖRLI = 5,
    KOVAN = 42,
    BSC_MAINNET = 56,
    BSC_TESTNET = 97,
    HARMONY_MAINNET = 1666600000,
    HARMONY_TESTNET = 1666700000,
    HARDHAT = 31337
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESSES: {
    [chainId in ChainId]: string;
};
export declare const INIT_CODE_HASH = "0xf1c21a825f13eff153022ddea53156462dd79972b6f88adf06f79ca8b042c3c1";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace OracleProcess {
  export type OracleParamStruct = {
    token: AddressLike;
    targetToken: AddressLike;
    minPrice: BigNumberish;
    maxPrice: BigNumberish;
  };

  export type OracleParamStructOutput = [
    token: string,
    targetToken: string,
    minPrice: bigint,
    maxPrice: bigint
  ] & {
    token: string;
    targetToken: string;
    minPrice: bigint;
    maxPrice: bigint;
  };
}

export declare namespace IPool {
  export type MintTokenBalanceStruct = {
    amount: BigNumberish;
    liability: BigNumberish;
    holdAmount: BigNumberish;
    unsettledAmount: BigNumberish;
    lossAmount: BigNumberish;
    collateralTokens: AddressLike[];
    collateralAmounts: BigNumberish[];
  };

  export type MintTokenBalanceStructOutput = [
    amount: bigint,
    liability: bigint,
    holdAmount: bigint,
    unsettledAmount: bigint,
    lossAmount: bigint,
    collateralTokens: string[],
    collateralAmounts: bigint[]
  ] & {
    amount: bigint;
    liability: bigint;
    holdAmount: bigint;
    unsettledAmount: bigint;
    lossAmount: bigint;
    collateralTokens: string[];
    collateralAmounts: bigint[];
  };

  export type PoolInfoStruct = {
    stakeToken: AddressLike;
    stakeTokenName: string;
    baseToken: AddressLike;
    symbol: BytesLike;
    baseTokenBalance: IPool.MintTokenBalanceStruct;
    stableTokens: AddressLike[];
    stableTokenBalances: IPool.MintTokenBalanceStruct[];
    poolValue: BigNumberish;
    availableLiquidity: BigNumberish;
    poolPnl: BigNumberish;
    totalSupply: BigNumberish;
    borrowingFee: LpPool.BorrowingFeeStruct;
    apr: BigNumberish;
    totalClaimedRewards: BigNumberish;
  };

  export type PoolInfoStructOutput = [
    stakeToken: string,
    stakeTokenName: string,
    baseToken: string,
    symbol: string,
    baseTokenBalance: IPool.MintTokenBalanceStructOutput,
    stableTokens: string[],
    stableTokenBalances: IPool.MintTokenBalanceStructOutput[],
    poolValue: bigint,
    availableLiquidity: bigint,
    poolPnl: bigint,
    totalSupply: bigint,
    borrowingFee: LpPool.BorrowingFeeStructOutput,
    apr: bigint,
    totalClaimedRewards: bigint
  ] & {
    stakeToken: string;
    stakeTokenName: string;
    baseToken: string;
    symbol: string;
    baseTokenBalance: IPool.MintTokenBalanceStructOutput;
    stableTokens: string[];
    stableTokenBalances: IPool.MintTokenBalanceStructOutput[];
    poolValue: bigint;
    availableLiquidity: bigint;
    poolPnl: bigint;
    totalSupply: bigint;
    borrowingFee: LpPool.BorrowingFeeStructOutput;
    apr: bigint;
    totalClaimedRewards: bigint;
  };

  export type UsdPoolInfoStruct = {
    stableTokens: AddressLike[];
    stableTokenBalances: UsdPool.TokenBalanceStruct[];
    stableTokenMaxWithdraws: BigNumberish[];
    poolValue: BigNumberish;
    totalSupply: BigNumberish;
    tokensAvailableLiquidity: BigNumberish[];
    borrowingFees: UsdPool.BorrowingFeeStruct[];
    apr: BigNumberish;
    totalClaimedRewards: BigNumberish;
  };

  export type UsdPoolInfoStructOutput = [
    stableTokens: string[],
    stableTokenBalances: UsdPool.TokenBalanceStructOutput[],
    stableTokenMaxWithdraws: bigint[],
    poolValue: bigint,
    totalSupply: bigint,
    tokensAvailableLiquidity: bigint[],
    borrowingFees: UsdPool.BorrowingFeeStructOutput[],
    apr: bigint,
    totalClaimedRewards: bigint
  ] & {
    stableTokens: string[];
    stableTokenBalances: UsdPool.TokenBalanceStructOutput[];
    stableTokenMaxWithdraws: bigint[];
    poolValue: bigint;
    totalSupply: bigint;
    tokensAvailableLiquidity: bigint[];
    borrowingFees: UsdPool.BorrowingFeeStructOutput[];
    apr: bigint;
    totalClaimedRewards: bigint;
  };
}

export declare namespace LpPool {
  export type BorrowingFeeStruct = {
    totalBorrowingFee: BigNumberish;
    totalRealizedBorrowingFee: BigNumberish;
    cumulativeBorrowingFeePerToken: BigNumberish;
    lastUpdateTime: BigNumberish;
  };

  export type BorrowingFeeStructOutput = [
    totalBorrowingFee: bigint,
    totalRealizedBorrowingFee: bigint,
    cumulativeBorrowingFeePerToken: bigint,
    lastUpdateTime: bigint
  ] & {
    totalBorrowingFee: bigint;
    totalRealizedBorrowingFee: bigint;
    cumulativeBorrowingFeePerToken: bigint;
    lastUpdateTime: bigint;
  };
}

export declare namespace UsdPool {
  export type TokenBalanceStruct = {
    amount: BigNumberish;
    holdAmount: BigNumberish;
    unsettledAmount: BigNumberish;
  };

  export type TokenBalanceStructOutput = [
    amount: bigint,
    holdAmount: bigint,
    unsettledAmount: bigint
  ] & { amount: bigint; holdAmount: bigint; unsettledAmount: bigint };

  export type BorrowingFeeStruct = {
    totalBorrowingFee: BigNumberish;
    totalRealizedBorrowingFee: BigNumberish;
    cumulativeBorrowingFeePerToken: BigNumberish;
    lastUpdateTime: BigNumberish;
  };

  export type BorrowingFeeStructOutput = [
    totalBorrowingFee: bigint,
    totalRealizedBorrowingFee: bigint,
    cumulativeBorrowingFeePerToken: bigint,
    lastUpdateTime: bigint
  ] & {
    totalBorrowingFee: bigint;
    totalRealizedBorrowingFee: bigint;
    cumulativeBorrowingFeePerToken: bigint;
    lastUpdateTime: bigint;
  };
}

export interface IPoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAllPools"
      | "getPool"
      | "getPoolWithOracle"
      | "getUsdPool"
      | "getUsdPoolWithOracle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getAllPools",
    values: [OracleProcess.OracleParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolWithOracle",
    values: [AddressLike, OracleProcess.OracleParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUsdPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUsdPoolWithOracle",
    values: [OracleProcess.OracleParamStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllPools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolWithOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getUsdPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUsdPoolWithOracle",
    data: BytesLike
  ): Result;
}

export interface IPool extends BaseContract {
  connect(runner?: ContractRunner | null): IPool;
  waitForDeployment(): Promise<this>;

  interface: IPoolInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getAllPools: TypedContractMethod<
    [oracles: OracleProcess.OracleParamStruct[]],
    [IPool.PoolInfoStructOutput[]],
    "view"
  >;

  getPool: TypedContractMethod<
    [stakeToken: AddressLike],
    [IPool.PoolInfoStructOutput],
    "view"
  >;

  getPoolWithOracle: TypedContractMethod<
    [stakeToken: AddressLike, oracles: OracleProcess.OracleParamStruct[]],
    [IPool.PoolInfoStructOutput],
    "view"
  >;

  getUsdPool: TypedContractMethod<[], [IPool.UsdPoolInfoStructOutput], "view">;

  getUsdPoolWithOracle: TypedContractMethod<
    [oracles: OracleProcess.OracleParamStruct[]],
    [IPool.UsdPoolInfoStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAllPools"
  ): TypedContractMethod<
    [oracles: OracleProcess.OracleParamStruct[]],
    [IPool.PoolInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPool"
  ): TypedContractMethod<
    [stakeToken: AddressLike],
    [IPool.PoolInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPoolWithOracle"
  ): TypedContractMethod<
    [stakeToken: AddressLike, oracles: OracleProcess.OracleParamStruct[]],
    [IPool.PoolInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUsdPool"
  ): TypedContractMethod<[], [IPool.UsdPoolInfoStructOutput], "view">;
  getFunction(
    nameOrSignature: "getUsdPoolWithOracle"
  ): TypedContractMethod<
    [oracles: OracleProcess.OracleParamStruct[]],
    [IPool.UsdPoolInfoStructOutput],
    "view"
  >;

  filters: {};
}
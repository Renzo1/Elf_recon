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

export declare namespace Position {
  export type PositionFeeStruct = {
    closeFeeInUsd: BigNumberish;
    openBorrowingFeePerToken: BigNumberish;
    realizedBorrowingFee: BigNumberish;
    realizedBorrowingFeeInUsd: BigNumberish;
    openFundingFeePerQty: BigNumberish;
    realizedFundingFee: BigNumberish;
    realizedFundingFeeInUsd: BigNumberish;
  };

  export type PositionFeeStructOutput = [
    closeFeeInUsd: bigint,
    openBorrowingFeePerToken: bigint,
    realizedBorrowingFee: bigint,
    realizedBorrowingFeeInUsd: bigint,
    openFundingFeePerQty: bigint,
    realizedFundingFee: bigint,
    realizedFundingFeeInUsd: bigint
  ] & {
    closeFeeInUsd: bigint;
    openBorrowingFeePerToken: bigint;
    realizedBorrowingFee: bigint;
    realizedBorrowingFeeInUsd: bigint;
    openFundingFeePerQty: bigint;
    realizedFundingFee: bigint;
    realizedFundingFeeInUsd: bigint;
  };

  export type PropsStruct = {
    key: BytesLike;
    symbol: BytesLike;
    isLong: boolean;
    isCrossMargin: boolean;
    account: AddressLike;
    marginToken: AddressLike;
    indexToken: AddressLike;
    qty: BigNumberish;
    entryPrice: BigNumberish;
    leverage: BigNumberish;
    initialMargin: BigNumberish;
    initialMarginInUsd: BigNumberish;
    initialMarginInUsdFromBalance: BigNumberish;
    holdPoolAmount: BigNumberish;
    positionFee: Position.PositionFeeStruct;
    realizedPnl: BigNumberish;
    lastUpdateTime: BigNumberish;
  };

  export type PropsStructOutput = [
    key: string,
    symbol: string,
    isLong: boolean,
    isCrossMargin: boolean,
    account: string,
    marginToken: string,
    indexToken: string,
    qty: bigint,
    entryPrice: bigint,
    leverage: bigint,
    initialMargin: bigint,
    initialMarginInUsd: bigint,
    initialMarginInUsdFromBalance: bigint,
    holdPoolAmount: bigint,
    positionFee: Position.PositionFeeStructOutput,
    realizedPnl: bigint,
    lastUpdateTime: bigint
  ] & {
    key: string;
    symbol: string;
    isLong: boolean;
    isCrossMargin: boolean;
    account: string;
    marginToken: string;
    indexToken: string;
    qty: bigint;
    entryPrice: bigint;
    leverage: bigint;
    initialMargin: bigint;
    initialMarginInUsd: bigint;
    initialMarginInUsdFromBalance: bigint;
    holdPoolAmount: bigint;
    positionFee: Position.PositionFeeStructOutput;
    realizedPnl: bigint;
    lastUpdateTime: bigint;
  };
}

export declare namespace IFee {
  export type AccountFeeRewardsStruct = {
    account: AddressLike;
    stakeTokens: AddressLike[];
    tokens: AddressLike[];
    rewards: BigNumberish[];
  };

  export type AccountFeeRewardsStructOutput = [
    account: string,
    stakeTokens: string[],
    tokens: string[],
    rewards: bigint[]
  ] & {
    account: string;
    stakeTokens: string[];
    tokens: string[];
    rewards: bigint[];
  };

  export type AccountUsdFeeRewardStruct = {
    account: AddressLike;
    stakeToken: AddressLike;
    reward: BigNumberish;
  };

  export type AccountUsdFeeRewardStructOutput = [
    account: string,
    stakeToken: string,
    reward: bigint
  ] & { account: string; stakeToken: string; reward: bigint };
}

export interface FeeQueryProcessInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "calcBorrowingFee"
      | "calcCloseFee"
      | "calcMintOrRedeemFee"
      | "calcOpenFee"
      | "getAccountFeeRewards"
      | "getAccountUsdFeeReward"
      | "getCumulativeRewardsPerStakeToken"
      | "getDaoTokenFee"
      | "getMarketTokenFeeAmount"
      | "getPoolTokenFeeAmount"
      | "getStakingTokenFee"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcBorrowingFee",
    values: [BigNumberish, Position.PropsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "calcCloseFee",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcMintOrRedeemFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcOpenFee",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountFeeRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountUsdFeeReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getCumulativeRewardsPerStakeToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getDaoTokenFee",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketTokenFeeAmount",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokenFeeAmount",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakingTokenFee",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "calcBorrowingFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcCloseFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcMintOrRedeemFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcOpenFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountFeeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountUsdFeeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCumulativeRewardsPerStakeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDaoTokenFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketTokenFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokenFeeAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakingTokenFee",
    data: BytesLike
  ): Result;
}

export interface FeeQueryProcess extends BaseContract {
  connect(runner?: ContractRunner | null): FeeQueryProcess;
  waitForDeployment(): Promise<this>;

  interface: FeeQueryProcessInterface;

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

  calcBorrowingFee: TypedContractMethod<
    [decreaseQty: BigNumberish, position: Position.PropsStruct],
    [[bigint, bigint] & { fee: bigint; feeInUsd: bigint }],
    "view"
  >;

  calcCloseFee: TypedContractMethod<
    [
      tokenDecimals: BigNumberish,
      feeInUsd: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  calcMintOrRedeemFee: TypedContractMethod<
    [tokenAmount: BigNumberish, feeRate: BigNumberish],
    [bigint],
    "view"
  >;

  calcOpenFee: TypedContractMethod<
    [orderMargin: BigNumberish, leverage: BigNumberish, symbol: BytesLike],
    [bigint],
    "view"
  >;

  getAccountFeeRewards: TypedContractMethod<
    [account: AddressLike],
    [IFee.AccountFeeRewardsStructOutput],
    "view"
  >;

  getAccountUsdFeeReward: TypedContractMethod<
    [account: AddressLike],
    [IFee.AccountUsdFeeRewardStructOutput],
    "view"
  >;

  getCumulativeRewardsPerStakeToken: TypedContractMethod<
    [stakeToken: AddressLike],
    [bigint],
    "view"
  >;

  getDaoTokenFee: TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;

  getMarketTokenFeeAmount: TypedContractMethod<
    [symbol: BytesLike, token: AddressLike],
    [bigint],
    "view"
  >;

  getPoolTokenFeeAmount: TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;

  getStakingTokenFee: TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "calcBorrowingFee"
  ): TypedContractMethod<
    [decreaseQty: BigNumberish, position: Position.PropsStruct],
    [[bigint, bigint] & { fee: bigint; feeInUsd: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "calcCloseFee"
  ): TypedContractMethod<
    [
      tokenDecimals: BigNumberish,
      feeInUsd: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calcMintOrRedeemFee"
  ): TypedContractMethod<
    [tokenAmount: BigNumberish, feeRate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "calcOpenFee"
  ): TypedContractMethod<
    [orderMargin: BigNumberish, leverage: BigNumberish, symbol: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAccountFeeRewards"
  ): TypedContractMethod<
    [account: AddressLike],
    [IFee.AccountFeeRewardsStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAccountUsdFeeReward"
  ): TypedContractMethod<
    [account: AddressLike],
    [IFee.AccountUsdFeeRewardStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCumulativeRewardsPerStakeToken"
  ): TypedContractMethod<[stakeToken: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDaoTokenFee"
  ): TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMarketTokenFeeAmount"
  ): TypedContractMethod<
    [symbol: BytesLike, token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPoolTokenFeeAmount"
  ): TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getStakingTokenFee"
  ): TypedContractMethod<
    [stakeToken: AddressLike, token: AddressLike],
    [bigint],
    "view"
  >;

  filters: {};
}

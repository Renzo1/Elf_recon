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

export declare namespace AppConfig {
  export type ChainConfigStruct = {
    wrapperToken: AddressLike;
    mintGasFeeLimit: BigNumberish;
    redeemGasFeeLimit: BigNumberish;
    placeIncreaseOrderGasFeeLimit: BigNumberish;
    placeDecreaseOrderGasFeeLimit: BigNumberish;
    positionUpdateMarginGasFeeLimit: BigNumberish;
    positionUpdateLeverageGasFeeLimit: BigNumberish;
    withdrawGasFeeLimit: BigNumberish;
    claimRewardsGasFeeLimit: BigNumberish;
  };

  export type ChainConfigStructOutput = [
    wrapperToken: string,
    mintGasFeeLimit: bigint,
    redeemGasFeeLimit: bigint,
    placeIncreaseOrderGasFeeLimit: bigint,
    placeDecreaseOrderGasFeeLimit: bigint,
    positionUpdateMarginGasFeeLimit: bigint,
    positionUpdateLeverageGasFeeLimit: bigint,
    withdrawGasFeeLimit: bigint,
    claimRewardsGasFeeLimit: bigint
  ] & {
    wrapperToken: string;
    mintGasFeeLimit: bigint;
    redeemGasFeeLimit: bigint;
    placeIncreaseOrderGasFeeLimit: bigint;
    placeDecreaseOrderGasFeeLimit: bigint;
    positionUpdateMarginGasFeeLimit: bigint;
    positionUpdateLeverageGasFeeLimit: bigint;
    withdrawGasFeeLimit: bigint;
    claimRewardsGasFeeLimit: bigint;
  };

  export type SymbolConfigStruct = {
    maxLeverage: BigNumberish;
    tickSize: BigNumberish;
    openFeeRate: BigNumberish;
    closeFeeRate: BigNumberish;
    maxLongOpenInterestCap: BigNumberish;
    maxShortOpenInterestCap: BigNumberish;
    longShortRatioLimit: BigNumberish;
    longShortOiBottomLimit: BigNumberish;
  };

  export type SymbolConfigStructOutput = [
    maxLeverage: bigint,
    tickSize: bigint,
    openFeeRate: bigint,
    closeFeeRate: bigint,
    maxLongOpenInterestCap: bigint,
    maxShortOpenInterestCap: bigint,
    longShortRatioLimit: bigint,
    longShortOiBottomLimit: bigint
  ] & {
    maxLeverage: bigint;
    tickSize: bigint;
    openFeeRate: bigint;
    closeFeeRate: bigint;
    maxLongOpenInterestCap: bigint;
    maxShortOpenInterestCap: bigint;
    longShortRatioLimit: bigint;
    longShortOiBottomLimit: bigint;
  };
}

export interface AppConfigInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CLAIM_REWARDS_GAS_FEE_LIMIT"
      | "CLOSE_FEE_RATE"
      | "LONG_SHORT_OI_BOTTOM_LIMIT"
      | "LONG_SHORT_RATIO_LIMIT"
      | "MAX_LEVERAGE"
      | "MAX_LONG_OPEN_INTEREST_CAP"
      | "MAX_SHORT_OPEN_INTEREST_CAP"
      | "MINT_GAS_FEE_LIMIT"
      | "OPEN_FEE_RATE"
      | "PLACE_DECREASE_ORDER_GAS_FEE_LIMIT"
      | "PLACE_INCREASE_ORDER_GAS_FEE_LIMIT"
      | "POSITION_UPDATE_LEVERAGE_GAS_FEE_LIMIT"
      | "POSITION_UPDATE_MARGIN_GAS_FEE_LIMIT"
      | "REDEEM_GAS_FEE_LIMIT"
      | "TICK_SIZE"
      | "UNISWAP_ROUTER"
      | "WITHDRAW_GAS_FEE_LIMIT"
      | "WRAPPER_TOKEN"
      | "getChainConfig"
      | "getSymbolConfig"
      | "getUniswapRouter"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CLAIM_REWARDS_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CLOSE_FEE_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LONG_SHORT_OI_BOTTOM_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LONG_SHORT_RATIO_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LEVERAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_LONG_OPEN_INTEREST_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_SHORT_OPEN_INTEREST_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MINT_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPEN_FEE_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PLACE_DECREASE_ORDER_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PLACE_INCREASE_ORDER_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_UPDATE_LEVERAGE_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "POSITION_UPDATE_MARGIN_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REDEEM_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "TICK_SIZE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "UNISWAP_ROUTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAW_GAS_FEE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WRAPPER_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getChainConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSymbolConfig",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUniswapRouter",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CLAIM_REWARDS_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CLOSE_FEE_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LONG_SHORT_OI_BOTTOM_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LONG_SHORT_RATIO_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LEVERAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_LONG_OPEN_INTEREST_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MAX_SHORT_OPEN_INTEREST_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MINT_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPEN_FEE_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PLACE_DECREASE_ORDER_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PLACE_INCREASE_ORDER_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_UPDATE_LEVERAGE_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "POSITION_UPDATE_MARGIN_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REDEEM_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "TICK_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNISWAP_ROUTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAW_GAS_FEE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WRAPPER_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getChainConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSymbolConfig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUniswapRouter",
    data: BytesLike
  ): Result;
}

export interface AppConfig extends BaseContract {
  connect(runner?: ContractRunner | null): AppConfig;
  waitForDeployment(): Promise<this>;

  interface: AppConfigInterface;

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

  CLAIM_REWARDS_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  CLOSE_FEE_RATE: TypedContractMethod<[], [string], "view">;

  LONG_SHORT_OI_BOTTOM_LIMIT: TypedContractMethod<[], [string], "view">;

  LONG_SHORT_RATIO_LIMIT: TypedContractMethod<[], [string], "view">;

  MAX_LEVERAGE: TypedContractMethod<[], [string], "view">;

  MAX_LONG_OPEN_INTEREST_CAP: TypedContractMethod<[], [string], "view">;

  MAX_SHORT_OPEN_INTEREST_CAP: TypedContractMethod<[], [string], "view">;

  MINT_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  OPEN_FEE_RATE: TypedContractMethod<[], [string], "view">;

  PLACE_DECREASE_ORDER_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  PLACE_INCREASE_ORDER_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  POSITION_UPDATE_LEVERAGE_GAS_FEE_LIMIT: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  POSITION_UPDATE_MARGIN_GAS_FEE_LIMIT: TypedContractMethod<
    [],
    [string],
    "view"
  >;

  REDEEM_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  TICK_SIZE: TypedContractMethod<[], [string], "view">;

  UNISWAP_ROUTER: TypedContractMethod<[], [string], "view">;

  WITHDRAW_GAS_FEE_LIMIT: TypedContractMethod<[], [string], "view">;

  WRAPPER_TOKEN: TypedContractMethod<[], [string], "view">;

  getChainConfig: TypedContractMethod<
    [],
    [AppConfig.ChainConfigStructOutput],
    "view"
  >;

  getSymbolConfig: TypedContractMethod<
    [symbol: BytesLike],
    [AppConfig.SymbolConfigStructOutput],
    "view"
  >;

  getUniswapRouter: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CLAIM_REWARDS_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CLOSE_FEE_RATE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LONG_SHORT_OI_BOTTOM_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LONG_SHORT_RATIO_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_LEVERAGE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_LONG_OPEN_INTEREST_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MAX_SHORT_OPEN_INTEREST_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "MINT_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OPEN_FEE_RATE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PLACE_DECREASE_ORDER_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PLACE_INCREASE_ORDER_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "POSITION_UPDATE_LEVERAGE_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "POSITION_UPDATE_MARGIN_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "REDEEM_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TICK_SIZE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNISWAP_ROUTER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WITHDRAW_GAS_FEE_LIMIT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WRAPPER_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getChainConfig"
  ): TypedContractMethod<[], [AppConfig.ChainConfigStructOutput], "view">;
  getFunction(
    nameOrSignature: "getSymbolConfig"
  ): TypedContractMethod<
    [symbol: BytesLike],
    [AppConfig.SymbolConfigStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUniswapRouter"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}

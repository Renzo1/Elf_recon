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

export declare namespace AppTradeTokenConfig {
  export type TradeTokenConfigStruct = {
    isSupportCollateral: boolean;
    precision: BigNumberish;
    discount: BigNumberish;
    collateralUserCap: BigNumberish;
    collateralTotalCap: BigNumberish;
    liabilityUserCap: BigNumberish;
    liabilityTotalCap: BigNumberish;
    interestRateFactor: BigNumberish;
    liquidationFactor: BigNumberish;
  };

  export type TradeTokenConfigStructOutput = [
    isSupportCollateral: boolean,
    precision: bigint,
    discount: bigint,
    collateralUserCap: bigint,
    collateralTotalCap: bigint,
    liabilityUserCap: bigint,
    liabilityTotalCap: bigint,
    interestRateFactor: bigint,
    liquidationFactor: bigint
  ] & {
    isSupportCollateral: boolean;
    precision: bigint;
    discount: bigint;
    collateralUserCap: bigint;
    collateralTotalCap: bigint;
    liabilityUserCap: bigint;
    liabilityTotalCap: bigint;
    interestRateFactor: bigint;
    liquidationFactor: bigint;
  };
}

export interface AppTradeTokenConfigInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "COLLATERAL_TOTAL_CAP"
      | "COLLATERAL_USER_CAP"
      | "DISCOUNT"
      | "INTEREST_RATE_FACTOR"
      | "IS_SUPPORT_COLLATERAL"
      | "LIABILITY_TOTAL_CAP"
      | "LIABILITY_USER_CAP"
      | "LIQUIDATION_FACTOR"
      | "PRECISION"
      | "getTradeTokenConfig"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "COLLATERAL_TOTAL_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COLLATERAL_USER_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DISCOUNT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "INTEREST_RATE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "IS_SUPPORT_COLLATERAL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIABILITY_TOTAL_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIABILITY_USER_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LIQUIDATION_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getTradeTokenConfig",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "COLLATERAL_TOTAL_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COLLATERAL_USER_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DISCOUNT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "INTEREST_RATE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IS_SUPPORT_COLLATERAL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIABILITY_TOTAL_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIABILITY_USER_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LIQUIDATION_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTradeTokenConfig",
    data: BytesLike
  ): Result;
}

export interface AppTradeTokenConfig extends BaseContract {
  connect(runner?: ContractRunner | null): AppTradeTokenConfig;
  waitForDeployment(): Promise<this>;

  interface: AppTradeTokenConfigInterface;

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

  COLLATERAL_TOTAL_CAP: TypedContractMethod<[], [string], "view">;

  COLLATERAL_USER_CAP: TypedContractMethod<[], [string], "view">;

  DISCOUNT: TypedContractMethod<[], [string], "view">;

  INTEREST_RATE_FACTOR: TypedContractMethod<[], [string], "view">;

  IS_SUPPORT_COLLATERAL: TypedContractMethod<[], [string], "view">;

  LIABILITY_TOTAL_CAP: TypedContractMethod<[], [string], "view">;

  LIABILITY_USER_CAP: TypedContractMethod<[], [string], "view">;

  LIQUIDATION_FACTOR: TypedContractMethod<[], [string], "view">;

  PRECISION: TypedContractMethod<[], [string], "view">;

  getTradeTokenConfig: TypedContractMethod<
    [token: AddressLike],
    [AppTradeTokenConfig.TradeTokenConfigStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "COLLATERAL_TOTAL_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "COLLATERAL_USER_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DISCOUNT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "INTEREST_RATE_FACTOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "IS_SUPPORT_COLLATERAL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LIABILITY_TOTAL_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LIABILITY_USER_CAP"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LIQUIDATION_FACTOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PRECISION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getTradeTokenConfig"
  ): TypedContractMethod<
    [token: AddressLike],
    [AppTradeTokenConfig.TradeTokenConfigStructOutput],
    "view"
  >;

  filters: {};
}

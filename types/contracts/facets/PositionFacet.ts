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

export declare namespace IPosition {
  export type UpdateLeverageParamsStruct = {
    symbol: BytesLike;
    isLong: boolean;
    isNativeToken: boolean;
    isCrossMargin: boolean;
    leverage: BigNumberish;
    marginToken: AddressLike;
    addMarginAmount: BigNumberish;
    executionFee: BigNumberish;
  };

  export type UpdateLeverageParamsStructOutput = [
    symbol: string,
    isLong: boolean,
    isNativeToken: boolean,
    isCrossMargin: boolean,
    leverage: bigint,
    marginToken: string,
    addMarginAmount: bigint,
    executionFee: bigint
  ] & {
    symbol: string;
    isLong: boolean;
    isNativeToken: boolean;
    isCrossMargin: boolean;
    leverage: bigint;
    marginToken: string;
    addMarginAmount: bigint;
    executionFee: bigint;
  };

  export type UpdatePositionMarginParamsStruct = {
    positionKey: BytesLike;
    isAdd: boolean;
    isNativeToken: boolean;
    marginToken: AddressLike;
    updateMarginAmount: BigNumberish;
    executionFee: BigNumberish;
  };

  export type UpdatePositionMarginParamsStructOutput = [
    positionKey: string,
    isAdd: boolean,
    isNativeToken: boolean,
    marginToken: string,
    updateMarginAmount: bigint,
    executionFee: bigint
  ] & {
    positionKey: string;
    isAdd: boolean;
    isNativeToken: boolean;
    marginToken: string;
    updateMarginAmount: bigint;
    executionFee: bigint;
  };

  export type PositionInfoStruct = {
    position: Position.PropsStruct;
    liquidationPrice: BigNumberish;
    currentTimestamp: BigNumberish;
  };

  export type PositionInfoStructOutput = [
    position: Position.PropsStructOutput,
    liquidationPrice: bigint,
    currentTimestamp: bigint
  ] & {
    position: Position.PropsStructOutput;
    liquidationPrice: bigint;
    currentTimestamp: bigint;
  };
}

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

export interface PositionFacetInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "autoReducePositions"
      | "cancelUpdateLeverageRequest"
      | "cancelUpdatePositionMarginRequest"
      | "createUpdateLeverageRequest"
      | "createUpdatePositionMarginRequest"
      | "executeUpdateLeverageRequest"
      | "executeUpdatePositionMarginRequest"
      | "getAllPositions"
      | "getSinglePosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "autoReducePositions",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelUpdateLeverageRequest",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelUpdatePositionMarginRequest",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createUpdateLeverageRequest",
    values: [IPosition.UpdateLeverageParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createUpdatePositionMarginRequest",
    values: [IPosition.UpdatePositionMarginParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeUpdateLeverageRequest",
    values: [BigNumberish, OracleProcess.OracleParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "executeUpdatePositionMarginRequest",
    values: [BigNumberish, OracleProcess.OracleParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllPositions",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSinglePosition",
    values: [AddressLike, BytesLike, AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "autoReducePositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelUpdateLeverageRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelUpdatePositionMarginRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createUpdateLeverageRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createUpdatePositionMarginRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeUpdateLeverageRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeUpdatePositionMarginRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllPositions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSinglePosition",
    data: BytesLike
  ): Result;
}

export interface PositionFacet extends BaseContract {
  connect(runner?: ContractRunner | null): PositionFacet;
  waitForDeployment(): Promise<this>;

  interface: PositionFacetInterface;

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

  autoReducePositions: TypedContractMethod<
    [positionKeys: BytesLike[]],
    [void],
    "nonpayable"
  >;

  cancelUpdateLeverageRequest: TypedContractMethod<
    [requestId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;

  cancelUpdatePositionMarginRequest: TypedContractMethod<
    [requestId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;

  createUpdateLeverageRequest: TypedContractMethod<
    [params: IPosition.UpdateLeverageParamsStruct],
    [void],
    "payable"
  >;

  createUpdatePositionMarginRequest: TypedContractMethod<
    [params: IPosition.UpdatePositionMarginParamsStruct],
    [void],
    "payable"
  >;

  executeUpdateLeverageRequest: TypedContractMethod<
    [requestId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;

  executeUpdatePositionMarginRequest: TypedContractMethod<
    [requestId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;

  getAllPositions: TypedContractMethod<
    [account: AddressLike],
    [IPosition.PositionInfoStructOutput[]],
    "view"
  >;

  getSinglePosition: TypedContractMethod<
    [
      account: AddressLike,
      symbol: BytesLike,
      marginToken: AddressLike,
      isCrossMargin: boolean
    ],
    [Position.PropsStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "autoReducePositions"
  ): TypedContractMethod<[positionKeys: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelUpdateLeverageRequest"
  ): TypedContractMethod<
    [requestId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cancelUpdatePositionMarginRequest"
  ): TypedContractMethod<
    [requestId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createUpdateLeverageRequest"
  ): TypedContractMethod<
    [params: IPosition.UpdateLeverageParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "createUpdatePositionMarginRequest"
  ): TypedContractMethod<
    [params: IPosition.UpdatePositionMarginParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeUpdateLeverageRequest"
  ): TypedContractMethod<
    [requestId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "executeUpdatePositionMarginRequest"
  ): TypedContractMethod<
    [requestId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAllPositions"
  ): TypedContractMethod<
    [account: AddressLike],
    [IPosition.PositionInfoStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSinglePosition"
  ): TypedContractMethod<
    [
      account: AddressLike,
      symbol: BytesLike,
      marginToken: AddressLike,
      isCrossMargin: boolean
    ],
    [Position.PropsStructOutput],
    "view"
  >;

  filters: {};
}

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

export declare namespace IOrder {
  export type PlaceOrderParamsStruct = {
    symbol: BytesLike;
    isCrossMargin: boolean;
    isNativeToken: boolean;
    orderSide: BigNumberish;
    posSide: BigNumberish;
    orderType: BigNumberish;
    stopType: BigNumberish;
    marginToken: AddressLike;
    qty: BigNumberish;
    orderMargin: BigNumberish;
    leverage: BigNumberish;
    triggerPrice: BigNumberish;
    acceptablePrice: BigNumberish;
    executionFee: BigNumberish;
    placeTime: BigNumberish;
  };

  export type PlaceOrderParamsStructOutput = [
    symbol: string,
    isCrossMargin: boolean,
    isNativeToken: boolean,
    orderSide: bigint,
    posSide: bigint,
    orderType: bigint,
    stopType: bigint,
    marginToken: string,
    qty: bigint,
    orderMargin: bigint,
    leverage: bigint,
    triggerPrice: bigint,
    acceptablePrice: bigint,
    executionFee: bigint,
    placeTime: bigint
  ] & {
    symbol: string;
    isCrossMargin: boolean;
    isNativeToken: boolean;
    orderSide: bigint;
    posSide: bigint;
    orderType: bigint;
    stopType: bigint;
    marginToken: string;
    qty: bigint;
    orderMargin: bigint;
    leverage: bigint;
    triggerPrice: bigint;
    acceptablePrice: bigint;
    executionFee: bigint;
    placeTime: bigint;
  };

  export type AccountOrderStruct = {
    orderId: BigNumberish;
    orderInfo: Order.OrderInfoStruct;
  };

  export type AccountOrderStructOutput = [
    orderId: bigint,
    orderInfo: Order.OrderInfoStructOutput
  ] & { orderId: bigint; orderInfo: Order.OrderInfoStructOutput };
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

export declare namespace Order {
  export type OrderInfoStruct = {
    account: AddressLike;
    symbol: BytesLike;
    orderSide: BigNumberish;
    posSide: BigNumberish;
    orderType: BigNumberish;
    stopType: BigNumberish;
    isCrossMargin: boolean;
    isExecutionFeeFromTradeVault: boolean;
    marginToken: AddressLike;
    qty: BigNumberish;
    leverage: BigNumberish;
    orderMargin: BigNumberish;
    triggerPrice: BigNumberish;
    acceptablePrice: BigNumberish;
    placeTime: BigNumberish;
    executionFee: BigNumberish;
    lastBlock: BigNumberish;
  };

  export type OrderInfoStructOutput = [
    account: string,
    symbol: string,
    orderSide: bigint,
    posSide: bigint,
    orderType: bigint,
    stopType: bigint,
    isCrossMargin: boolean,
    isExecutionFeeFromTradeVault: boolean,
    marginToken: string,
    qty: bigint,
    leverage: bigint,
    orderMargin: bigint,
    triggerPrice: bigint,
    acceptablePrice: bigint,
    placeTime: bigint,
    executionFee: bigint,
    lastBlock: bigint
  ] & {
    account: string;
    symbol: string;
    orderSide: bigint;
    posSide: bigint;
    orderType: bigint;
    stopType: bigint;
    isCrossMargin: boolean;
    isExecutionFeeFromTradeVault: boolean;
    marginToken: string;
    qty: bigint;
    leverage: bigint;
    orderMargin: bigint;
    triggerPrice: bigint;
    acceptablePrice: bigint;
    placeTime: bigint;
    executionFee: bigint;
    lastBlock: bigint;
  };
}

export interface IOrderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchCreateOrderRequest"
      | "cancelOrder"
      | "createOrderRequest"
      | "executeOrder"
      | "getAccountOrders"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchCreateOrderRequest",
    values: [IOrder.PlaceOrderParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOrder",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createOrderRequest",
    values: [IOrder.PlaceOrderParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "executeOrder",
    values: [BigNumberish, OracleProcess.OracleParamStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccountOrders",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchCreateOrderRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createOrderRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccountOrders",
    data: BytesLike
  ): Result;
}

export interface IOrder extends BaseContract {
  connect(runner?: ContractRunner | null): IOrder;
  waitForDeployment(): Promise<this>;

  interface: IOrderInterface;

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

  batchCreateOrderRequest: TypedContractMethod<
    [params: IOrder.PlaceOrderParamsStruct[]],
    [void],
    "payable"
  >;

  cancelOrder: TypedContractMethod<
    [orderId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;

  createOrderRequest: TypedContractMethod<
    [params: IOrder.PlaceOrderParamsStruct],
    [void],
    "payable"
  >;

  executeOrder: TypedContractMethod<
    [orderId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;

  getAccountOrders: TypedContractMethod<
    [account: AddressLike],
    [IOrder.AccountOrderStructOutput[]],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchCreateOrderRequest"
  ): TypedContractMethod<
    [params: IOrder.PlaceOrderParamsStruct[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "cancelOrder"
  ): TypedContractMethod<
    [orderId: BigNumberish, reasonCode: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createOrderRequest"
  ): TypedContractMethod<
    [params: IOrder.PlaceOrderParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeOrder"
  ): TypedContractMethod<
    [orderId: BigNumberish, oracles: OracleProcess.OracleParamStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getAccountOrders"
  ): TypedContractMethod<
    [account: AddressLike],
    [IOrder.AccountOrderStructOutput[]],
    "view"
  >;

  filters: {};
}
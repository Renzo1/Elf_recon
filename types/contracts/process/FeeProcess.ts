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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace FeeProcess {
  export type ChargeMintOrRedeemFeeEventParamsStruct = {
    stakeToken: AddressLike;
    feeToken: AddressLike;
    account: AddressLike;
    feeType: BytesLike;
    fee: BigNumberish;
  };

  export type ChargeMintOrRedeemFeeEventParamsStructOutput = [
    stakeToken: string,
    feeToken: string,
    account: string,
    feeType: string,
    fee: bigint
  ] & {
    stakeToken: string;
    feeToken: string;
    account: string;
    feeType: string;
    fee: bigint;
  };
}

export interface FeeProcessInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FEE_BORROWING"
      | "FEE_CLOSE_POSITION"
      | "FEE_FUNDING"
      | "FEE_LIQUIDATION"
      | "FEE_MINT"
      | "FEE_OPEN_POSITION"
      | "FEE_REDEEM"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChargeBorrowingFeeEvent"
      | "ChargeMintOrRedeemFeeEvent"
      | "ChargeTradingFeeEvent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "FEE_BORROWING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_CLOSE_POSITION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_FUNDING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_LIQUIDATION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "FEE_MINT", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "FEE_OPEN_POSITION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FEE_REDEEM",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "FEE_BORROWING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_CLOSE_POSITION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_FUNDING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FEE_LIQUIDATION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FEE_MINT", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FEE_OPEN_POSITION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FEE_REDEEM", data: BytesLike): Result;
}

export namespace ChargeBorrowingFeeEventEvent {
  export type InputTuple = [
    isCrossMargin: boolean,
    stakeToken: AddressLike,
    token: AddressLike,
    account: AddressLike,
    feeType: BytesLike,
    fee: BigNumberish
  ];
  export type OutputTuple = [
    isCrossMargin: boolean,
    stakeToken: string,
    token: string,
    account: string,
    feeType: string,
    fee: bigint
  ];
  export interface OutputObject {
    isCrossMargin: boolean;
    stakeToken: string;
    token: string;
    account: string;
    feeType: string;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChargeMintOrRedeemFeeEventEvent {
  export type InputTuple = [
    params: FeeProcess.ChargeMintOrRedeemFeeEventParamsStruct
  ];
  export type OutputTuple = [
    params: FeeProcess.ChargeMintOrRedeemFeeEventParamsStructOutput
  ];
  export interface OutputObject {
    params: FeeProcess.ChargeMintOrRedeemFeeEventParamsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChargeTradingFeeEventEvent {
  export type InputTuple = [
    symbol: BytesLike,
    account: AddressLike,
    positionKey: BytesLike,
    feeType: BytesLike,
    feeToken: AddressLike,
    feeAmount: BigNumberish
  ];
  export type OutputTuple = [
    symbol: string,
    account: string,
    positionKey: string,
    feeType: string,
    feeToken: string,
    feeAmount: bigint
  ];
  export interface OutputObject {
    symbol: string;
    account: string;
    positionKey: string;
    feeType: string;
    feeToken: string;
    feeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FeeProcess extends BaseContract {
  connect(runner?: ContractRunner | null): FeeProcess;
  waitForDeployment(): Promise<this>;

  interface: FeeProcessInterface;

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

  FEE_BORROWING: TypedContractMethod<[], [string], "view">;

  FEE_CLOSE_POSITION: TypedContractMethod<[], [string], "view">;

  FEE_FUNDING: TypedContractMethod<[], [string], "view">;

  FEE_LIQUIDATION: TypedContractMethod<[], [string], "view">;

  FEE_MINT: TypedContractMethod<[], [string], "view">;

  FEE_OPEN_POSITION: TypedContractMethod<[], [string], "view">;

  FEE_REDEEM: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FEE_BORROWING"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_CLOSE_POSITION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_FUNDING"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_LIQUIDATION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_MINT"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_OPEN_POSITION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FEE_REDEEM"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "ChargeBorrowingFeeEvent"
  ): TypedContractEvent<
    ChargeBorrowingFeeEventEvent.InputTuple,
    ChargeBorrowingFeeEventEvent.OutputTuple,
    ChargeBorrowingFeeEventEvent.OutputObject
  >;
  getEvent(
    key: "ChargeMintOrRedeemFeeEvent"
  ): TypedContractEvent<
    ChargeMintOrRedeemFeeEventEvent.InputTuple,
    ChargeMintOrRedeemFeeEventEvent.OutputTuple,
    ChargeMintOrRedeemFeeEventEvent.OutputObject
  >;
  getEvent(
    key: "ChargeTradingFeeEvent"
  ): TypedContractEvent<
    ChargeTradingFeeEventEvent.InputTuple,
    ChargeTradingFeeEventEvent.OutputTuple,
    ChargeTradingFeeEventEvent.OutputObject
  >;

  filters: {
    "ChargeBorrowingFeeEvent(bool,address,address,address,bytes32,uint256)": TypedContractEvent<
      ChargeBorrowingFeeEventEvent.InputTuple,
      ChargeBorrowingFeeEventEvent.OutputTuple,
      ChargeBorrowingFeeEventEvent.OutputObject
    >;
    ChargeBorrowingFeeEvent: TypedContractEvent<
      ChargeBorrowingFeeEventEvent.InputTuple,
      ChargeBorrowingFeeEventEvent.OutputTuple,
      ChargeBorrowingFeeEventEvent.OutputObject
    >;

    "ChargeMintOrRedeemFeeEvent(tuple)": TypedContractEvent<
      ChargeMintOrRedeemFeeEventEvent.InputTuple,
      ChargeMintOrRedeemFeeEventEvent.OutputTuple,
      ChargeMintOrRedeemFeeEventEvent.OutputObject
    >;
    ChargeMintOrRedeemFeeEvent: TypedContractEvent<
      ChargeMintOrRedeemFeeEventEvent.InputTuple,
      ChargeMintOrRedeemFeeEventEvent.OutputTuple,
      ChargeMintOrRedeemFeeEventEvent.OutputObject
    >;

    "ChargeTradingFeeEvent(bytes32,address,bytes32,bytes32,address,uint256)": TypedContractEvent<
      ChargeTradingFeeEventEvent.InputTuple,
      ChargeTradingFeeEventEvent.OutputTuple,
      ChargeTradingFeeEventEvent.OutputObject
    >;
    ChargeTradingFeeEvent: TypedContractEvent<
      ChargeTradingFeeEventEvent.InputTuple,
      ChargeTradingFeeEventEvent.OutputTuple,
      ChargeTradingFeeEventEvent.OutputObject
    >;
  };
}

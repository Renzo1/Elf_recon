/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
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
} from "../../common";

export declare namespace Redeem {
  export type RequestStruct = {
    account: AddressLike;
    receiver: AddressLike;
    stakeToken: AddressLike;
    redeemToken: AddressLike;
    unStakeAmount: BigNumberish;
    minRedeemAmount: BigNumberish;
    executionFee: BigNumberish;
  };

  export type RequestStructOutput = [
    account: string,
    receiver: string,
    stakeToken: string,
    redeemToken: string,
    unStakeAmount: bigint,
    minRedeemAmount: bigint,
    executionFee: bigint
  ] & {
    account: string;
    receiver: string;
    stakeToken: string;
    redeemToken: string;
    unStakeAmount: bigint;
    minRedeemAmount: bigint;
    executionFee: bigint;
  };
}

export interface RedeemProcessInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "CancelRedeemEvent"
      | "CreateRedeemEvent"
      | "RedeemSuccessEvent"
  ): EventFragment;
}

export namespace CancelRedeemEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Redeem.RequestStruct,
    reasonCode: BytesLike
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Redeem.RequestStructOutput,
    reasonCode: string
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Redeem.RequestStructOutput;
    reasonCode: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateRedeemEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Redeem.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Redeem.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Redeem.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedeemSuccessEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    redeemTokenAmount: BigNumberish,
    data: Redeem.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    redeemTokenAmount: bigint,
    data: Redeem.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    redeemTokenAmount: bigint;
    data: Redeem.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface RedeemProcess extends BaseContract {
  connect(runner?: ContractRunner | null): RedeemProcess;
  waitForDeployment(): Promise<this>;

  interface: RedeemProcessInterface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "CancelRedeemEvent"
  ): TypedContractEvent<
    CancelRedeemEventEvent.InputTuple,
    CancelRedeemEventEvent.OutputTuple,
    CancelRedeemEventEvent.OutputObject
  >;
  getEvent(
    key: "CreateRedeemEvent"
  ): TypedContractEvent<
    CreateRedeemEventEvent.InputTuple,
    CreateRedeemEventEvent.OutputTuple,
    CreateRedeemEventEvent.OutputObject
  >;
  getEvent(
    key: "RedeemSuccessEvent"
  ): TypedContractEvent<
    RedeemSuccessEventEvent.InputTuple,
    RedeemSuccessEventEvent.OutputTuple,
    RedeemSuccessEventEvent.OutputObject
  >;

  filters: {
    "CancelRedeemEvent(uint256,tuple,bytes32)": TypedContractEvent<
      CancelRedeemEventEvent.InputTuple,
      CancelRedeemEventEvent.OutputTuple,
      CancelRedeemEventEvent.OutputObject
    >;
    CancelRedeemEvent: TypedContractEvent<
      CancelRedeemEventEvent.InputTuple,
      CancelRedeemEventEvent.OutputTuple,
      CancelRedeemEventEvent.OutputObject
    >;

    "CreateRedeemEvent(uint256,tuple)": TypedContractEvent<
      CreateRedeemEventEvent.InputTuple,
      CreateRedeemEventEvent.OutputTuple,
      CreateRedeemEventEvent.OutputObject
    >;
    CreateRedeemEvent: TypedContractEvent<
      CreateRedeemEventEvent.InputTuple,
      CreateRedeemEventEvent.OutputTuple,
      CreateRedeemEventEvent.OutputObject
    >;

    "RedeemSuccessEvent(uint256,uint256,tuple)": TypedContractEvent<
      RedeemSuccessEventEvent.InputTuple,
      RedeemSuccessEventEvent.OutputTuple,
      RedeemSuccessEventEvent.OutputObject
    >;
    RedeemSuccessEvent: TypedContractEvent<
      RedeemSuccessEventEvent.InputTuple,
      RedeemSuccessEventEvent.OutputTuple,
      RedeemSuccessEventEvent.OutputObject
    >;
  };
}

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

export declare namespace Mint {
  export type RequestStruct = {
    account: AddressLike;
    stakeToken: AddressLike;
    requestToken: AddressLike;
    requestTokenAmount: BigNumberish;
    walletRequestTokenAmount: BigNumberish;
    minStakeAmount: BigNumberish;
    executionFee: BigNumberish;
    isCollateral: boolean;
    isExecutionFeeFromLpVault: boolean;
  };

  export type RequestStructOutput = [
    account: string,
    stakeToken: string,
    requestToken: string,
    requestTokenAmount: bigint,
    walletRequestTokenAmount: bigint,
    minStakeAmount: bigint,
    executionFee: bigint,
    isCollateral: boolean,
    isExecutionFeeFromLpVault: boolean
  ] & {
    account: string;
    stakeToken: string;
    requestToken: string;
    requestTokenAmount: bigint;
    walletRequestTokenAmount: bigint;
    minStakeAmount: bigint;
    executionFee: bigint;
    isCollateral: boolean;
    isExecutionFeeFromLpVault: boolean;
  };
}

export interface MintProcessInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "CancelMintEvent"
      | "CreateMintEvent"
      | "MintSuccessEvent"
  ): EventFragment;
}

export namespace CancelMintEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Mint.RequestStruct,
    reasonCode: BytesLike
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Mint.RequestStructOutput,
    reasonCode: string
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Mint.RequestStructOutput;
    reasonCode: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateMintEventEvent {
  export type InputTuple = [requestId: BigNumberish, data: Mint.RequestStruct];
  export type OutputTuple = [requestId: bigint, data: Mint.RequestStructOutput];
  export interface OutputObject {
    requestId: bigint;
    data: Mint.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MintSuccessEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    mintStakeAmount: BigNumberish,
    data: Mint.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    mintStakeAmount: bigint,
    data: Mint.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    mintStakeAmount: bigint;
    data: Mint.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MintProcess extends BaseContract {
  connect(runner?: ContractRunner | null): MintProcess;
  waitForDeployment(): Promise<this>;

  interface: MintProcessInterface;

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
    key: "CancelMintEvent"
  ): TypedContractEvent<
    CancelMintEventEvent.InputTuple,
    CancelMintEventEvent.OutputTuple,
    CancelMintEventEvent.OutputObject
  >;
  getEvent(
    key: "CreateMintEvent"
  ): TypedContractEvent<
    CreateMintEventEvent.InputTuple,
    CreateMintEventEvent.OutputTuple,
    CreateMintEventEvent.OutputObject
  >;
  getEvent(
    key: "MintSuccessEvent"
  ): TypedContractEvent<
    MintSuccessEventEvent.InputTuple,
    MintSuccessEventEvent.OutputTuple,
    MintSuccessEventEvent.OutputObject
  >;

  filters: {
    "CancelMintEvent(uint256,tuple,bytes32)": TypedContractEvent<
      CancelMintEventEvent.InputTuple,
      CancelMintEventEvent.OutputTuple,
      CancelMintEventEvent.OutputObject
    >;
    CancelMintEvent: TypedContractEvent<
      CancelMintEventEvent.InputTuple,
      CancelMintEventEvent.OutputTuple,
      CancelMintEventEvent.OutputObject
    >;

    "CreateMintEvent(uint256,tuple)": TypedContractEvent<
      CreateMintEventEvent.InputTuple,
      CreateMintEventEvent.OutputTuple,
      CreateMintEventEvent.OutputObject
    >;
    CreateMintEvent: TypedContractEvent<
      CreateMintEventEvent.InputTuple,
      CreateMintEventEvent.OutputTuple,
      CreateMintEventEvent.OutputObject
    >;

    "MintSuccessEvent(uint256,uint256,tuple)": TypedContractEvent<
      MintSuccessEventEvent.InputTuple,
      MintSuccessEventEvent.OutputTuple,
      MintSuccessEventEvent.OutputObject
    >;
    MintSuccessEvent: TypedContractEvent<
      MintSuccessEventEvent.InputTuple,
      MintSuccessEventEvent.OutputTuple,
      MintSuccessEventEvent.OutputObject
    >;
  };
}
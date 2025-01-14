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

export declare namespace ClaimRewards {
  export type RequestStruct = {
    account: AddressLike;
    claimUsdToken: AddressLike;
    executionFee: BigNumberish;
  };

  export type RequestStructOutput = [
    account: string,
    claimUsdToken: string,
    executionFee: bigint
  ] & { account: string; claimUsdToken: string; executionFee: bigint };
}

export interface ClaimRewardsProcessInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "CancelClaimRewardsEvent"
      | "ClaimRewardsSuccessEvent"
      | "CreateClaimRewardsEvent"
  ): EventFragment;
}

export namespace CancelClaimRewardsEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: ClaimRewards.RequestStruct,
    reasonCode: BytesLike
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: ClaimRewards.RequestStructOutput,
    reasonCode: string
  ];
  export interface OutputObject {
    requestId: bigint;
    data: ClaimRewards.RequestStructOutput;
    reasonCode: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimRewardsSuccessEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: ClaimRewards.RequestStruct,
    stakeTokens: AddressLike[],
    claimAmounts: BigNumberish[]
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: ClaimRewards.RequestStructOutput,
    stakeTokens: string[],
    claimAmounts: bigint[]
  ];
  export interface OutputObject {
    requestId: bigint;
    data: ClaimRewards.RequestStructOutput;
    stakeTokens: string[];
    claimAmounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateClaimRewardsEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: ClaimRewards.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: ClaimRewards.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    data: ClaimRewards.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ClaimRewardsProcess extends BaseContract {
  connect(runner?: ContractRunner | null): ClaimRewardsProcess;
  waitForDeployment(): Promise<this>;

  interface: ClaimRewardsProcessInterface;

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
    key: "CancelClaimRewardsEvent"
  ): TypedContractEvent<
    CancelClaimRewardsEventEvent.InputTuple,
    CancelClaimRewardsEventEvent.OutputTuple,
    CancelClaimRewardsEventEvent.OutputObject
  >;
  getEvent(
    key: "ClaimRewardsSuccessEvent"
  ): TypedContractEvent<
    ClaimRewardsSuccessEventEvent.InputTuple,
    ClaimRewardsSuccessEventEvent.OutputTuple,
    ClaimRewardsSuccessEventEvent.OutputObject
  >;
  getEvent(
    key: "CreateClaimRewardsEvent"
  ): TypedContractEvent<
    CreateClaimRewardsEventEvent.InputTuple,
    CreateClaimRewardsEventEvent.OutputTuple,
    CreateClaimRewardsEventEvent.OutputObject
  >;

  filters: {
    "CancelClaimRewardsEvent(uint256,tuple,bytes32)": TypedContractEvent<
      CancelClaimRewardsEventEvent.InputTuple,
      CancelClaimRewardsEventEvent.OutputTuple,
      CancelClaimRewardsEventEvent.OutputObject
    >;
    CancelClaimRewardsEvent: TypedContractEvent<
      CancelClaimRewardsEventEvent.InputTuple,
      CancelClaimRewardsEventEvent.OutputTuple,
      CancelClaimRewardsEventEvent.OutputObject
    >;

    "ClaimRewardsSuccessEvent(uint256,tuple,address[],uint256[])": TypedContractEvent<
      ClaimRewardsSuccessEventEvent.InputTuple,
      ClaimRewardsSuccessEventEvent.OutputTuple,
      ClaimRewardsSuccessEventEvent.OutputObject
    >;
    ClaimRewardsSuccessEvent: TypedContractEvent<
      ClaimRewardsSuccessEventEvent.InputTuple,
      ClaimRewardsSuccessEventEvent.OutputTuple,
      ClaimRewardsSuccessEventEvent.OutputObject
    >;

    "CreateClaimRewardsEvent(uint256,tuple)": TypedContractEvent<
      CreateClaimRewardsEventEvent.InputTuple,
      CreateClaimRewardsEventEvent.OutputTuple,
      CreateClaimRewardsEventEvent.OutputObject
    >;
    CreateClaimRewardsEvent: TypedContractEvent<
      CreateClaimRewardsEventEvent.InputTuple,
      CreateClaimRewardsEventEvent.OutputTuple,
      CreateClaimRewardsEventEvent.OutputObject
    >;
  };
}

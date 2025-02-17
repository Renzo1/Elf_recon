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

export declare namespace Withdraw {
  export type RequestStruct = {
    account: AddressLike;
    token: AddressLike;
    amount: BigNumberish;
  };

  export type RequestStructOutput = [
    account: string,
    token: string,
    amount: bigint
  ] & { account: string; token: string; amount: bigint };
}

export declare namespace AssetsProcess {
  export type DepositParamsStruct = {
    account: AddressLike;
    token: AddressLike;
    amount: BigNumberish;
    from: BigNumberish;
    isNativeToken: boolean;
  };

  export type DepositParamsStructOutput = [
    account: string,
    token: string,
    amount: bigint,
    from: bigint,
    isNativeToken: boolean
  ] & {
    account: string;
    token: string;
    amount: bigint;
    from: bigint;
    isNativeToken: boolean;
  };
}

export interface AssetsProcessInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "CancelWithdrawEvent"
      | "CreateWithdrawEvent"
      | "Deposit"
      | "WithdrawSuccessEvent"
  ): EventFragment;
}

export namespace CancelWithdrawEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Withdraw.RequestStruct,
    reasonCode: BytesLike
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Withdraw.RequestStructOutput,
    reasonCode: string
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Withdraw.RequestStructOutput;
    reasonCode: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CreateWithdrawEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Withdraw.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Withdraw.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Withdraw.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [data: AssetsProcess.DepositParamsStruct];
  export type OutputTuple = [data: AssetsProcess.DepositParamsStructOutput];
  export interface OutputObject {
    data: AssetsProcess.DepositParamsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawSuccessEventEvent {
  export type InputTuple = [
    requestId: BigNumberish,
    data: Withdraw.RequestStruct
  ];
  export type OutputTuple = [
    requestId: bigint,
    data: Withdraw.RequestStructOutput
  ];
  export interface OutputObject {
    requestId: bigint;
    data: Withdraw.RequestStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AssetsProcess extends BaseContract {
  connect(runner?: ContractRunner | null): AssetsProcess;
  waitForDeployment(): Promise<this>;

  interface: AssetsProcessInterface;

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
    key: "CancelWithdrawEvent"
  ): TypedContractEvent<
    CancelWithdrawEventEvent.InputTuple,
    CancelWithdrawEventEvent.OutputTuple,
    CancelWithdrawEventEvent.OutputObject
  >;
  getEvent(
    key: "CreateWithdrawEvent"
  ): TypedContractEvent<
    CreateWithdrawEventEvent.InputTuple,
    CreateWithdrawEventEvent.OutputTuple,
    CreateWithdrawEventEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawSuccessEvent"
  ): TypedContractEvent<
    WithdrawSuccessEventEvent.InputTuple,
    WithdrawSuccessEventEvent.OutputTuple,
    WithdrawSuccessEventEvent.OutputObject
  >;

  filters: {
    "CancelWithdrawEvent(uint256,tuple,bytes32)": TypedContractEvent<
      CancelWithdrawEventEvent.InputTuple,
      CancelWithdrawEventEvent.OutputTuple,
      CancelWithdrawEventEvent.OutputObject
    >;
    CancelWithdrawEvent: TypedContractEvent<
      CancelWithdrawEventEvent.InputTuple,
      CancelWithdrawEventEvent.OutputTuple,
      CancelWithdrawEventEvent.OutputObject
    >;

    "CreateWithdrawEvent(uint256,tuple)": TypedContractEvent<
      CreateWithdrawEventEvent.InputTuple,
      CreateWithdrawEventEvent.OutputTuple,
      CreateWithdrawEventEvent.OutputObject
    >;
    CreateWithdrawEvent: TypedContractEvent<
      CreateWithdrawEventEvent.InputTuple,
      CreateWithdrawEventEvent.OutputTuple,
      CreateWithdrawEventEvent.OutputObject
    >;

    "Deposit(tuple)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "WithdrawSuccessEvent(uint256,tuple)": TypedContractEvent<
      WithdrawSuccessEventEvent.InputTuple,
      WithdrawSuccessEventEvent.OutputTuple,
      WithdrawSuccessEventEvent.OutputObject
    >;
    WithdrawSuccessEvent: TypedContractEvent<
      WithdrawSuccessEventEvent.InputTuple,
      WithdrawSuccessEventEvent.OutputTuple,
      WithdrawSuccessEventEvent.OutputObject
    >;
  };
}

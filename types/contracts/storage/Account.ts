/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
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

export declare namespace Account {
  export type TokenBalanceStruct = {
    amount: BigNumberish;
    usedAmount: BigNumberish;
    interest: BigNumberish;
    liability: BigNumberish;
  };

  export type TokenBalanceStructOutput = [
    amount: bigint,
    usedAmount: bigint,
    interest: bigint,
    liability: bigint
  ] & {
    amount: bigint;
    usedAmount: bigint;
    interest: bigint;
    liability: bigint;
  };
}

export interface AccountInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "AccountCrossModeUpdateEvent"
      | "AccountOrderHoldInUsdUpdateEvent"
      | "AccountTokenUpdateEvent"
  ): EventFragment;
}

export namespace AccountCrossModeUpdateEventEvent {
  export type InputTuple = [account: AddressLike, isCrossMargin: boolean];
  export type OutputTuple = [account: string, isCrossMargin: boolean];
  export interface OutputObject {
    account: string;
    isCrossMargin: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AccountOrderHoldInUsdUpdateEventEvent {
  export type InputTuple = [
    account: AddressLike,
    preOrderHoldInUsd: BigNumberish,
    orderHoldInUsd: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    preOrderHoldInUsd: bigint,
    orderHoldInUsd: bigint
  ];
  export interface OutputObject {
    account: string;
    preOrderHoldInUsd: bigint;
    orderHoldInUsd: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace AccountTokenUpdateEventEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    preBalance: Account.TokenBalanceStruct,
    balance: Account.TokenBalanceStruct,
    source: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    preBalance: Account.TokenBalanceStructOutput,
    balance: Account.TokenBalanceStructOutput,
    source: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    preBalance: Account.TokenBalanceStructOutput;
    balance: Account.TokenBalanceStructOutput;
    source: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Account extends BaseContract {
  connect(runner?: ContractRunner | null): Account;
  waitForDeployment(): Promise<this>;

  interface: AccountInterface;

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
    key: "AccountCrossModeUpdateEvent"
  ): TypedContractEvent<
    AccountCrossModeUpdateEventEvent.InputTuple,
    AccountCrossModeUpdateEventEvent.OutputTuple,
    AccountCrossModeUpdateEventEvent.OutputObject
  >;
  getEvent(
    key: "AccountOrderHoldInUsdUpdateEvent"
  ): TypedContractEvent<
    AccountOrderHoldInUsdUpdateEventEvent.InputTuple,
    AccountOrderHoldInUsdUpdateEventEvent.OutputTuple,
    AccountOrderHoldInUsdUpdateEventEvent.OutputObject
  >;
  getEvent(
    key: "AccountTokenUpdateEvent"
  ): TypedContractEvent<
    AccountTokenUpdateEventEvent.InputTuple,
    AccountTokenUpdateEventEvent.OutputTuple,
    AccountTokenUpdateEventEvent.OutputObject
  >;

  filters: {
    "AccountCrossModeUpdateEvent(address,bool)": TypedContractEvent<
      AccountCrossModeUpdateEventEvent.InputTuple,
      AccountCrossModeUpdateEventEvent.OutputTuple,
      AccountCrossModeUpdateEventEvent.OutputObject
    >;
    AccountCrossModeUpdateEvent: TypedContractEvent<
      AccountCrossModeUpdateEventEvent.InputTuple,
      AccountCrossModeUpdateEventEvent.OutputTuple,
      AccountCrossModeUpdateEventEvent.OutputObject
    >;

    "AccountOrderHoldInUsdUpdateEvent(address,uint256,uint256)": TypedContractEvent<
      AccountOrderHoldInUsdUpdateEventEvent.InputTuple,
      AccountOrderHoldInUsdUpdateEventEvent.OutputTuple,
      AccountOrderHoldInUsdUpdateEventEvent.OutputObject
    >;
    AccountOrderHoldInUsdUpdateEvent: TypedContractEvent<
      AccountOrderHoldInUsdUpdateEventEvent.InputTuple,
      AccountOrderHoldInUsdUpdateEventEvent.OutputTuple,
      AccountOrderHoldInUsdUpdateEventEvent.OutputObject
    >;

    "AccountTokenUpdateEvent(address,address,tuple,tuple,uint8)": TypedContractEvent<
      AccountTokenUpdateEventEvent.InputTuple,
      AccountTokenUpdateEventEvent.OutputTuple,
      AccountTokenUpdateEventEvent.OutputObject
    >;
    AccountTokenUpdateEvent: TypedContractEvent<
      AccountTokenUpdateEventEvent.InputTuple,
      AccountTokenUpdateEventEvent.OutputTuple,
      AccountTokenUpdateEventEvent.OutputObject
    >;
  };
}

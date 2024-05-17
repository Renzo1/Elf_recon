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

export declare namespace LpPool {
  export type BorrowingFeeStruct = {
    totalBorrowingFee: BigNumberish;
    totalRealizedBorrowingFee: BigNumberish;
    cumulativeBorrowingFeePerToken: BigNumberish;
    lastUpdateTime: BigNumberish;
  };

  export type BorrowingFeeStructOutput = [
    totalBorrowingFee: bigint,
    totalRealizedBorrowingFee: bigint,
    cumulativeBorrowingFeePerToken: bigint,
    lastUpdateTime: bigint
  ] & {
    totalBorrowingFee: bigint;
    totalRealizedBorrowingFee: bigint;
    cumulativeBorrowingFeePerToken: bigint;
    lastUpdateTime: bigint;
  };
}

export interface LpPoolInterface extends Interface {
  getEvent(
    nameOrSignatureOrTopic:
      | "PoolBorrowingFeeUpdateEvent"
      | "PoolCollateralTokenUpdateEvent"
      | "PoolTokenUpdateEvent"
  ): EventFragment;
}

export namespace PoolBorrowingFeeUpdateEventEvent {
  export type InputTuple = [
    stakeToken: AddressLike,
    borrowingFee: LpPool.BorrowingFeeStruct
  ];
  export type OutputTuple = [
    stakeToken: string,
    borrowingFee: LpPool.BorrowingFeeStructOutput
  ];
  export interface OutputObject {
    stakeToken: string;
    borrowingFee: LpPool.BorrowingFeeStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolCollateralTokenUpdateEventEvent {
  export type InputTuple = [
    stakeToken: AddressLike,
    collateral: AddressLike,
    preAmount: BigNumberish,
    amount: BigNumberish,
    updateBlock: BigNumberish
  ];
  export type OutputTuple = [
    stakeToken: string,
    collateral: string,
    preAmount: bigint,
    amount: bigint,
    updateBlock: bigint
  ];
  export interface OutputObject {
    stakeToken: string;
    collateral: string;
    preAmount: bigint;
    amount: bigint;
    updateBlock: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolTokenUpdateEventEvent {
  export type InputTuple = [
    stakeToken: AddressLike,
    token: AddressLike,
    preAmount: BigNumberish,
    preLiability: BigNumberish,
    preHoldAmount: BigNumberish,
    preUnsettledAmount: BigNumberish,
    preLossAmount: BigNumberish,
    amount: BigNumberish,
    liability: BigNumberish,
    holdAmount: BigNumberish,
    unsettledAmount: BigNumberish,
    lossAmount: BigNumberish,
    updateBlock: BigNumberish
  ];
  export type OutputTuple = [
    stakeToken: string,
    token: string,
    preAmount: bigint,
    preLiability: bigint,
    preHoldAmount: bigint,
    preUnsettledAmount: bigint,
    preLossAmount: bigint,
    amount: bigint,
    liability: bigint,
    holdAmount: bigint,
    unsettledAmount: bigint,
    lossAmount: bigint,
    updateBlock: bigint
  ];
  export interface OutputObject {
    stakeToken: string;
    token: string;
    preAmount: bigint;
    preLiability: bigint;
    preHoldAmount: bigint;
    preUnsettledAmount: bigint;
    preLossAmount: bigint;
    amount: bigint;
    liability: bigint;
    holdAmount: bigint;
    unsettledAmount: bigint;
    lossAmount: bigint;
    updateBlock: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LpPool extends BaseContract {
  connect(runner?: ContractRunner | null): LpPool;
  waitForDeployment(): Promise<this>;

  interface: LpPoolInterface;

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
    key: "PoolBorrowingFeeUpdateEvent"
  ): TypedContractEvent<
    PoolBorrowingFeeUpdateEventEvent.InputTuple,
    PoolBorrowingFeeUpdateEventEvent.OutputTuple,
    PoolBorrowingFeeUpdateEventEvent.OutputObject
  >;
  getEvent(
    key: "PoolCollateralTokenUpdateEvent"
  ): TypedContractEvent<
    PoolCollateralTokenUpdateEventEvent.InputTuple,
    PoolCollateralTokenUpdateEventEvent.OutputTuple,
    PoolCollateralTokenUpdateEventEvent.OutputObject
  >;
  getEvent(
    key: "PoolTokenUpdateEvent"
  ): TypedContractEvent<
    PoolTokenUpdateEventEvent.InputTuple,
    PoolTokenUpdateEventEvent.OutputTuple,
    PoolTokenUpdateEventEvent.OutputObject
  >;

  filters: {
    "PoolBorrowingFeeUpdateEvent(address,tuple)": TypedContractEvent<
      PoolBorrowingFeeUpdateEventEvent.InputTuple,
      PoolBorrowingFeeUpdateEventEvent.OutputTuple,
      PoolBorrowingFeeUpdateEventEvent.OutputObject
    >;
    PoolBorrowingFeeUpdateEvent: TypedContractEvent<
      PoolBorrowingFeeUpdateEventEvent.InputTuple,
      PoolBorrowingFeeUpdateEventEvent.OutputTuple,
      PoolBorrowingFeeUpdateEventEvent.OutputObject
    >;

    "PoolCollateralTokenUpdateEvent(address,address,uint256,uint256,uint256)": TypedContractEvent<
      PoolCollateralTokenUpdateEventEvent.InputTuple,
      PoolCollateralTokenUpdateEventEvent.OutputTuple,
      PoolCollateralTokenUpdateEventEvent.OutputObject
    >;
    PoolCollateralTokenUpdateEvent: TypedContractEvent<
      PoolCollateralTokenUpdateEventEvent.InputTuple,
      PoolCollateralTokenUpdateEventEvent.OutputTuple,
      PoolCollateralTokenUpdateEventEvent.OutputObject
    >;

    "PoolTokenUpdateEvent(address,address,uint256,uint256,uint256,int256,uint256,uint256,uint256,uint256,int256,uint256,uint256)": TypedContractEvent<
      PoolTokenUpdateEventEvent.InputTuple,
      PoolTokenUpdateEventEvent.OutputTuple,
      PoolTokenUpdateEventEvent.OutputObject
    >;
    PoolTokenUpdateEvent: TypedContractEvent<
      PoolTokenUpdateEventEvent.InputTuple,
      PoolTokenUpdateEventEvent.OutputTuple,
      PoolTokenUpdateEventEvent.OutputObject
    >;
  };
}
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

export interface RedeemInterface extends Interface {
  getFunction(nameOrSignature: "get"): FunctionFragment;

  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
}

export interface Redeem extends BaseContract {
  connect(runner?: ContractRunner | null): Redeem;
  waitForDeployment(): Promise<this>;

  interface: RedeemInterface;

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

  get: TypedContractMethod<
    [requestId: BigNumberish],
    [Redeem.RequestStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "get"
  ): TypedContractMethod<
    [requestId: BigNumberish],
    [Redeem.RequestStructOutput],
    "view"
  >;

  filters: {};
}

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

export declare namespace UpdatePositionMargin {
  export type RequestStruct = {
    account: AddressLike;
    positionKey: BytesLike;
    marginToken: AddressLike;
    updateMarginAmount: BigNumberish;
    executionFee: BigNumberish;
    isAdd: boolean;
    isExecutionFeeFromTradeVault: boolean;
    lastBlock: BigNumberish;
  };

  export type RequestStructOutput = [
    account: string,
    positionKey: string,
    marginToken: string,
    updateMarginAmount: bigint,
    executionFee: bigint,
    isAdd: boolean,
    isExecutionFeeFromTradeVault: boolean,
    lastBlock: bigint
  ] & {
    account: string;
    positionKey: string;
    marginToken: string;
    updateMarginAmount: bigint;
    executionFee: bigint;
    isAdd: boolean;
    isExecutionFeeFromTradeVault: boolean;
    lastBlock: bigint;
  };
}

export interface UpdatePositionMarginInterface extends Interface {
  getFunction(nameOrSignature: "get"): FunctionFragment;

  encodeFunctionData(functionFragment: "get", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
}

export interface UpdatePositionMargin extends BaseContract {
  connect(runner?: ContractRunner | null): UpdatePositionMargin;
  waitForDeployment(): Promise<this>;

  interface: UpdatePositionMarginInterface;

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
    [UpdatePositionMargin.RequestStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "get"
  ): TypedContractMethod<
    [requestId: BigNumberish],
    [UpdatePositionMargin.RequestStructOutput],
    "view"
  >;

  filters: {};
}
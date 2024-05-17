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

export declare namespace IFaucet {
  export type RequestTokensParamStruct = {
    account: AddressLike;
    mockTokens: AddressLike[];
    mintAmounts: BigNumberish[];
    ethAmount: BigNumberish;
  };

  export type RequestTokensParamStructOutput = [
    account: string,
    mockTokens: string[],
    mintAmounts: bigint[],
    ethAmount: bigint
  ] & {
    account: string;
    mockTokens: string[];
    mintAmounts: bigint[];
    ethAmount: bigint;
  };
}

export interface FaucetFacetInterface extends Interface {
  getFunction(nameOrSignature: "requestTokens"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "requestTokens",
    values: [IFaucet.RequestTokensParamStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "requestTokens",
    data: BytesLike
  ): Result;
}

export interface FaucetFacet extends BaseContract {
  connect(runner?: ContractRunner | null): FaucetFacet;
  waitForDeployment(): Promise<this>;

  interface: FaucetFacetInterface;

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

  requestTokens: TypedContractMethod<
    [param: IFaucet.RequestTokensParamStruct],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "requestTokens"
  ): TypedContractMethod<
    [param: IFaucet.RequestTokensParamStruct],
    [void],
    "payable"
  >;

  filters: {};
}

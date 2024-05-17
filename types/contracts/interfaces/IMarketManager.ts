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

export declare namespace MarketFactoryProcess {
  export type CreateMarketParamsStruct = {
    code: BytesLike;
    stakeTokenName: string;
    indexToken: AddressLike;
    baseToken: AddressLike;
  };

  export type CreateMarketParamsStructOutput = [
    code: string,
    stakeTokenName: string,
    indexToken: string,
    baseToken: string
  ] & {
    code: string;
    stakeTokenName: string;
    indexToken: string;
    baseToken: string;
  };
}

export interface IMarketManagerInterface extends Interface {
  getFunction(
    nameOrSignature: "createMarket" | "createStakeUsdPool"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createMarket",
    values: [MarketFactoryProcess.CreateMarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "createStakeUsdPool",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "createMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createStakeUsdPool",
    data: BytesLike
  ): Result;
}

export interface IMarketManager extends BaseContract {
  connect(runner?: ContractRunner | null): IMarketManager;
  waitForDeployment(): Promise<this>;

  interface: IMarketManagerInterface;

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

  createMarket: TypedContractMethod<
    [params: MarketFactoryProcess.CreateMarketParamsStruct],
    [void],
    "nonpayable"
  >;

  createStakeUsdPool: TypedContractMethod<
    [stakeTokenName: string, decimals: BigNumberish],
    [string],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "createMarket"
  ): TypedContractMethod<
    [params: MarketFactoryProcess.CreateMarketParamsStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createStakeUsdPool"
  ): TypedContractMethod<
    [stakeTokenName: string, decimals: BigNumberish],
    [string],
    "nonpayable"
  >;

  filters: {};
}

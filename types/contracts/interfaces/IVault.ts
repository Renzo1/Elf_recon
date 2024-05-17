/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface IVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getLpVault"
      | "getLpVaultAddress"
      | "getPortfolioVault"
      | "getPortfolioVaultAddress"
      | "getTradeVault"
      | "getTradeVaultAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getLpVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLpVaultAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPortfolioVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPortfolioVaultAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTradeVaultAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "getLpVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getLpVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPortfolioVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPortfolioVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTradeVaultAddress",
    data: BytesLike
  ): Result;
}

export interface IVault extends BaseContract {
  connect(runner?: ContractRunner | null): IVault;
  waitForDeployment(): Promise<this>;

  interface: IVaultInterface;

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

  getLpVault: TypedContractMethod<[], [string], "view">;

  getLpVaultAddress: TypedContractMethod<[], [string], "view">;

  getPortfolioVault: TypedContractMethod<[], [string], "view">;

  getPortfolioVaultAddress: TypedContractMethod<[], [string], "view">;

  getTradeVault: TypedContractMethod<[], [string], "view">;

  getTradeVaultAddress: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getLpVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getLpVaultAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPortfolioVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPortfolioVaultAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getTradeVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getTradeVaultAddress"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
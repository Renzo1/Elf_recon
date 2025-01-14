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

export interface AppStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CHAIN_CONFIG"
      | "COMMON_CONFIG"
      | "LP_POOL_CONFIG"
      | "REFERRAL"
      | "STAKE_CONFIG"
      | "SYMBOL_CONFIG"
      | "TRADE_CONFIG"
      | "TRADE_TOKEN_CONFIG"
      | "USD_POOL_CONFIG"
      | "VAULT_CONFIG"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CHAIN_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMMON_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LP_POOL_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "REFERRAL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STAKE_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SYMBOL_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRADE_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TRADE_TOKEN_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USD_POOL_CONFIG",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VAULT_CONFIG",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "CHAIN_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMMON_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LP_POOL_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "REFERRAL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STAKE_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SYMBOL_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRADE_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRADE_TOKEN_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USD_POOL_CONFIG",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "VAULT_CONFIG",
    data: BytesLike
  ): Result;
}

export interface AppStorage extends BaseContract {
  connect(runner?: ContractRunner | null): AppStorage;
  waitForDeployment(): Promise<this>;

  interface: AppStorageInterface;

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

  CHAIN_CONFIG: TypedContractMethod<[], [string], "view">;

  COMMON_CONFIG: TypedContractMethod<[], [string], "view">;

  LP_POOL_CONFIG: TypedContractMethod<[], [string], "view">;

  REFERRAL: TypedContractMethod<[], [string], "view">;

  STAKE_CONFIG: TypedContractMethod<[], [string], "view">;

  SYMBOL_CONFIG: TypedContractMethod<[], [string], "view">;

  TRADE_CONFIG: TypedContractMethod<[], [string], "view">;

  TRADE_TOKEN_CONFIG: TypedContractMethod<[], [string], "view">;

  USD_POOL_CONFIG: TypedContractMethod<[], [string], "view">;

  VAULT_CONFIG: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CHAIN_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "COMMON_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LP_POOL_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "REFERRAL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "STAKE_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SYMBOL_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TRADE_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TRADE_TOKEN_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "USD_POOL_CONFIG"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "VAULT_CONFIG"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}

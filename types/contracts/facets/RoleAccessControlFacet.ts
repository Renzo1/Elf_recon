/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface RoleAccessControlFacetInterface extends Interface {
  getFunction(
    nameOrSignature: "grantRole" | "hasRole" | "revokeAllRole" | "revokeRole"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "grantRole",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeAllRole",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "revokeAllRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
}

export interface RoleAccessControlFacet extends BaseContract {
  connect(runner?: ContractRunner | null): RoleAccessControlFacet;
  waitForDeployment(): Promise<this>;

  interface: RoleAccessControlFacetInterface;

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

  grantRole: TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [boolean],
    "view"
  >;

  revokeAllRole: TypedContractMethod<
    [account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "revokeAllRole"
  ): TypedContractMethod<[account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [account: AddressLike, role: BytesLike],
    [void],
    "nonpayable"
  >;

  filters: {};
}

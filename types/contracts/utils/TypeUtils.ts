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

export interface TypeUtilsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bytes32Equals"
      | "isBytes32Empty"
      | "validBytes32Empty"
      | "validNotZero"
      | "validStringEmpty"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bytes32Equals",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isBytes32Empty",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validBytes32Empty",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validNotZero",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "validStringEmpty",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "bytes32Equals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBytes32Empty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validBytes32Empty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validNotZero",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validStringEmpty",
    data: BytesLike
  ): Result;
}

export interface TypeUtils extends BaseContract {
  connect(runner?: ContractRunner | null): TypeUtils;
  waitForDeployment(): Promise<this>;

  interface: TypeUtilsInterface;

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

  bytes32Equals: TypedContractMethod<
    [a: BytesLike, b: BytesLike],
    [boolean],
    "view"
  >;

  isBytes32Empty: TypedContractMethod<[data: BytesLike], [boolean], "view">;

  validBytes32Empty: TypedContractMethod<[data: BytesLike], [void], "view">;

  validNotZero: TypedContractMethod<[data: BigNumberish], [void], "view">;

  validStringEmpty: TypedContractMethod<[data: string], [void], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bytes32Equals"
  ): TypedContractMethod<[a: BytesLike, b: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isBytes32Empty"
  ): TypedContractMethod<[data: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "validBytes32Empty"
  ): TypedContractMethod<[data: BytesLike], [void], "view">;
  getFunction(
    nameOrSignature: "validNotZero"
  ): TypedContractMethod<[data: BigNumberish], [void], "view">;
  getFunction(
    nameOrSignature: "validStringEmpty"
  ): TypedContractMethod<[data: string], [void], "view">;

  filters: {};
}

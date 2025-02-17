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

export interface OrderInterface extends Interface {
  getFunction(nameOrSignature: "hasOtherShortOrders"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "hasOtherShortOrders",
    values: [BigNumberish[], BytesLike, AddressLike, boolean]
  ): string;

  decodeFunctionResult(
    functionFragment: "hasOtherShortOrders",
    data: BytesLike
  ): Result;
}

export interface Order extends BaseContract {
  connect(runner?: ContractRunner | null): Order;
  waitForDeployment(): Promise<this>;

  interface: OrderInterface;

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

  hasOtherShortOrders: TypedContractMethod<
    [
      orders: BigNumberish[],
      symbol: BytesLike,
      marginToken: AddressLike,
      isCrossMargin: boolean
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "hasOtherShortOrders"
  ): TypedContractMethod<
    [
      orders: BigNumberish[],
      symbol: BytesLike,
      marginToken: AddressLike,
      isCrossMargin: boolean
    ],
    [boolean],
    "view"
  >;

  filters: {};
}

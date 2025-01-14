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

export interface CalUtilsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "PRICE_PRECISION"
      | "PRICE_TO_WEI"
      | "RATE_PRECISION"
      | "SMALL_RATE_PRECISION"
      | "USD_PRECISION"
      | "computeAvgEntryPrice"
      | "decimalsToDecimals"
      | "diff"
      | "div"
      | "divRate"
      | "divSmallRate"
      | "divToIntPrecision"
      | "divToPrecision"
      | "formatToTickSize"
      | "mul"
      | "mulDiv"
      | "mulIntSmallRate"
      | "mulRate(int256,int256)"
      | "mulRate(uint256,uint256)"
      | "mulSmallRate"
      | "quietAdd"
      | "tokenToToken(uint256,uint8,uint8,uint256)"
      | "tokenToToken(uint256,uint8,uint8,uint256,uint256)"
      | "tokenToUsd"
      | "tokenToUsdInt"
      | "usdToToken"
      | "usdToTokenInt"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PRICE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PRICE_TO_WEI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RATE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SMALL_RATE_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "USD_PRECISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "computeAvgEntryPrice",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "decimalsToDecimals",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "diff",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "div",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "divRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "divSmallRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "divToIntPrecision",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "divToPrecision",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "formatToTickSize",
    values: [BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "mul",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulDiv",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulIntSmallRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulRate(int256,int256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulRate(uint256,uint256)",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mulSmallRate",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "quietAdd",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToToken(uint256,uint8,uint8,uint256)",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToToken(uint256,uint8,uint8,uint256,uint256)",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToUsd",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToUsdInt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdToToken",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "usdToTokenInt",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "PRICE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PRICE_TO_WEI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RATE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SMALL_RATE_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "USD_PRECISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAvgEntryPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decimalsToDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "diff", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "div", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "divRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "divSmallRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "divToIntPrecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "divToPrecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "formatToTickSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mul", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mulDiv", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mulIntSmallRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mulRate(int256,int256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mulRate(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mulSmallRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quietAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenToToken(uint256,uint8,uint8,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToToken(uint256,uint8,uint8,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenToUsd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenToUsdInt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "usdToToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "usdToTokenInt",
    data: BytesLike
  ): Result;
}

export interface CalUtils extends BaseContract {
  connect(runner?: ContractRunner | null): CalUtils;
  waitForDeployment(): Promise<this>;

  interface: CalUtilsInterface;

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

  PRICE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  PRICE_TO_WEI: TypedContractMethod<[], [bigint], "view">;

  RATE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  SMALL_RATE_PRECISION: TypedContractMethod<[], [bigint], "view">;

  USD_PRECISION: TypedContractMethod<[], [bigint], "view">;

  computeAvgEntryPrice: TypedContractMethod<
    [
      qty: BigNumberish,
      entryPrice: BigNumberish,
      increaseQty: BigNumberish,
      tokenPrice: BigNumberish,
      tickSize: BigNumberish,
      isUp: boolean
    ],
    [bigint],
    "view"
  >;

  decimalsToDecimals: TypedContractMethod<
    [
      value: BigNumberish,
      originDecimals: BigNumberish,
      targetDecimals: BigNumberish
    ],
    [bigint],
    "view"
  >;

  diff: TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish],
    [bigint],
    "view"
  >;

  div: TypedContractMethod<
    [a: BigNumberish, b: BigNumberish],
    [bigint],
    "view"
  >;

  divRate: TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  divSmallRate: TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  divToIntPrecision: TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, precision: BigNumberish],
    [bigint],
    "view"
  >;

  divToPrecision: TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, precision: BigNumberish],
    [bigint],
    "view"
  >;

  formatToTickSize: TypedContractMethod<
    [value: BigNumberish, tickSize: BigNumberish, roundUp: boolean],
    [bigint],
    "view"
  >;

  mul: TypedContractMethod<
    [a: BigNumberish, b: BigNumberish],
    [bigint],
    "view"
  >;

  mulDiv: TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, value3: BigNumberish],
    [bigint],
    "view"
  >;

  mulIntSmallRate: TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  "mulRate(int256,int256)": TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  "mulRate(uint256,uint256)": TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  mulSmallRate: TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;

  quietAdd: TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish],
    [bigint],
    "view"
  >;

  "tokenToToken(uint256,uint8,uint8,uint256)": TypedContractMethod<
    [
      originTokenAmount: BigNumberish,
      originTokenDecimals: BigNumberish,
      targetTokenDecimals: BigNumberish,
      tokenToTokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  "tokenToToken(uint256,uint8,uint8,uint256,uint256)": TypedContractMethod<
    [
      originTokenAmount: BigNumberish,
      originTokenDecimals: BigNumberish,
      targetTokenDecimals: BigNumberish,
      originTokenPrice: BigNumberish,
      targetTokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  tokenToUsd: TypedContractMethod<
    [
      tokenAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  tokenToUsdInt: TypedContractMethod<
    [
      tokenAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  usdToToken: TypedContractMethod<
    [
      tokenUsdAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  usdToTokenInt: TypedContractMethod<
    [
      tokenUsdAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "PRICE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "PRICE_TO_WEI"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "RATE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "SMALL_RATE_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "USD_PRECISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "computeAvgEntryPrice"
  ): TypedContractMethod<
    [
      qty: BigNumberish,
      entryPrice: BigNumberish,
      increaseQty: BigNumberish,
      tokenPrice: BigNumberish,
      tickSize: BigNumberish,
      isUp: boolean
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "decimalsToDecimals"
  ): TypedContractMethod<
    [
      value: BigNumberish,
      originDecimals: BigNumberish,
      targetDecimals: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "diff"
  ): TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "div"
  ): TypedContractMethod<[a: BigNumberish, b: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "divRate"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "divSmallRate"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "divToIntPrecision"
  ): TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, precision: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "divToPrecision"
  ): TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, precision: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "formatToTickSize"
  ): TypedContractMethod<
    [value: BigNumberish, tickSize: BigNumberish, roundUp: boolean],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mul"
  ): TypedContractMethod<[a: BigNumberish, b: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "mulDiv"
  ): TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish, value3: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mulIntSmallRate"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mulRate(int256,int256)"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mulRate(uint256,uint256)"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "mulSmallRate"
  ): TypedContractMethod<
    [value: BigNumberish, rate: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "quietAdd"
  ): TypedContractMethod<
    [value1: BigNumberish, value2: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenToToken(uint256,uint8,uint8,uint256)"
  ): TypedContractMethod<
    [
      originTokenAmount: BigNumberish,
      originTokenDecimals: BigNumberish,
      targetTokenDecimals: BigNumberish,
      tokenToTokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenToToken(uint256,uint8,uint8,uint256,uint256)"
  ): TypedContractMethod<
    [
      originTokenAmount: BigNumberish,
      originTokenDecimals: BigNumberish,
      targetTokenDecimals: BigNumberish,
      originTokenPrice: BigNumberish,
      targetTokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenToUsd"
  ): TypedContractMethod<
    [
      tokenAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "tokenToUsdInt"
  ): TypedContractMethod<
    [
      tokenAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "usdToToken"
  ): TypedContractMethod<
    [
      tokenUsdAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "usdToTokenInt"
  ): TypedContractMethod<
    [
      tokenUsdAmount: BigNumberish,
      tokenDecimals: BigNumberish,
      tokenPrice: BigNumberish
    ],
    [bigint],
    "view"
  >;

  filters: {};
}

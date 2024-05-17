/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CalUtils,
  CalUtilsInterface,
} from "../../../contracts/utils/CalUtils";

const _abi = [
  {
    inputs: [],
    name: "PRICE_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRICE_TO_WEI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RATE_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SMALL_RATE_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USD_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "qty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "entryPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "increaseQty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tickSize",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUp",
        type: "bool",
      },
    ],
    name: "computeAvgEntryPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "originDecimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "targetDecimals",
        type: "uint8",
      },
    ],
    name: "decimalsToDecimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value2",
        type: "uint256",
      },
    ],
    name: "diff",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "div",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "divRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "divSmallRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value1",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "value2",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "precision",
        type: "int256",
      },
    ],
    name: "divToIntPrecision",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "precision",
        type: "uint256",
      },
    ],
    name: "divToPrecision",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tickSize",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "formatToTickSize",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "b",
        type: "uint256",
      },
    ],
    name: "mul",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value3",
        type: "uint256",
      },
    ],
    name: "mulDiv",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "rate",
        type: "int256",
      },
    ],
    name: "mulIntSmallRate",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "rate",
        type: "int256",
      },
    ],
    name: "mulRate",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "mulRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "mulSmallRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value1",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "value2",
        type: "int256",
      },
    ],
    name: "quietAdd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "originTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "originTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "targetTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "tokenToTokenPrice",
        type: "uint256",
      },
    ],
    name: "tokenToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "originTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "originTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "targetTokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "originTokenPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "targetTokenPrice",
        type: "uint256",
      },
    ],
    name: "tokenToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "tokenPrice",
        type: "uint256",
      },
    ],
    name: "tokenToUsd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "tokenAmount",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "tokenPrice",
        type: "int256",
      },
    ],
    name: "tokenToUsdInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenUsdAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "tokenPrice",
        type: "uint256",
      },
    ],
    name: "usdToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "tokenUsdAmount",
        type: "int256",
      },
      {
        internalType: "uint8",
        name: "tokenDecimals",
        type: "uint8",
      },
      {
        internalType: "int256",
        name: "tokenPrice",
        type: "int256",
      },
    ],
    name: "usdToTokenInt",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610ebe61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101c35760003560e01c80639b9c45ca11610103578063d6052ce3116100a1578063f0a7df831161007b578063f0a7df8314610367578063f5873b971461037a578063f6cb16f51461038d578063f8739d7c1461039957600080fd5b8063d6052ce31461032e578063eda9aae414610341578063ee7fc5a31461035457600080fd5b8063aa9a0912116100dd578063aa9a0912146102e2578063aca95d54146102f5578063c30b259b14610308578063c8a4ac9c1461031b57600080fd5b80639b9c45ca146102a9578063a391c15b146102bc578063a520855f146102cf57600080fd5b80634bfdfa6f116101705780638975e68f1161014a5780638975e68f1461024357806389f35a6c146102785780638f5e514a1461028b57806395082d251461029e57600080fd5b80634bfdfa6f146102435780636f17c0af1461025257806375608c3d1461026557600080fd5b80632b3ba681116101a15780632b3ba68114610213578063445b0a431461021d5780634619bf391461023057600080fd5b80630d65ea29146101c8578063107a60da146101ed578063228d17e014610200575b600080fd5b6101db6101d63660046109c3565b6103ac565b60405190815260200160405180910390f35b6101db6101fb3660046109f8565b6103f6565b6101db61020e3660046109f8565b610433565b6101db620186a081565b6101db61022b3660046109f8565b610448565b6101db61023e366004610a1a565b610468565b6101db670de0b6b3a764000081565b6101db6102603660046109c3565b610478565b6101db6102733660046109c3565b6104a7565b6101db610286366004610a46565b6104db565b6101db6102993660046109f8565b61054b565b6101db6305f5e10081565b6101db6102b7366004610a9a565b61056d565b6101db6102ca3660046109f8565b6105be565b6101db6102dd366004610a1a565b6105ca565b6101db6102f0366004610a1a565b6105d7565b6101db6103033660046109f8565b6105e4565b6101db6103163660046109f8565b6105f5565b6101db6103293660046109f8565b610605565b6101db61033c366004610acf565b610611565b6101db61034f3660046109f8565b610632565b6101db6103623660046109f8565b610647565b6101db610375366004610b02565b610657565b6101db6103883660046109c3565b610697565b6101db6402540be40081565b6101db6103a7366004610b53565b6106b7565b60006103ec6103c96103c26402540be400610720565b84906107db565b6103e66103df6103da87600a610cf0565b610720565b87906107db565b906107e7565b90505b9392505050565b6000808261040385610720565b61040d9190610cff565b9050600081131561042657610421816107f3565b610429565b60005b9150505b92915050565b60006103ef8383670de0b6b3a764000061085f565b60006103ef61045e670de0b6b3a7640000610720565b6103e685856107db565b60006103ec836103e686856107db565b60006103ec61048884600a610cf0565b6104a16402540be40061049b8887610989565b90610989565b90610995565b60006103ec6104ba6103da85600a610cf0565b6103e66104cb6402540be400610720565b6104d588876107db565b906107db565b60008360ff168360ff161061051b576105146305f5e1006104a16104ff8787610d27565b61050a90600a610cf0565b61049b8987610989565b9050610543565b6105146105288486610d27565b61053390600a610cf0565b6104a16305f5e100818987610989565b949350505050565b60008183116105635761055e8383610d40565b6103ef565b6103ef8284610d40565b60008061057a8486610d82565b90508060000361058d57849150506103ef565b6105b68461049b856105a05760006105a3565b60015b60ff166105b08989610995565b906109a1565b9150506103ef565b60006103ef8383610995565b60006103ec84838561085f565b60006103ec84848461085f565b60006103ef61045e620186a0610720565b60006103ef83620186a08461085f565b60006103ef8383610989565b60006103ec8461062284600a610cf0565b61062d86600a610cf0565b61085f565b60006103ef83670de0b6b3a76400008461085f565b60006103ef8383620186a061085f565b60008061067e610667878a610d96565b6104a16106748989610989565b6105b08c8c610989565b905061068b81858561056d565b98975050505050505050565b60006103ec846106a885600a610cf0565b61062d856402540be400610989565b60008460ff168460ff16106106f3576106ec826104a16106d78888610d27565b6106e290600a610cf0565b61049b8a88610989565b9050610717565b6106ec6107008587610d27565b61070b90600a610cf0565b6104a184818a88610989565b95945050505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8211156107d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e7432353600000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5090565b60006103ef8284610da9565b60006103ef8284610df5565b6000808212156107d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f73697469766560448201526064016107ce565b600080807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff858709858702925082811083820303915050806000036108b7578382816108ad576108ad610d53565b04925050506103ef565b808411610920576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4d6174683a206d756c446976206f766572666c6f77000000000000000000000060448201526064016107ce565b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b60006103ef8284610e5d565b60006103ef8284610e74565b60006103ef8284610d96565b803560ff811681146109be57600080fd5b919050565b6000806000606084860312156109d857600080fd5b833592506109e8602085016109ad565b9150604084013590509250925092565b60008060408385031215610a0b57600080fd5b50508035926020909101359150565b600080600060608486031215610a2f57600080fd5b505081359360208301359350604090920135919050565b60008060008060808587031215610a5c57600080fd5b84359350610a6c602086016109ad565b9250610a7a604086016109ad565b9396929550929360600135925050565b803580151581146109be57600080fd5b600080600060608486031215610aaf57600080fd5b8335925060208401359150610ac660408501610a8a565b90509250925092565b600080600060608486031215610ae457600080fd5b83359250610af4602085016109ad565b9150610ac6604085016109ad565b60008060008060008060c08789031215610b1b57600080fd5b8635955060208701359450604087013593506060870135925060808701359150610b4760a08801610a8a565b90509295509295509295565b600080600080600060a08688031215610b6b57600080fd5b85359450610b7b602087016109ad565b9350610b89604087016109ad565b94979396509394606081013594506080013592915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b80851115610c2957817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610c0f57610c0f610ba1565b80851615610c1c57918102915b93841c9390800290610bd5565b509250929050565b600082610c405750600161042d565b81610c4d5750600061042d565b8160018114610c635760028114610c6d57610c89565b600191505061042d565b60ff841115610c7e57610c7e610ba1565b50506001821b61042d565b5060208310610133831016604e8410600b8410161715610cac575081810a61042d565b610cb68383610bd0565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115610ce857610ce8610ba1565b029392505050565b60006103ef60ff841683610c31565b8082018281126000831280158216821582161715610d1f57610d1f610ba1565b505092915050565b60ff828116828216039081111561042d5761042d610ba1565b8181038181111561042d5761042d610ba1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600082610d9157610d91610d53565b500690565b8082018082111561042d5761042d610ba1565b808202600082127f800000000000000000000000000000000000000000000000000000000000000084141615610de157610de1610ba1565b818105831482151761042d5761042d610ba1565b600082610e0457610e04610d53565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f800000000000000000000000000000000000000000000000000000000000000083141615610e5857610e58610ba1565b500590565b808202811582820484141761042d5761042d610ba1565b600082610e8357610e83610d53565b50049056fea26469706673582212209c4ceff1706a048d184fc88c21c37f4c0ccfdf02938a88264a6eae980b446f1864736f6c63430008120033";

type CalUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CalUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CalUtils__factory extends ContractFactory {
  constructor(...args: CalUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      CalUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CalUtils__factory {
    return super.connect(runner) as CalUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CalUtilsInterface {
    return new Interface(_abi) as CalUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CalUtils {
    return new Contract(address, _abi, runner) as unknown as CalUtils;
  }
}
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
  AppTradeTokenConfig,
  AppTradeTokenConfigInterface,
} from "../../../contracts/storage/AppTradeTokenConfig";

const _abi = [
  {
    inputs: [],
    name: "COLLATERAL_TOTAL_CAP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "COLLATERAL_USER_CAP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DISCOUNT",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "INTEREST_RATE_FACTOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "IS_SUPPORT_COLLATERAL",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIABILITY_TOTAL_CAP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIABILITY_USER_CAP",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LIQUIDATION_FACTOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getTradeTokenConfig",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "isSupportCollateral",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "precision",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "discount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralUserCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralTotalCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liabilityUserCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liabilityTotalCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "interestRateFactor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidationFactor",
            type: "uint256",
          },
        ],
        internalType: "struct AppTradeTokenConfig.TradeTokenConfig",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6111df61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100c85760003560e01c8063aeb8700511610080578063d3eb5c2711610065578063d3eb5c2714610118578063dcdb0c0314610120578063e981fddd1461012857600080fd5b8063aeb8700514610108578063c252796a1461011057600080fd5b80637f429c72116100b15780637f429c72146100f057806385f3858d146100f8578063aaf5eb681461010057600080fd5b80630d37b457146100cd57806346fa8dd3146100e8575b600080fd5b6100d56101aa565b6040519081526020015b60405180910390f35b6100d5610204565b6100d5610245565b6100d5610286565b6100d56102c7565b6100d5610308565b6100d5610349565b6100d561038a565b6100d56103cb565b61013b610136366004611131565b61040c565b6040516100df91906000610120820190508251151582526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525092915050565b6040516020016101eb9060208082526008908201527f444953434f554e54000000000000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012081565b6040516020016101eb9060208082526015908201527f49535f535550504f52545f434f4c4c41544552414c0000000000000000000000604082015260600190565b6040516020016101eb9060208082526014908201527f434f4c4c41544552414c5f544f54414c5f434150000000000000000000000000604082015260600190565b6040516020016101eb9060208082526014908201527f494e5445524553545f524154455f464143544f52000000000000000000000000604082015260600190565b6040516020016101eb9060208082526009908201527f505245434953494f4e0000000000000000000000000000000000000000000000604082015260600190565b6040516020016101eb9060208082526013908201527f4c494142494c4954595f544f54414c5f43415000000000000000000000000000604082015260600190565b6040516020016101eb9060208082526013908201527f434f4c4c41544552414c5f555345525f43415000000000000000000000000000604082015260600190565b6040516020016101eb9060208082526012908201527f4c494142494c4954595f555345525f4341500000000000000000000000000000604082015260600190565b6040516020016101eb9060208082526012908201527f4c49515549444154494f4e5f464143544f520000000000000000000000000000604082015260600190565b61045d60405180610120016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6104ae60405180610120016040528060001515815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af41580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051d919061116e565b905060006040516020016105629060208082526012908201527f54524144455f544f4b454e5f434f4e4649470000000000000000000000000000604082015260600190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f2f6e7e79000000000000000000000000000000000000000000000000000000008252600482018490526024820181905273ffffffffffffffffffffffffffffffffffffffff87166044830152915073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90632f6e7e7990606401602060405180830381865af4158015610624573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106489190611187565b6106555750909392505050565b8173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__637921d0b8909183886040516020016106b59060208082526015908201527f49535f535550504f52545f434f4c4c41544552414c0000000000000000000000604082015260600190565b604051602081830303815290604052805190602001206040516020016107049392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610740929190918252602082015260400190565b602060405180830381865af415801561075d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107819190611187565b1515835260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b776447908490849089906107e89060200160208082526009908201527f505245434953494f4e0000000000000000000000000000000000000000000000604082015260600190565b604051602081830303815290604052805190602001206040516020016108379392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610873929190918252602082015260400190565b602060405180830381865af4158015610890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b4919061116e565b8360200181815250508173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__638b7764479091838860405160200161091d9060208082526008908201527f444953434f554e54000000000000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012060405160200161096c9392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b81526004016109a8929190918252602082015260400190565b602060405180830381865af41580156109c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e9919061116e565b8360400181815250508173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__638b77644790918388604051602001610a529060208082526013908201527f434f4c4c41544552414c5f555345525f43415000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610aa19392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610add929190918252602082015260400190565b602060405180830381865af4158015610afa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b1e919061116e565b606084015260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b77644790849084908990610b869060200160208082526014908201527f434f4c4c41544552414c5f544f54414c5f434150000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610bd59392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610c11929190918252602082015260400190565b602060405180830381865af4158015610c2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c52919061116e565b608084015260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b77644790849084908990610cba9060200160208082526012908201527f4c494142494c4954595f555345525f4341500000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610d099392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610d45929190918252602082015260400190565b602060405180830381865af4158015610d62573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d86919061116e565b60a084015260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b77644790849084908990610dee9060200160208082526013908201527f4c494142494c4954595f544f54414c5f43415000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610e3d9392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610e79929190918252602082015260400190565b602060405180830381865af4158015610e96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eba919061116e565b60c084015260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b77644790849084908990610f229060200160208082526014908201527f494e5445524553545f524154455f464143544f52000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610f719392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b8152600401610fad929190918252602082015260400190565b602060405180830381865af4158015610fca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fee919061116e565b60e084015260405173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90638b776447908490849089906110569060200160208082526012908201527f4c49515549444154494f4e5f464143544f520000000000000000000000000000604082015260600190565b604051602081830303815290604052805190602001206040516020016110a59392919092835273ffffffffffffffffffffffffffffffffffffffff919091166020830152604082015260600190565b604051602081830303815290604052805190602001206040518363ffffffff1660e01b81526004016110e1929190918252602082015260400190565b602060405180830381865af41580156110fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611122919061116e565b61010084015250909392505050565b60006020828403121561114357600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461116757600080fd5b9392505050565b60006020828403121561118057600080fd5b5051919050565b60006020828403121561119957600080fd5b8151801515811461116757600080fdfea264697066735822122021cdf5c5712eda052827304801f143941b7a53f92b6708f6153038c4ac98336664736f6c63430008120033";

type AppTradeTokenConfigConstructorParams =
  | [linkLibraryAddresses: AppTradeTokenConfigLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AppTradeTokenConfigConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class AppTradeTokenConfig__factory extends ContractFactory {
  constructor(...args: AppTradeTokenConfigConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        AppTradeTokenConfig__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: AppTradeTokenConfigLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1b86ea9efa04d6f44bb6dbbf79511d7094\\$__", "g"),
      linkLibraryAddresses["contracts/storage/AppStorage.sol:AppStorage"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AppTradeTokenConfig & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): AppTradeTokenConfig__factory {
    return super.connect(runner) as AppTradeTokenConfig__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AppTradeTokenConfigInterface {
    return new Interface(_abi) as AppTradeTokenConfigInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AppTradeTokenConfig {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as AppTradeTokenConfig;
  }
}

export interface AppTradeTokenConfigLibraryAddresses {
  ["contracts/storage/AppStorage.sol:AppStorage"]: string;
}
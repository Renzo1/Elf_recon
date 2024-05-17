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
  RebalanceFacet,
  RebalanceFacetInterface,
} from "../../../contracts/facets/RebalanceFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "InvalidRoleAccess",
    type: "error",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "targetToken",
            type: "address",
          },
          {
            internalType: "int256",
            name: "minPrice",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxPrice",
            type: "int256",
          },
        ],
        internalType: "struct OracleProcess.OracleParam[]",
        name: "oracles",
        type: "tuple[]",
      },
    ],
    name: "autoRebalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061049e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063d3e4af2814610030575b600080fd5b61004361003e366004610347565b610045565b005b61006e7f4b4545504552000000000000000000000000000000000000000000000000000061022f565b60005a6040517f7532d8bc00000000000000000000000000000000000000000000000000000000815290915073__$76a505dbd6210c6de5172a9e6577e0d579$__90637532d8bc906100c690869086906004016103e5565b60006040518083038186803b1580156100de57600080fd5b505af41580156100f2573d6000803e3d6000fd5b5050505073__$4df8cfd3d004725d683238b6bbcd0e520c$__637a6efd476040518163ffffffff1660e01b815260040160006040518083038186803b15801561013a57600080fd5b505af415801561014e573d6000803e3d6000fd5b5050505073__$76a505dbd6210c6de5172a9e6577e0d579$__63e52ed3656040518163ffffffff1660e01b815260040160006040518083038186803b15801561019657600080fd5b505af41580156101aa573d6000803e3d6000fd5b50506040517f1f10eda40000000000000000000000000000000000000000000000000000000081526004810184905273__$1af6d17e273104ca3ca5016ca475f591a0$__9250631f10eda4915060240160006040518083038186803b15801561021257600080fd5b505af4158015610226573d6000803e3d6000fd5b50505050505050565b610239338261027f565b61027c576040517fb5f438340000000000000000000000000000000000000000000000000000000081523360048201526024810182905260440160405180910390fd5b50565b60008061028a6102c7565b73ffffffffffffffffffffffffffffffffffffffff9490941660009081526020948552604080822094825260019094019094525050902054151590565b60008060405160200161030b906020808252601e908201527f78797a2e656c66692e73746f726167652e416363657373436f6e74726f6c0000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6000806020838503121561035a57600080fd5b823567ffffffffffffffff8082111561037257600080fd5b818501915085601f83011261038657600080fd5b81358181111561039557600080fd5b8660208260071b85010111156103aa57600080fd5b60209290920196919550909350505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146103e057600080fd5b919050565b6020808252818101839052600090604080840186845b8781101561045b5773ffffffffffffffffffffffffffffffffffffffff80610422846103bc565b168452806104318785016103bc565b168487015250818401358484015260608083013590840152608092830192909101906001016103fb565b509097965050505050505056fea26469706673582212206a9ab23d059c2d78ed1c856265e22d51c80bac391288af1e50bf02f08103580764736f6c63430008120033";

type RebalanceFacetConstructorParams =
  | [linkLibraryAddresses: RebalanceFacetLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RebalanceFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class RebalanceFacet__factory extends ContractFactory {
  constructor(...args: RebalanceFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        RebalanceFacet__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: RebalanceFacetLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$76a505dbd6210c6de5172a9e6577e0d579\\$__", "g"),
      linkLibraryAddresses["contracts/process/OracleProcess.sol:OracleProcess"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$4df8cfd3d004725d683238b6bbcd0e520c\\$__", "g"),
      linkLibraryAddresses[
        "contracts/process/RebalanceProcess.sol:RebalanceProcess"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1af6d17e273104ca3ca5016ca475f591a0\\$__", "g"),
      linkLibraryAddresses["contracts/process/GasProcess.sol:GasProcess"]
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
      RebalanceFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): RebalanceFacet__factory {
    return super.connect(runner) as RebalanceFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RebalanceFacetInterface {
    return new Interface(_abi) as RebalanceFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RebalanceFacet {
    return new Contract(address, _abi, runner) as unknown as RebalanceFacet;
  }
}

export interface RebalanceFacetLibraryAddresses {
  ["contracts/process/OracleProcess.sol:OracleProcess"]: string;
  ["contracts/process/RebalanceProcess.sol:RebalanceProcess"]: string;
  ["contracts/process/GasProcess.sol:GasProcess"]: string;
}
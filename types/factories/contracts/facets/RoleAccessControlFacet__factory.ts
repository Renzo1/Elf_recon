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
  RoleAccessControlFacet,
  RoleAccessControlFacetInterface,
} from "../../../contracts/facets/RoleAccessControlFacet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeAllRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610727806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063208dd1ff14610051578063ab2742dc14610066578063ac4ab3fb14610079578063cb337348146100a0575b600080fd5b61006461005f366004610614565b6100b3565b005b610064610074366004610614565b61014e565b61008c610087366004610614565b6101e0565b604051901515815260200160405180910390f35b6100646100ae36600461063e565b6101f5565b6100dd337f41444d494e000000000000000000000000000000000000000000000000000000610289565b610140576040517fb5f438340000000000000000000000000000000000000000000000000000000081523360048201527f41444d494e00000000000000000000000000000000000000000000000000000060248201526044015b60405180910390fd5b61014a82826102ce565b5050565b610178337f41444d494e000000000000000000000000000000000000000000000000000000610289565b6101d6576040517fb5f438340000000000000000000000000000000000000000000000000000000081523360048201527f41444d494e0000000000000000000000000000000000000000000000000000006024820152604401610137565b61014a8282610345565b60006101ec8383610289565b90505b92915050565b61021f337f41444d494e000000000000000000000000000000000000000000000000000000610289565b61027d576040517fb5f438340000000000000000000000000000000000000000000000000000000081523360048201527f41444d494e0000000000000000000000000000000000000000000000000000006024820152604401610137565b61028681610381565b50565b6000806102946103c7565b73ffffffffffffffffffffffffffffffffffffffff851660009081526020829052604090209091506102c69084610447565b949350505050565b60006102d86103c7565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208290526040902090915061030a9083610447565b156103405773ffffffffffffffffffffffffffffffffffffffff8316600090815260208290526040902061033e908361045f565b505b505050565b600061034f6103c7565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260208290526040902090915061033e908361046b565b600061038b6103c7565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208290526040812091925081816103bf82826105b9565b505050505050565b60008060405160200161040b906020808252601e908201527f78797a2e656c66692e73746f726167652e416363657373436f6e74726f6c0000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b600081815260018301602052604081205415156101ec565b60006101ec8383610477565b60006101ec838361056a565b6000818152600183016020526040812054801561056057600061049b600183610659565b85549091506000906104af90600190610659565b90508181146105145760008660000182815481106104cf576104cf610693565b90600052602060002001549050808760000184815481106104f2576104f2610693565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610525576105256106c2565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506101ef565b60009150506101ef565b60008181526001830160205260408120546105b1575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556101ef565b5060006101ef565b508054600082559060005260206000209081019061028691905b808211156105e757600081556001016105d3565b5090565b803573ffffffffffffffffffffffffffffffffffffffff8116811461060f57600080fd5b919050565b6000806040838503121561062757600080fd5b610630836105eb565b946020939093013593505050565b60006020828403121561065057600080fd5b6101ec826105eb565b818103818111156101ef577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122030ef18098173fa83bae6051277ae4c2d3f0dd1ed9188510b0c7498b669e3514964736f6c63430008120033";

type RoleAccessControlFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoleAccessControlFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoleAccessControlFacet__factory extends ContractFactory {
  constructor(...args: RoleAccessControlFacetConstructorParams) {
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
      RoleAccessControlFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): RoleAccessControlFacet__factory {
    return super.connect(runner) as RoleAccessControlFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoleAccessControlFacetInterface {
    return new Interface(_abi) as RoleAccessControlFacetInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RoleAccessControlFacet {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as RoleAccessControlFacet;
  }
}

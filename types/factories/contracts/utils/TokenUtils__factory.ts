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
  TokenUtils,
  TokenUtilsInterface,
} from "../../../contracts/utils/TokenUtils";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
    name: "totalSupply",
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
] as const;

const _bytecode =
  "0x61022761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063d449a83214610045578063e4dc2aa41461006f575b600080fd5b610058610053366004610178565b610090565b60405160ff90911681526020015b60405180910390f35b61008261007d366004610178565b610107565b604051908152602001610066565b60008173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100dd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010191906101b5565b92915050565b60008173ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610154573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010191906101d8565b60006020828403121561018a57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101ae57600080fd5b9392505050565b6000602082840312156101c757600080fd5b815160ff811681146101ae57600080fd5b6000602082840312156101ea57600080fd5b505191905056fea26469706673582212208da2f2039e6a2f63e1d830bb29d658be748caef981aed1f88ea92ded09fd03a264736f6c63430008120033";

type TokenUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenUtils__factory extends ContractFactory {
  constructor(...args: TokenUtilsConstructorParams) {
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
      TokenUtils & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenUtils__factory {
    return super.connect(runner) as TokenUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenUtilsInterface {
    return new Interface(_abi) as TokenUtilsInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TokenUtils {
    return new Contract(address, _abi, runner) as unknown as TokenUtils;
  }
}
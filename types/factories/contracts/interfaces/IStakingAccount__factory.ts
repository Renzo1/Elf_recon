/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IStakingAccount,
  IStakingAccountInterface,
} from "../../../contracts/interfaces/IStakingAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
    ],
    name: "getAccountPoolBalance",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakeAmount",
            type: "uint256",
          },
          {
            internalType: "address[]",
            name: "collateralTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "collateralAmounts",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "collateralStakeLiability",
            type: "uint256[]",
          },
        ],
        internalType: "struct IStakingAccount.TokenBalance",
        name: "",
        type: "tuple",
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
      {
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateral",
        type: "address",
      },
    ],
    name: "getAccountPoolCollateralAmount",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountUsdPoolAmount",
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

export class IStakingAccount__factory {
  static readonly abi = _abi;
  static createInterface(): IStakingAccountInterface {
    return new Interface(_abi) as IStakingAccountInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IStakingAccount {
    return new Contract(address, _abi, runner) as unknown as IStakingAccount;
  }
}
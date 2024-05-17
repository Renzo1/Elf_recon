/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IReferral,
  IReferralInterface,
} from "../../../contracts/interfaces/IReferral";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAccountReferral",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "code",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "referralCode",
            type: "bytes32",
          },
        ],
        internalType: "struct Referral.Props",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
    ],
    name: "isCodeExists",
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
] as const;

export class IReferral__factory {
  static readonly abi = _abi;
  static createInterface(): IReferralInterface {
    return new Interface(_abi) as IReferralInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IReferral {
    return new Contract(address, _abi, runner) as unknown as IReferral;
  }
}

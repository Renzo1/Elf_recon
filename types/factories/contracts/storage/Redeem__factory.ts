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
  Redeem,
  RedeemInterface,
} from "../../../contracts/storage/Redeem";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "redeemToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "unStakeAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minRedeemAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
        ],
        internalType: "struct Redeem.Request",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61035161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80634cc822151461005b578063780900dc1461007d57806386d5c4be146100a35780639507d39a146100ab575b600080fd5b81801561006757600080fd5b5061007b610076366004610302565b610132565b005b61009061008b366004610302565b6101a4565b6040519081526020015b60405180910390f35b6100906101c0565b6100be6100b9366004610302565b610240565b60405161009a9190600060e08201905073ffffffffffffffffffffffffffffffffffffffff808451168352806020850151166020840152806040850151166040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015292915050565b600061013c6101c0565b6000928352602052506040812080547fffffffffffffffffffffffff0000000000000000000000000000000000000000908116825560018201805482169055600282018054821690556003820180549091169055600481018290556005810182905560060155565b6000806101af6101c0565b600093845260205250506040902090565b6000806040516020016102049060208082526017908201527f78797a2e656c66692e73746f726167652e52656465656d000000000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052906102816101c0565b60009384526020908152604093849020845160e081018652815473ffffffffffffffffffffffffffffffffffffffff9081168252600183015481169382019390935260028201548316958101959095526003810154909116606085015260048101546080850152600581015460a08501526006015460c08401525090919050565b60006020828403121561031457600080fd5b503591905056fea2646970667358221220ade8c9519fd1af86974311e12872643c4b62c1c523fdf6e271581fcce0adc42664736f6c63430008120033";

type RedeemConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RedeemConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Redeem__factory extends ContractFactory {
  constructor(...args: RedeemConstructorParams) {
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
      Redeem & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Redeem__factory {
    return super.connect(runner) as Redeem__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RedeemInterface {
    return new Interface(_abi) as RedeemInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Redeem {
    return new Contract(address, _abi, runner) as unknown as Redeem;
  }
}

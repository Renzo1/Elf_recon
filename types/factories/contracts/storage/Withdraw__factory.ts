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
  Withdraw,
  WithdrawInterface,
} from "../../../contracts/storage/Withdraw";

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
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Withdraw.Request",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6102ae61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80634cc822151461005b578063780900dc1461007d57806386d5c4be146100a35780639507d39a146100ab575b600080fd5b81801561006757600080fd5b5061007b61007636600461025f565b6100fb565b005b61009061008b36600461025f565b61014b565b6040519081526020015b60405180910390f35b610090610167565b6100be6100b936600461025f565b6101e7565b60408051825173ffffffffffffffffffffffffffffffffffffffff908116825260208085015190911690820152918101519082015260600161009a565b6000610105610167565b6000928352602052506040812080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081168255600182018054909116905560020155565b600080610156610167565b600093845260205250506040902090565b6000806040516020016101ab9060208082526019908201527f78797a2e656c66692e73746f726167652e576974686472617700000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b604080516060810182526000808252602082018190529181018290529061020c610167565b600093845260209081526040938490208451606081018652815473ffffffffffffffffffffffffffffffffffffffff90811682526001830154169281019290925260020154938101939093525090919050565b60006020828403121561027157600080fd5b503591905056fea264697066735822122067e6eb9a78a9dd6a7b739a16354849617d9ae313f36db2d18713303c8f8d67b364736f6c63430008120033";

type WithdrawConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Withdraw__factory extends ContractFactory {
  constructor(...args: WithdrawConstructorParams) {
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
      Withdraw & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Withdraw__factory {
    return super.connect(runner) as Withdraw__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawInterface {
    return new Interface(_abi) as WithdrawInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Withdraw {
    return new Contract(address, _abi, runner) as unknown as Withdraw;
  }
}

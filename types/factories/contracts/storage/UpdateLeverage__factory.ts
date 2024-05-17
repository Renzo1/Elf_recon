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
  UpdateLeverage,
  UpdateLeverageInterface,
} from "../../../contracts/storage/UpdateLeverage";

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
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isExecutionFeeFromTradeVault",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isCrossMargin",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "marginToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "addMarginAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastBlock",
            type: "uint256",
          },
        ],
        internalType: "struct UpdateLeverage.Request",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61041861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80634cc822151461005b578063780900dc1461007d57806386d5c4be146100a35780639507d39a146100ab575b600080fd5b81801561006757600080fd5b5061007b61007636600461030a565b6100cb565b005b61009061008b36600461030a565b610161565b6040519081526020015b60405180910390f35b61009061017d565b6100be6100b936600461030a565b6101fd565b60405161009a9190610323565b60006100d561017d565b6000928352602052506040812080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081168255600182018390556002820180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000169055600382018390556004820180549091169055600581018290556006810182905560070155565b60008061016c61017d565b600093845260205250506040902090565b6000806040516020016101c1906020808252601f908201527f78797a2e656c66692e73746f726167652e5570646174654c6576657261676500604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290529061025661017d565b60009384526020908152604093849020845161014081018652815473ffffffffffffffffffffffffffffffffffffffff9081168252600183015493820193909352600282015460ff8082161515978301979097526101008082048816151560608401526201000090910490961615156080820152600382015460a0820152600482015490921660c0830152600581015460e08301526006810154948201949094526007909301546101208401525090919050565b60006020828403121561031c57600080fd5b5035919050565b815173ffffffffffffffffffffffffffffffffffffffff168152610140810160208301516020830152604083015161035f604084018215159052565b506060830151610373606084018215159052565b506080830151610387608084018215159052565b5060a083015160a083015260c08301516103b960c084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060e083015160e08301526101008084015181840152506101208084015181840152509291505056fea2646970667358221220ae3b57cc6df1fd5cad0fae91ecda64f0161b35982cb6349098662b60679d7e8e64736f6c63430008120033";

type UpdateLeverageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpdateLeverageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpdateLeverage__factory extends ContractFactory {
  constructor(...args: UpdateLeverageConstructorParams) {
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
      UpdateLeverage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UpdateLeverage__factory {
    return super.connect(runner) as UpdateLeverage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpdateLeverageInterface {
    return new Interface(_abi) as UpdateLeverageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UpdateLeverage {
    return new Contract(address, _abi, runner) as unknown as UpdateLeverage;
  }
}

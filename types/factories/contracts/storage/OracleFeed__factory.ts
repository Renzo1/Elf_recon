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
  OracleFeed,
  OracleFeedInterface,
} from "../../../contracts/storage/OracleFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getFeedUsdAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6104c561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80630d464dc61461005057806386d5c4be14610083578063aff84e591461008b575b600080fd5b81801561005c57600080fd5b5061007061006b36600461037b565b6100c3565b6040519081526020015b60405180910390f35b6100706101a7565b61009e6100993660046103df565b610227565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161007a565b60006100cd6101a7565b905060005b83518110156101a0578281815181106100ed576100ed610401565b602002602001015182600001600086848151811061010d5761010d610401565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808061019890610430565b9150506100d2565b5092915050565b6000806040516020016101eb906020808252601b908201527f78797a2e656c66692e73746f726167652e4f7261636c65466565640000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b6000806102326101a7565b73ffffffffffffffffffffffffffffffffffffffff9384166000908152602091909152604090205490921692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803573ffffffffffffffffffffffffffffffffffffffff811681146102b657600080fd5b919050565b600082601f8301126102cc57600080fd5b8135602067ffffffffffffffff808311156102e9576102e9610263565b8260051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f8301168101818110848211171561032c5761032c610263565b60405293845285810183019383810192508785111561034a57600080fd5b83870191505b848210156103705761036182610292565b83529183019190830190610350565b979650505050505050565b6000806040838503121561038e57600080fd5b823567ffffffffffffffff808211156103a657600080fd5b6103b2868387016102bb565b935060208501359150808211156103c857600080fd5b506103d5858286016102bb565b9150509250929050565b6000602082840312156103f157600080fd5b6103fa82610292565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610488577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220b80ae322e6ec45025678365700606737d2be16af6722ee81fd4c57495ca9242d64736f6c63430008120033";

type OracleFeedConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OracleFeedConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OracleFeed__factory extends ContractFactory {
  constructor(...args: OracleFeedConstructorParams) {
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
      OracleFeed & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OracleFeed__factory {
    return super.connect(runner) as OracleFeed__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OracleFeedInterface {
    return new Interface(_abi) as OracleFeedInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): OracleFeed {
    return new Contract(address, _abi, runner) as unknown as OracleFeed;
  }
}

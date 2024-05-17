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
  InsuranceFund,
  InsuranceFundInterface,
} from "../../../contracts/storage/InsuranceFund";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsUpdateEvent",
    type: "event",
  },
] as const;

const _bytecode =
  "0x61061561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100565760003560e01c80632f40e7341461005b578063831fb957146100815780639cde929614610094578063e945a6c1146100b6575b600080fd5b61006e6100693660046104af565b6100d6565b6040519081526020015b60405180910390f35b61006e61008f3660046104ca565b610177565b8180156100a057600080fd5b506100b46100af3660046104f6565b6101a2565b005b6100c96100c4366004610532565b6102be565b604051610078919061054b565b6000808260405160200161013a91906040808252601e908201527f78797a2e656c66692e73746f726167652e496e737572616e636546756e640000606082015273ffffffffffffffffffffffffffffffffffffffff91909116602082015260800190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209392505050565b6000808061018585856102c9565b9150915081610195576000610197565b805b925050505b92915050565b60006101ad846100d6565b90506000806101bc83866102c9565b91509150811561024b576101dc856101d486846105a5565b8591906102fd565b507ff19b578fc2b5cd359b489ade8c3e89c78f14417b5c22c020c2ef6918f818f9d286868361020b88826105a5565b6040805173ffffffffffffffffffffffffffffffffffffffff958616815294909316602085015291830152606082015260800160405180910390a16102b6565b6102568386866102fd565b506040805173ffffffffffffffffffffffffffffffffffffffff8881168252871660208201526000818301526060810186905290517ff19b578fc2b5cd359b489ade8c3e89c78f14417b5c22c020c2ef6918f818f9d29181900360800190a15b505050505050565b606061019c82610328565b60008080806102ee8673ffffffffffffffffffffffffffffffffffffffff871661033c565b909450925050505b9250929050565b60006103208473ffffffffffffffffffffffffffffffffffffffff851684610376565b949350505050565b6060600061033583610393565b9392505050565b600081815260028301602052604081205481908061036b5761035e858561039e565b9250600091506102f69050565b6001925090506102f6565b6000828152600284016020526040812082905561032084846103aa565b606061019c826103b6565b600061033583836103c3565b600061033583836103db565b606060006103358361042a565b60008181526001830160205260408120541515610335565b60008181526001830160205260408120546104225750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561019c565b50600061019c565b60608160000180548060200260200160405190810160405280929190818152602001828054801561047a57602002820191906000526020600020905b815481526020019060010190808311610466575b50505050509050919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146104aa57600080fd5b919050565b6000602082840312156104c157600080fd5b61033582610486565b600080604083850312156104dd57600080fd5b823591506104ed60208401610486565b90509250929050565b60008060006060848603121561050b57600080fd5b61051484610486565b925061052260208501610486565b9150604084013590509250925092565b60006020828403121561054457600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b8181101561059957835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610567565b50909695505050505050565b8082018082111561019c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220b08604aa4c5d66e635c993b333eb847106964086be5573151ba21019834bf83c64736f6c63430008120033";

type InsuranceFundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InsuranceFundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InsuranceFund__factory extends ContractFactory {
  constructor(...args: InsuranceFundConstructorParams) {
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
      InsuranceFund & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InsuranceFund__factory {
    return super.connect(runner) as InsuranceFund__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InsuranceFundInterface {
    return new Interface(_abi) as InsuranceFundInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InsuranceFund {
    return new Contract(address, _abi, runner) as unknown as InsuranceFund;
  }
}
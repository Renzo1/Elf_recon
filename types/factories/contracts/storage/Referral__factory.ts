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
  Referral,
  ReferralInterface,
} from "../../../contracts/storage/Referral";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "code",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "referralCode",
        type: "bytes32",
      },
    ],
    name: "ReferralUpdateEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "REFERRAL_CODE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "getCodeAccount",
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

const _bytecode =
  "0x610f3161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100875760003560e01c80636ecc79e4116100655780636ecc79e4146100da57806371800fa1146100fd578063dd4a40771461011f578063ea5f83451461013f57600080fd5b80632f40e7341461008c5780633583849a146100b2578063483c45a8146100ba575b600080fd5b61009f61009a366004610e44565b610177565b6040519081526020015b60405180910390f35b61009f610218565b8180156100c657600080fd5b5061009f6100d5366004610e44565b610272565b6100ed6100e8366004610e68565b610373565b60405190151581526020016100a9565b81801561010957600080fd5b5061011d610118366004610e81565b610588565b005b81801561012b57600080fd5b5061011d61013a366004610e81565b610816565b61015261014d366004610e68565b610bf3565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a9565b600080826040516020016101db919060408082526019908201527f78797a2e656c66692e73746f726167652e526566657272616c00000000000000606082015273ffffffffffffffffffffffffffffffffffffffff91909116602082015260800190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905280516020909101209392505050565b604051602001610259906020808252600d908201527f524546455252414c5f434f444500000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012081565b600080826040516020016102d6919060408082526019908201527f78797a2e656c66692e73746f726167652e526566657272616c00000000000000606082015273ffffffffffffffffffffffffffffffffffffffff91909116602082015260800190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120805490925082915073ffffffffffffffffffffffffffffffffffffffff1661036d5781547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff84161782555b50919050565b60008073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af41580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e39190610ea3565b905060006040516020016104289060208082526008908201527f524546455252414c000000000000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012060405160200161047f906020808252600d908201527f524546455252414c5f434f444500000000000000000000000000000000000000604082015260600190565b604051602081830303815290604052805190602001206040516020016104af929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f7cc7c2c9000000000000000000000000000000000000000000000000000000008252600482018490526024820181905260448201869052915073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90637cc7c2c990606401602060405180830381865af415801561055c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105809190610ebc565b949350505050565b600073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af41580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f79190610ea3565b9050600060405160200161063c9060208082526008908201527f524546455252414c000000000000000000000000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610693906020808252600d908201527f524546455252414c5f434f444500000000000000000000000000000000000000604082015260600190565b604051602081830303815290604052805190602001206040516020016106c3929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f7cc7c2c9000000000000000000000000000000000000000000000000000000008252600482018490526024820181905260448201859052915073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90637cc7c2c990606401602060405180830381865af4158015610770573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107949190610ebc565b1561079f5750505050565b60028401546108105760028401839055835460018501546040805173ffffffffffffffffffffffffffffffffffffffff9093168352602083019190915281018490527f320610461e7dedc735faa17b75726640ee0351a21ef5da029895e68448b213c4906060015b60405180910390a15b50505050565b600073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af4158015610861573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108859190610ea3565b905060006040516020016108ca9060208082526008908201527f524546455252414c000000000000000000000000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610921906020808252600d908201527f524546455252414c5f434f444500000000000000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610951929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181529082905280516020909101207f7cc7c2c9000000000000000000000000000000000000000000000000000000008252600482018490526024820181905260448201859052915073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90637cc7c2c990606401602060405180830381865af41580156109fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a229190610ebc565b15610a2d5750505050565b600184015461081057600184018390556040517f3dd33a5e00000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044810184905273__$1b86ea9efa04d6f44bb6dbbf79511d7094$__90633dd33a5e9060640160006040518083038186803b158015610aaf57600080fd5b505af4158015610ac3573d6000803e3d6000fd5b5050604080516020808201869052818301889052825180830384018152606083018085528151919092012089547f2aa337480000000000000000000000000000000000000000000000000000000090925260648301889052608483015273ffffffffffffffffffffffffffffffffffffffff1660a4820152905173__$1b86ea9efa04d6f44bb6dbbf79511d7094$__9350632aa33748925060c4808301926000929190829003018186803b158015610b7a57600080fd5b505af4158015610b8e573d6000803e3d6000fd5b50508554600187015460028801546040805173ffffffffffffffffffffffffffffffffffffffff90941684526020840192909252908201527f320610461e7dedc735faa17b75726640ee0351a21ef5da029895e68448b213c492506060019050610807565b60008073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af4158015610c3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c639190610ea3565b90506000604051602001610ca89060208082526008908201527f524546455252414c000000000000000000000000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610cff906020808252600d908201527f524546455252414c5f434f444500000000000000000000000000000000000000604082015260600190565b60405160208183030381529060405280519060200120604051602001610d2f929190918252602082015260400190565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00181528282528051602091820120818401819052838301889052825180850384018152606085019384905280519201919091207f56c8caa900000000000000000000000000000000000000000000000000000000909252606483018590526084830191909152915073__$1b86ea9efa04d6f44bb6dbbf79511d7094$__906356c8caa99060a401602060405180830381865af4158015610dfb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105809190610ede565b73ffffffffffffffffffffffffffffffffffffffff81168114610e4157600080fd5b50565b600060208284031215610e5657600080fd5b8135610e6181610e1f565b9392505050565b600060208284031215610e7a57600080fd5b5035919050565b60008060408385031215610e9457600080fd5b50508035926020909101359150565b600060208284031215610eb557600080fd5b5051919050565b600060208284031215610ece57600080fd5b81518015158114610e6157600080fd5b600060208284031215610ef057600080fd5b8151610e6181610e1f56fea26469706673582212201e05e201933f26d29646529ace59fac01bb7b8564df8ba449db43fbb39f97e1064736f6c63430008120033";

type ReferralConstructorParams =
  | [linkLibraryAddresses: ReferralLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReferralConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Referral__factory extends ContractFactory {
  constructor(...args: ReferralConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Referral__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: ReferralLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1b86ea9efa04d6f44bb6dbbf79511d7094\\$__", "g"),
      linkLibraryAddresses["contracts/storage/AppStorage.sol:AppStorage"]
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
      Referral & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Referral__factory {
    return super.connect(runner) as Referral__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReferralInterface {
    return new Interface(_abi) as ReferralInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Referral {
    return new Contract(address, _abi, runner) as unknown as Referral;
  }
}

export interface ReferralLibraryAddresses {
  ["contracts/storage/AppStorage.sol:AppStorage"]: string;
}

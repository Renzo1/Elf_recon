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
  CommonData,
  CommonDataInterface,
} from "../../../contracts/storage/CommonData";

const _abi = [
  {
    anonymous: false,
    inputs: [
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
    name: "CleanFundsUpdateEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
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
    name: "LossExecutionFeeUpdateEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "getAllStakeTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllSymbols",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakeUsdToken",
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
        internalType: "address",
        name: "stakeToken",
        type: "address",
      },
    ],
    name: "isStakeTokenSupport",
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
  "0x61112461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101975760003560e01c806386d5c4be116100ed578063c2cfac4911610096578063f141859a11610070578063f141859a14610434578063fbaf7c4814610461578063fdc68cfe1461048157600080fd5b8063c2cfac49146103d4578063d850772f146103f4578063f10eb1f01461041457600080fd5b8063b14e5410116100c7578063b14e541014610374578063b1cee68d14610394578063c0d1a065146103b457600080fd5b806386d5c4be1461032c578063893a29ff14610334578063896dc0e41461035457600080fd5b80633290bbd31161014f57806365b018751161012957806365b01875146102ba5780637aa6aea4146102f7578063845cf0d51461030c57600080fd5b80633290bbd31461023d578063376ff13a1461025d5780634f52e5b61461029757600080fd5b8063289e029b11610180578063289e029b146101de5780632dbc1650146101fe5780632dbf7f401461021c57600080fd5b80630f4409c91461019c5780631f10eda4146101be575b600080fd5b8180156101a857600080fd5b506101bc6101b7366004610f48565b6104bb565b005b8180156101ca57600080fd5b506101bc6101d9366004610f63565b61050c565b8180156101ea57600080fd5b506101bc6101f9366004610f63565b610584565b6102066105ab565b6040516102139190610f7c565b60405180910390f35b61022f61022a366004610fd6565b6105cb565b604051908152602001610213565b81801561024957600080fd5b506101bc610258366004611002565b6105fa565b61022f61026b366004610fd6565b73ffffffffffffffffffffffffffffffffffffffff166000908152600491909101602052604090205490565b6102aa6102a5366004610f48565b6106b8565b6040519015158152602001610213565b61022f6102c8366004610fd6565b73ffffffffffffffffffffffffffffffffffffffff166000908152600491909101602052604090206001015490565b6102ff6106d9565b604051610213919061102c565b81801561031857600080fd5b506101bc610327366004611064565b61073b565b61022f610838565b81801561034057600080fd5b506101bc61034f366004611064565b6108b8565b81801561036057600080fd5b506101bc61036f366004611064565b6109a6565b81801561038057600080fd5b506101bc61038f366004611064565b6109e0565b8180156103a057600080fd5b506101bc6103af366004610f63565b610a17565b8180156103c057600080fd5b506101bc6103cf366004610f48565b610a9a565b8180156103e057600080fd5b506101bc6103ef366004611064565b610ab8565b81801561040057600080fd5b506101bc61040f366004611064565b610aef565b81801561042057600080fd5b506101bc61042f366004611064565b610b26565b61043c610c14565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610213565b81801561046d57600080fd5b506101bc61047c366004611064565b610c3c565b61022f61048f366004610fd6565b73ffffffffffffffffffffffffffffffffffffffff166000908152600591909101602052604090205490565b60006104c5610838565b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff939093169290921790915550565b6000610516610838565b90508181600701600082825461052c91906110c8565b909155505060078101547f5425704060c90c62f0083d9ff73df530b982ea5c64c0dab3c7d5da4761a45119906105639084906110db565b60078301546040805192835260208301919091520160405180910390a15050565b600061058e610838565b600190810180549182018155600090815260209020019190915550565b606060006105b7610838565b90506105c581600201610d30565b91505090565b73ffffffffffffffffffffffffffffffffffffffff811660009081526006830160205260409020545b92915050565b6000610604610838565b90506000806106166008840186610d3d565b91509150811561063f576106398561062e86846110c8565b600886019190610d71565b5061064f565b61064d600884018686610d71565b505b7f9b4697523df9dad7380bc9824c0a740b381d50dece736d24a7f48ee23bc97fc3858261067c87826110c8565b6040805173ffffffffffffffffffffffffffffffffffffffff909416845260208401929092529082015260600160405180910390a15050505050565b6000806106c3610838565b90506106d26002820184610d9c565b9392505050565b606060006106e5610838565b6001810180546040805160208084028201810190925282815293945083018282801561073057602002820191906000526020600020905b81548152602001906001019080831161071c575b505050505091505090565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006840160205260409020548111156107f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f737562546f6b656e4c696162696c697479206c657373207468616e206c69616260448201527f696c69747900000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821660009081526006840160205260408120805483929061082e9084906110db565b9091555050505050565b60008060405160200161087c906020808252601b908201527f78797a2e656c66692e73746f726167652e436f6d6d6f6e446174610000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260048401602052604090205481111561096f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f7375625472616465546f6b656e436f6c6c61746572616c206c6573732074686160448201527f6e20616d6f756e7400000000000000000000000000000000000000000000000060648201526084016107ee565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004840160205260408120805483929061082e9084906110db565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004840160205260408120600101805483929061082e9084906110c8565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004840160205260408120805483929061082e9084906110c8565b6000610a21610838565b6007810154909150828111610a3c5760006007830155610a56565b82826007016000828254610a5091906110db565b90915550505b60078201546040805183815260208101929092527f5425704060c90c62f0083d9ff73df530b982ea5c64c0dab3c7d5da4761a45119910160405180910390a1505050565b6000610aa4610838565b9050610ab36002820183610dcb565b505050565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005840160205260408120805483929061082e9084906110c8565b73ffffffffffffffffffffffffffffffffffffffff821660009081526006840160205260408120805483929061082e9084906110c8565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600584016020526040902054811115610bdd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f7375625374616b65436f6c6c61746572616c416d6f756e74206c65737320746860448201527f616e20616d6f756e74000000000000000000000000000000000000000000000060648201526084016107ee565b73ffffffffffffffffffffffffffffffffffffffff821660009081526005840160205260408120805483929061082e9084906110db565b600080610c1f610838565b5473ffffffffffffffffffffffffffffffffffffffff1692915050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600484016020526040902060010154811115610cf6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f7375625472616465546f6b656e4c696162696c697479206c657373207468616e60448201527f20616d6f756e740000000000000000000000000000000000000000000000000060648201526084016107ee565b73ffffffffffffffffffffffffffffffffffffffff821660009081526004840160205260408120600101805483929061082e9084906110db565b606060006106d283610ded565b6000808080610d628673ffffffffffffffffffffffffffffffffffffffff8716610e49565b909450925050505b9250929050565b6000610d948473ffffffffffffffffffffffffffffffffffffffff851684610e83565b949350505050565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260018301602052604081205415156106d2565b60006106d28373ffffffffffffffffffffffffffffffffffffffff8416610ea0565b606081600001805480602002602001604051908101604052809291908181526020018280548015610e3d57602002820191906000526020600020905b815481526020019060010190808311610e29575b50505050509050919050565b6000818152600283016020526040812054819080610e7857610e6b8585610eef565b925060009150610d6a9050565b600192509050610d6a565b60008281526002840160205260408120829055610d948484610efb565b6000818152600183016020526040812054610ee7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105f4565b5060006105f4565b60006106d28383610f07565b60006106d28383610ea0565b600081815260018301602052604081205415156106d2565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f4357600080fd5b919050565b600060208284031215610f5a57600080fd5b6106d282610f1f565b600060208284031215610f7557600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015610fca57835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610f98565b50909695505050505050565b60008060408385031215610fe957600080fd5b82359150610ff960208401610f1f565b90509250929050565b6000806040838503121561101557600080fd5b61101e83610f1f565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b81811015610fca57835183529284019291840191600101611048565b60008060006060848603121561107957600080fd5b8335925061108960208501610f1f565b9150604084013590509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156105f4576105f4611099565b818103818111156105f4576105f461109956fea26469706673582212206d7744da802eb8fab3d952da5ca5af85db733d1c66a0585a4011f9b905e0f4ba64736f6c63430008120033";

type CommonDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CommonDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CommonData__factory extends ContractFactory {
  constructor(...args: CommonDataConstructorParams) {
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
      CommonData & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CommonData__factory {
    return super.connect(runner) as CommonData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CommonDataInterface {
    return new Interface(_abi) as CommonDataInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CommonData {
    return new Contract(address, _abi, runner) as unknown as CommonData;
  }
}

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
  CancelOrderProcess,
  CancelOrderProcessInterface,
} from "../../../contracts/process/CancelOrderProcess";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
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
            internalType: "enum Order.Side",
            name: "orderSide",
            type: "uint8",
          },
          {
            internalType: "enum Order.PositionSide",
            name: "posSide",
            type: "uint8",
          },
          {
            internalType: "enum Order.Type",
            name: "orderType",
            type: "uint8",
          },
          {
            internalType: "enum Order.StopType",
            name: "stopType",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isCrossMargin",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isExecutionFeeFromTradeVault",
            type: "bool",
          },
          {
            internalType: "address",
            name: "marginToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "qty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "orderMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "triggerPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "acceptablePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "placeTime",
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
        indexed: false,
        internalType: "struct Order.OrderInfo",
        name: "data",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "reasonCode",
        type: "bytes32",
      },
    ],
    name: "CancelOrderEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "CANCEL_ORDER_AUTO_REDUCE",
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
    inputs: [],
    name: "CANCEL_ORDER_LIQUIDATION",
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
    inputs: [],
    name: "CANCEL_ORDER_POSITION_CLOSE",
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
] as const;

const _bytecode =
  "0x61129561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100715760003560e01c80638276b7581161005a5780638276b758146100b2578063d7ffe5cf146100ba578063e0ee6876146100da57600080fd5b80633aba8004146100765780636bc6086514610090575b600080fd5b61007e6100e2565b60405190815260200160405180910390f35b81801561009c57600080fd5b506100b06100ab366004610c8e565b61013e565b005b61007e6107ac565b8180156100c657600080fd5b506100b06100d5366004610db9565b6107ed565b61007e610bff565b6040516020016101239060208082526017908201527f43414e43454c5f574954485f4c49515549444154494f4e000000000000000000604082015260600190565b60405160208183030381529060405261013b90610f18565b81565b6040517f2f40e73400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716600482015260009073__$a224e41da3178beb3af7fdcdf4ade93682$__90632f40e73490602401602060405180830381865af41580156101bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e39190610f5d565b6040517f5add17a60000000000000000000000000000000000000000000000000000000081526004810182905290915060009073__$a224e41da3178beb3af7fdcdf4ade93682$__90635add17a690602401600060405180830381865af4158015610252573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102989190810190610f76565b905080516000036102aa5750506107a4565b600073__$dae973d11eac6f0d86f9fbea95214348fe$__6386d5c4be6040518163ffffffff1660e01b8152600401602060405180830381865af41580156102f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103199190610f5d565b905060005b825181101561079f578483828151811061033a5761033a61101c565b6020026020010151031561078d5760008273__$dae973d11eac6f0d86f9fbea95214348fe$__63c000c8ee90918685815181106103795761037961101c565b60200260200101516040518363ffffffff1660e01b81526004016103a7929190918252602082015260400190565b602060405180830381865af41580156103c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e89190610f5d565b6040805161022081018252825473ffffffffffffffffffffffffffffffffffffffff1681526001830154602082015260028084015491939284019160ff16908111156104365761043661104b565b60028111156104475761044761104b565b81526020016002820160019054906101000a900460ff16600281111561046f5761046f61104b565b60028111156104805761048061104b565b81526020016002820160029054906101000a900460ff1660038111156104a8576104a861104b565b60038111156104b9576104b961104b565b81526020016002820160039054906101000a900460ff1660028111156104e1576104e161104b565b60028111156104f2576104f261104b565b81526002820154640100000000810460ff908116151560208085019190915265010000000000830490911615156040840152660100000000000090910473ffffffffffffffffffffffffffffffffffffffff16606083015260038301546080830152600483015460a0830152600583015460c0830152600683015460e0830152600783015461010083015260088301546101208301526009830154610140830152600a90920154610160909101528101519091508a1480156105e457508873ffffffffffffffffffffffffffffffffffffffff1681610100015173ffffffffffffffffffffffffffffffffffffffff16145b80156106055750806080015160038111156106015761060161104b565b6003145b801561061857508715158160c001511515145b1561078b578473__$a224e41da3178beb3af7fdcdf4ade93682$__63382507f5909186858151811061064c5761064c61101c565b60200260200101516040518363ffffffff1660e01b815260040161067a929190918252602082015260400190565b60006040518083038186803b15801561069257600080fd5b505af41580156106a6573d6000803e3d6000fd5b505050508273__$dae973d11eac6f0d86f9fbea95214348fe$__6358b7169a90918685815181106106d9576106d961101c565b60200260200101516040518363ffffffff1660e01b8152600401610707929190918252602082015260400190565b60006040518083038186803b15801561071f57600080fd5b505af4158015610733573d6000803e3d6000fd5b505050508382815181106107495761074961101c565b60200260200101517fa2bce5ff82d63e38ec31c6270a397e7cae4d5ed319bd73e318d4916d4ff68668828960405161078292919061109e565b60405180910390a25b505b80610797816111bf565b91505061031e565b505050505b505050505050565b604051602001610123906020808252601a908201527f43414e43454c5f574954485f504f534954494f4e5f434c4f5345000000000000604082015260600190565b81516040517f2f40e73400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116600482015260009073__$a224e41da3178beb3af7fdcdf4ade93682$__90632f40e73490602401602060405180830381865af4158015610871573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108959190610f5d565b6040517f382507f5000000000000000000000000000000000000000000000000000000008152600481018290526024810186905290915073__$a224e41da3178beb3af7fdcdf4ade93682$__9063382507f59060440160006040518083038186803b15801561090357600080fd5b505af4158015610917573d6000803e3d6000fd5b50506040517f4cc822150000000000000000000000000000000000000000000000000000000081526004810187905273__$dae973d11eac6f0d86f9fbea95214348fe$__9250634cc82215915060240160006040518083038186803b15801561097f57600080fd5b505af4158015610993573d6000803e3d6000fd5b50505050826060015160028111156109ad576109ad61104b565b60011480156109bd57508260c001515b15610a56576101608301516040517f5f4096e300000000000000000000000000000000000000000000000000000000815273__$a224e41da3178beb3af7fdcdf4ade93682$__91635f4096e391610a21918591600401918252602082015260400190565b60006040518083038186803b158015610a3957600080fd5b505af4158015610a4d573d6000803e3d6000fd5b50505050610bbf565b82606001516002811115610a6c57610a6c61104b565b6001148015610a7d57508260c00151155b15610bbf5773__$8526888d218a843cc53a77a3ceb13f6b1f$__6385e2b8803073ffffffffffffffffffffffffffffffffffffffff166397e7b7f26040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ae7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0b919061121e565b610100860151865161016088015160405160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff94851660048201529284166024840152921660448201526064810191909152608401602060405180830381865af4158015610b99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bbd9190611242565b505b837fa2bce5ff82d63e38ec31c6270a397e7cae4d5ed319bd73e318d4916d4ff686688484604051610bf192919061109e565b60405180910390a250505050565b6040516020016101239060208082526017908201527f43414e43454c5f574954485f4155544f5f524544554345000000000000000000604082015260600190565b73ffffffffffffffffffffffffffffffffffffffff81168114610c6257600080fd5b50565b8035610c7081610c40565b919050565b8015158114610c6257600080fd5b8035610c7081610c75565b60008060008060008060c08789031215610ca757600080fd5b8635610cb281610c40565b9550602087013594506040870135610cc981610c40565b93506060870135610cd981610c75565b9598949750929560808101359460a0909101359350915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610220810167ffffffffffffffff81118282101715610d4657610d46610cf3565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610d9357610d93610cf3565b604052919050565b803560038110610c7057600080fd5b803560048110610c7057600080fd5b6000806000838503610260811215610dd057600080fd5b84359350610220807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe083011215610e0657600080fd5b610e0e610d22565b9150610e1c60208701610c65565b825260408601356020830152610e3460608701610d9b565b6040830152610e4560808701610d9b565b6060830152610e5660a08701610daa565b6080830152610e6760c08701610d9b565b60a0830152610e7860e08701610c83565b60c0830152610100610e8b818801610c83565b60e0840152610120610e9e818901610c65565b828501526101409150818801358185015250610160808801358285015261018091508188013581850152506101a080880135828501526101c091508188013581850152506101e080880135828501526102009150818801358185015250818701358184015250508092505061024084013590509250925092565b80516020808301519190811015610f57577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8160200360031b1b821691505b50919050565b600060208284031215610f6f57600080fd5b5051919050565b60006020808385031215610f8957600080fd5b825167ffffffffffffffff80821115610fa157600080fd5b818501915085601f830112610fb557600080fd5b815181811115610fc757610fc7610cf3565b8060051b9150610fd8848301610d4c565b8181529183018401918481019088841115610ff257600080fd5b938501935b8385101561101057845182529385019390850190610ff7565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b6003811061108a5761108a61104b565b9052565b6004811061108a5761108a61104b565b825173ffffffffffffffffffffffffffffffffffffffff16815261024081016020840151602083015260408401516110d9604084018261107a565b5060608401516110ec606084018261107a565b5060808401516110ff608084018261108e565b5060a084015161111260a084018261107a565b5060c084015161112660c084018215159052565b5060e084015161113a60e084018215159052565b506101008481015173ffffffffffffffffffffffffffffffffffffffff169083015261012080850151908301526101408085015190830152610160808501519083015261018080850151908301526101a080850151908301526101c080850151908301526101e080850151908301526102009384015193820193909352610220015290565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611217577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60006020828403121561123057600080fd5b815161123b81610c40565b9392505050565b60006020828403121561125457600080fd5b815161123b81610c7556fea26469706673582212209a32d8b78c25d1afcbe1867ef7529097da1dd55feed821a4f4ce51220fa160b864736f6c63430008120033";

type CancelOrderProcessConstructorParams =
  | [linkLibraryAddresses: CancelOrderProcessLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CancelOrderProcessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class CancelOrderProcess__factory extends ContractFactory {
  constructor(...args: CancelOrderProcessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        CancelOrderProcess__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: CancelOrderProcessLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a224e41da3178beb3af7fdcdf4ade93682\\$__", "g"),
      linkLibraryAddresses["contracts/storage/Account.sol:Account"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$dae973d11eac6f0d86f9fbea95214348fe\\$__", "g"),
      linkLibraryAddresses["contracts/storage/Order.sol:Order"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$8526888d218a843cc53a77a3ceb13f6b1f\\$__", "g"),
      linkLibraryAddresses["contracts/process/VaultProcess.sol:VaultProcess"]
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
      CancelOrderProcess & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CancelOrderProcess__factory {
    return super.connect(runner) as CancelOrderProcess__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CancelOrderProcessInterface {
    return new Interface(_abi) as CancelOrderProcessInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): CancelOrderProcess {
    return new Contract(address, _abi, runner) as unknown as CancelOrderProcess;
  }
}

export interface CancelOrderProcessLibraryAddresses {
  ["contracts/storage/Account.sol:Account"]: string;
  ["contracts/storage/Order.sol:Order"]: string;
  ["contracts/process/VaultProcess.sol:VaultProcess"]: string;
}
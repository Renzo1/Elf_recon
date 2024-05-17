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
  UsdPool,
  UsdPoolInterface,
} from "../../../contracts/storage/UsdPool";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "totalBorrowingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalRealizedBorrowingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeBorrowingFeePerToken",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct UsdPool.BorrowingFee",
        name: "borrowingFee",
        type: "tuple",
      },
    ],
    name: "UsdPoolBorrowingFeeUpdateEvent",
    type: "event",
  },
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
        name: "preHoldAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "preUnsettledAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "holdAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "unsettledAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updateBlock",
        type: "uint256",
      },
    ],
    name: "UsdPoolTokenUpdateEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "getPoolLiquidityLimit",
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
    inputs: [],
    name: "getSupportedStableTokens",
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
    inputs: [
      {
        internalType: "address",
        name: "stableToken",
        type: "address",
      },
    ],
    name: "isSupportStableToken",
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
  "0x61213061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061018c5760003560e01c8063a000e361116100e2578063d421c80a11610096578063e4dd368411610070578063e4dd3684146103f2578063ff0bc0ed14610405578063ffabfaeb1461041857600080fd5b8063d421c80a1461039f578063d548ca9e146103b2578063deaa0a37146103d257600080fd5b8063b25c48c9116100c7578063b25c48c91461033f578063b78c7e8e1461035f578063c9dbcb321461037f57600080fd5b8063a000e361146102fc578063b0900a3d1461031c57600080fd5b806358b30cbb116101445780637606f66c1161011e5780637606f66c146102a657806386d5c4be146102df57806395404295146102e757600080fd5b806358b30cbb1461022e5780636552dedf1461026657806367fd0ad81461028657600080fd5b806336dd0ce31161017557806336dd0ce3146101ce578063399b21a0146101ee5780634a637e801461020e57600080fd5b80630b4fff73146101915780632658e84d146101ac575b600080fd5b610199610438565b6040519081526020015b60405180910390f35b8180156101b857600080fd5b506101cc6101c7366004611a80565b610448565b005b6101e16101dc366004611ab8565b610593565b6040516101a39190611ae8565b6102016101fc366004611b09565b61060e565b6040516101a39190611b22565b81801561021a57600080fd5b506101cc610229366004611a80565b610758565b61024161023c366004611b09565b610806565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101a3565b81801561027257600080fd5b506101cc610281366004611a80565b610a13565b81801561029257600080fd5b506101cc6102a1366004611a80565b610af1565b6101996102b4366004611ab8565b73ffffffffffffffffffffffffffffffffffffffff1660009081526003919091016020526040902090565b610199610c34565b6102ef610cb4565b6040516101a39190611b84565b81801561030857600080fd5b506101cc610317366004611a80565b610cd1565b61032f61032a366004611a80565b610e49565b60405190151581526020016101a3565b81801561034b57600080fd5b506101cc61035a366004611bd2565b610f52565b81801561036b57600080fd5b506101cc61037a366004611ab8565b611091565b81801561038b57600080fd5b506101cc61039a366004611cec565b6110a0565b6102ef6103ad366004611b09565b6110ee565b8180156103be57600080fd5b506101cc6103cd366004611ab8565b6110f9565b6103e56103e0366004611b09565b61117f565b6040516101a39190611d97565b61032f610400366004611dcf565b611234565b610199610413366004611ab8565b61124b565b61042b610426366004611b09565b61136c565b6040516101a39190611dec565b60006104426114bf565b51919050565b610453838383610e49565b6104e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f737562206661696c656420776974682062616c616e6365206e6f7420656e6f7560448201527f676800000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166000908152600284016020526040812061051690849061158c565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600286016020526040812080549293508492909190610552908490611e7f565b909155505073ffffffffffffffffffffffffffffffffffffffff83166000908152600285016020526040902054608082015261058d816116d1565b50505050565b6105b760405180606001604052806000815260200160008152602001600081525090565b5073ffffffffffffffffffffffffffffffffffffffff811660009081526002808401602090815260409283902083516060810185528154815260018201549281019290925290910154918101919091525b92915050565b6060600061061b8361176c565b90506000815167ffffffffffffffff81111561063957610639611c21565b60405190808252806020026020018201604052801561068e57816020015b61067b60405180606001604052806000815260200160008152602001600081525090565b8152602001906001900390816106575790505b50905060005b8251811015610750578460020160008483815181106106b5576106b5611e92565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806060016040529081600082015481526020016001820154815260200160028201548152505082828151811061073257610732611e92565b6020026020010181905250808061074890611ec1565b915050610694565b509392505050565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600284016020526040812061078a90849061158c565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260028087016020526040822001805492935084929091906107c8908490611ef9565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260028086016020526040909120015460c082015261058d816116d1565b6000806108128361176c565b90506000805b8251811015610a0b57600073__$60cdec19f17936bbc33543273078a7e6b8$__63d6052ce387600201600087868151811061085557610855611e92565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000015473__$e3834fe8ea0b4818c33a802f8dd8530fd8$__63d449a8328887815181106108c7576108c7611e92565b60200260200101516040518263ffffffff1660e01b8152600401610907919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b602060405180830381865af4158015610924573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109489190611f0c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925260ff16602482015260126044820152606401602060405180830381865af41580156109ab573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109cf9190611f2f565b90508281106109f8578092508382815181106109ed576109ed611e92565b602002602001015194505b5080610a0381611ec1565b915050610818565b505050919050565b610a1d8383611779565b610a83576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f737461626c6520746f6b656e206e6f7420737570706f7274656421000000000060448201526064016104db565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002840160205260408120610ab590849061158c565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600286016020526040812080549293508492909190610552908490611ef9565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600284016020526040902060010154811115610b85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f73756220686f6c6420626967676572207468616e20686f6c640000000000000060448201526064016104db565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002840160205260408120610bb790849061158c565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600286016020526040812060010180549293508492909190610bf6908490611e7f565b909155505073ffffffffffffffffffffffffffffffffffffffff8316600090815260028501602052604090206001015460a082015261058d816116d1565b600080604051602001610c789060208082526018908201527f78797a2e656c66692e73746f726167652e557364506f6f6c0000000000000000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b60606000610cc0610c34565b9050610ccb8161176c565b91505090565b610d4c8360020160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060600160405290816000820154815260200160018201548152602001600282015481525050610d46610438565b836117a8565b610dd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f686f6c64206661696c656420776974682062616c616e6365206e6f7420656e6f60448201527f756768000000000000000000000000000000000000000000000000000000000060648201526084016104db565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002840160205260408120610e0a90849061158c565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600286016020526040812060010180549293508492909190610bf6908490611ef9565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260028401602052604081208054831115610e83576000915050610f4b565b6000610e8d610438565b905080600003610eb457600182015482548591610ea991611e7f565b101592505050610f4b565b816001015473__$60cdec19f17936bbc33543273078a7e6b8$__63ee7fc5a3868560000154610ee39190611e7f565b846040518363ffffffff1660e01b8152600401610f0a929190918252602082015260400190565b602060405180830381865af4158015610f27573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea99190611f2f565b9392505050565b610f5c8484611779565b610f6c57610f6a8484611879565b505b73ffffffffffffffffffffffffffffffffffffffff831660009081526002808601602052604090912090810154831115611028576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f7855736420736574746c6520737461626c6520746f6b656e206f766572666c6f60448201527f772100000000000000000000000000000000000000000000000000000000000060648201526084016104db565b6000611034858361158c565b90508382600201600082825461104a9190611e7f565b9091555050600282015460c0820152821561108057838260000160008282546110739190611ef9565b9091555050815460808201525b611089816116d1565b505050505050565b61109b828261189b565b505050565b60005b815181101561109b576110db8282815181106110c1576110c1611e92565b60200260200101518460000161187990919063ffffffff16565b50806110e681611ec1565b9150506110a3565b60606106088261176c565b73ffffffffffffffffffffffffffffffffffffffff811660009081526003830160205260409081902090517f1ce920cb88be503ae9377cd07aae1e28e7ca6c64e897ad6ff9b74c2d329d7d839161117391815481526001820154602082015260028201546040820152600390910154606082015260800190565b60405180910390a15050565b6060600061118c8361176c565b90506000815167ffffffffffffffff8111156111aa576111aa611c21565b6040519080825280602002602001820160405280156111d3578160200160208202803683370190505b50905060005b825181101561075057611205858483815181106111f8576111f8611e92565b602002602001015161124b565b82828151811061121757611217611e92565b60209081029190910101528061122c81611ec1565b9150506111d9565b60008061123f610c34565b9050610f4b8184611779565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260028301602052604081208161127b610438565b90508060000361129f57600182015482546112969190611e7f565b92505050610608565b60018201546040517fc30b259b00000000000000000000000000000000000000000000000000000000815260009173__$60cdec19f17936bbc33543273078a7e6b8$__9163c30b259b91611300918690600401918252602082015260400190565b602060405180830381865af415801561131d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113419190611f2f565b905080836000015411611355576000611362565b8254611362908290611e7f565b9350505050610608565b606060006113798361176c565b90506000815167ffffffffffffffff81111561139757611397611c21565b6040519080825280602002602001820160405280156113f357816020015b6113e06040518060800160405280600081526020016000815260200160008152602001600081525090565b8152602001906001900390816113b55790505b50905060005b82518110156107505784600301600084838151811061141a5761141a611e92565b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820154815250508282815181106114a1576114a1611e92565b602002602001018190525080806114b790611ec1565b9150506113f9565b6114f86040518060c001604052806000815260200160008152602001600081526020016000815260200160608152602001606081525090565b73__$601b397ac9b288e68d027c499a437c7805$__634f42ce056040518163ffffffff1660e01b8152600401600060405180830381865af4158015611541573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526115879190810190612012565b905090565b6115ea604051806101000160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b73ffffffffffffffffffffffffffffffffffffffff831681528154602080830182905260018401546040808501829052600286015460608601819052608086019490945260a085019190915260c084019290925281517fe12ed13c000000000000000000000000000000000000000000000000000000008152915173__$f7ce058f5081a8aa62d2c976fd52cf5c62$__9263e12ed13c9260048083019391928290030181865af41580156116a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116c69190611f2f565b60e082015292915050565b805160208083015160408085015160608087015160808089015160a0808b015160c0808d015160e0808f01518b5173ffffffffffffffffffffffffffffffffffffffff909f168f529c8e019b909b52988c0197909752948a0193909352908801528601528401528201527f217ba1d63771ad2228865ab2d862a89115d536eabbe8315c584eafe090d7f422906101000160405180910390a150565b60606000610f4b836118bd565b73ffffffffffffffffffffffffffffffffffffffff811660009081526001830160205260408120541515610f4b565b6000826000036117dd576020840151604085015185518492916117ca91611ef9565b6117d49190611e7f565b10159050610f4b565b81846020015173__$60cdec19f17936bbc33543273078a7e6b8$__63ee7fc5a3876040015188600001516118119190611ef9565b876040518363ffffffff1660e01b8152600401611838929190918252602082015260400190565b602060405180830381865af4158015611855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ca9190611f2f565b6000610f4b8373ffffffffffffffffffffffffffffffffffffffff8416611919565b6000610f4b8373ffffffffffffffffffffffffffffffffffffffff8416611968565b60608160000180548060200260200160405190810160405280929190818152602001828054801561190d57602002820191906000526020600020905b8154815260200190600101908083116118f9575b50505050509050919050565b600081815260018301602052604081205461196057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610608565b506000610608565b60008181526001830160205260408120548015611a5157600061198c600183611e7f565b85549091506000906119a090600190611e7f565b9050818114611a055760008660000182815481106119c0576119c0611e92565b90600052602060002001549050808760000184815481106119e3576119e3611e92565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611a1657611a166120cb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610608565b6000915050610608565b73ffffffffffffffffffffffffffffffffffffffff81168114611a7d57600080fd5b50565b600080600060608486031215611a9557600080fd5b833592506020840135611aa781611a5b565b929592945050506040919091013590565b60008060408385031215611acb57600080fd5b823591506020830135611add81611a5b565b809150509250929050565b81518152602080830151908201526040808301519082015260608101610608565b600060208284031215611b1b57600080fd5b5035919050565b6020808252825182820181905260009190848201906040850190845b81811015611b7857611b658385518051825260208082015190830152604090810151910152565b9284019260609290920191600101611b3e565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611b7857835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611ba0565b60008060008060808587031215611be857600080fd5b843593506020850135611bfa81611a5b565b92506040850135915060608501358015158114611c1657600080fd5b939692955090935050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611c7357611c73611c21565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611cc057611cc0611c21565b604052919050565b600067ffffffffffffffff821115611ce257611ce2611c21565b5060051b60200190565b60008060408385031215611cff57600080fd5b8235915060208084013567ffffffffffffffff811115611d1e57600080fd5b8401601f81018613611d2f57600080fd5b8035611d42611d3d82611cc8565b611c79565b81815260059190911b82018301908381019088831115611d6157600080fd5b928401925b82841015611d88578335611d7981611a5b565b82529284019290840190611d66565b80955050505050509250929050565b6020808252825182820181905260009190848201906040850190845b81811015611b7857835183529284019291840191600101611db3565b600060208284031215611de157600080fd5b8135610f4b81611a5b565b602080825282518282018190526000919060409081850190868401855b82811015611e4357815180518552868101518786015285810151868601526060908101519085015260809093019290850190600101611e09565b5091979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561060857610608611e50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ef257611ef2611e50565b5060010190565b8082018082111561060857610608611e50565b600060208284031215611f1e57600080fd5b815160ff81168114610f4b57600080fd5b600060208284031215611f4157600080fd5b5051919050565b600082601f830112611f5957600080fd5b81516020611f69611d3d83611cc8565b82815260059290921b84018101918181019086841115611f8857600080fd5b8286015b84811015611fac578051611f9f81611a5b565b8352918301918301611f8c565b509695505050505050565b600082601f830112611fc857600080fd5b81516020611fd8611d3d83611cc8565b82815260059290921b84018101918181019086841115611ff757600080fd5b8286015b84811015611fac5780518352918301918301611ffb565b60006020828403121561202457600080fd5b815167ffffffffffffffff8082111561203c57600080fd5b9083019060c0828603121561205057600080fd5b612058611c50565b8251815260208301516020820152604083015160408201526060830151606082015260808301518281111561208c57600080fd5b61209887828601611f48565b60808301525060a0830151828111156120b057600080fd5b6120bc87828601611fb7565b60a08301525095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220fb2d70974f971832884e01ef933122076718225cb5f8f7d0a07f8806a050b82964736f6c63430008120033";

type UsdPoolConstructorParams =
  | [linkLibraryAddresses: UsdPoolLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UsdPoolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class UsdPool__factory extends ContractFactory {
  constructor(...args: UsdPoolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, UsdPool__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: UsdPoolLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$60cdec19f17936bbc33543273078a7e6b8\\$__", "g"),
      linkLibraryAddresses["contracts/utils/CalUtils.sol:CalUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$e3834fe8ea0b4818c33a802f8dd8530fd8\\$__", "g"),
      linkLibraryAddresses["contracts/utils/TokenUtils.sol:TokenUtils"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$601b397ac9b288e68d027c499a437c7805\\$__", "g"),
      linkLibraryAddresses["contracts/storage/AppPoolConfig.sol:AppPoolConfig"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$f7ce058f5081a8aa62d2c976fd52cf5c62\\$__", "g"),
      linkLibraryAddresses["contracts/utils/ChainUtils.sol:ChainUtils"]
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
      UsdPool & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): UsdPool__factory {
    return super.connect(runner) as UsdPool__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UsdPoolInterface {
    return new Interface(_abi) as UsdPoolInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): UsdPool {
    return new Contract(address, _abi, runner) as unknown as UsdPool;
  }
}

export interface UsdPoolLibraryAddresses {
  ["contracts/utils/CalUtils.sol:CalUtils"]: string;
  ["contracts/utils/TokenUtils.sol:TokenUtils"]: string;
  ["contracts/storage/AppPoolConfig.sol:AppPoolConfig"]: string;
  ["contracts/utils/ChainUtils.sol:ChainUtils"]: string;
}
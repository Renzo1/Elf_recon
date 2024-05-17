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
  SwapFacet,
  SwapFacetInterface,
} from "../../../contracts/facets/SwapFacet";

const _abi = [
  {
    inputs: [],
    name: "IgnoreSwapWithAccountLiabilityZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "InvalidRoleAccess",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "address[][]",
        name: "accountTokens",
        type: "address[][]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "targetToken",
            type: "address",
          },
          {
            internalType: "int256",
            name: "minPrice",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "maxPrice",
            type: "int256",
          },
        ],
        internalType: "struct OracleProcess.OracleParam[]",
        name: "oracles",
        type: "tuple[]",
      },
    ],
    name: "swapPortfolioToPayLiability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d87806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637bdb02cb14610030575b600080fd5b61004361003e3660046112c9565b610045565b005b61006e7f4b45455045520000000000000000000000000000000000000000000000000000610359565b6040517f7532d8bc00000000000000000000000000000000000000000000000000000000815273__$76a505dbd6210c6de5172a9e6577e0d579$__90637532d8bc906100c090859085906004016113b4565b60006040518083038186803b1580156100d857600080fd5b505af41580156100ec573d6000803e3d6000fd5b5050505060005b858110156102f457600073__$a224e41da3178beb3af7fdcdf4ade93682$__632f40e7348989858181106101295761012961143b565b905060200201602081019061013e919061146a565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602401602060405180830381865af41580156101a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101cb9190611487565b6040517ffa98a2b90000000000000000000000000000000000000000000000000000000081526004810182905290915073__$a224e41da3178beb3af7fdcdf4ade93682$__9063fa98a2b99060240160006040518083038186803b15801561023257600080fd5b505af4158015610246573d6000803e3d6000fd5b5050505060005b86868481811061025f5761025f61143b565b905060200281019061027191906114a0565b90508110156102df576102cc828888868181106102905761029061143b565b90506020028101906102a291906114a0565b848181106102b2576102b261143b565b90506020020160208101906102c7919061146a565b6103aa565b50806102d781611537565b91505061024d565b505080806102ec90611537565b9150506100f3565b5073__$76a505dbd6210c6de5172a9e6577e0d579$__63e52ed3656040518163ffffffff1660e01b815260040160006040518083038186803b15801561033957600080fd5b505af415801561034d573d6000803e3d6000fd5b50505050505050505050565b6103633382610cfe565b6103a7576040517fb5f43834000000000000000000000000000000000000000000000000000000008152336004820152602481018290526044015b60405180910390fd5b50565b6103f26040518060a001604052806060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6040517fa68524560000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff8316602482015260009073__$a224e41da3178beb3af7fdcdf4ade93682$__9063a685245690604401608060405180830381865af415801561047a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049e919061165e565b606001519050600081116104de576040517f7a83ea2e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f610fcfee0000000000000000000000000000000000000000000000000000000081526004810185905260009073__$a224e41da3178beb3af7fdcdf4ade93682$__9063610fcfee90602401600060405180830381865af415801561054a573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610590919081019061176c565b90506000815167ffffffffffffffff8111156105ae576105ae61156f565b6040519080825280602002602001820160405280156105d7578160200160208202803683370190505b5090506000825167ffffffffffffffff8111156105f6576105f661156f565b60405190808252806020026020018201604052801561061f578160200160208202803683370190505b50905060005b8351811015610c1d578773__$a224e41da3178beb3af7fdcdf4ade93682$__63c2834887909186848151811061065d5761065d61143b565b60200260200101516040518363ffffffff1660e01b81526004016106a192919091825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b602060405180830381865af41580156106be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e29190611487565b8382815181106106f4576106f461143b565b6020026020010181815250508281815181106107125761071261143b565b602002602001015160000315610c0b57600073__$60cdec19f17936bbc33543273078a7e6b8$__63f8739d7c8584815181106107505761075061143b565b602002602001015173__$e3834fe8ea0b4818c33a802f8dd8530fd8$__63d449a8328987815181106107845761078461143b565b60200260200101516040518263ffffffff1660e01b81526004016107c4919073ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b602060405180830381865af41580156107e1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061080591906117a1565b6040517fd449a83200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8d16600482015273__$e3834fe8ea0b4818c33a802f8dd8530fd8$__9063d449a83290602401602060405180830381865af4158015610883573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a791906117a1565b73__$76a505dbd6210c6de5172a9e6577e0d579$__631a0994f58b89815181106108d3576108d361143b565b60209081029190910101516040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff909116600482015260016024820152604401602060405180830381865af415801561094e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109729190611487565b6040517f1a0994f500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8f1660048201526000602482015273__$76a505dbd6210c6de5172a9e6577e0d579$__90631a0994f590604401602060405180830381865af41580156109f7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1b9190611487565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b168152600481019590955260ff93841660248601529290911660448401526064830152608482015260a401602060405180830381865af4158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab09190611487565b905073__$60cdec19f17936bbc33543273078a7e6b8$__63ee7fc5a38273__$4b57634e6fa94ef3e6c6a2ca1726543a5d$__63b45849886040518163ffffffff1660e01b8152600401600060405180830381865af4158015610b16573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610b5c91908101906118a0565b6101e001516040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401602060405180830381865af4158015610bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bde9190611487565b610be890826119c8565b905080838381518110610bfd57610bfd61143b565b602002602001018181525050505b80610c1581611537565b915050610625565b5060003073ffffffffffffffffffffffffffffffffffffffff16631f7592ea6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8f91906119db565b88546040805160e08101825273ffffffffffffffffffffffffffffffffffffffff808516808352602083018a9052928201889052606082018790528b8116608083015260a082019290925260c08101899052929350610cf092911690610d43565b955050505050505b92915050565b600080610d0961112c565b73ffffffffffffffffffffffffffffffffffffffff85166000908152602082905260409020909150610d3b90846111ac565b949350505050565b610d8b6040518060a001604052806060815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600081525090565b6040517f22f76fdf00000000000000000000000000000000000000000000000000000000815260009073__$522a07b37c9fdfcd773e053b03790b8118$__906322f76fdf90610dde908690600401611a79565b600060405180830381865af4158015610dfb573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610e419190810190611b5e565b9050610e7d6040518060600160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081525090565b73ffffffffffffffffffffffffffffffffffffffff85168152815151610ea4906001611c6b565b67ffffffffffffffff811115610ebc57610ebc61156f565b604051908082528060200260200182016040528015610ee5578160200160208202803683370190505b506020820152815151610ef9906001611c6b565b67ffffffffffffffff811115610f1157610f1161156f565b604051908082528060200260200182016040528015610f3a578160200160208202803683370190505b50604082015260005b82515181101561101b578251805182908110610f6157610f6161143b565b602002602001015182602001518281518110610f7f57610f7f61143b565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050610fdf83602001518281518110610fd257610fd261143b565b60200260200101516111c7565b610fe890611c7e565b82604001518281518110610ffe57610ffe61143b565b60209081029190910101528061101381611537565b915050610f43565b5060408201516020820151835151815181106110395761103961143b565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505061108082606001516111c7565b6040820151835151815181106110985761109861143b565b60209081029190910101526040517feec5b28700000000000000000000000000000000000000000000000000000000815273__$ae0937d060466c56d4bdd1eafaed47a473$__9063eec5b287906110f3908490600401611cb6565b60006040518083038186803b15801561110b57600080fd5b505af415801561111f573d6000803e3d6000fd5b5093979650505050505050565b600080604051602001611170906020808252601e908201527f78797a2e656c66692e73746f726167652e416363657373436f6e74726f6c0000604082015260600190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012092915050565b600081815260018301602052604081205415155b9392505050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821115611279576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e74323536000000000000000000000000000000000000000000000000606482015260840161039e565b5090565b60008083601f84011261128f57600080fd5b50813567ffffffffffffffff8111156112a757600080fd5b6020830191508360208260051b85010111156112c257600080fd5b9250929050565b600080600080600080606087890312156112e257600080fd5b863567ffffffffffffffff808211156112fa57600080fd5b6113068a838b0161127d565b9098509650602089013591508082111561131f57600080fd5b61132b8a838b0161127d565b9096509450604089013591508082111561134457600080fd5b818901915089601f83011261135857600080fd5b81358181111561136757600080fd5b8a60208260071b850101111561137c57600080fd5b6020830194508093505050509295509295509295565b73ffffffffffffffffffffffffffffffffffffffff811681146103a757600080fd5b6020808252818101839052600090604080840186845b8781101561142e5781356113dd81611392565b73ffffffffffffffffffffffffffffffffffffffff9081168452828601359061140582611392565b1683860152818401358484015260608083013590840152608092830192909101906001016113ca565b5090979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006020828403121561147c57600080fd5b81356111c081611392565b60006020828403121561149957600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126114d557600080fd5b83018035915067ffffffffffffffff8211156114f057600080fd5b6020019150600581901b36038213156112c257600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361156857611568611508565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610120810167ffffffffffffffff811182821017156115c2576115c261156f565b60405290565b604051610200810167ffffffffffffffff811182821017156115c2576115c261156f565b60405160a0810167ffffffffffffffff811182821017156115c2576115c261156f565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156116565761165661156f565b604052919050565b60006080828403121561167057600080fd5b6040516080810181811067ffffffffffffffff821117156116935761169361156f565b8060405250825181526020830151602082015260408301516040820152606083015160608201528091505092915050565b600067ffffffffffffffff8211156116de576116de61156f565b5060051b60200190565b80516116f381611392565b919050565b600082601f83011261170957600080fd5b8151602061171e611719836116c4565b61160f565b82815260059290921b8401810191818101908684111561173d57600080fd5b8286015b8481101561176157805161175481611392565b8352918301918301611741565b509695505050505050565b60006020828403121561177e57600080fd5b815167ffffffffffffffff81111561179557600080fd5b610d3b848285016116f8565b6000602082840312156117b357600080fd5b815160ff811681146111c057600080fd5b805180151581146116f357600080fd5b600082601f8301126117e557600080fd5b815160206117f5611719836116c4565b828152610120928302850182019282820191908785111561181557600080fd5b8387015b8581101561142e5781818a0312156118315760008081fd5b61183961159e565b611842826117c4565b8152818601518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e0808301519082015261010080830151908201528452928401928101611819565b6000602082840312156118b257600080fd5b815167ffffffffffffffff808211156118ca57600080fd5b9083019061020082860312156118df57600080fd5b6118e76115c8565b8251828111156118f657600080fd5b611902878286016116f8565b82525060208301518281111561191757600080fd5b611923878286016117d4565b60208301525060408381015190820152606080840151908201526080808401519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e09283015192810192909252509392505050565b81810381811115610cf857610cf8611508565b6000602082840312156119ed57600080fd5b81516111c081611392565b600081518084526020808501945080840160005b83811015611a3e57815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101611a0c565b509495945050505050565b600081518084526020808501945080840160005b83811015611a3e57815187529582019590820190600101611a5d565b60208152600073ffffffffffffffffffffffffffffffffffffffff808451166020840152602084015160e06040850152611ab76101008501826119f8565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe080868403016060870152611af38383611a49565b9250606087015191508086840301608087015250611b118282611a49565b9150508160808601511660a085015260a08501519150611b4960c085018373ffffffffffffffffffffffffffffffffffffffff169052565b60c085015160e0850152809250505092915050565b60006020808385031215611b7157600080fd5b825167ffffffffffffffff80821115611b8957600080fd5b9084019060a08287031215611b9d57600080fd5b611ba56115ec565b825182811115611bb457600080fd5b611bc0888286016116f8565b8252508383015182811115611bd457600080fd5b83019150601f82018713611be757600080fd5b8151611bf5611719826116c4565b81815260059190911b83018501908581019089831115611c1457600080fd5b938601935b82851015611c3257845182529386019390860190611c19565b8387015250611c459050604084016116e8565b604082015260608301516060820152608083015160808201528094505050505092915050565b80820180821115610cf857610cf8611508565b60007f80000000000000000000000000000000000000000000000000000000000000008203611caf57611caf611508565b5060000390565b6000602080835273ffffffffffffffffffffffffffffffffffffffff845116818401528084015160606040850152611cf160808501826119f8565b60408601518582037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0016060870152805180835290840192506000918401905b808310156117615783518252928401926001929092019190840190611d3156fea26469706673582212200b437d7699f91ab2a54237e37ad46afb83938fbded2d2f63832e0db29d8acc8964736f6c63430008120033";

type SwapFacetConstructorParams =
  | [linkLibraryAddresses: SwapFacetLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class SwapFacet__factory extends ContractFactory {
  constructor(...args: SwapFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        SwapFacet__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: SwapFacetLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$76a505dbd6210c6de5172a9e6577e0d579\\$__", "g"),
      linkLibraryAddresses["contracts/process/OracleProcess.sol:OracleProcess"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a224e41da3178beb3af7fdcdf4ade93682\\$__", "g"),
      linkLibraryAddresses["contracts/storage/Account.sol:Account"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

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
      new RegExp("__\\$4b57634e6fa94ef3e6c6a2ca1726543a5d\\$__", "g"),
      linkLibraryAddresses[
        "contracts/storage/AppTradeConfig.sol:AppTradeConfig"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$522a07b37c9fdfcd773e053b03790b8118\\$__", "g"),
      linkLibraryAddresses["contracts/process/SwapProcess.sol:SwapProcess"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ae0937d060466c56d4bdd1eafaed47a473\\$__", "g"),
      linkLibraryAddresses["contracts/process/AssetsProcess.sol:AssetsProcess"]
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
      SwapFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SwapFacet__factory {
    return super.connect(runner) as SwapFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapFacetInterface {
    return new Interface(_abi) as SwapFacetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): SwapFacet {
    return new Contract(address, _abi, runner) as unknown as SwapFacet;
  }
}

export interface SwapFacetLibraryAddresses {
  ["contracts/process/OracleProcess.sol:OracleProcess"]: string;
  ["contracts/storage/Account.sol:Account"]: string;
  ["contracts/utils/CalUtils.sol:CalUtils"]: string;
  ["contracts/utils/TokenUtils.sol:TokenUtils"]: string;
  ["contracts/storage/AppTradeConfig.sol:AppTradeConfig"]: string;
  ["contracts/process/SwapProcess.sol:SwapProcess"]: string;
  ["contracts/process/AssetsProcess.sol:AssetsProcess"]: string;
}
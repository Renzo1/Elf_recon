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
  FeeProcess,
  FeeProcessInterface,
} from "../../../contracts/process/FeeProcess";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "isCrossMargin",
        type: "bool",
      },
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "feeType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "ChargeBorrowingFeeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "feeToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "feeType",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct FeeProcess.ChargeMintOrRedeemFeeEventParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "ChargeMintOrRedeemFeeEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "symbol",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "positionKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "feeType",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "feeToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "feeAmount",
        type: "uint256",
      },
    ],
    name: "ChargeTradingFeeEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "FEE_BORROWING",
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
    name: "FEE_CLOSE_POSITION",
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
    name: "FEE_FUNDING",
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
    name: "FEE_LIQUIDATION",
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
    name: "FEE_MINT",
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
    name: "FEE_OPEN_POSITION",
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
    name: "FEE_REDEEM",
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
  "0x6128b761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100d35760003560e01c8063a63721651161008b578063c59c46d611610065578063c59c46d614610174578063de79c6a31461017c578063f86ade8b1461019c57600080fd5b8063a637216514610144578063ab54a22214610164578063c31e2e391461016c57600080fd5b806335f011bb116100bc57806335f011bb146101145780637241c0421461011c5780639c40951d1461013c57600080fd5b80632cf325d6146100d85780632d0e831a146100f2575b600080fd5b6100e06101a4565b60405190815260200160405180910390f35b8180156100fe57600080fd5b5061011261010d366004612251565b6101fe565b005b6100e0610b80565b81801561012857600080fd5b506101126101373660046122c1565b610bc1565b6100e061110d565b81801561015057600080fd5b5061011261015f3660046122f1565b61114e565b6100e06117ef565b6100e0611830565b6100e0611871565b81801561018857600080fd5b5061011261019736600461230a565b6118b2565b6100e061210e565b6040516020016101e5906020808252600f908201527f4645455f4c49515549444154494f4e0000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012081565b6102546040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b600073__$601b397ac9b288e68d027c499a437c7805$__63fe1d4ffc6040518163ffffffff1660e01b815260040161014060405180830381865af41580156102a0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c4919061246a565b90506040516020016103079060208082526008908201527f4645455f4d494e54000000000000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012084036103395760608101518252608081015160208301526103a8565b60405160200161037a906020808252600a908201527f4645455f52454445454d00000000000000000000000000000000000000000000604082015260600190565b6040516020818303038152906040528051906020012084036103a85760a0810151825260c081015160208301525b81516040517fee7fc5a300000000000000000000000000000000000000000000000000000000815273__$60cdec19f17936bbc33543273078a7e6b8$__9163ee7fc5a391610403918c91600401918252602082015260400190565b602060405180830381865af4158015610420573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044491906124f1565b604080840191909152602083015190517fee7fc5a300000000000000000000000000000000000000000000000000000000815273__$60cdec19f17936bbc33543273078a7e6b8$__9163ee7fc5a3916104aa918c91600401918252602082015260400190565b602060405180830381865af41580156104c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104eb91906124f1565b60808301819052604083015161050d9190610507908b9061214f565b9061214f565b8260a0018181525050600073__$b27d1c2281fddc8a36199ed5903373bfda$__63d28d611a6040518163ffffffff1660e01b8152600401602060405180830381865af4158015610561573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058591906124f1565b6040517ffd7f5ae800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a16600482015290915060009073__$b27d1c2281fddc8a36199ed5903373bfda$__9063fd7f5ae890602401602060405180830381865af4158015610609573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061062d91906124f1565b9050600073__$b27d1c2281fddc8a36199ed5903373bfda$__63604c42456040518163ffffffff1660e01b8152600401602060405180830381865af415801561067a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069e91906124f1565b905085156108aa5760408581015190517fbfaa6d800000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff808d1660248301528b166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063bfaa6d809060840160006040518083038186803b15801561073b57600080fd5b505af415801561074f573d6000803e3d6000fd5b5050505060808501516040517fd791041f0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff8b166024820152604481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063d791041f9060640160006040518083038186803b1580156107e057600080fd5b505af41580156107f4573d6000803e3d6000fd5b5050505060a08501516040517fbfaa6d800000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff808d1660248301528b166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063bfaa6d809060840160006040518083038186803b15801561088d57600080fd5b505af41580156108a1573d6000803e3d6000fd5b50505050610aaa565b60408581015190517f16245ebd0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff808d1660248301528b166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__906316245ebd9060840160006040518083038186803b15801561093f57600080fd5b505af4158015610953573d6000803e3d6000fd5b5050505060808501516040517fcdac910c0000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff8b166024820152604481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063cdac910c9060640160006040518083038186803b1580156109e457600080fd5b505af41580156109f8573d6000803e3d6000fd5b5050505060a08501516040517f16245ebd0000000000000000000000000000000000000000000000000000000081526004810183905273ffffffffffffffffffffffffffffffffffffffff808d1660248301528b166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__906316245ebd9060840160006040518083038186803b158015610a9157600080fd5b505af4158015610aa5573d6000803e3d6000fd5b505050505b6040805160a08101825273ffffffffffffffffffffffffffffffffffffffff808d1682528b811660208301528a168183015260608101899052608081018d905290517f9a37589f1078970477df9d898a565f6f1c38acef28e97a1302cfa722e41ad94290610b6a908390600060a08201905073ffffffffffffffffffffffffffffffffffffffff80845116835280602085015116602084015280604085015116604084015250606083015160608301526080830151608083015292915050565b60405180910390a1505050505050505050505050565b6040516020016101e5906020808252600d908201527f4645455f424f52524f57494e4700000000000000000000000000000000000000604082015260600190565b600282015460038301546040517fe674b4c500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808516600483015260ff909316151560248201529116604482015260009073__$ee489ac338146077515da2dbcbd7e1380a$__9063e674b4c590606401602060405180830381865af4158015610c60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c8491906124f1565b9050600073__$60cdec19f17936bbc33543273078a7e6b8$__63228d17e073__$60cdec19f17936bbc33543273078a7e6b8$__63ee7fc5a38760080154620186a08960070154610cd49190612539565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401602060405180830381865af4158015610d2d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5191906124f1565b600d870154610d609086612539565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401602060405180830381865af4158015610db9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ddd91906124f1565b90508084600c016002016000828254610df6919061254c565b909155505060038401546040517fd449a83200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116600482015273__$60cdec19f17936bbc33543273078a7e6b8$__90636f17c0af90839073__$e3834fe8ea0b4818c33a802f8dd8530fd8$__9063d449a83290602401602060405180830381865af4158015610e9d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec1919061255f565b600388015460028901546040517f1a0994f500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909216600483015260ff161515602482015273__$76a505dbd6210c6de5172a9e6577e0d579$__90631a0994f590604401602060405180830381865af4158015610f54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f7891906124f1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935260ff90911660248301526044820152606401602060405180830381865af4158015610fdb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fff91906124f1565b600f8501805460009061101390849061254c565b9091555050600d84018290556002840154600385015473__$1e4730e7ae56a4e74c2d916a9ae69f916e$__9163fe82326b91869160ff169073ffffffffffffffffffffffffffffffffffffffff16600061106c87612164565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e088901b16815273ffffffffffffffffffffffffffffffffffffffff958616600482015293151560248501529390911660448301526064820152608481019190915260a4015b60006040518083038186803b1580156110ef57600080fd5b505af4158015611103573d6000803e3d6000fd5b5050505050505050565b6040516020016101e5906020808252600a908201527f4645455f52454445454d00000000000000000000000000000000000000000000604082015260600190565b600181015460028201546040517f9e20fcac000000000000000000000000000000000000000000000000000000008152600481019290925260ff161515602482015260009073__$ee489ac338146077515da2dbcbd7e1380a$__90639e20fcac90604401602060405180830381865af41580156111cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f391906124f1565b60108301549091508103611205575050565b600073__$60cdec19f17936bbc33543273078a7e6b8$__63445b0a4361122e8560050154612164565b601086015461123d9086612589565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815260048101929092526024820152604401602060405180830381865af4158015611296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112ba91906124f1565b600284015490915060009060ff161561150f578190508184600c0160050160008282546112e791906125b0565b909155505060038401546040517fd449a83200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116600482015273__$60cdec19f17936bbc33543273078a7e6b8$__906375608c3d90849073__$e3834fe8ea0b4818c33a802f8dd8530fd8$__9063d449a83290602401602060405180830381865af415801561138e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113b2919061255f565b600388015460028901546040517f180e24bb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909216600483015260ff161515602482015273__$76a505dbd6210c6de5172a9e6577e0d579$__9063180e24bb90604401602060405180830381865af4158015611445573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061146991906124f1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935260ff90911660248301526044820152606401602060405180830381865af41580156114cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f091906124f1565b6012850180546000906115049084906125b0565b9091555061174e9050565b60038401546040517fd449a83200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909116600482015273__$60cdec19f17936bbc33543273078a7e6b8$__90630d65ea2990849073__$e3834fe8ea0b4818c33a802f8dd8530fd8$__9063d449a83290602401602060405180830381865af41580156115b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115d5919061255f565b600388015460028901546040517f180e24bb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff909216600483015260ff161515602482015273__$76a505dbd6210c6de5172a9e6577e0d579$__9063180e24bb90604401602060405180830381865af4158015611668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168c91906124f1565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152600481019390935260ff90911660248301526044820152606401602060405180830381865af41580156116ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171391906124f1565b90508084600c01600501600082825461172c91906125b0565b90915550506012840180548391906000906117489084906125b0565b90915550505b60108401839055600180850154600286015460038701546040517f01fbd27400000000000000000000000000000000000000000000000000000000815260048101939093526024830185905260ff90911615156044830152606482019290925273ffffffffffffffffffffffffffffffffffffffff909116608482015273__$1e4730e7ae56a4e74c2d916a9ae69f916e$__906301fbd2749060a4016110d7565b6040516020016101e5906020808252600b908201527f4645455f46554e44494e47000000000000000000000000000000000000000000604082015260600190565b6040516020016101e59060208082526008908201527f4645455f4d494e54000000000000000000000000000000000000000000000000604082015260600190565b6040516020016101e59060208082526012908201527f4645455f434c4f53455f504f534954494f4e0000000000000000000000000000604082015260600190565b600073__$b27d1c2281fddc8a36199ed5903373bfda$__63d28d611a6040518163ffffffff1660e01b8152600401602060405180830381865af41580156118fd573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061192191906124f1565b6040517ffd7f5ae800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8716600482015290915060009073__$b27d1c2281fddc8a36199ed5903373bfda$__9063fd7f5ae890602401602060405180830381865af41580156119a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c991906124f1565b9050600073__$b27d1c2281fddc8a36199ed5903373bfda$__63604c42456040518163ffffffff1660e01b8152600401602060405180830381865af4158015611a16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3a91906124f1565b9050600073__$4b57634e6fa94ef3e6c6a2ca1726543a5d$__63b45849886040518163ffffffff1660e01b8152600401600060405180830381865af4158015611a87573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052611acd9190810190612759565b9050611b256040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6101608201516040517fee7fc5a300000000000000000000000000000000000000000000000000000000815273__$60cdec19f17936bbc33543273078a7e6b8$__9163ee7fc5a391611b84918e91600401918252602082015260400190565b602060405180830381865af4158015611ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bc591906124f1565b60408083019190915261018083015190517fee7fc5a300000000000000000000000000000000000000000000000000000000815273__$60cdec19f17936bbc33543273078a7e6b8$__9163ee7fc5a391611c2c918e91600401918252602082015260400190565b602060405180830381865af4158015611c49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c6d91906124f1565b608082018190526040820151611c899190610507908d9061214f565b60a082015260408082015190517f16245ebd0000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff808c1660248301528a166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__906316245ebd9060840160006040518083038186803b158015611d2357600080fd5b505af4158015611d37573d6000803e3d6000fd5b5050505060808101516040517fcdac910c0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff8a166024820152604481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063cdac910c9060640160006040518083038186803b158015611dc857600080fd5b505af4158015611ddc573d6000803e3d6000fd5b5050505060a08101516040517f16245ebd0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff808c1660248301528a166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__906316245ebd9060840160006040518083038186803b158015611e7557600080fd5b505af4158015611e89573d6000803e3d6000fd5b505050508a156120935760408181015190517ffe8d19bf0000000000000000000000000000000000000000000000000000000081526004810187905273ffffffffffffffffffffffffffffffffffffffff808c1660248301528a166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063fe8d19bf9060840160006040518083038186803b158015611f2857600080fd5b505af4158015611f3c573d6000803e3d6000fd5b5050505060808101516040517f378c9f6e0000000000000000000000000000000000000000000000000000000081526004810186905273ffffffffffffffffffffffffffffffffffffffff8a166024820152604481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063378c9f6e9060640160006040518083038186803b158015611fcd57600080fd5b505af4158015611fe1573d6000803e3d6000fd5b5050505060a08101516040517ffe8d19bf0000000000000000000000000000000000000000000000000000000081526004810185905273ffffffffffffffffffffffffffffffffffffffff808c1660248301528a166044820152606481019190915273__$b27d1c2281fddc8a36199ed5903373bfda$__9063fe8d19bf9060840160006040518083038186803b15801561207a57600080fd5b505af415801561208e573d6000803e3d6000fd5b505050505b604080518c1515815273ffffffffffffffffffffffffffffffffffffffff8b811660208301528a811682840152891660608201526080810188905260a081018c905290517fc6808235a634ed03a8e9b566f817b485bebc047ac6d8ddda1f07e5173f0a18f59181900360c00190a15050505050505050505050565b6040516020016101e59060208082526011908201527f4645455f4f50454e5f504f534954494f4e000000000000000000000000000000604082015260600190565b600061215b8284612539565b90505b92915050565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82111561221a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e206160448201527f6e20696e74323536000000000000000000000000000000000000000000000000606482015260840160405180910390fd5b5090565b73ffffffffffffffffffffffffffffffffffffffff8116811461224057600080fd5b50565b801515811461224057600080fd5b60008060008060008060c0878903121561226a57600080fd5b86359550602087013561227c8161221e565b9450604087013561228c8161221e565b9350606087013561229c8161221e565b92506080870135915060a08701356122b381612243565b809150509295509295509295565b600080604083850312156122d457600080fd5b8235915060208301356122e68161221e565b809150509250929050565b60006020828403121561230357600080fd5b5035919050565b60008060008060008060c0878903121561232357600080fd5b863561232e81612243565b95506020870135945060408701356123458161221e565b935060608701356123558161221e565b925060808701356123658161221e565b8092505060a087013590509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156123cd576123cd61237a565b60405290565b604051610120810167ffffffffffffffff811182821017156123cd576123cd61237a565b604051610200810167ffffffffffffffff811182821017156123cd576123cd61237a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156124625761246261237a565b604052919050565b6000610140828403121561247d57600080fd5b6124856123a9565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b60006020828403121561250357600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561215e5761215e61250a565b8082018082111561215e5761215e61250a565b60006020828403121561257157600080fd5b815160ff8116811461258257600080fd5b9392505050565b81810360008312801583831316838312821617156125a9576125a961250a565b5092915050565b80820182811260008312801582168215821617156125d0576125d061250a565b505092915050565b600067ffffffffffffffff8211156125f2576125f261237a565b5060051b60200190565b600082601f83011261260d57600080fd5b8151602061262261261d836125d8565b61241b565b82815260059290921b8401810191818101908684111561264157600080fd5b8286015b848110156126655780516126588161221e565b8352918301918301612645565b509695505050505050565b805161267b81612243565b919050565b600082601f83011261269157600080fd5b815160206126a161261d836125d8565b82815261012092830285018201928282019190878511156126c157600080fd5b8387015b8581101561274c5781818a0312156126dd5760008081fd5b6126e56123d3565b6126ee82612670565b8152818601518682015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015284529284019281016126c5565b5090979650505050505050565b60006020828403121561276b57600080fd5b815167ffffffffffffffff8082111561278357600080fd5b90830190610200828603121561279857600080fd5b6127a06123f7565b8251828111156127af57600080fd5b6127bb878286016125fc565b8252506020830151828111156127d057600080fd5b6127dc87828601612680565b60208301525060408381015190820152606080840151908201526080808401519082015260a0808401519082015260c0808401519082015260e08084015190820152610100808401519082015261012080840151908201526101408084015190820152610160808401519082015261018080840151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250939250505056fea2646970667358221220a39060cbf7418aa5793a5f4bf8085a83c7e4a3db63d28d72ef4490e4f0e4efe464736f6c63430008120033";

type FeeProcessConstructorParams =
  | [linkLibraryAddresses: FeeProcessLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FeeProcessConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class FeeProcess__factory extends ContractFactory {
  constructor(...args: FeeProcessConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        FeeProcess__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: FeeProcessLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$601b397ac9b288e68d027c499a437c7805\\$__", "g"),
      linkLibraryAddresses["contracts/storage/AppPoolConfig.sol:AppPoolConfig"]
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
      new RegExp("__\\$b27d1c2281fddc8a36199ed5903373bfda\\$__", "g"),
      linkLibraryAddresses["contracts/storage/FeeRewards.sol:FeeRewards"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ee489ac338146077515da2dbcbd7e1380a\\$__", "g"),
      linkLibraryAddresses[
        "contracts/process/MarketQueryProcess.sol:MarketQueryProcess"
      ]
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
      new RegExp("__\\$76a505dbd6210c6de5172a9e6577e0d579\\$__", "g"),
      linkLibraryAddresses["contracts/process/OracleProcess.sol:OracleProcess"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$1e4730e7ae56a4e74c2d916a9ae69f916e\\$__", "g"),
      linkLibraryAddresses["contracts/process/MarketProcess.sol:MarketProcess"]
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

    return linkedBytecode;
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FeeProcess & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FeeProcess__factory {
    return super.connect(runner) as FeeProcess__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FeeProcessInterface {
    return new Interface(_abi) as FeeProcessInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FeeProcess {
    return new Contract(address, _abi, runner) as unknown as FeeProcess;
  }
}

export interface FeeProcessLibraryAddresses {
  ["contracts/storage/AppPoolConfig.sol:AppPoolConfig"]: string;
  ["contracts/utils/CalUtils.sol:CalUtils"]: string;
  ["contracts/storage/FeeRewards.sol:FeeRewards"]: string;
  ["contracts/process/MarketQueryProcess.sol:MarketQueryProcess"]: string;
  ["contracts/utils/TokenUtils.sol:TokenUtils"]: string;
  ["contracts/process/OracleProcess.sol:OracleProcess"]: string;
  ["contracts/process/MarketProcess.sol:MarketProcess"]: string;
  ["contracts/storage/AppTradeConfig.sol:AppTradeConfig"]: string;
}

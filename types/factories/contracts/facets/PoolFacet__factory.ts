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
  PoolFacet,
  PoolFacetInterface,
} from "../../../contracts/facets/PoolFacet";

const _abi = [
  {
    inputs: [
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
    name: "getAllPools",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "stakeTokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance",
            name: "baseTokenBalance",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "stableTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance[]",
            name: "stableTokenBalances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "poolValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "poolPnl",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
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
            internalType: "struct LpPool.BorrowingFee",
            name: "borrowingFee",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimedRewards",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.PoolInfo[]",
        name: "",
        type: "tuple[]",
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
    name: "getPool",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "stakeTokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance",
            name: "baseTokenBalance",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "stableTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance[]",
            name: "stableTokenBalances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "poolValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "poolPnl",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
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
            internalType: "struct LpPool.BorrowingFee",
            name: "borrowingFee",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimedRewards",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.PoolInfo",
        name: "",
        type: "tuple",
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
    name: "getPoolWithOracle",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "stakeToken",
            type: "address",
          },
          {
            internalType: "string",
            name: "stakeTokenName",
            type: "string",
          },
          {
            internalType: "address",
            name: "baseToken",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance",
            name: "baseTokenBalance",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "stableTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "liability",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "unsettledAmount",
                type: "int256",
              },
              {
                internalType: "uint256",
                name: "lossAmount",
                type: "uint256",
              },
              {
                internalType: "address[]",
                name: "collateralTokens",
                type: "address[]",
              },
              {
                internalType: "uint256[]",
                name: "collateralAmounts",
                type: "uint256[]",
              },
            ],
            internalType: "struct IPool.MintTokenBalance[]",
            name: "stableTokenBalances",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "poolValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "availableLiquidity",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "poolPnl",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
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
            internalType: "struct LpPool.BorrowingFee",
            name: "borrowingFee",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimedRewards",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.PoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUsdPool",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "stableTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unsettledAmount",
                type: "uint256",
              },
            ],
            internalType: "struct UsdPool.TokenBalance[]",
            name: "stableTokenBalances",
            type: "tuple[]",
          },
          {
            internalType: "uint256[]",
            name: "stableTokenMaxWithdraws",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "poolValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "tokensAvailableLiquidity",
            type: "uint256[]",
          },
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
            internalType: "struct UsdPool.BorrowingFee[]",
            name: "borrowingFees",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimedRewards",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.UsdPoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
    name: "getUsdPoolWithOracle",
    outputs: [
      {
        components: [
          {
            internalType: "address[]",
            name: "stableTokens",
            type: "address[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "holdAmount",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "unsettledAmount",
                type: "uint256",
              },
            ],
            internalType: "struct UsdPool.TokenBalance[]",
            name: "stableTokenBalances",
            type: "tuple[]",
          },
          {
            internalType: "uint256[]",
            name: "stableTokenMaxWithdraws",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "poolValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "tokensAvailableLiquidity",
            type: "uint256[]",
          },
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
            internalType: "struct UsdPool.BorrowingFee[]",
            name: "borrowingFees",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "apr",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalClaimedRewards",
            type: "uint256",
          },
        ],
        internalType: "struct IPool.UsdPoolInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506001600055611620806100256000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806375d037d01161005057806375d037d0146100b55780639e9e78f4146100bd578063bbe4f6db146100dd57600080fd5b80631559a2431461006c5780633e4fb7c214610095575b600080fd5b61007f61007a36600461066e565b6100f0565b60405161008c91906107d2565b60405180910390f35b6100a86100a336600461066e565b6101fb565b60405161008c9190610b1d565b61007f6102b3565b6100d06100cb366004610bc2565b610396565b60405161008c9190610c17565b6100d06100eb366004610c2a565b61045d565b61013f6040518061012001604052806060815260200160608152602001606081526020016000815260200160008152602001606081526020016060815260200160008152602001600081525090565b6040517fa345a3b200000000000000000000000000000000000000000000000000000000815273__$4372c788db0c4b9b4094fec4620221fad6$__9063a345a3b2906101919086908690600401610cbd565b600060405180830381865af41580156101ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101f49190810190611044565b9392505050565b6040517fc77b227f00000000000000000000000000000000000000000000000000000000815260609073__$4372c788db0c4b9b4094fec4620221fad6$__9063c77b227f906102509086908690600401610cbd565b600060405180830381865af415801561026d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101f4919081019061144c565b6103026040518061012001604052806060815260200160608152602001606081526020016000815260200160008152602001606081526020016060815260200160008152602001600081525090565b73__$4372c788db0c4b9b4094fec4620221fad6$__6375d037d06040518163ffffffff1660e01b8152600401600060405180830381865af415801561034b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103919190810190611044565b905090565b61039e61051d565b6040517f61c9c90800000000000000000000000000000000000000000000000000000000815273__$4372c788db0c4b9b4094fec4620221fad6$__906361c9c908906103f2908790879087906004016114fd565b600060405180830381865af415801561040f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610455919081019061152d565b949350505050565b61046561051d565b6040517f61c9c90800000000000000000000000000000000000000000000000000000000815260609073__$4372c788db0c4b9b4094fec4620221fad6$__906361c9c908906104ba9086908590600401611562565b600060405180830381865af41580156104d7573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101f4919081019061152d565b604051806101c00160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600080191681526020016105b46040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160608152602001606081525090565b815260200160608152602001606081526020016000815260200160008152602001600081526020016000815260200161060e6040518060800160405280600081526020016000815260200160008152602001600081525090565b815260200160008152602001600081525090565b60008083601f84011261063457600080fd5b50813567ffffffffffffffff81111561064c57600080fd5b6020830191508360208260071b850101111561066757600080fd5b9250929050565b6000806020838503121561068157600080fd5b823567ffffffffffffffff81111561069857600080fd5b6106a485828601610622565b90969095509350505050565b600081518084526020808501945080840160005b838110156106f657815173ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016106c4565b509495945050505050565b600081518084526020808501945080840160005b838110156106f65781518051885283810151848901526040908101519088015260609096019590820190600101610715565b600081518084526020808501945080840160005b838110156106f65781518752958201959082019060010161075b565b600081518084526020808501945080840160005b838110156106f6576107bf878351805182526020810151602083015260408101516040830152606081015160608301525050565b608096909601959082019060010161078b565b60208152600082516101208060208501526107f16101408501836106b0565b915060208501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08086850301604087015261082d8483610701565b9350604087015191508086850301606087015261084a8483610747565b935060608701516080870152608087015160a087015260a08701519150808685030160c087015261087b8483610747565b935060c08701519150808685030160e0870152506108998382610777565b60e087015161010087810191909152909601519190940152509192915050565b60005b838110156108d45781810151838201526020016108bc565b50506000910152565b600081518084526108f58160208601602086016108b9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8051825260208101516020830152604081015160408301526060810151606083015260808101516080830152600060a082015160e060a085015261096e60e08501826106b0565b905060c083015184820360c08601526109878282610747565b95945050505050565b600081518084526020808501808196508360051b8101915082860160005b858110156109d85782840389526109c6848351610927565b988501989350908401906001016109ae565b5091979650505050505050565b805173ffffffffffffffffffffffffffffffffffffffff16825260006102206020830151816020860152610a1b828601826108dd565b9150506040830151610a45604086018273ffffffffffffffffffffffffffffffffffffffff169052565b506060830151606085015260808301518482036080860152610a678282610927565b91505060a083015184820360a0860152610a8182826106b0565b91505060c083015184820360c0860152610a9b8282610990565b60e0858101519087015261010080860151908701526101208086015190870152610140808601519087015261016080860151805182890152602081015161018089015260408101516101a089015260608101516101c0890152919350915050506101808301516101e08501526101a08301516102008501528091505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610b90577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452610b7e8583516109e5565b94509285019290850190600101610b44565b5092979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bbf57600080fd5b50565b600080600060408486031215610bd757600080fd5b8335610be281610b9d565b9250602084013567ffffffffffffffff811115610bfe57600080fd5b610c0a86828701610622565b9497909650939450505050565b6020815260006101f460208301846109e5565b600060208284031215610c3c57600080fd5b81356101f481610b9d565b8183526000602080850194508260005b858110156106f6578135610c6a81610b9d565b73ffffffffffffffffffffffffffffffffffffffff90811688528284013590610c9282610b9d565b1687840152604082810135908801526060808301359088015260809687019690910190600101610c57565b602081526000610455602083018486610c47565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff81118282101715610d2357610d23610cd1565b60405290565b604051610120810167ffffffffffffffff81118282101715610d2357610d23610cd1565b60405160e0810167ffffffffffffffff81118282101715610d2357610d23610cd1565b6040516101c0810167ffffffffffffffff81118282101715610d2357610d23610cd1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610ddb57610ddb610cd1565b604052919050565b600067ffffffffffffffff821115610dfd57610dfd610cd1565b5060051b60200190565b8051610e1281610b9d565b919050565b600082601f830112610e2857600080fd5b81516020610e3d610e3883610de3565b610d94565b82815260059290921b84018101918181019086841115610e5c57600080fd5b8286015b84811015610e80578051610e7381610b9d565b8352918301918301610e60565b509695505050505050565b600082601f830112610e9c57600080fd5b81516020610eac610e3883610de3565b82815260609283028501820192828201919087851115610ecb57600080fd5b8387015b85811015610f125781818a031215610ee75760008081fd5b610eef610d00565b815181528582015186820152604080830151908201528452928401928101610ecf565b5090979650505050505050565b600082601f830112610f3057600080fd5b81516020610f40610e3883610de3565b82815260059290921b84018101918181019086841115610f5f57600080fd5b8286015b84811015610e805780518352918301918301610f63565b600060808284031215610f8c57600080fd5b6040516080810181811067ffffffffffffffff82111715610faf57610faf610cd1565b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b600082601f830112610ff157600080fd5b81516020611001610e3883610de3565b82815260079290921b8401810191818101908684111561102057600080fd5b8286015b84811015610e80576110368882610f7a565b835291830191608001611024565b60006020828403121561105657600080fd5b815167ffffffffffffffff8082111561106e57600080fd5b90830190610120828603121561108357600080fd5b61108b610d29565b82518281111561109a57600080fd5b6110a687828601610e17565b8252506020830151828111156110bb57600080fd5b6110c787828601610e8b565b6020830152506040830151828111156110df57600080fd5b6110eb87828601610f1f565b604083015250606083015160608201526080830151608082015260a08301518281111561111757600080fd5b61112387828601610f1f565b60a08301525060c08301518281111561113b57600080fd5b61114787828601610fe0565b60c08301525060e083810151908201526101009283015192810192909252509392505050565b600082601f83011261117e57600080fd5b815167ffffffffffffffff81111561119857611198610cd1565b6111c960207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610d94565b8181528460208386010111156111de57600080fd5b6104558260208301602087016108b9565b600060e0828403121561120157600080fd5b611209610d4d565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015167ffffffffffffffff8082111561125257600080fd5b61125e85838601610e17565b60a084015260c084015191508082111561127757600080fd5b5061128484828501610f1f565b60c08301525092915050565b600082601f8301126112a157600080fd5b815160206112b1610e3883610de3565b82815260059290921b840181019181810190868411156112d057600080fd5b8286015b84811015610e8057805167ffffffffffffffff8111156112f45760008081fd5b6113028986838b01016111ef565b8452509183019183016112d4565b6000610220828403121561132357600080fd5b61132b610d70565b905061133682610e07565b8152602082015167ffffffffffffffff8082111561135357600080fd5b61135f8583860161116d565b602084015261137060408501610e07565b604084015260608401516060840152608084015191508082111561139357600080fd5b61139f858386016111ef565b608084015260a08401519150808211156113b857600080fd5b6113c485838601610e17565b60a084015260c08401519150808211156113dd57600080fd5b506113ea84828501611290565b60c08301525060e0828101519082015261010080830151908201526101208083015190820152610140808301519082015261016061142a84828501610f7a565b908201526101e0820151610180820152610200909101516101a0820152919050565b6000602080838503121561145f57600080fd5b825167ffffffffffffffff8082111561147757600080fd5b818501915085601f83011261148b57600080fd5b8151611499610e3882610de3565b81815260059190911b830184019084810190888311156114b857600080fd5b8585015b838110156114f0578051858111156114d45760008081fd5b6114e28b89838a0101611310565b8452509186019186016114bc565b5098975050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84168152604060208201526000610987604083018486610c47565b60006020828403121561153f57600080fd5b815167ffffffffffffffff81111561155657600080fd5b61045584828501611310565b6000604080830173ffffffffffffffffffffffffffffffffffffffff80871685526020838187015282875180855260609450848801915082890160005b828110156115da578151805187168552858101518716868601528881015189860152870151878501526080909301929084019060010161159f565b50919a995050505050505050505056fea2646970667358221220f59a0c927f28238d5c7bd6b5c5938c1ae378f4749db73c3e44bc94ab33c97daa64736f6c63430008120033";

type PoolFacetConstructorParams =
  | [linkLibraryAddresses: PoolFacetLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class PoolFacet__factory extends ContractFactory {
  constructor(...args: PoolFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        PoolFacet__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(linkLibraryAddresses: PoolFacetLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$4372c788db0c4b9b4094fec4620221fad6\\$__", "g"),
      linkLibraryAddresses[
        "contracts/process/LpPoolQueryProcess.sol:LpPoolQueryProcess"
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
      PoolFacet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): PoolFacet__factory {
    return super.connect(runner) as PoolFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolFacetInterface {
    return new Interface(_abi) as PoolFacetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PoolFacet {
    return new Contract(address, _abi, runner) as unknown as PoolFacet;
  }
}

export interface PoolFacetLibraryAddresses {
  ["contracts/process/LpPoolQueryProcess.sol:LpPoolQueryProcess"]: string;
}

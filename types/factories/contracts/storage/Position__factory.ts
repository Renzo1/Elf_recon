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
  Position,
  PositionInterface,
} from "../../../contracts/storage/Position";

const _abi = [
  {
    inputs: [],
    name: "PositionNotExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "requestId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "positionKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "enum Position.PositionUpdateFrom",
        name: "from",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
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
            name: "isCrossMargin",
            type: "bool",
          },
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "address",
            name: "marginToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "indexToken",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "qty",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "leverage",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialMargin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialMarginInUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialMarginInUsdFromBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "holdPoolAmount",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "closeFeeInUsd",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "openBorrowingFeePerToken",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "realizedBorrowingFee",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "realizedBorrowingFeeInUsd",
                type: "uint256",
              },
              {
                internalType: "int256",
                name: "openFundingFeePerQty",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "realizedFundingFee",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "realizedFundingFeeInUsd",
                type: "int256",
              },
            ],
            internalType: "struct Position.PositionFee",
            name: "positionFee",
            type: "tuple",
          },
          {
            internalType: "int256",
            name: "realizedPnl",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "lastUpdateTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct Position.Props",
        name: "position",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "executePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "openFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "marginTokenPrice",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "settledMargin",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "settledBorrowingFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "settledBorrowingFeeInUsd",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "settledFundingFee",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "settledFundingFeeInUsd",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "unHoldPoolAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "closeFeeInUsd",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "realizedPnl",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "poolPnlToken",
            type: "int256",
          },
        ],
        indexed: false,
        internalType: "struct Position.SettleData",
        name: "settleData",
        type: "tuple",
      },
    ],
    name: "PositionUpdateEvent",
    type: "event",
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
        name: "symbol",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "marginToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isCrossMargin",
        type: "bool",
      },
    ],
    name: "getPositionKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610b6a61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100ad5760003560e01c8063a51dafc711610080578063f013b69511610065578063f013b6951461025e578063f035079914610285578063f8d1ead61461017b57600080fd5b8063a51dafc71461022b578063d06e0fe01461023e57600080fd5b80631a4c9a98146100b25780632ead7fcf146100d457806353dd3c54146100f45780636b38d0761461017b575b600080fd5b8180156100be57600080fd5b506100d26100cd3660046106b4565b610296565b005b8180156100e057600080fd5b506100d26100ef3660046107ba565b61037e565b81801561010057600080fd5b506100d261010f3660046107f7565b60006005820181905560068201819055600782018190556008820181905560098201819055600a8201819055600b8201819055600c820181905560138201819055600d8201819055600e8201819055600f82018190556010820181905560118201819055601290910155565b610218610189366004610834565b6040805160a06020808301829052601960c08401527f78797a2e656c66692e73746f726167652e506f736974696f6e0000000000000060e08085019190915273ffffffffffffffffffffffffffffffffffffffff988916848601526060840197909752949096166080820152911515948201949094528351808203909301835261010001909252805191012090565b6040519081526020015b60405180910390f35b6100d26102393660046107f7565b6104bf565b81801561024a57600080fd5b506100d2610259366004610888565b610500565b61027561026c3660046107f7565b60050154151590565b6040519015158152602001610222565b6102186102933660046107f7565b90565b6002840154600185015460038601546040805160a06020808301829052601960c08401527f78797a2e656c66692e73746f726167652e506f736974696f6e0000000000000060e08085019190915273ffffffffffffffffffffffffffffffffffffffff620100008904811685870152606085019790975295909416608083015260ff610100968790041615159082015281518082039094018452939093019283905281519101207fee2b9c77532fd89e66e2f431c2001e4bcc30fb5bc62ee9cdac252f89540067ae916103709186918690899087906108cf565b60405180910390a150505050565b6002840154600185015460038601546040805160a06020808301829052601960c08401527f78797a2e656c66692e73746f726167652e506f736974696f6e0000000000000060e08085019190915262010000880473ffffffffffffffffffffffffffffffffffffffff9081168587015260608501979097529590941660808301526101009586900460ff161515908201528151808203909401845290930190925280519101207fee2b9c77532fd89e66e2f431c2001e4bcc30fb5bc62ee9cdac252f89540067ae9084908487604051806101a00160405280878152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152506040516103709594939291906108cf565b80600501546000036104fd576040517f4a32858f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b6002850154600186015460038701546040805160a06020808301829052601960c08401527f78797a2e656c66692e73746f726167652e506f736974696f6e0000000000000060e08085019190915262010000880473ffffffffffffffffffffffffffffffffffffffff9081168587015260608501979097529590941660808301526101009586900460ff161515908201528151808203909401845290930190925280519101207fee2b9c77532fd89e66e2f431c2001e4bcc30fb5bc62ee9cdac252f89540067ae9085908588604051806101a001604052808881526020018781526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152506040516106409594939291906108cf565b60405180910390a15050505050565b80356009811061065e57600080fd5b919050565b6040516101a0810167ffffffffffffffff811182821017156106ae577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405290565b6000806000808486036102008112156106cc57600080fd5b85359450602086013593506106e36040870161064f565b92506101a0807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08301121561071757600080fd5b61071f610663565b9150606087013582526080870135602083015260a0870135604083015260c0870135606083015260e087013560808301526101008088013560a08401526101208089013560c0850152610140808a013560e0860152610160808b0135848701526101809350838b013583870152848b0135828701526101c08b0135818701525050506101e08801358184015250508091505092959194509250565b600080600080608085870312156107d057600080fd5b84359350602085013592506107e76040860161064f565b9396929550929360600135925050565b60006020828403121561080957600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461065e57600080fd5b6000806000806080858703121561084a57600080fd5b61085385610810565b93506020850135925061086860408601610810565b91506060850135801515811461087d57600080fd5b939692955090935050565b600080600080600060a086880312156108a057600080fd5b85359450602086013593506108b76040870161064f565b94979396509394606081013594506080013592915050565b858152602081018590526104e0810160098510610915577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8460408301528354606083015260018401546080830152600284015461094260a0840160ff831615159052565b61095660c0840160ff8360081c1615159052565b601081901c73ffffffffffffffffffffffffffffffffffffffff1660e084015250600384015473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff811661010084015250600484015473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff81166101208401525060058401546101408301526006840154610160830152600784015461018083015260088401546101a083015260098401546101c0830152600a8401546101e0830152600b840154610200830152600c840154610220830152600d840154610240830152600e840154610260830152600f84015461028083015260108401546102a083015260118401546102c083015260128401546102e08301526013840154610300830152601484015461032083015282516103408301526020830151610360830152604083015161038083015260608301516103a083015260808301516103c083015260a08301516103e083015260c083015161040083015260e08301516104208301526101008301516104408301526101208301516104608301526101408301516104808301526101608301516104a08301526101808301516104c0830152969550505050505056fea26469706673582212200e0b5ba3c8abf658bf5590b9ffcbf907bd707c0a77e24907e17fcd6f9350c02364736f6c63430008120033";

type PositionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PositionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Position__factory extends ContractFactory {
  constructor(...args: PositionConstructorParams) {
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
      Position & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Position__factory {
    return super.connect(runner) as Position__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionInterface {
    return new Interface(_abi) as PositionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Position {
    return new Contract(address, _abi, runner) as unknown as Position;
  }
}
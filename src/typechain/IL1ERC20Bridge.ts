/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface IL1ERC20BridgeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimFailedDeposit"
      | "deposit(address,address,uint256,uint256,uint256)"
      | "deposit(address,address,uint256,uint256,uint256,address)"
      | "depositAmount"
      | "finalizeWithdrawal"
      | "isWithdrawalFinalized"
      | "l2Bridge"
      | "l2TokenAddress"
      | "l2TokenBeacon"
      | "sharedBridge"
      | "transferTokenToSharedBridge"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ClaimedFailedDeposit"
      | "DepositInitiated"
      | "WithdrawalFinalized"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "claimFailedDeposit",
    values: [
      AddressLike,
      AddressLike,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(address,address,uint256,uint256,uint256)",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit(address,address,uint256,uint256,uint256,address)",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAmount",
    values: [AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawal",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isWithdrawalFinalized",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "l2Bridge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "l2TokenAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "l2TokenBeacon",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sharedBridge",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferTokenToSharedBridge",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimFailedDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit(address,address,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deposit(address,address,uint256,uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWithdrawalFinalized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "l2Bridge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "l2TokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "l2TokenBeacon",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sharedBridge",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferTokenToSharedBridge",
    data: BytesLike
  ): Result;
}

export namespace ClaimedFailedDepositEvent {
  export type InputTuple = [
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [to: string, l1Token: string, amount: bigint];
  export interface OutputObject {
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositInitiatedEvent {
  export type InputTuple = [
    l2DepositTxHash: BytesLike,
    from: AddressLike,
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    l2DepositTxHash: string,
    from: string,
    to: string,
    l1Token: string,
    amount: bigint
  ];
  export interface OutputObject {
    l2DepositTxHash: string;
    from: string;
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalFinalizedEvent {
  export type InputTuple = [
    to: AddressLike,
    l1Token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [to: string, l1Token: string, amount: bigint];
  export interface OutputObject {
    to: string;
    l1Token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IL1ERC20Bridge extends BaseContract {
  connect(runner?: ContractRunner | null): IL1ERC20Bridge;
  waitForDeployment(): Promise<this>;

  interface: IL1ERC20BridgeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claimFailedDeposit: TypedContractMethod<
    [
      _depositSender: AddressLike,
      _l1Token: AddressLike,
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  "deposit(address,address,uint256,uint256,uint256)": TypedContractMethod<
    [
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish
    ],
    [string],
    "payable"
  >;

  "deposit(address,address,uint256,uint256,uint256,address)": TypedContractMethod<
    [
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      _refundRecipient: AddressLike
    ],
    [string],
    "payable"
  >;

  depositAmount: TypedContractMethod<
    [_account: AddressLike, _l1Token: AddressLike, _depositL2TxHash: BytesLike],
    [bigint],
    "nonpayable"
  >;

  finalizeWithdrawal: TypedContractMethod<
    [
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  isWithdrawalFinalized: TypedContractMethod<
    [_l2BatchNumber: BigNumberish, _l2MessageIndex: BigNumberish],
    [boolean],
    "view"
  >;

  l2Bridge: TypedContractMethod<[], [string], "view">;

  l2TokenAddress: TypedContractMethod<
    [_l1Token: AddressLike],
    [string],
    "view"
  >;

  l2TokenBeacon: TypedContractMethod<[], [string], "view">;

  sharedBridge: TypedContractMethod<[], [string], "view">;

  transferTokenToSharedBridge: TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimFailedDeposit"
  ): TypedContractMethod<
    [
      _depositSender: AddressLike,
      _l1Token: AddressLike,
      _l2TxHash: BytesLike,
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit(address,address,uint256,uint256,uint256)"
  ): TypedContractMethod<
    [
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "deposit(address,address,uint256,uint256,uint256,address)"
  ): TypedContractMethod<
    [
      _l2Receiver: AddressLike,
      _l1Token: AddressLike,
      _amount: BigNumberish,
      _l2TxGasLimit: BigNumberish,
      _l2TxGasPerPubdataByte: BigNumberish,
      _refundRecipient: AddressLike
    ],
    [string],
    "payable"
  >;
  getFunction(
    nameOrSignature: "depositAmount"
  ): TypedContractMethod<
    [_account: AddressLike, _l1Token: AddressLike, _depositL2TxHash: BytesLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "finalizeWithdrawal"
  ): TypedContractMethod<
    [
      _l2BatchNumber: BigNumberish,
      _l2MessageIndex: BigNumberish,
      _l2TxNumberInBatch: BigNumberish,
      _message: BytesLike,
      _merkleProof: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isWithdrawalFinalized"
  ): TypedContractMethod<
    [_l2BatchNumber: BigNumberish, _l2MessageIndex: BigNumberish],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "l2Bridge"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "l2TokenAddress"
  ): TypedContractMethod<[_l1Token: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "l2TokenBeacon"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sharedBridge"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferTokenToSharedBridge"
  ): TypedContractMethod<
    [_token: AddressLike, _amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClaimedFailedDeposit"
  ): TypedContractEvent<
    ClaimedFailedDepositEvent.InputTuple,
    ClaimedFailedDepositEvent.OutputTuple,
    ClaimedFailedDepositEvent.OutputObject
  >;
  getEvent(
    key: "DepositInitiated"
  ): TypedContractEvent<
    DepositInitiatedEvent.InputTuple,
    DepositInitiatedEvent.OutputTuple,
    DepositInitiatedEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawalFinalized"
  ): TypedContractEvent<
    WithdrawalFinalizedEvent.InputTuple,
    WithdrawalFinalizedEvent.OutputTuple,
    WithdrawalFinalizedEvent.OutputObject
  >;

  filters: {
    "ClaimedFailedDeposit(address,address,uint256)": TypedContractEvent<
      ClaimedFailedDepositEvent.InputTuple,
      ClaimedFailedDepositEvent.OutputTuple,
      ClaimedFailedDepositEvent.OutputObject
    >;
    ClaimedFailedDeposit: TypedContractEvent<
      ClaimedFailedDepositEvent.InputTuple,
      ClaimedFailedDepositEvent.OutputTuple,
      ClaimedFailedDepositEvent.OutputObject
    >;

    "DepositInitiated(bytes32,address,address,address,uint256)": TypedContractEvent<
      DepositInitiatedEvent.InputTuple,
      DepositInitiatedEvent.OutputTuple,
      DepositInitiatedEvent.OutputObject
    >;
    DepositInitiated: TypedContractEvent<
      DepositInitiatedEvent.InputTuple,
      DepositInitiatedEvent.OutputTuple,
      DepositInitiatedEvent.OutputObject
    >;

    "WithdrawalFinalized(address,address,uint256)": TypedContractEvent<
      WithdrawalFinalizedEvent.InputTuple,
      WithdrawalFinalizedEvent.OutputTuple,
      WithdrawalFinalizedEvent.OutputObject
    >;
    WithdrawalFinalized: TypedContractEvent<
      WithdrawalFinalizedEvent.InputTuple,
      WithdrawalFinalizedEvent.OutputTuple,
      WithdrawalFinalizedEvent.OutputObject
    >;
  };
}

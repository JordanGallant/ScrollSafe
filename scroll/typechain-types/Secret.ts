/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Secret {
  export type SecretStruct = {
    domain: PromiseOrValue<string>;
    secret: PromiseOrValue<string>;
  };

  export type SecretStructOutput = [string, string] & {
    domain: string;
    secret: string;
  };
}

export interface SecretInterface extends utils.Interface {
  functions: {
    "deleteSecret(string)": FunctionFragment;
    "getSecrets()": FunctionFragment;
    "setSecret(string,string)": FunctionFragment;
    "shareSecret(address,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "deleteSecret"
      | "getSecrets"
      | "setSecret"
      | "shareSecret"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deleteSecret",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSecrets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setSecret",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "shareSecret",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "deleteSecret",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getSecrets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setSecret", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shareSecret",
    data: BytesLike
  ): Result;

  events: {
    "SecretDeleted(address,string)": EventFragment;
    "SecretShared(address,address,string)": EventFragment;
    "SecretStored(address,string)": EventFragment;
    "SecretUpdated(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SecretDeleted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SecretShared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SecretStored"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SecretUpdated"): EventFragment;
}

export interface SecretDeletedEventObject {
  owner: string;
  domain: string;
}
export type SecretDeletedEvent = TypedEvent<
  [string, string],
  SecretDeletedEventObject
>;

export type SecretDeletedEventFilter = TypedEventFilter<SecretDeletedEvent>;

export interface SecretSharedEventObject {
  owner: string;
  recipient: string;
  domain: string;
}
export type SecretSharedEvent = TypedEvent<
  [string, string, string],
  SecretSharedEventObject
>;

export type SecretSharedEventFilter = TypedEventFilter<SecretSharedEvent>;

export interface SecretStoredEventObject {
  owner: string;
  domain: string;
}
export type SecretStoredEvent = TypedEvent<
  [string, string],
  SecretStoredEventObject
>;

export type SecretStoredEventFilter = TypedEventFilter<SecretStoredEvent>;

export interface SecretUpdatedEventObject {
  owner: string;
  domain: string;
}
export type SecretUpdatedEvent = TypedEvent<
  [string, string],
  SecretUpdatedEventObject
>;

export type SecretUpdatedEventFilter = TypedEventFilter<SecretUpdatedEvent>;

export interface Secret extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SecretInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    deleteSecret(
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSecrets(
      overrides?: CallOverrides
    ): Promise<[Secret.SecretStructOutput[]]>;

    setSecret(
      _domain: PromiseOrValue<string>,
      _secret: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shareSecret(
      _recipient: PromiseOrValue<string>,
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  deleteSecret(
    _domain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSecrets(overrides?: CallOverrides): Promise<Secret.SecretStructOutput[]>;

  setSecret(
    _domain: PromiseOrValue<string>,
    _secret: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shareSecret(
    _recipient: PromiseOrValue<string>,
    _domain: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deleteSecret(
      _domain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getSecrets(overrides?: CallOverrides): Promise<Secret.SecretStructOutput[]>;

    setSecret(
      _domain: PromiseOrValue<string>,
      _secret: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    shareSecret(
      _recipient: PromiseOrValue<string>,
      _domain: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SecretDeleted(address,string)"(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretDeletedEventFilter;
    SecretDeleted(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretDeletedEventFilter;

    "SecretShared(address,address,string)"(
      owner?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretSharedEventFilter;
    SecretShared(
      owner?: PromiseOrValue<string> | null,
      recipient?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretSharedEventFilter;

    "SecretStored(address,string)"(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretStoredEventFilter;
    SecretStored(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretStoredEventFilter;

    "SecretUpdated(address,string)"(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretUpdatedEventFilter;
    SecretUpdated(
      owner?: PromiseOrValue<string> | null,
      domain?: PromiseOrValue<string> | null
    ): SecretUpdatedEventFilter;
  };

  estimateGas: {
    deleteSecret(
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSecrets(overrides?: CallOverrides): Promise<BigNumber>;

    setSecret(
      _domain: PromiseOrValue<string>,
      _secret: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shareSecret(
      _recipient: PromiseOrValue<string>,
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deleteSecret(
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSecrets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setSecret(
      _domain: PromiseOrValue<string>,
      _secret: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shareSecret(
      _recipient: PromiseOrValue<string>,
      _domain: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Secret",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Secret__factory>;
    getContractFactory(
      name: "SecretStore",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SecretStore__factory>;

    getContractAt(
      name: "Secret",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Secret>;
    getContractAt(
      name: "SecretStore",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SecretStore>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

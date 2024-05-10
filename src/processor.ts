import {
  type BlockHeader,
  type DataHandlerContext,
  EvmBatchProcessor,
  type EvmBatchProcessorFields,
  type Log as _Log,
  type Transaction as _Transaction,
} from '@subsquid/evm-processor'
import type {Store} from '@subsquid/typeorm-store'
import {assertNotNull} from '@subsquid/util-internal'

export const CONTRACT_ADDRESS = '0x336C9297AFB7798c292E9f80d8e566b947f291f0'
export const CONTRACT_DEPLOYED_AT = 12743284

export const processor = new EvmBatchProcessor()
  .includeAllBlocks()
  .setGateway({url: 'https://v2.archive.subsquid.io/network/base-mainnet'})
  .setRpcEndpoint({
    // Set the URL via .env for local runs or via secrets when deploying to Subsquid Cloud
    // https://docs.subsquid.io/deploy-squid/env-variables/
    url: assertNotNull(process.env.RPC_ENDPOINT),
    // More RPC connection options at https://docs.subsquid.io/evm-indexing/configuration/initialization/#set-data-source
    rateLimit: 5,
  })
  .setFinalityConfirmation(75)
  .setBlockRange({from: CONTRACT_DEPLOYED_AT})

export type Fields = EvmBatchProcessorFields<typeof processor>
export type Context = DataHandlerContext<Store, Fields>
export type Block = BlockHeader<Fields>
export type Log = _Log<Fields>
export type Transaction = _Transaction<Fields>

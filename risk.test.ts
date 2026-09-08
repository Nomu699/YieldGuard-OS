import { describe,it,expect } from 'vitest';
import { evaluatePolicy } from '../src/policy/engine.js';
describe('risk engine',()=>{it('blocks excess exposure',()=>{const p={maxProtocolExposurePct:30,maxAutoTransactionUsd:300,maxSlippageBps:50,minLiquidityUsd:100000,requireVerifiedContract:true,allowedChains:['DemoChain'],allowedProtocols:['Conservative Pool']};expect(evaluatePolicy({protocol:'Conservative Pool',chain:'DemoChain',amountUsd:100,slippageBps:10,contractVerified:true,postPositionPct:31,liquidityUsd:1e6},p).decision).toBe('BLOCK')})});

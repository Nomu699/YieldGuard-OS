import type { Opportunity } from '../mock/protocols.js';
import type { TransactionProposal } from '../policy/schemas.js';
export function plan(opportunity: Opportunity, amountUsd: number): TransactionProposal { return { protocol:opportunity.protocol, chain:opportunity.chain, amountUsd, slippageBps:opportunity.slippageBps, contractVerified:opportunity.contractVerified, postPositionPct:opportunity.exposurePct, liquidityUsd:opportunity.liquidityUsd }; }

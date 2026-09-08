import type { Policy, RiskResult, TransactionProposal } from './schemas.js';

export function evaluatePolicy(tx: TransactionProposal, policy: Policy): RiskResult {
  const reasons: string[] = [];
  if (!policy.allowedChains.includes(tx.chain)) reasons.push(`Unsupported chain: ${tx.chain}`);
  if (!policy.allowedProtocols.includes(tx.protocol)) reasons.push(`Protocol is not allowlisted: ${tx.protocol}`);
  if (policy.requireVerifiedContract && !tx.contractVerified) reasons.push('Contract is not verified');
  if (tx.liquidityUsd < policy.minLiquidityUsd) reasons.push(`Liquidity below minimum: $${tx.liquidityUsd.toLocaleString()}`);
  if (tx.slippageBps > policy.maxSlippageBps) reasons.push(`Slippage exceeds ${policy.maxSlippageBps} bps`);
  if (tx.postPositionPct > policy.maxProtocolExposurePct) reasons.push(`Protocol exposure would exceed ${policy.maxProtocolExposurePct}%`);
  if (reasons.length) return { decision: 'BLOCK', reasons };
  if (tx.amountUsd > policy.maxAutoTransactionUsd) return { decision: 'CONFIRM', reasons: [`Transaction exceeds autonomous limit of $${policy.maxAutoTransactionUsd}`] };
  return { decision: 'ALLOW', reasons: ['All policy checks passed'] };
}

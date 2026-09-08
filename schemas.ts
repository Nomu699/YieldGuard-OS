export type Decision = 'ALLOW' | 'CONFIRM' | 'BLOCK';

export interface Policy {
  maxProtocolExposurePct: number;
  maxAutoTransactionUsd: number;
  maxSlippageBps: number;
  minLiquidityUsd: number;
  requireVerifiedContract: boolean;
  allowedChains: string[];
  allowedProtocols: string[];
}

export interface TransactionProposal {
  protocol: string;
  chain: string;
  amountUsd: number;
  slippageBps: number;
  contractVerified: boolean;
  postPositionPct: number;
  liquidityUsd: number;
}

export interface RiskResult {
  decision: Decision;
  reasons: string[];
}

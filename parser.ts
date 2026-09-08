import type { Policy } from './schemas.js';

export function parsePolicy(text: string): Policy {
  const pct = text.match(/(?:max|never).*?(\d+)%.*?(?:protocol|one protocol)/i)?.[1];
  const usd = text.match(/(?:more than|above|over|>)\s*\$?(\d[\d,]*)/i)?.[1];
  return {
    maxProtocolExposurePct: pct ? Number(pct) : 30,
    maxAutoTransactionUsd: usd ? Number(usd.replace(/,/g, '')) : 300,
    maxSlippageBps: 50,
    minLiquidityUsd: 100_000,
    requireVerifiedContract: /verified contract|verified contracts|unknown contracts/i.test(text) ? true : true,
    allowedChains: ['DemoChain'],
    allowedProtocols: ['Conservative Pool', 'Stable Yield'],
  };
}

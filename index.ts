import { runYieldGuard } from './agent/orchestrator.js';

const intent='Put my idle USDC to work. Max 30% per protocol. Only verified contracts. Ask before spending more than $300.';

console.log('\nYIELDGUARD — POLICY-CONTROLLED ONCHAIN WORKFLOW\n');
console.log('INTENT:', intent);
console.log('\nSCAN...');
const result = await runYieldGuard(intent, 450);
for (const item of result.evaluations) console.log(`${item.candidate.protocol.padEnd(24)} ${item.candidate.apy}% APY → ${item.result.decision}${item.result.reasons[0] ? ` — ${item.result.reasons[0]}` : ''}`);
console.log('\n', result.message);
if (result.selected) console.log('Selected:', result.selected.candidate.protocol);
if ('execution' in result) console.log('TX:', result.execution?.txHash, result.verification);

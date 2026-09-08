import type { RiskResult } from '../policy/schemas.js';
export function explain(result:RiskResult) { return result.decision === 'BLOCK' ? `BLOCKED: ${result.reasons.join('; ')}` : result.decision === 'CONFIRM' ? `CONFIRMATION REQUIRED: ${result.reasons.join('; ')}` : 'READY: all policy checks passed.'; }

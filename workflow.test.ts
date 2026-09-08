import { describe,it,expect } from 'vitest';
import { runYieldGuard } from '../src/agent/orchestrator.js';
describe('workflow',()=>{it('finds a compliant opportunity',async()=>{const r=await runYieldGuard('Max 30% per protocol. Only verified contracts. Ask before spending more than $300.',150);expect(r.selected?.candidate.protocol).toBe('Conservative Pool');expect(r.message).toContain('TRANSACTION COMPLETE')})});

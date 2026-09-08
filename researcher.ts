import { defi } from '../tools/defi.js';
export function research() { return defi.listOpportunities().sort((a,b)=>b.apy-a.apy); }

import { parsePolicy } from '../policy/parser.js';
import { evaluatePolicy } from '../policy/engine.js';
import { research } from './researcher.js';
import { plan } from './planner.js';
import { explain } from './explainer.js';
import { onchain } from '../tools/onchain.js';
import { verify } from '../tools/verification.js';

export async function runYieldGuard(intent:string, amountUsd:number, approve=false) {
 const policy=parsePolicy(intent); const candidates=research();
 const evaluations=candidates.map(c=>({candidate:c,result:evaluatePolicy(plan(c,amountUsd),policy)}));
 const eligible=evaluations.find(x=>x.result.decision!=='BLOCK');
 if(!eligible) return {policy,evaluations,message:'No compliant opportunity found.'};
 if(eligible.result.decision==='CONFIRM' && !approve) return {policy,evaluations,selected:eligible,message:explain(eligible.result)};
 const simulation={ok:true};
 const execution=onchain.execute(amountUsd); const verification=verify(execution.txHash);
 return {policy,evaluations,selected:eligible,simulation,execution,verification,message:'TRANSACTION COMPLETE'};
}

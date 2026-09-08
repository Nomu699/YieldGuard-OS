export interface Opportunity { protocol:string; asset:string; chain:string; apy:number; liquidityUsd:number; contractVerified:boolean; exposurePct:number; slippageBps:number; }
export const opportunities: Opportunity[] = [
 {protocol:'Conservative Pool',asset:'USDC',chain:'DemoChain',apy:7.2,liquidityUsd:4_200_000,contractVerified:true,exposurePct:20,slippageBps:18},
 {protocol:'High Yield Unknown',asset:'USDC',chain:'DemoChain',apy:11.8,liquidityUsd:800_000,contractVerified:false,exposurePct:15,slippageBps:25},
 {protocol:'Stable Yield',asset:'USDC',chain:'DemoChain',apy:6.4,liquidityUsd:2_000_000,contractVerified:true,exposurePct:25,slippageBps:20},
 {protocol:'Concentrated Pool',asset:'USDC',chain:'DemoChain',apy:18.4,liquidityUsd:2_100_000,contractVerified:true,exposurePct:45,slippageBps:30},
];

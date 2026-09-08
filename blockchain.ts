export function mockExecute(amountUsd:number) { return { txHash:`0x${Math.random().toString(16).slice(2).padEnd(64,'0').slice(0,64)}`, status:'CONFIRMED' as const, amountUsd }; }

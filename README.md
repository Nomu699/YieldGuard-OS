# YieldGuard

### Autonomous DeFi, controlled by your policy.

YieldGuard is a policy-controlled AI/onchain workflow MVP. It turns natural-language intent into a sequence of research, deterministic risk checks, approval, execution, and verification.

> **AI proposes. Policy decides. Wallet executes. Blockchain verifies.**

## Demo

```bash
npm install
npm run dev
```

The demo runs without real funds and shows three paths:

- 🟢 compliant transaction → `ALLOW`
- 🟡 transaction above the autonomous limit → `CONFIRM`
- 🔴 unverified contract / excess exposure → `BLOCK`

## Architecture

```text
User Intent
    ↓
Intent Interpreter
    ↓
Research → Candidate Opportunities
    ↓
Action Planner
    ↓
Deterministic Policy + Risk Engine
    ↓
ALLOW / CONFIRM / BLOCK
    ↓
Wallet Adapter
    ↓
Simulation → Execution → Verification
```

The LLM is deliberately not the authority for transaction safety. The policy/risk layer is deterministic and can be tested independently.

## Project structure

- `src/agent` — intent, research, planning, explanations
- `src/policy` — policy schema/parser/enforcement
- `src/risk` — transaction safety decisions
- `src/tools` — wallet, DeFi, simulation and verification interfaces
- `src/workflows` — staking, DeFi and onchain workflows
- `src/mock` — deterministic demo data and blockchain adapter
- `tests` — policy, risk and workflow tests
- `apps/dashboard` — starter UI components for a future Next.js dashboard

## Security model

YieldGuard is a hackathon MVP. Demo mode uses a mock wallet and blockchain. Do not connect production funds until every adapter, permission boundary, transaction simulation, contract allowlist, and verification path has been independently audited.

Hard restrictions include transaction limits, protocol exposure, slippage, liquidity, verified-contract requirements, and supported-chain/protocol allowlists.

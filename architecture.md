# Architecture

YieldGuard separates probabilistic reasoning from deterministic authority.

1. Orchestrator interprets intent.
2. Researcher gathers candidates.
3. Planner creates a transaction proposal.
4. Policy engine evaluates hard constraints.
5. Wallet adapter prepares/executes only permitted actions.
6. Verification checks resulting state.

The mock adapters can be replaced with Agent OS / Web3 integrations without changing policy logic.

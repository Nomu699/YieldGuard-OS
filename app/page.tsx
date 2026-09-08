"use client";

import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState("READY");

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#09090b",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>🛡️ YIELDGUARD</h1>
        <p>Policy-Controlled Autonomous DeFi</p>

        <h2>$1,000</h2>
        <p>Wallet Value</p>

        <hr />

        <h2>YOUR POLICY</h2>
        <p>Max exposure: <b>30%</b></p>
        <p>Auto limit: <b>$300</b></p>
        <p>Verified contracts: <b>ON</b></p>

        <hr />

        <h2>DEMO</h2>

        <button onClick={() => setStatus("✅ ALLOW — $150 transaction confirmed")}>
          🟢 Execute $150
        </button>

        <br /><br />

        <button onClick={() => setStatus("⏸ CONFIRMATION REQUIRED — $450 exceeds $300 limit")}>
          🟡 Execute $450
        </button>

        <br /><br />

        <button onClick={() => setStatus("🚫 BLOCKED — Contract not verified")}>
          🔴 Unsafe Pool
        </button>

        <h2>STATUS</h2>
        <p>{status}</p>

        <hr />

        <p>
          AI proposes. Policy decides. Wallet executes. Blockchain verifies.
        </p>
      </div>
    </main>
  );
      }

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
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1>🛡️ YIELDGUARD</h1>
        <p>Autonomous Onchain Treasury</p>

        <h2>$1,000</h2>
        <p>Wallet Value</p>

        <hr />

        <h2>YOUR POLICY</h2>
        <p>Max exposure: <b>30%</b></p>
        <p>Auto limit: <b>$300</b></p>
        <p>Verified contracts: <b>ON</b></p>

        <hr />

        <h2>DEMO</h2>

        <button
          onClick={() =>
            setStatus("✅ ALLOW — $150 transaction confirmed")
          }
          style={buttonStyle}
        >
          🟢 Execute $150
        </button>

        <button
          onClick={() =>
            setStatus(
              "⏸ CONFIRMATION REQUIRED — $450 exceeds $300 limit"
            )
          }
          style={buttonStyle}
        >
          🟡 Execute $450
        </button>

        <button
          onClick={() =>
            setStatus("🚫 BLOCKED — Contract not verified")
          }
          style={buttonStyle}
        >
          🔴 Unsafe Pool
        </button>

        <hr />

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

const buttonStyle = {
  display: "block",
  width: "100%",
  padding: "14px",
  marginTop: "12px",
  borderRadius: "8px",
  border: "1px solid #3f3f46",
  background: "#27272a",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

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

        <div style={cardStyle}>
          <h2>$1,000</h2>
          <p>Wallet Value</p>
        </div>

        <div style={cardStyle}>
          <h2>YOUR POLICY</h2>
          <p>Max exposure: <b>30%</b></p>
          <p>Auto limit: <b>$300</b></p>
          <p>Verified contracts: <b>ON</b></p>
        </div>

        <div style={cardStyle}>
          <h2>DEMO</h2>

          <button
            style={buttonStyle}
            onClick={() =>
              setStatus("✅ ALLOW — $150 transaction confirmed")
            }
          >
            🟢 Execute $150
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              setStatus(
                "⏸ CONFIRMATION REQUIRED — $450 exceeds $300 limit"
              )
            }
          >
            🟡 Execute $450
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              setStatus("🚫 BLOCKED — Contract not verified")
            }
          >
            🔴 Unsafe Pool
          </button>
        </div>

        <div style={cardStyle}>
          <h2>STATUS</h2>
          <p>{status}</p>
        </div>

        <p style={{ marginTop: "30px", opacity: 0.7 }}>
          AI proposes. Policy decides. Wallet executes. Blockchain verifies.
        </p>
      </div>
    </main>
  );
}

const cardStyle: React.CSSProperties = {
  background: "#18181b",
  padding: "24px",
  borderRadius: "12px",
  marginTop: "20px",
};

const buttonStyle: React.CSSProperties = {
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

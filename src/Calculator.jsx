import React, { useState, useEffect } from "react";
import "./Calculator.css";
import { PieChart, Pie, Cell, Legend } from "recharts";

export default function Calculator() {
  const [monthly, setMonthly] = useState("1000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("30");
  const [futureValue, setFutureValue] = useState(null);

  const calculateSIP = () => {
    const P = parseFloat(monthly);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseInt(years) * 12;

    if (!P || !r || !n) return;

    const fv = P * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
    setFutureValue(fv.toFixed(0));
  };

  useEffect(() => {
    calculateSIP(); // Automatically calculate on page load
  }, []);

  const totalInvested = monthly * 12 * years;
  const wealthGained = futureValue ? futureValue - totalInvested : 0;

  const data = [
    { name: "Invested", value: totalInvested },
    { name: "Returns", value: wealthGained }
  ];

  const COLORS = ["#ff8a80", "#82ca9d"];

  return (
    <div className="container">
      <div className="calculator">
        <h2>SIP Calculator</h2>

        <div className="input-group">
          <input
            type="number"
            placeholder="Monthly Investment"
            value={monthly}
            onChange={e => setMonthly(e.target.value)}
          />
          <input
            type="number"
            placeholder="Rate of Return (%)"
            value={rate}
            onChange={e => setRate(e.target.value)}
          />
          <input
            type="number"
            placeholder="Investment Period (Years)"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
        </div>

        <button className="button" onClick={calculateSIP}>
          CALCULATE
        </button>

        {futureValue && (
          <div className="results">
            <div className="flex-row">
              <PieChart width={160} height={160}>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={70}
                  paddingAngle={5}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
              <div>
                <p>
                  Monthly SIP of ₹{monthly} for {years} years @ {rate}% will grow to
                </p>
                <p className="result-value">₹{futureValue}</p>
              </div>
            </div>

            <div className="info-boxes">
              <div className="info red">
                <p>Total Amount Invested</p>
                <p className="info-value">₹{totalInvested}</p>
              </div>
              <div className="info blue">
                <p>Wealth Gained</p>
                <p className="info-value">₹{wealthGained}</p>
              </div>
            </div>

            <p className="text-center">
              Your investment has multiplied by{" "}
              <span className="bold">
                {(futureValue / totalInvested).toFixed(2)} times
              </span>
            </p>
          </div>
        )}
      </div>

      <div className="lumpsum-section">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="card">
            <div>
              <h4>Lumpsum</h4>
              <p>Calculate the future value of a lumpsum investment</p>
              <button className="card-button">CALCULATE</button>
            </div>
            <div className="card-icon">💸</div>
          </div>
        ))}
      </div>
    </div>
  );
}

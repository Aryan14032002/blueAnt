import React, { useState, useEffect } from "react";
import "./Calculator.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Calculator() {
  const [monthly, setMonthly] = useState("1000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("10");
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
    calculateSIP();
  }, [monthly, rate, years]);

  const totalInvested = monthly * 12 * years;
  const wealthGained = futureValue ? futureValue - totalInvested : 0;

  const data = [
    { name: "Invested", value: totalInvested },
    { name: "Returns", value: wealthGained },
  ];

  const COLORS = ["#ed3237", "#00afef"];

  return (
    <div className="container">
      {/* LEFT SECTION */}
      <div className="calculator">
        <h2>Just Check How SIP Grow Your Wealth</h2>

        <div className="top-section">
          <div className="inputs">
            <input
              type="number"
              placeholder="Monthly Investment"
              value={monthly}
              onChange={(e) => setMonthly(e.target.value)}
            />
            <input
              type="number"
              placeholder="Rate of Return (%)"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <input
              type="number"
              placeholder="Investment Period (Years)"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />

            <button className="button" onClick={calculateSIP}>
              CALCULATE
            </button>
          </div>

          {futureValue && (
            <div className="chart-block">
              <PieChart width={280} height={260}>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={1}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value}`} />
              </PieChart>

              <div className="legend">
                <div className="legend-item">
                  <span className="legend-color red"></span> Invested
                </div>
                <div className="legend-item">
                  <span className="legend-color blue"></span> Returns
                </div>
              </div>
            </div>
          )}
        </div>

        {futureValue && (
          <div className="results">
            <p className="sip-summary">
              Monthly SIP of ₹{monthly} incremented annually <br />
              by ₹0 for {years} years @ {rate}% will grow to <br />
              <span className="result-value">₹{futureValue}</span>
            </p>

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
              <span>Your investment has multiplied by</span>
              <br />
              <span className="bold highlight">
                {(futureValue / totalInvested).toFixed(2)} times
              </span>
            </p>
          </div>
        )}
      </div>

      {/* RIGHT CARDS SECTION */}
      <div className="lumpsum-section">
        {[
          {
            title: "Loan",
            description: "Calculate your loan payments and interest",
            image: "/loan-1.png",
          },
          {
            title: "Lumpsum",
            description: "Calculate the future value of a lumpsum investment",
            image: "/lumpsum.png",
          },
          {
            title: "Income Tax",
            description: "Calculate your income tax liability",
            image: "/tax.png",
          },
          {
            title: "Retirement Corpus",
            description: "Plan your retirement savings and corpus",
            image: "/retirment.png",
          },
          
        ].map((card, idx) => (
          <div key={idx} className="card">
            <div>
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <button className="card-button">CALCULATE</button>
            </div>
            <div className="card-icon">
              <img
                src={card.image}
                alt={card.title}
                className="card-icon-img"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
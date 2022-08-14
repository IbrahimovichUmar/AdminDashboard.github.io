import React from "react";
import { PieChart, Pie } from "recharts";

export default function Chart2() {
  const apple = [
    { name: "", value: 300, fill: "#FF7777" },
    { name: "", value: 300, fill: "#2BEBC8" },
    { name: "", value: 200, fill: "#694BDB" },
  ];
  return (
    <div className="Chart2">
      <PieChart width={220} height={220}>
        <Pie
          data={apple}
          cx={100}
          cy={100}
          innerRadius={50}
          outerRadius={70}
          labelLine={false}
          isAnimationActive={false}
        ></Pie>
      </PieChart>
    </div>
  );
}

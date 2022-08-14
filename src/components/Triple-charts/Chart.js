import React from "react";
import { AreaChart, Area } from "recharts";

const styles = {
  textAlign: "center",
};

export default function TripleCharts({ chartColor, data }) {
  return (
    <div style={styles}>
      <div>
        <AreaChart width={150} height={144} data={data}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#FF5151" stopOpacity={1} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="pv"
            stroke={chartColor}
            fillOpacity={2}
            fill="url(#colorPv)"
            strokeWidth={2}
          />
        </AreaChart>
      </div>
    </div>
  );
}

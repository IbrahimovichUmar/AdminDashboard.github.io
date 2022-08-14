import { BarChart, Bar, CartesianGrid } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 1200,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2500,
    pv: 2600,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 4800,
    pv: 6500,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 3780,
    pv: 4108,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 4508,
    pv: 3980,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 3390,
    pv: 5000,
    amt: 2500,
  },
];

export default function Chart() {
  return (
    <BarChart
      width={900}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 0,
        left: 50,
        bottom: 15,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="pv" fill="#694BDB" />
      <Bar dataKey="uv" fill="#2BEBC8" />
    </BarChart>
  );
}

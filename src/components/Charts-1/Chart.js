import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    pv: 500,
    amt: 2400,
  },
  {
    name: "Page B",
    pv: 1600,
    amt: 2210,
  },
  {
    name: "Page C",
    pv: 3500,
    amt: 2290,
  },
  {
    name: "Page D",
    pv: 2250,
    amt: 2000,
  },
  {
    name: "Page E",
    pv: 5000,
    amt: 2181,
  },
  {
    name: "Page F",
    pv: 1000,
    amt: 2500,
  },
];

export default function Chart1() {
  return (
    <BarChart
      width={450}
      height={150}
      data={data}
      margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Bar dataKey="pv" fill="#694BDB" />
    </BarChart>
  );
}

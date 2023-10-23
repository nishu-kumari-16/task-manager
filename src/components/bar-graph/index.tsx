import {
  BarChart,
  CartesianGrid,
  Bar,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    value: 10,
  },
  {
    name: "B",
    value: 40,
  },
  {
    name: "C",
    value: 20,
  },
  {
    name: "D",
    value: 42,
  },
  {
    name: "E",
    value: 30,
  },
  {
    name: "F",
    value: 35,
  },
];
const barColors = [
  "#FF694A",
  "#1EA7FF",
  "#5051F9",
  "#FF694A",
  "#1EA7FF",
  "#5051F9",
];

const BarGraph = () => {
  return (
    <ResponsiveContainer width="95%" height="100%">
      <BarChart width={250} height={200} data={data}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <Bar dataKey="value" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={barColors[index % 20]}
              radius={10}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
export default BarGraph;

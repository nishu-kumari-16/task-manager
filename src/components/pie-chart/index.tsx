import { Cell, Label, Pie, PieChart } from "recharts";

const data = [
  { name: "Group A", value: 15 },
  { name: "Group B", value: 85 },
];
const COLORS = ["#FF8042", "#1EA7FF"];

const DonutChart = () => {
  return (
    <PieChart width={90} height={90}>
      <Pie
        data={data}
        cx={45}
        cy={45}
        innerRadius={30}
        outerRadius={40}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry: any, index: any) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <Label
          value={`${data[1].value}%`}
          position="center"
          className="label-top"
          fontSize="14px"
        />
      </Pie>
    </PieChart>
  );
};
export default DonutChart;

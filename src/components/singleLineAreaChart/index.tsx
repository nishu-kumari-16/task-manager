import { Area, AreaChart, ResponsiveContainer } from "recharts";

const SingleLineAreaChart = ({ data, color }: any) => {
  return (
    <ResponsiveContainer height={70} width="99%">
      <AreaChart width={115} data={data}>
        <defs>
          <linearGradient id={`color${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8} />
            <stop offset="80%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          height={50}
          dataKey="uv"
          strokeWidth={2}
          stroke={color}
          fillOpacity={1}
          fill={`url(#color${color})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default SingleLineAreaChart;

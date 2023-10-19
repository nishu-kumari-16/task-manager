import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const MultiLineAreaChart = ({ data, primaryColor, secondaryColor }: any) => {
  return (
    <ResponsiveContainer height={300} width="99%" className="ml-[-1.5rem]">
      <AreaChart data={data}>
        <defs>
          <linearGradient
            id={`color${primaryColor}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={primaryColor} stopOpacity={0.8} />
            <stop offset="80%" stopColor={primaryColor} stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id={`color${secondaryColor}`}
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.8} />
            <stop offset="80%" stopColor={secondaryColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          height={50}
          dataKey="primaryData"
          stroke={primaryColor}
          strokeWidth={2}
          fillOpacity={1}
          fill={`url(#color${primaryColor})`}
          dot={{
            fill: primaryColor,
            strokeWidth: 2,
            r: 4,
            stroke: "white",
            strokeDasharray: "",
          }}
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Area
          type="monotone"
          height={50}
          dataKey="secondaryData"
          strokeWidth={2}
          stroke={secondaryColor}
          fillOpacity={1}
          dot={{
            fill: secondaryColor,
            strokeWidth: 1,
            stroke: "white",
            r: 4,
            strokeDasharray: "",
          }}
          fill={`url(#color${secondaryColor})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default MultiLineAreaChart;

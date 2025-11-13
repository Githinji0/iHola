
import React from "react";
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";

// Sample streak intensity data
const data = [
  { subject: "Mon", streak: 80 },
  { subject: "Tue", streak: 95 },
  { subject: "Wed", streak: 40 },
  { subject: "Thu", streak: 100 },
  { subject: "Fri", streak: 70 },
  { subject: "Sat", streak: 50 },
  { subject: "Sun", streak: 85 },
];

const StreakGraph = () => {
  return (
    <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 bg-white/80 rounded-2xl shadow-md flex flex-col justify-center p-3">

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#475569", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#64748b", fontSize: 10 }}
          />
          <Tooltip
            formatter={(value) => `${value}% intensity`}
            contentStyle={{
              backgroundColor: "rgba(30, 41, 59, 0.8)",
              color: "white",
              border: "none",
              borderRadius: "8px",
            }}
          />
          <Radar
            name="Streak Intensity"
            dataKey="streak"
            stroke="#43aa8b"
            fill="#f3722cff"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StreakGraph;

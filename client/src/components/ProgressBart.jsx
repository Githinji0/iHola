import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts";

const data = [{ name: "Progress", value: 60 }];

export const ProgressBart = () => (
    <ResponsiveContainer width="100%" height={20}>
        <BarChart data={data}>
            <Bar dataKey="value" fill="#f3722c" radius={[10, 10, 10, 10]} />
        </BarChart>
    </ResponsiveContainer>);

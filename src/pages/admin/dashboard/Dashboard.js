import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading, Stack } from '@chakra-ui/react';
import { CartesianGrid, XAxis, YAxis, LineChart, Tooltip, ResponsiveContainer, Line } from 'recharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 100, pv: 1400, amt: 1400 }];
const Dashboard = () => {
    return (_jsxs(Stack, { minHeight: 'calc(100vh - 115px)', bgColor: 'gray.200', children: [_jsx(Heading, { textAlign: 'center', children: "Dashboard" }), _jsx(ResponsiveContainer, { width: 700, height: "80%", children: _jsxs(LineChart, { width: 730, height: 250, data: data, margin: { top: 5, right: 30, left: 20, bottom: 5 }, children: [_jsx(CartesianGrid, { strokeDasharray: "3 3" }), _jsx(XAxis, { dataKey: "name" }), _jsx(YAxis, {}), _jsx(Tooltip, {}), _jsx(Line, { type: "monotone", dataKey: "pv", stroke: "#8884d8" }), _jsx(Line, { type: "monotone", dataKey: "uv", stroke: "#82ca9d" })] }) })] }));
};
export default Dashboard;

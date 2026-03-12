"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DashboardChartProps {
  data: {
    name: string;
    interactions: number;
    visites: number;
  }[];
}

export default function DashboardChart({ data }: DashboardChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorVisites" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#eab308" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#eab308" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorInteractions" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.1} stroke="#000" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: 'currentColor', opacity: 0.5, fontSize: 12 }} 
          dx={-10}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            borderRadius: '1rem',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
          }}
          itemStyle={{ color: '#000', fontWeight: 'bold' }}
        />
        <Area
          type="monotone"
          dataKey="visites"
          name="Visites"
          stroke="#eab308"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorVisites)"
        />
        <Area
          type="monotone"
          dataKey="interactions"
          name="Interactions"
          stroke="#f59e0b"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorInteractions)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

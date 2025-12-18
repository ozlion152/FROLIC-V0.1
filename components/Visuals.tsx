import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, Tooltip, YAxis } from 'recharts';
import { MARKET_DATA, COMPETITORS } from '../constants';
import { ArrowRight, Move, Box, Maximize, Layers } from 'lucide-react';

export const MarketChart = () => {
  return (
    <div className="w-full h-64 bg-transparent border border-frolic-black p-4 relative">
      <h3 className="absolute top-4 left-4 text-xs font-bold uppercase tracking-widest bg-frolic-black text-white px-2 py-1">
        2025 Seoul Rental Ratio
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={MARKET_DATA} layout="vertical" margin={{ top: 40, right: 30, left: 40, bottom: 5 }}>
          <XAxis type="number" hide />
          <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fill: '#000', fontWeight: 700}} axisLine={false} tickLine={false} />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 0 }}
            itemStyle={{ color: '#fff', fontFamily: 'monospace' }}
          />
          <Bar dataKey="value" barSize={40} radius={0}>
            {MARKET_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} stroke="#000" strokeWidth={2} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const NeedsCard = ({ icon: Icon, title, desc, sub }: { icon: any, title: string, desc: string, sub: string }) => (
  <div className="border border-frolic-black p-6 hover:bg-frolic-black hover:text-white transition-colors duration-300 group min-h-[280px] flex flex-col justify-between">
    <div>
      <div className="flex justify-between items-start mb-6">
        <Icon className="w-8 h-8 stroke-1" />
        <span className="font-mono text-xs border border-frolic-black group-hover:border-white px-2 py-1 rounded-full">
          {title}
        </span>
      </div>
      <h4 className="text-xl font-bold mb-4 leading-tight">{desc}</h4>
    </div>
    <p className="text-sm opacity-60 group-hover:opacity-100 font-light text-justify leading-relaxed">
      {sub}
    </p>
  </div>
);

export const CompetitorDeepDive = () => (
  <div className="grid grid-cols-1 gap-12">
    {COMPETITORS.map((comp, idx) => (
      <div key={idx} className="border-t-2 border-frolic-black pt-6">
        <div className="flex flex-col md:flex-row md:items-baseline gap-4 mb-6">
          <h4 className="text-3xl font-black uppercase tracking-tighter">{comp.brand}</h4>
          <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">{comp.title}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-sm font-bold mb-2 uppercase text-gray-400 text-xs">Success Factor</p>
            <p className="text-sm leading-relaxed mb-6">{comp.success}</p>
            
            <div className="bg-frolic-black text-white p-4">
               <p className="text-xs font-mono text-frolic-accent mb-2 uppercase">Frolic's Strategy</p>
               <p className="font-bold text-sm leading-tight">{comp.strategy}</p>
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-xs font-black text-frolic-accent block mb-1">STRENGTH</span>
                <p className="text-xs text-gray-600 leading-snug">{comp.swot.s}</p>
              </div>
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-xs font-black text-gray-400 block mb-1">WEAKNESS</span>
                <p className="text-xs text-gray-600 leading-snug">{comp.swot.w}</p>
              </div>
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-xs font-black text-gray-400 block mb-1">OPPORTUNITY</span>
                <p className="text-xs text-gray-600 leading-snug">{comp.swot.o}</p>
              </div>
              <div className="bg-white border border-gray-200 p-3">
                <span className="text-xs font-black text-gray-400 block mb-1">THREAT</span>
                <p className="text-xs text-gray-600 leading-snug">{comp.swot.t}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
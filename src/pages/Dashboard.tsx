import { ArrowDownToLine, Download } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, BarChart, Bar, Cell } from 'recharts';

export default function Dashboard() {
  const salesData = [
    { name: '02/H2', uv: 180000 },
    { name: '03/H1', uv: 380000 },
    { name: '03/H2', uv: 530000 },
    { name: '04/H1', uv: 500000 },
    { name: '04/H2', uv: 90000 },
  ];

  const branchData = [
    { name: 'Quilmes', value: 750000 },
    { name: 'La Plata', value: 484400 },
    { name: 'Gonnet', value: 451200 },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-semibold mb-2">Panel General</h4>
          <h1 className="font-headline text-4xl font-normal text-white mb-2 tracking-tight">Hola, Ariel.</h1>
          <p className="font-body text-[#888] text-sm">Estado consolidado de las tres sucursales.</p>
        </div>
        
        <button className="flex items-center gap-2 text-sm font-body text-white bg-transparent border border-[#333] hover:border-[#555] hover:bg-white/5 transition-colors px-4 py-2 rounded-md">
          <Download className="w-4 h-4" /> Exportar PDF
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Deuda Card - Large */}
        <div className="col-span-2 bg-gradient-to-br from-[#122c1b] to-[#161616] border border-[#23422d] p-6 pb-5 rounded flex flex-col justify-between relative overflow-hidden shadow-[inset_0_0_80px_rgba(11,128,67,0.05)]">
           <div className="relative z-10 flex flex-col gap-1">
             <span className="font-label text-[0.65rem] text-[#6cb58d] uppercase tracking-[0.15em] font-semibold opacity-90">Deuda con All Covering</span>
             <span className="font-headline text-[3.25rem] font-light text-[#c5efd6] leading-[1.1] tracking-tight">$1.060.600</span>
           </div>
           <div className="relative z-10 mt-6 font-body text-xs text-[#8ca395]">
             <span className="font-semibold opacity-80">Σ (cajas vendidas × costo)</span> · 115 cajas rendidas
           </div>
        </div>

        {/* Utilidad Card */}
        <div className="bg-[#1f1f1f] border border-[#2a2a2a] p-6 pb-5 rounded flex flex-col justify-between">
           <div className="flex flex-col gap-1">
             <span className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold">Utilidad Bruta</span>
             <span className="font-headline text-4xl font-light text-[#df8752] leading-[1.1] tracking-tight mt-1">$603.200</span>
           </div>
           <div className="font-body text-xs text-[#666] mt-4">
             Margen sobre ventas totales
           </div>
        </div>

        {/* Stock Card */}
        <div className="bg-[#1f1f1f] border border-[#2a2a2a] p-6 pb-5 rounded flex flex-col justify-between">
           <div className="flex flex-col gap-1">
             <span className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold">Stock Disponible</span>
             <span className="font-headline text-4xl font-light text-white leading-[1.1] tracking-tight mt-1">358</span>
           </div>
           <div className="font-body text-xs text-[#666] mt-4">
             cajas · en 3 sucursales
           </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Area Chart */}
        <div className="col-span-2 bg-[#1b1b1b] border border-[#262626] p-6 rounded relative overflow-hidden min-h-[360px] flex flex-col">
          <div className="mb-8">
            <h3 className="font-headline text-base text-white font-medium mb-1">Evolución de ventas</h3>
            <p className="font-body text-xs text-[#666]">Facturación total por quincena</p>
          </div>
          
          <div className="flex-1 w-full min-h-[220px] ml-[-15px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0b8043" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#0b8043" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#666', fontSize: 11}} dy={10} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#666', fontSize: 11}} 
                  tickFormatter={(val) => `$${val.toLocaleString()}`}
                  width={80}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                  itemStyle={{ color: '#0b8043' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, 'Ventas']}
                />
                <Area type="monotone" dataKey="uv" stroke="#0b8043" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-[#1b1b1b] border border-[#262626] p-6 rounded min-h-[360px] flex flex-col relative overflow-hidden">
          <div className="mb-6">
             <h3 className="font-headline text-base text-white font-medium mb-1">Ventas por sucursal</h3>
          </div>
          <div className="flex-1 w-full mt-4 flex items-end justify-center px-4 ml-[-15px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={branchData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#2a2a2a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#888', fontSize: 10}} dy={10} />
                <YAxis 
                   axisLine={false} 
                   tickLine={false} 
                   tick={{fill: '#555', fontSize: 10}} 
                   tickFormatter={(val) => val >= 1000000 ? `${(val/1000000).toFixed(1)}M` : `${val/1000}k`}
                   width={50}
                />
                <Tooltip 
                  cursor={{fill: '#222'}} 
                  contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                  formatter={(val: number) => [`$${val.toLocaleString()}`, 'Ventas']}
                />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} maxBarSize={45}>
                  {branchData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#0b8043" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>

    </div>
  );
}

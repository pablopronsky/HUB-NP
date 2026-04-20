import { Download, ChevronDown } from 'lucide-react';
import { cn } from '../components/Layout';

export default function Stock() {
  
  const stockData = [
    { model: 'Floorpan Fix - Karayael', branch: 'Quilmes', in: 80, out: 20, drops: 2, av: 58 },
    { model: 'Floorpan Fix - Karayael', branch: 'La Plata', in: 30, out: 5, drops: 0, av: 25 },
    { model: 'Floorpan Fix - Budgay', branch: 'Quilmes', in: 60, out: 10, drops: 0, av: 50 },
    { model: 'Floorpan Classic - Dogal', branch: 'La Plata', in: 50, out: 14, drops: 1, av: 35 },
    { model: 'Floorpan Classic - Atlas', branch: 'Gonnet', in: 45, out: 6, drops: 1, av: 38 },
    { model: 'Valvi Green Chakra', branch: 'Quilmes', in: 70, out: 18, drops: 0, av: 52 },
    { model: 'Valvi SPC JC002-4A', branch: 'La Plata', in: 55, out: 12, drops: 0, av: 43 },
    { model: 'SPC Oferta', branch: 'Gonnet', in: 90, out: 30, drops: 3, av: 57 },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <h4 className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold mb-2">Inventario</h4>
          <h1 className="font-headline text-3xl font-normal text-white mb-2 tracking-tight">Stock actual</h1>
          <p className="font-body text-[#777] text-sm">Cajas disponibles por modelo y sucursal. Disponibles = ingresadas - vendidas - bajas.</p>
        </div>
        
        <button className="flex items-center gap-2 text-sm font-body text-white bg-transparent border border-[#333] hover:border-[#555] hover:bg-white/5 transition-colors px-4 py-2 rounded-md h-10">
          <Download className="w-4 h-4" /> Exportar Excel
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#1b1b1b] border border-[#2a2a2a] p-4 rounded flex items-center mb-2">
        <div className="flex items-center gap-4">
          <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Sucursal</span>
          <div className="bg-[#242424] border border-[#3a3a3a] rounded px-3 py-1.5 flex items-center gap-3 cursor-pointer hover:bg-[#2a2a2a] transition-colors">
            <span className="font-body text-sm text-white font-medium">Todas</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#888]" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#161616] border border-[#222] rounded overflow-hidden">
        
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#2a2a2a]">
          <div className="col-span-3 font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant font-semibold">Modelo</div>
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Sucursal</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Ingresadas</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Vendidas</div>
          <div className="col-span-1 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Bajas</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Disponibles</div>
        </div>

        <div className="flex flex-col">
          {stockData.map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "grid grid-cols-12 gap-4 px-6 py-4 font-body text-sm items-center transition-colors hover:bg-white/[0.03]",
                idx !== stockData.length - 1 ? "border-b border-[#1e1e1e]" : ""
              )}
            >
              <div className="col-span-3 text-white font-medium">{item.model}</div>
              <div className="col-span-2 text-on-surface-variant bg-[#222] px-2 py-0.5 rounded text-xs w-max">{item.branch}</div>
              <div className="col-span-2 text-right text-on-surface-variant font-mono">{item.in}</div>
              <div className="col-span-2 text-right text-[#b8b8b8] font-mono">{item.out}</div>
              <div className="col-span-1 text-right text-[#b8b8b8] font-mono">{item.drops}</div>
              <div className="col-span-2 text-right text-white font-bold font-mono text-[15px]">{item.av}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

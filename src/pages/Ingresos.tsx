import { Download, Plus } from 'lucide-react';
import { cn } from '../components/Layout';

export default function Ingresos() {
  
  const incomeData = [
    { date: '04 de abr de 2026', model: 'Floorpan Fix - Karayael', branch: 'La Plata', boxes: 30, cost: '$9.800', total: '$294.000' },
    { date: '31 de mar de 2026', model: 'SPC Oferta', branch: 'Gonnet', boxes: 90, cost: '$7.200', total: '$648.000' },
    { date: '19 de mar de 2026', model: 'Valvi SPC JC002-4A', branch: 'La Plata', boxes: 55, cost: '$8.500', total: '$467.500' },
    { date: '11 de mar de 2026', model: 'Valvi Green Chakra', branch: 'Quilmes', boxes: 70, cost: '$8.900', total: '$623.000' },
    { date: '01 de mar de 2026', model: 'Floorpan Classic - Atlas', branch: 'Gonnet', boxes: 45, cost: '$12.400', total: '$558.000' },
    { date: '17 de feb de 2026', model: 'Floorpan Classic - Dogal', branch: 'La Plata', boxes: 50, cost: '$11.500', total: '$575.000' },
    { date: '09 de feb de 2026', model: 'Floorpan Fix - Karayael', branch: 'Quilmes', boxes: 80, cost: '$9.800', total: '$784.000' },
    { date: '09 de feb de 2026', model: 'Floorpan Fix - Budgay', branch: 'Quilmes', boxes: 60, cost: '$10.200', total: '$612.000' },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold mb-2">Mercadería</h4>
          <h1 className="font-headline text-3xl font-normal text-white mb-2 tracking-tight">Ingresos de All Covering</h1>
          <p className="font-body text-[#777] text-sm">Mercadería recibida en consignación a precio costo. Genera la deuda contra venta.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-body text-white bg-transparent border border-[#333] hover:border-[#555] hover:bg-white/5 transition-colors px-4 py-2 rounded-md h-10">
            <Download className="w-4 h-4" /> Excel
          </button>
          
          <button className="flex items-center gap-2 text-sm font-headline font-semibold text-white bg-[#0b8043] hover:bg-[#0d9950] transition-colors px-6 py-2 rounded-md h-10 shadow">
            <Plus className="w-4 h-4" strokeWidth={3} /> Nuevo ingreso
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#161616] border border-[#222] rounded overflow-hidden mt-4">
        
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#2a2a2a]">
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Fecha</div>
          <div className="col-span-3 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Modelo</div>
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Sucursal</div>
          <div className="col-span-1 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Cajas</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Costo / Caja</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Total Costo</div>
        </div>

        <div className="flex flex-col">
          {incomeData.map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "grid grid-cols-12 gap-4 px-6 py-4 font-body text-sm items-center transition-colors hover:bg-white/[0.03]",
                idx !== incomeData.length - 1 ? "border-b border-[#1e1e1e]" : ""
              )}
            >
              <div className="col-span-2 text-[#999]">{item.date}</div>
              <div className="col-span-3 text-[#dfdfdf]">{item.model}</div>
              <div className="col-span-2 text-on-surface-variant bg-[#222] px-2 py-0.5 rounded text-xs w-max">{item.branch}</div>
              <div className="col-span-1 text-right text-white font-mono">{item.boxes}</div>
              <div className="col-span-2 text-right text-[#b8b8b8] font-mono">{item.cost}</div>
              <div className="col-span-2 text-right text-white font-bold font-mono">{item.total}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

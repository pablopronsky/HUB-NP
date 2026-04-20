import { Download, Plus } from 'lucide-react';
import { cn } from '../components/Layout';

export default function Ventas() {
  
  const salesData = [
    { date: '14 de abr de 2026', model: 'SPC Oferta', branch: 'Gonnet', vendor: 'Lucía Méndez', boxes: 8, price: '$11.200', total: '$89.600', profit: '$32.000' },
    { date: '11 de abr de 2026', model: 'Floorpan Fix - Karayael', branch: 'La Plata', vendor: 'Diego Ríos', boxes: 5, price: '$15.800', total: '$79.000', profit: '$30.000' },
    { date: '07 de abr de 2026', model: 'Valvi SPC JC002-4A', branch: 'La Plata', vendor: 'Diego Ríos', boxes: 12, price: '$12.900', total: '$154.800', profit: '$52.800' },
    { date: '02 de abr de 2026', model: 'SPC Oferta', branch: 'Gonnet', vendor: 'Lucía Méndez', boxes: 22, price: '$11.200', total: '$246.400', profit: '$88.000' },
    { date: '27 de mar de 2026', model: 'Valvi Green Chakra', branch: 'Quilmes', vendor: 'Carla Gómez', boxes: 18, price: '$13.900', total: '$250.200', profit: '$90.000' },
    { date: '21 de mar de 2026', model: 'Floorpan Classic - Atlas', branch: 'Gonnet', vendor: 'Lucía Méndez', boxes: 6, price: '$19.200', total: '$115.200', profit: '$40.800' },
    { date: '14 de mar de 2026', model: 'Floorpan Fix - Budgay', branch: 'Quilmes', vendor: 'Carla Gómez', boxes: 10, price: '$16.200', total: '$162.000', profit: '$60.000' },
    { date: '09 de mar de 2026', model: 'Floorpan Classic - Dogal', branch: 'La Plata', vendor: 'Diego Ríos', boxes: 14, price: '$17.900', total: '$250.600', profit: '$89.600' },
    { date: '04 de mar de 2026', model: 'Floorpan Fix - Karayael', branch: 'Quilmes', vendor: 'Carla Gómez', boxes: 8, price: '$15.800', total: '$126.400', profit: '$48.000' },
    { date: '21 de feb de 2026', model: 'Floorpan Fix - Karayael', branch: 'Quilmes', vendor: 'Carla Gómez', boxes: 12, price: '$15.800', total: '$189.600', profit: '$72.000' },
  ];

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-[0.15em] font-semibold mb-2">Movimientos</h4>
          <h1 className="font-headline text-3xl font-normal text-white mb-2 tracking-tight">Ventas</h1>
          <p className="font-body text-[#777] text-sm">Todas las ventas de las tres sucursales.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 text-sm font-body text-white bg-transparent border border-[#333] hover:border-[#555] hover:bg-white/5 transition-colors px-4 py-2 rounded-md h-10">
            <Download className="w-4 h-4" /> Excel
          </button>
          
          <button className="flex items-center gap-2 text-sm font-headline font-semibold text-white bg-[#0b8043] hover:bg-[#0d9950] transition-colors px-6 py-2 rounded-md h-10 shadow">
            <Plus className="w-4 h-4" strokeWidth={3} /> Registrar venta
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#161616] border border-[#222] rounded overflow-hidden mt-4">
        
        <div className="grid grid-cols-12 gap-3 px-6 py-4 border-b border-[#2a2a2a]">
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Fecha</div>
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Modelo</div>
          <div className="col-span-1 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Sucursal</div>
          <div className="col-span-2 font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Vendedor</div>
          <div className="col-span-1 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Cajas</div>
          <div className="col-span-1 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Precio Venta</div>
          <div className="col-span-2 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Total</div>
          <div className="col-span-1 text-right font-label text-[0.65rem] uppercase tracking-widest text-[#666] font-semibold">Utilidad</div>
        </div>

        <div className="flex flex-col">
          {salesData.map((item, idx) => (
            <div 
              key={idx} 
              className={cn(
                "grid grid-cols-12 gap-3 px-6 py-4 font-body text-sm items-center transition-colors hover:bg-white/[0.03]",
                idx !== salesData.length - 1 ? "border-b border-[#1e1e1e]" : ""
              )}
            >
              <div className="col-span-2 text-[#999]">{item.date}</div>
              <div className="col-span-2 text-[#dfdfdf]">{item.model}</div>
              <div className="col-span-1 text-[#888]">{item.branch}</div>
              <div className="col-span-2 text-[#888]">{item.vendor}</div>
              <div className="col-span-1 text-right text-white font-mono">{item.boxes}</div>
              <div className="col-span-1 text-right text-[#b8b8b8] font-mono">{item.price}</div>
              <div className="col-span-2 text-right text-white font-bold font-mono">{item.total}</div>
              <div className="col-span-1 text-right text-[#df8752] font-mono">{item.profit}</div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

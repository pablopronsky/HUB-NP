import { Package, TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Pallets() {
  return (
    <div className="w-full flex-1">
      {/* Header */}
      <div className="mb-12 md:mb-16">
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">
          Control de Consignación
        </h1>
        <p className="font-body text-on-surface-variant max-w-2xl text-lg">
          Stock, ventas y deuda. Gestioná la mercadería en consignación entre Quilmes, La Plata y Gonnet con trazabilidad FIFO y reportes listos para exportar.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container-low p-6 rounded-xl ghost-border flex flex-col justify-between h-40 group hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between">
            <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant font-semibold">Stock Total</span>
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <div className="font-headline text-4xl text-primary font-bold emerald-glow inline-block">1,240</div>
            <span className="font-body text-sm text-on-surface-variant ml-2">pallets</span>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl ghost-border flex flex-col justify-between h-40 group hover:border-primary/50 transition-colors">
          <div className="flex items-start justify-between">
            <span className="font-label uppercase tracking-widest text-xs text-on-surface-variant font-semibold">Ventas del Mes</span>
            <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
          </div>
          <div>
            <div className="font-headline text-4xl text-on-surface font-bold">145</div>
            <span className="font-body text-sm text-on-surface-variant ml-2">unidades</span>
          </div>
        </div>

        <div className="bg-surface-container-highest p-6 rounded-xl border border-tertiary-container/20 flex flex-col justify-between h-40">
          <div className="flex items-start justify-between">
            <span className="font-label uppercase tracking-widest text-xs text-tertiary-fixed-dim font-semibold">Alertas de Stock</span>
            <div className="h-8 w-8 rounded bg-error-container/20 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-tertiary-container" />
            </div>
          </div>
          <div>
            <div className="font-headline text-4xl text-tertiary-fixed-dim font-bold">3</div>
            <span className="font-body text-sm text-on-surface-variant ml-2">sucursales en mínimo</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-surface-container-low rounded-xl ghost-border p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-headline text-2xl font-semibold text-on-surface">Movimientos Recientes</h2>
          <button className="flex items-center gap-2 text-sm font-label text-primary uppercase tracking-wider font-semibold hover:text-primary-container transition-colors">
            Ver Todos <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Table representation - no actual lines between items, just spacing and hovers */}
        <div className="flex flex-col gap-2">
          {/* Header Row */}
          <div className="grid grid-cols-4 gap-4 px-4 py-2 font-label text-xs uppercase tracking-wider text-on-surface-variant mb-2">
            <div>Fecha</div>
            <div>Origen/Destino</div>
            <div>Producto</div>
            <div className="text-right">Cantidad</div>
          </div>
          
          {/* Rows */}
          {[
            { date: 'Hoy, 10:45 AM', loc: 'De Quilmes a La Plata', prod: 'Roble Claro Premium', qty: '+12' },
            { date: 'Hoy, 09:15 AM', loc: 'Ingreso Proveedor', prod: 'Pino Natural', qty: '+40' },
            { date: 'Ayer, 16:30 PM', loc: 'Venta - Sucursal Gonnet', prod: 'Nogal Oscuro', qty: '-5' },
            { date: 'Ayer, 11:20 AM', loc: 'De Gonnet a Quilmes', prod: 'Roble Claro Premium', qty: '+8' },
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-4 gap-4 px-4 py-4 rounded-lg hover:bg-surface-container-highest transition-colors font-body text-sm items-center cursor-pointer">
              <div className="text-on-surface-variant">{item.date}</div>
              <div className="text-on-surface">{item.loc}</div>
              <div className="text-on-surface font-medium">{item.prod}</div>
              <div className={`text-right font-mono ${item.qty.startsWith('+') ? 'text-primary' : 'text-on-surface'}`}>{item.qty}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

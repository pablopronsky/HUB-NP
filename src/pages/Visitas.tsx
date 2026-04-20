import { Map, MapPin, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function Visitas() {
  return (
    <div className="w-full flex-1">
      {/* Header */}
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">
            Gestión de Visitas
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl text-lg">
            Control y seguimiento de visitas técnicas en obra. Registro de estado y mediciones.
          </p>
        </div>
        <button className="hidden md:flex bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all items-center gap-2">
          <MapPin className="w-5 h-5" /> Programar Visita
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Próximas Visitas */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h2 className="font-headline text-xl font-semibold text-on-surface mb-2">Próximas Visitas</h2>
          
          {[
            { client: 'Edificio Libertador', address: 'Av. Libertador 1234, CABA', time: 'Mañana, 09:00 AM', status: 'Confirmada' },
            { client: 'Residencia Costa', address: 'Las Heras 456, La Plata', time: 'Vie 24, 14:00 PM', status: 'Pendiente' },
            { client: 'Oficinas WeWork', address: 'Corrientes 800, CABA', time: 'Lun 27, 10:30 AM', status: 'Confirmada' }
          ].map((visita, i) => (
            <div key={i} className="bg-surface-container-low p-6 rounded-xl ghost-border flex items-center justify-between group hover:bg-surface-container-highest transition-colors cursor-pointer card-hover-effect">
              <div className="flex items-center gap-6">
                <div className="h-12 w-12 rounded-full bg-surface-container-highest flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-1">{visita.client}</h3>
                  <div className="flex items-center gap-3 font-body text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1"><Map className="w-4 h-4" /> {visita.address}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right hidden sm:block">
                   <div className="font-body text-sm text-on-surface font-medium flex items-center justify-end gap-1 mb-1">
                     <Calendar className="w-4 h-4 text-primary" /> {visita.time.split(',')[0]}
                   </div>
                   <div className="font-body text-xs text-on-surface-variant flex items-center justify-end gap-1">
                     <Clock className="w-3 h-3" /> {visita.time.split(',')[1]}
                   </div>
                </div>
                <div className="h-8 w-8 rounded-full bg-surface-container-highest group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Panel lateral */}
        <div className="bg-surface-container-lowest rounded-xl ghost-border p-6 flex flex-col h-full min-h-[400px]">
          <h2 className="font-headline text-lg font-semibold text-on-surface mb-6">Resumen del Mes</h2>
          
          <div className="space-y-6 flex-1">
            <div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">Completadas</div>
              <div className="font-headline text-3xl font-bold text-on-surface flex items-end gap-2">
                42 <span className="text-sm font-body text-primary font-normal mb-1">+12% vs mes anterior</span>
              </div>
            </div>
            
            <div className="w-full h-[1px] bg-surface-container-highest"></div>
            
            <div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">Canceladas</div>
              <div className="font-headline text-3xl font-bold text-tertiary-fixed-dim">3</div>
            </div>
          </div>
          
          <button className="w-full py-4 text-center text-sm font-label uppercase tracking-widest font-semibold text-on-surface-variant hover:text-primary transition-colors mt-auto pt-6 border-t border-surface-container-highest">
            Ver Reporte Completo
          </button>
        </div>
      </div>
    </div>
  );
}

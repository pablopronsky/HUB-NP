import { Map, FileText, Package, ArrowUpRight, Plus } from 'lucide-react';

export default function Hub() {
  const externalLinks = [
    {
      title: 'Documentos',
      desc: 'Generación de contratos, presupuestos formales y planos de instalación técnica.',
      url: 'https://documentos-np.netlify.app/',
      icon: FileText
    },
    {
      title: 'Gestión de Visitas',
      desc: 'Control y seguimiento de visitas técnicas en obra. Registro de estado y mediciones.',
      url: 'https://visitatecnica-np.netlify.app/',
      icon: Map
    },
    {
      title: 'Control de Consignación',
      desc: 'Gestioná la mercadería en consignación con trazabilidad FIFO y reportes listos para exportar.',
      url: 'https://nuevoparketpallet.vercel.app/dashboard',
      icon: Package
    }
  ];

  return (
    <div className="w-full animation-fade-in">
      {/* Hero Section */}
      <div className="mb-14 md:mb-20 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#161616] border border-[#222] shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0b8043] animate-pulse drop-shadow-[0_0_4px_rgba(11,128,67,0.8)]"></span>
          <span className="font-label text-[0.65rem] text-[#0b8043] uppercase tracking-[0.15em] font-semibold flex items-center h-full">SISTEMA CENTRAL</span>
        </div>
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-5 leading-[1.1]">
          Hub de Aplicaciones.
        </h1>
        <p className="font-body text-lg md:text-xl text-[#888] max-w-2xl leading-relaxed font-light">
          Seleccioná una herramienta para gestionar la sucursal. Acceso centralizado a todos los módulos operativos de Nuevo Parket.
        </p>
      </div>

      {/* Bento Grid / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {externalLinks.map((link, i) => (
          <a 
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#161616] border border-[#222] rounded p-8 relative overflow-hidden h-full flex flex-col transition-all duration-300 hover:border-[#0b8043]/50 hover:bg-[#1a1a1a] hover:-translate-y-1 shadow-lg shadow-black/20"
          >
            {/* Glow effect on hover */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0b8043]/10 rounded-full blur-[50px] group-hover:bg-[#0b8043]/20 transition-colors duration-500 pointer-events-none"></div>
            
            <div className="h-12 w-12 rounded bg-[#1f1f1f] border border-[#333] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#0b8043]/50 transition-all duration-300 ease-out shadow-inner">
              <link.icon className="text-[#0b8043] w-6 h-6" />
            </div>
            
            <h3 className="font-headline text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#0b8043] transition-colors duration-300">
              {link.title}
            </h3>
            
            <p className="font-body text-[#777] leading-relaxed mt-auto text-sm group-hover:text-[#999] transition-colors">
              {link.desc}
            </p>
            
            <div className="mt-8 pt-6 border-t border-[#222] flex items-center text-[#0b8043] font-label text-xs uppercase tracking-wider font-semibold opacity-70 group-hover:opacity-100 transition-all duration-300">
              Abrir módulo <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </a>
        ))}

        {/* Placeholder for future tools */}
        <div className="block bg-[#111111] border border-dashed border-[#333] rounded p-8 relative overflow-hidden h-full flex flex-col justify-center items-center text-center min-h-[300px]">
          <div className="h-12 w-12 rounded bg-[#161616] flex items-center justify-center mb-4 opacity-50">
            <Plus className="text-[#555] w-6 h-6" />
          </div>
          <h3 className="font-headline text-lg font-semibold text-[#555] mb-2">Nuevas herramientas</h3>
          <p className="font-label text-[0.65rem] text-[#444] uppercase tracking-[0.15em]">
            Próximamente
          </p>
        </div>
      </div>
    </div>
  );
}

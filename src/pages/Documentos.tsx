import { FileText, Download, Eye, FileSignature, Folder } from 'lucide-react';

export default function Documentos() {
  return (
    <div className="w-full flex-1">
      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-on-surface mb-4">
            Documentos
          </h1>
          <p className="font-body text-on-surface-variant max-w-2xl text-lg">
            Generación de contratos, presupuestos formales y planos de instalación técnica.
          </p>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all flex items-center gap-2 whitespace-nowrap">
          <FileSignature className="w-5 h-5" /> Nuevo Documento
        </button>
      </div>

      {/* Filtros Rapidos (Visual representation without inputs) */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {['Todos', 'Contratos', 'Presupuestos', 'Planos', 'Garantías'].map((tag, i) => (
          <div key={i} className={`whitespace-nowrap px-5 py-2 rounded-full font-label text-sm cursor-pointer transition-colors ${i === 0 ? 'bg-primary/10 text-primary border border-primary/20' : 'bg-surface-container-low text-on-surface-variant border border-transparent hover:bg-surface-container-high'}`}>
            {tag}
          </div>
        ))}
      </div>

      {/* Grid de documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[
          { type: 'Presupuesto', title: 'PRE-2023-089', client: 'Constructora Atlas', date: 'Hace 2 horas', icon: <FileText /> },
          { type: 'Contrato', title: 'CON-2023-042', client: 'Marina Velez', date: 'Ayer', icon: <FileSignature /> },
          { type: 'Plano', title: 'PLN-Obras-Sur', client: 'Complejo Sur', date: '12 Ago 2023', icon: <Folder /> },
          { type: 'Presupuesto', title: 'PRE-2023-088', client: 'Estudio Arquitectura M&A', date: '10 Ago 2023', icon: <FileText /> },
          { type: 'Garantía', title: 'GAR-1092', client: 'Juan Perez', date: '05 Ago 2023', icon: <FileText /> },
          { type: 'Contrato', title: 'CON-2023-041', client: 'Hotel Central', date: '01 Ago 2023', icon: <FileSignature /> },
        ].map((doc, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-xl ghost-border flex flex-col group card-hover-effect cursor-pointer">
            <div className="flex justify-between items-start mb-6">
              <div className="h-12 w-12 rounded bg-surface-container-highest flex items-center justify-center text-primary">
                {doc.icon}
              </div>
              <span className="font-label text-[0.65rem] uppercase tracking-widest text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">
                {doc.type}
              </span>
            </div>
            
            <h3 className="font-headline text-xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">{doc.title}</h3>
            <p className="font-body text-sm text-on-surface-variant mb-6">{doc.client}</p>
            
            <div className="mt-auto pt-6 border-t border-surface-container-highest flex justify-between items-center">
              <span className="font-body text-xs text-on-surface-variant">{doc.date}</span>
              <div className="flex gap-2">
                <button className="h-8 w-8 rounded-full bg-surface-container-highest hover:bg-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="h-8 w-8 rounded-full bg-surface-container-highest hover:bg-primary/20 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-[#e5e2e1] font-body overflow-x-hidden selection:bg-[#0b8043] selection:text-white">
      {/* Topbar */}
      <header className="h-20 px-6 md:px-10 border-b border-[#222] flex items-center justify-between flex-shrink-0 bg-[#161616]/90 backdrop-blur-md sticky top-0 z-50">
        {/* Logo Area */}
        <div className="flex items-center gap-1.5 cursor-default mt-1">
          <img 
            src="https://generative-ui-user-assets.s3.us-east-1.amazonaws.com/9dc0cf14-eaae-4ebc-bee9-afbc1b699c2d.png" 
            alt="Nuevo Parket" 
            className="h-7 md:h-8 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-label text-[0.65rem] text-on-surface-variant uppercase tracking-widest ml-3 px-2 py-1 bg-[#1f1f1f] border border-[#333] rounded hidden sm:block">HUB CENTRAL</span>
        </div>

        {/* Profile & Actions Right */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col justify-center text-right">
            <span className="font-headline font-bold text-white text-sm leading-tight">Ariel Pérez</span>
            <span className="font-body text-[0.65rem] text-[#888] uppercase tracking-wider">Administrador</span>
          </div>
          <div className="h-10 w-10 border border-[#333] rounded bg-[#1f1f1f] flex items-center justify-center font-headline font-bold text-[#0b8043] text-sm shadow-inner cursor-default">
            AP
          </div>
          <div className="w-[1px] h-6 bg-[#333] hidden md:block"></div>
          <button className="flex items-center gap-2 text-[#888] hover:text-white transition-colors group">
            <LogOut className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            <span className="font-body text-sm font-medium hidden md:block">Salir</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16 flex flex-col justify-center min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>
    </div>
  );
}


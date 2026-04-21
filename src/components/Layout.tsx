import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#111111] text-[#e5e2e1] font-body overflow-x-hidden selection:bg-[#0b8043] selection:text-white">
      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] mx-auto p-6 md:p-12 lg:p-16 flex flex-col justify-center min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}


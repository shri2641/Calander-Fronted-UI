import React from 'react';
import { LayoutDashboard, Target, FolderKanban, FileBarChart2, LifeBuoy, Settings, LogOut, X, Droplet } from 'lucide-react';

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const topMenuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} strokeWidth={2.5} />, active: true },
    { name: 'Track', icon: <Target size={20} strokeWidth={2.5} />, active: false },
    { name: 'Projects', icon: <FolderKanban size={20} strokeWidth={2.5} />, active: false, badge: 2 },
    { name: 'Reports', icon: <FileBarChart2 size={20} strokeWidth={2.5} />, active: false },
  ];
  
  const bottomMenuItems = [
    { name: 'Support', icon: <LifeBuoy size={20} strokeWidth={2.5} />, active: false },
    { name: 'Settings', icon: <Settings size={20} strokeWidth={2.5} />, active: false },
  ];

  const renderMenu = (items) => (
    <nav className="space-y-2">
      {items.map((item) => (
        <button
          key={item.name}
          className={`w-full flex items-center justify-between px-4 py-3 rounded-r-2xl border-l-[3px] transition-all duration-200 font-bold text-[15px] ${
            item.active 
              ? 'border-brand-600 dark:border-brand-500 text-brand-700 dark:text-brand-400 bg-brand-50/50 dark:bg-brand-900/10' 
              : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50'
          }`}
        >
          <div className="flex items-center gap-4">
             {item.icon}
             {item.name}
          </div>
          {item.badge && (
             <span className="bg-brand-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold">
               {item.badge}
             </span>
          )}
        </button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <div className={`fixed lg:relative inset-y-0 left-0 w-[240px] h-full flex flex-col pt-8 pb-6 bg-white dark:bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} border-r border-slate-100 dark:border-slate-800`}>
        <div>
          <div className="flex items-center justify-between gap-1 mb-12 pl-6 pr-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-600 rounded-[10px] flex items-center justify-center -rotate-12 shadow-sm">
                <Droplet size={20} className="text-white transform rotate-12" fill="white" />
              </div>
              <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">Taskify</h1>
            </div>
            <button className="lg:hidden text-slate-400 hover:text-slate-900 dark:hover:text-white" onClick={() => setSidebarOpen(false)}>
               <X size={24} />
            </button>
          </div>
          
          <div className="pr-4">
            {renderMenu(topMenuItems)}
          </div>
        </div>

        <div className="mt-auto pr-4 mb-4">
           {renderMenu(bottomMenuItems)}
        </div>
      </div>
    </>
  );
}

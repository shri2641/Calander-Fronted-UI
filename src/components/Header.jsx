import React from 'react';
import { Search, Menu, Moon, Sun, Bell } from 'lucide-react';

export default function Header({ isDarkMode, toggleTheme, setSidebarOpen }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full mb-8 pt-2 gap-4 sm:gap-0">
      
      <div className="flex justify-between w-full sm:w-auto items-center">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-white/40 backdrop-blur-md dark:bg-black/40 text-gray-800 dark:text-gray-200 border border-white/30 dark:border-white/10 shadow-sm transition-colors hover:bg-white/60 dark:hover:bg-black/60"
          >
            <Menu size={24} />
          </button>
          <div>
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-slate-800 dark:text-white tracking-tight">Hi, Shrishti Verma</h2>
            <p className="text-brand-600 dark:text-brand-400 mt-0.5 text-[15px] font-medium tracking-wide">Let's finish your task today!</p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between sm:justify-end">
        <div className="relative flex-1 sm:w-72 hidden md:block">
          {/* Subtle search hidden or simplified if we want exactly the taskify look, but user wants keeping functionality */}
          <input 
            type="text" 
            placeholder="Search events, activities..." 
            className="w-full pl-5 pr-12 py-2.5 bg-white shadow-sm dark:bg-slate-800 rounded-full text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all border border-slate-100 dark:border-slate-700"
          />
          <button className="absolute right-1 top-1 bottom-1 aspect-square bg-brand-50 mx-1 dark:bg-slate-700 text-brand-600 dark:text-brand-400 rounded-full flex items-center justify-center hover:bg-brand-100 dark:hover:bg-slate-600 transition-colors">
            <Search size={16} strokeWidth={2.5} />
          </button>
        </div>
        
        <button className="relative w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-brand-600 dark:text-brand-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shrink-0">
          <Bell size={20} strokeWidth={2.5} />
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-400 border-2 border-white dark:border-slate-800 rounded-full"></span>
        </button>

        <button 
          onClick={toggleTheme}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shrink-0"
        >
          {isDarkMode ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
        </button>

      </div>
    </div>
  );
}

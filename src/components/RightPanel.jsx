import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import catProfile from '../assets/orange_cat.png';

export default function RightPanel() {
  
  return (
    <div className="w-full xl:w-[340px] flex flex-col gap-6 h-full overflow-y-auto lg:pr-2 pb-12 pt-0 shrink-0 hidden-scrollbar">
      
      {/* Profile Card */}
      <div className="bg-[#cdb4db]/20 dark:bg-brand-900/40 rounded-3xl p-5 flex items-center gap-4 bg-brand-100/50">
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 bg-white shadow-sm border border-slate-200">
          <img src={catProfile} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col">
          <h3 className="font-extrabold text-slate-800 dark:text-white text-lg tracking-tight">Shrishti Verma</h3>
          <p className="text-xs text-slate-500 font-semibold tracking-wide">UI/UX Designer</p>
        </div>
      </div>

      {/* Agenda/Schedule Card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl pt-6 pb-6 px-5 shadow-sm border border-slate-100 dark:border-slate-700/50 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-lg">March</h4>
          <button className="flex items-center gap-1.5 bg-slate-50 dark:bg-slate-700 text-slate-500 dark:text-slate-300 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors border border-slate-100 dark:border-slate-600">
            <Plus size={14} strokeWidth={3} /> Add Task
          </button>
        </div>

        {/* Date Selector */}
        <div className="flex justify-between items-center mb-8">
          {[{d:'4', day:'mon'}, {d:'5', day:'tue'}, {d:'6', day:'wed', active:true}, {d:'7', day:'thu'}, {d:'8', day:'fri'}, {d:'9', day:'sat'}].map(item => (
            <div key={item.d} className={`flex flex-col items-center justify-center w-9 h-14 gap-1.5 rounded-2xl transition-all duration-300 ${item.active ? 'bg-[#5e35b1] text-white shadow-md shadow-[#5e35b1]/40' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 cursor-pointer'}`}>
              <span className={`font-extrabold text-[15px] ${item.active ? 'text-white' : 'text-slate-800 dark:text-slate-200'}`}>{item.d}</span>
              <span className="text-[10px] font-bold">{item.day}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-6 relative px-1">
          <div className="absolute left-[44px] top-3 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-700 z-0"></div>
          
          {[ 
            { time: '09:00', title: '', duration: '', type: 'empty' },
            { time: '10:00', title: 'UI Motion', duration: '10:00am - 12:00pm', type: 'event' },
            { time: '11:00', title: '', duration: '', type: 'empty' },
            { time: '12:00', title: 'UI Design', duration: '12:00pm - 01:00pm', type: 'event' },
            { time: '01:00', title: '', duration: '', type: 'empty' },
          ].map((item, i) => (
             <div key={i} className="flex items-start gap-5 z-10 relative">
               <span className="text-[11px] text-slate-400 font-bold w-10 text-right shrink-0 mt-0.5">{item.time}</span>
               {item.type === 'event' ? (
                 <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl px-0 py-0 flex items-start relative group cursor-pointer">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5e35b1] rounded-full"></div>
                   <div className="flex-1 pl-4 pr-1 text-left">
                     <div className="flex justify-between items-start">
                       <h5 className="font-extrabold text-[13px] text-slate-800 dark:text-slate-200">{item.title}</h5>
                       <button className="text-slate-400 hover:text-[#5e35b1]"><MoreHorizontal size={14}/></button>
                     </div>
                     <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{item.duration}</p>
                   </div>
                 </div>
               ) : (
                 <div className="flex-1 pt-2">
                    <div className="w-full border-t border-dashed border-slate-200 dark:border-slate-700"></div>
                 </div>
               )}
             </div>
          ))}
        </div>
      </div>

      {/* Batchmates */}
      <div className="bg-[#cdb4db]/20 dark:bg-brand-900/30 rounded-3xl p-5 flex flex-col pt-6 bg-brand-100/50">
        <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-center mb-5 text-[15px]">Batchmates</h4>
        <div className="flex flex-col gap-3">
          {[
            { name: 'Rinsen Jey', role: 'UI/UX Designer', id: '1500648767791-00dcc994a43e' },
            { name: 'Kim Jee yong', role: 'UI/UX Designer', id: '1534528741775-53994a69daeb' },
            { name: 'Kim Jee yong', role: 'UI/UX Designer', id: '1438761681033-6461ffad8d80' }
          ].map((mate, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-2.5 flex items-center gap-3 shadow-sm cursor-pointer border border-white dark:border-slate-700">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-200">
                <img src={`https://images.unsplash.com/photo-${mate.id}?ixlib=rb-4.0.3&w=100&h=100&auto=format&fit=crop&q=80`} alt={mate.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h5 className="font-extrabold text-slate-800 dark:text-slate-200 text-[13px] tracking-tight">{mate.name}</h5>
                <p className="text-[10px] text-slate-400 font-semibold">{mate.role}</p>
              </div>
            </div>
          ))}
          
          <button className="mt-2 text-xs font-bold bg-white/60 dark:bg-slate-800 hover:bg-white transition-colors text-brand-700 rounded-full py-2.5 shadow-sm">
            See all
          </button>
        </div>
      </div>

    </div>
  );
}

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, Calendar as CalIcon, CheckCircle2, MoreHorizontal } from 'lucide-react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, 
  startOfWeek, endOfWeek, eachDayOfInterval, isSameMonth, isToday 
} from 'date-fns';

export default function CalendarSection({ events, setEvents }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysHeader = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  
  const handleAddEvent = () => {
    const title = window.prompt("Enter event title:");
    if (!title) return;
    const dateStr = window.prompt("Enter day of the month (1-31):", format(new Date(), 'd'));
    const day = parseInt(dateStr, 10);
    
    const maxDays = parseInt(format(endOfMonth(currentDate), 'd'), 10);
    if (!day || day < 1 || day > maxDays) return alert("Invalid date");
    
    const time = window.prompt("Enter time (e.g. 10.00 - 11.00):");
    
    const colorOptions = [
      'bg-brand-600 text-white',
      'bg-brand-100 text-brand-700 border-l-4 border-brand-500 dark:bg-brand-900/40 dark:text-brand-300',
      'bg-purple-100 text-purple-800 border-l-4 border-purple-500 dark:bg-purple-900/40 dark:text-purple-300',
      'bg-fuchsia-600 text-white shadow-md'
    ];
    const color = colorOptions[Math.floor(Math.random() * colorOptions.length)];
    const dateFormatted = `${format(currentDate, 'yyyy-MM')}-${String(day).padStart(2, '0')}`;
    const newEvent = { id: Date.now(), date: dateFormatted, title, time: time || '', color };
    setEvents([...events, newEvent]);
  };

  const startDay = startOfWeek(startOfMonth(currentDate));
  const endDay = endOfWeek(endOfMonth(currentDate));
  const calendarDays = eachDayOfInterval({ start: startDay, end: endDay });

  const projectCards = [
    { title: 'Web Dashboard Designing', date: 'Mar 2, 2024', progress: 90, daysLeft: '3 days left', color: 'bg-brand-600' },
    { title: 'Mobile App Shopping', date: 'Mar 6, 2024', progress: 30, daysLeft: '25 days left', color: 'bg-blue-500' },
    { title: 'Animation Designing', date: 'Mar 8, 2024', progress: 75, daysLeft: '7 days left', color: 'bg-orange-400' }
  ];

  return (
    <div className="flex-1 w-full lg:pr-4 xl:pr-8 pb-8 flex flex-col h-full overflow-y-auto shrink-0 hidden-scrollbar gap-6">
      
      {/* 1. Top Banner */}
      <div className="bg-[#f2efff] dark:bg-brand-900/30 rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row justify-between items-center sm:items-stretch relative overflow-hidden shadow-sm shrink-0 border border-slate-100 dark:border-slate-800">
        <div className="flex flex-col justify-center h-full sm:w-[60%] z-10">
          <h2 className="text-3xl lg:text-[34px] font-extrabold text-slate-800 dark:text-white tracking-tight mb-2 leading-tight">Today Task</h2>
          <p className="text-[15px] font-medium text-brand-500 dark:text-brand-300 mb-6 tracking-wide">Check your daily tasks and schedules</p>
          <button className="self-start px-6 py-3 bg-brand-700 text-white rounded-xl font-bold hover:bg-brand-800 transition-colors shadow-md text-sm">
            Today's schedule
          </button>
        </div>
        <div className="relative w-full sm:w-[40%] flex justify-end mt-6 sm:mt-0 z-10 lg:pr-4">
          {/* Mock Illustration Area */}
          <div className="w-40 h-40 rounded-full bg-brand-200/50 dark:bg-brand-800/50 flex items-center justify-center relative">
            <Clock size={80} className="text-brand-500 opacity-80" strokeWidth={1.5} />
            <div className="absolute -top-2 -right-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-100 flex items-center justify-center transform rotate-12">
               <CalIcon size={20} className="text-brand-600" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Project Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shrink-0">
        {projectCards.map((card, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-2xl p-5 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-semibold text-slate-400">{card.date}</span>
            </div>
            <h3 className="font-extrabold text-slate-800 dark:text-white text-[15px] leading-tight mb-1 w-3/4">{card.title}</h3>
            
            <div className="mt-4 mb-2">
               <div className="flex justify-between text-xs font-bold mb-1.5">
                 <span className="text-slate-500">Progress</span>
                 <span className="text-brand-700 dark:text-brand-400">{card.progress}%</span>
               </div>
               <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                 <div className={`${card.color} h-full rounded-full`} style={{ width: `${card.progress}%` }}></div>
               </div>
            </div>

            <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50 dark:border-slate-700/50">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop" alt="" /></div>
                <div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-800 bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-700">+</div>
              </div>
              <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-300">{card.daysLeft}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Tasks Progress & Assignments Row */}
      <div className="flex flex-col xl:flex-row gap-6 shrink-0">
        
        {/* Tasks Progress Bar Chart Mockup */}
        <div className="flex-[3] bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-extrabold text-slate-800 dark:text-white">Tasks Progress</h3>
             <select className="bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-xs font-bold px-2 py-1.5 rounded-lg outline-none cursor-pointer">
               <option>Weekly</option>
             </select>
           </div>
           <div className="flex-1 flex items-end justify-between px-2 pt-4 relative">
             <div className="absolute left-0 top-0 bottom-6 w-full flex flex-col justify-between z-0 pointer-events-none opacity-30">
                <div className="border-t border-dashed border-slate-300 dark:border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-300 dark:border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-300 dark:border-slate-600 w-full"></div>
                <div className="border-t border-dashed border-slate-300 dark:border-slate-600 w-full"></div>
             </div>
             
             {/* Chart Columns */}
             {['M','T','W','T','F','S','S'].map((day, dIdx) => {
               const height1 = [30, 80, 50, 40, 70, 40, 40][dIdx];
               const height2 = [0, 40, 20, 10, 30, 10, 10][dIdx]; // lighter bar part
               return (
                 <div key={dIdx} className="flex flex-col items-center gap-2 z-10 flex-1">
                   <div className="w-4 lg:w-5 h-40 bg-slate-100 dark:bg-slate-700 rounded-t-full flex flex-col justify-end overflow-hidden relative">
                     <div className="w-full bg-brand-200 dark:bg-brand-900/50 rounded-t-full" style={{ height: `${height1}%` }}></div>
                     <div className="w-full bg-brand-700 absolute bottom-0 left-0 right-0 rounded-t-full" style={{ height: `${height2}%` }}></div>
                   </div>
                   <span className="text-[10px] font-bold text-slate-400">{day}</span>
                 </div>
               );
             })}

             {/* Right Stats overlay */}
             <div className="absolute top-0 right-0 h-full flex flex-col justify-around pl-4 border-l border-slate-100 dark:border-slate-700 w-32 bg-white dark:bg-slate-800">
                <div>
                  <p className="text-[10px] font-semibold text-slate-400">Time spent</p>
                  <div className="flex items-center gap-2"><span className="font-extrabold text-sm text-slate-800 dark:text-white">18h</span><span className="bg-orange-100 text-orange-600 px-1 py-0.5 rounded text-[9px] font-bold">120%</span></div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400">Lesson Learnt</p>
                  <div className="flex items-center gap-2"><span className="font-extrabold text-sm text-slate-800 dark:text-white">15h</span><span className="bg-orange-100 text-orange-600 px-1 py-0.5 rounded text-[9px] font-bold">120%</span></div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-400">Exams Passed</p>
                  <div className="flex items-center gap-2"><span className="font-extrabold text-sm text-slate-800 dark:text-white">2h</span><span className="bg-orange-100 text-orange-600 px-1 py-0.5 rounded text-[9px] font-bold">100%</span></div>
                </div>
             </div>
           </div>
        </div>

        {/* Assignments Checklist Mockup */}
        <div className="flex-[2] bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col">
           <div className="flex items-center gap-2 mb-4">
             <h3 className="font-extrabold text-slate-800 dark:text-white text-[15px]">Assignments</h3>
             <span className="text-slate-400 text-[11px] font-bold">(12)</span>
           </div>
           <div className="text-[11px] font-bold text-brand-600 dark:text-brand-400 mb-3 flex items-center gap-1.5 bg-brand-50 dark:bg-brand-900/20 w-max px-2 py-1 rounded-md">
             <CheckCircle2 size={12} /> 2/5 completed
           </div>

           <div className="flex flex-col gap-3 flex-1 overflow-y-auto hidden-scrollbar pr-1">
             {[
               { title: 'Colour Theory', date: '01 Feb 2024', done: true, grade: '86/100', subtitle: 'Grade' },
               { title: 'Design system', date: '01 Feb 2024', done: true, grade: '90/100', subtitle: 'Grade' },
               { title: 'User persona', date: '13 Mar 2024', done: false, grade: '0/100', subtitle: 'To Do' },
               { title: 'Prototyping', date: '16 Mar 2024', done: false, grade: '0/100', subtitle: 'To Do' },
             ].map((task, i) => (
               <div key={i} className="flex justify-between items-center bg-slate-50 dark:bg-slate-700/30 p-2.5 rounded-xl border border-slate-100 dark:border-slate-700/50">
                 <div className="flex items-start gap-3">
                   <div className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center border-2 ${task.done ? 'bg-brand-600 border-brand-600 text-white' : 'bg-transparent border-slate-300 dark:border-slate-500'}`}>
                     {task.done && <CheckCircle2 size={12} strokeWidth={4} />}
                   </div>
                   <div>
                     <h4 className="font-bold text-[13px] text-slate-800 dark:text-slate-200">{task.title}</h4>
                     <p className="text-[10px] text-slate-500 font-semibold">{task.date}</p>
                   </div>
                 </div>
                 <div className="text-right">
                   <p className="text-[12px] font-extrabold text-slate-700 dark:text-slate-300">{task.grade}</p>
                   <p className="text-[10px] text-slate-400 font-bold">{task.subtitle}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>

      </div>

      {/* 4. MAIN Focal Point: Calendar Grid */}
      <h3 className="font-extrabold text-slate-800 dark:text-white text-xl mt-4 px-2">Interactive Calendar</h3>
      <div className="bg-white dark:bg-slate-800 flex-1 w-full rounded-3xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col min-h-[600px]">
        {/* Calendar Header Controls */}
        <div className="flex flex-wrap gap-4 justify-between items-center p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {format(currentDate, 'MMMM yyyy')}
            </h3>
            <div className="flex gap-2 ml-2">
              <button onClick={prevMonth} className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-100 transition-all hover:scale-105">
                <ChevronLeft size={18} className="mr-0.5" />
              </button>
              <button onClick={nextMonth} className="w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-slate-600 dark:text-slate-300 cursor-pointer hover:bg-slate-100 transition-all hover:scale-105">
                <ChevronRight size={18} className="ml-0.5" />
              </button>
            </div>
          </div>
          <button 
            onClick={handleAddEvent}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-500 transition-all text-sm"
          >
            <Plus size={16} strokeWidth={3} />
            Add Event
          </button>
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40">
          {daysHeader.map(day => (
             <div key={day} className="py-3 text-center text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
               {day}
             </div>
          ))}
        </div>
        
        {/* Dates Grid flex-1 logic */}
        <div className="grid grid-cols-7 flex-1 auto-rows-[minmax(90px,_1fr)] h-full bg-white dark:bg-slate-900/20">
          {calendarDays.map((day, i) => {
            const isCurrentMonth = isSameMonth(day, currentDate);
            const isTodayDate = isToday(day);
            const dayEvents = events.filter(e => e.date === format(day, 'yyyy-MM-dd'));

            return (
              <div 
                key={i} 
                className={`border-r border-b border-slate-100 dark:border-slate-700 p-1.5 lg:p-2 relative flex flex-col overflow-hidden transition-all duration-300 hover:bg-slate-50 group cursor-pointer
                  ${!isCurrentMonth ? 'bg-slate-50/50 dark:bg-slate-800/30 opacity-70' : ''}
                  ${isTodayDate ? 'ring-2 ring-inset ring-brand-500/30 z-10' : ''}
                `}
                onClick={() => {
                   const title = window.prompt(`Enter event title for ${format(day, 'MMM d')}:`);
                   if (!title) return;
                   const time = window.prompt("Enter time (e.g. 10.00 - 11.00):");
                   setEvents([...events, {
                     id: Date.now(), date: format(day, 'yyyy-MM-dd'), title, time: time || '', color: 'bg-brand-600 text-white'
                   }]);
                }}
              >
                {/* Date Number / Today Badge */}
                {isTodayDate ? (
                  <div className="bg-brand-600 rounded-lg w-7 h-7 flex items-center justify-center self-end mb-1 shadow-sm">
                    <span className="text-white font-extrabold text-xs">{format(day, 'd')}</span>
                  </div>
                ) : (
                   <span className={`text-right text-xs font-bold mb-1 p-1 ${isCurrentMonth ? 'text-slate-700 dark:text-slate-300' : 'text-slate-400'}`}>
                     {format(day, 'd')}
                   </span>
                )}

                {/* Events rendering */}
                <div className="flex-1 flex flex-col gap-1 mt-1 z-10 w-full relative overflow-y-auto hidden-scrollbar px-0.5">
                  {dayEvents.map(event => (
                    <div 
                      key={event.id} 
                      className={`rounded-md p-1.5 text-[10px] truncate w-full shadow-sm ${event.color}`}
                      onClick={(e) => { e.stopPropagation(); alert(`Viewing Event: ${event.title}`); }}
                    >
                      <div className="font-bold truncate tracking-tight">{event.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
}

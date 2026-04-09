import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CalendarSection from './components/CalendarSection';
import RightPanel from './components/RightPanel';
import GradientBackground from './components/GradientBackground';
import { format } from 'date-fns';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notes, setNotes] = useState('');
  
  const [todos, setTodos] = useState([
    { id: 1, text: 'Brainstorming session', completed: true },
    { id: 2, text: 'Review wireframes', completed: false },
    { id: 3, text: 'Client call preparation', completed: false }
  ]);

  // Use dynamic format for some dummy events in the current month (April 2026 initially)
  const todayStr = format(new Date(), 'yyyy-MM');
  const [events, setEvents] = useState([
    { id: 1, date: `${todayStr}-12`, title: 'Design Review', time: '14:00', color: 'bg-brand-500 text-white' },
    { id: 2, date: `${todayStr}-15`, title: 'Project Kickoff', time: '10:00', color: 'bg-brand-100/80 text-brand-700 border-l-4 border-brand-500 dark:bg-brand-900/40 dark:text-brand-300' },
    { id: 3, date: `${todayStr}-22`, title: 'Weekend Workout!', time: '08:00', color: 'bg-brand-200 text-brand-800 border-l-4 border-brand-600 dark:bg-brand-800/40 dark:text-brand-300' }
  ]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen w-full flex items-center justify-center p-0 sm:p-4 lg:p-8 transition-colors duration-300 relative z-0`}>
      <GradientBackground isDarkMode={isDarkMode} />
      
      {/* Main Solid App Container */}
      <div className="bg-white/95 dark:bg-slate-900/95 shadow-2xl shadow-brand-500/10 border border-slate-200/50 dark:border-slate-800 backdrop-blur-2xl w-full max-w-[1600px] h-[100vh] sm:h-[95vh] sm:min-h-[850px] sm:rounded-[40px] overflow-hidden flex flex-col lg:flex-row transition-all duration-300 relative z-10 mx-auto">
        
        {/* Left Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        {/* Main Content Area */}
        <main className="flex-1 px-4 sm:px-8 py-6 flex flex-col min-w-0 h-full overflow-y-auto lg:overflow-hidden relative">
          <Header 
            isDarkMode={isDarkMode} 
            toggleTheme={toggleTheme} 
            setSidebarOpen={setSidebarOpen}
          />
          
          <div className="flex-1 flex flex-col xl:flex-row min-h-0 w-full gap-6 xl:gap-8 overflow-y-visible lg:overflow-hidden">
            {/* The calendar takes up flexible space */}
            <CalendarSection events={events} setEvents={setEvents} />
            
            {/* The right panel holds varied widgets */}
            <RightPanel 
              todos={todos} 
              setTodos={setTodos} 
              notes={notes}
              setNotes={setNotes}
            />
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default App;


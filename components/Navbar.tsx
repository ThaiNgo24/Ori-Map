
import React from 'react';
import { Search, LayoutDashboard, BrainCircuit, Users, Compass } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: Compass },
    { id: 'search', label: 'Ngành & Trường', icon: Search },
    { id: 'quiz', label: 'Trắc nghiệm AI', icon: BrainCircuit },
    { id: 'mentor', label: 'AI Mentor', icon: Users },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 cursor-pointer shrink-0 lg:-ml-4 transition-all hover:opacity-80 active:scale-95" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-11 h-11 lg:w-13 lg:h-13 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-900/10 shrink-0" style={{ backgroundColor: '#111E6C' }}>
              <BrainCircuit className="text-white w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <span className="text-2xl lg:text-3xl font-[800] tracking-tighter whitespace-nowrap hidden sm:inline-block">
              <span style={{ color: '#2F4FA8' }}>Orie</span>
              <span style={{ color: '#FF8C00' }}> Map</span>
            </span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 lg:px-6 py-2 rounded-xl transition-all duration-300 relative font-bold text-sm ${
                    currentPage === item.id 
                      ? 'text-[#FF8C00] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] scale-100' 
                      : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
                  }`}
                >
                  <item.icon className={`w-4.5 h-4.5 shrink-0 transition-colors ${currentPage === item.id ? 'text-[#FF8C00]' : 'text-slate-400'}`} />
                  <span className="whitespace-nowrap">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Action Button - Image 12 Location */}
          <div className="flex items-center justify-end">
            <button 
              onClick={() => onNavigate('roadmap')}
              style={{ backgroundColor: '#111E6C' }}
              className="text-white px-6 lg:px-10 py-3 rounded-full font-[800] hover:shadow-2xl hover:shadow-blue-900/20 transition-all active:scale-95 text-sm lg:text-[16px] whitespace-nowrap"
            >
              Bắt đầu ngay
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

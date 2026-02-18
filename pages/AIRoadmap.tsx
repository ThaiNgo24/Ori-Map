
import React, { useState } from 'react';
import { Target, Sparkles, Send, GraduationCap, Trophy, BookOpen } from 'lucide-react';
import { generateAIRoadmap } from '../services/gemini';

const AIRoadmap: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState<any>(null);
  const [formData, setFormData] = useState({
    grade: '10',
    performance: 'Khá',
    major: '',
    school: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await generateAIRoadmap(formData);
      setRoadmap(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl lg:text-6xl font-[800] text-[#111E6C] tracking-tighter">
          Thiết kế lộ trình <span className="text-[#6366f1]">tương lai</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium opacity-80">
          Cung cấp thông tin của bạn, AI sẽ tạo ra một lộ trình học tập và rèn luyện chi tiết nhất.
        </p>
      </div>

      {!roadmap ? (
        <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-2xl max-w-2xl mx-auto ring-1 ring-slate-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-[800] text-slate-700 ml-1">Lớp hiện tại</label>
                <div className="relative">
                  <select 
                    className="w-full p-4 pl-6 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-4 ring-indigo-100 focus:bg-white transition-all appearance-none font-bold text-slate-700"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                  >
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-[800] text-slate-700 ml-1">Học lực</label>
                <div className="relative">
                  <select 
                    className="w-full p-4 pl-6 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-4 ring-indigo-100 focus:bg-white transition-all appearance-none font-bold text-slate-700"
                    value={formData.performance}
                    onChange={(e) => setFormData({...formData, performance: e.target.value})}
                  >
                    <option>Giỏi</option>
                    <option>Khá</option>
                    <option>Trung bình</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-[800] text-slate-700 ml-1">Ngành mục tiêu</label>
              <input 
                type="text" 
                placeholder="VD: Khoa học máy tính, Y đa khoa..."
                className="w-full p-5 pl-8 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-4 ring-indigo-100 focus:bg-white transition-all font-bold text-slate-700 placeholder:text-slate-400"
                required
                value={formData.major}
                onChange={(e) => setFormData({...formData, major: e.target.value})}
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-[800] text-slate-700 ml-1">Trường mục tiêu</label>
              <input 
                type="text" 
                placeholder="VD: ĐH Bách Khoa, ĐH Ngoại Thương..."
                className="w-full p-5 pl-8 rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-4 ring-indigo-100 focus:bg-white transition-all font-bold text-slate-700 placeholder:text-slate-400"
                required
                value={formData.school}
                onChange={(e) => setFormData({...formData, school: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#6366f1] text-white py-5 rounded-[1.5rem] font-black text-lg hover:shadow-2xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-3 disabled:opacity-50 active:scale-95 shadow-xl shadow-indigo-500/10"
            >
              {loading ? (
                <>Đang phân tích lộ trình...</>
              ) : (
                <><Sparkles className="w-6 h-6" /> Tạo lộ trình ngay</>
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-black text-[#111E6C] flex items-center gap-3">
              <Target className="w-7 h-7 text-[#6366f1]" /> Lộ trình AI chiến lược
            </h2>
            <button 
              onClick={() => setRoadmap(null)} 
              className="text-sm font-black text-[#6366f1] uppercase tracking-widest hover:bg-indigo-50 px-6 py-2 rounded-xl transition-all"
            >
              Thiết lập lại
            </button>
          </div>

          <div className="grid gap-10">
            {roadmap.map((item: any, idx: number) => (
              <div key={idx} className="bg-white rounded-[3rem] border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all group">
                <div className="bg-[#111E6C] text-white p-10 md:w-56 flex flex-col items-center justify-center space-y-3 group-hover:bg-[#6366f1] transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Giai đoạn</span>
                  <span className="text-4xl font-black">{item.year}</span>
                </div>
                <div className="p-10 flex-1 grid md:grid-cols-2 gap-10">
                  <div className="space-y-5">
                    <h4 className="font-black text-[#111E6C] flex items-center gap-3 uppercase text-xs tracking-widest">
                      <Trophy className="w-5 h-5 text-[#FF8C00]" /> Mục tiêu ưu tiên
                    </h4>
                    <ul className="space-y-3">
                      {item.goals.map((g: string, i: number) => (
                        <li key={i} className="text-slate-600 font-bold text-sm flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#FF8C00] rounded-full mt-1.5 shrink-0 shadow-sm shadow-orange-500/20"></div>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h4 className="font-black text-[#111E6C] flex items-center gap-3 uppercase text-xs tracking-widest">
                      <BookOpen className="w-5 h-5 text-[#2F4FA8]" /> Kế hoạch hành động
                    </h4>
                    <ul className="space-y-3">
                      {item.activities.map((a: string, i: number) => (
                        <li key={i} className="text-slate-600 font-bold text-sm flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#2F4FA8] rounded-full mt-1.5 shrink-0 shadow-sm shadow-blue-500/20"></div>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIRoadmap;

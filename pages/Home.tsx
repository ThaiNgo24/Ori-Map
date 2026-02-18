import React from 'react';
import { ArrowRight, Sparkles, Target, TrendingUp, BrainCircuit, ShieldCheck, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Badge */}
          <div className="flex justify-center mb-10 lg:mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-50/50 px-6 py-2.5 rounded-full border border-blue-100 text-[#2F4FA8] text-sm lg:text-lg font-bold tracking-tight animate-fade-in">
              <Sparkles className="w-5 h-5" />
              <span>Cá nhân hóa hành trình sự nghiệp bằng AI</span>
            </div>
          </div>
          
          {/* THE ORANGE BOX CONTAINER */}
          <div className="bg-[#FF8C00] rounded-[3.5rem] py-16 lg:py-20 px-8 lg:px-16 max-w-6xl mx-auto shadow-[0_40px_100px_-20px_rgba(255,140,0,0.3)] overflow-hidden relative group">
            
            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-[80px]"></div>
            
            <div className="absolute bottom-12 right-12 bg-white p-5 rounded-3xl shadow-2xl animate-float z-30 hidden lg:flex items-center justify-center border border-white/50">
              <TrendingUp className="text-[#FF8C00] w-10 h-10" />
            </div>
            
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center relative z-10">
              {/* Text Side - Khoảng cách dòng và khối đã được thu gọn */}
              <div className="space-y-6 text-center lg:text-left text-white max-w-2xl mx-auto lg:mx-0">
                <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-[800] leading-[1.1] tracking-tighter whitespace-normal flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2">
                  <span className="shrink-0">Kiến tạo nên</span>
                  <span className="text-[#111E6C] shrink-0">Tương Lai</span>
                  <span className="shrink-0">Từ sự thấu hiểu</span>
                  <span className="bg-white/20 px-5 py-1.5 rounded-2xl backdrop-blur-md inline-flex items-center justify-center text-white border border-white/10 shrink-0">AI</span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 font-medium leading-[1.4] max-w-xl">
                  Đánh giá năng lực, sở thích và tiềm năng để gợi ý những lựa chọn tối ưu nhất cho con đường học vấn của bạn.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-2">
                  <button 
                    onClick={() => onNavigate('search')}
                    className="bg-[#111E6C] text-white px-10 py-5 rounded-3xl font-[800] text-lg hover:shadow-2xl hover:shadow-blue-900/30 transition-all flex items-center justify-center gap-3 active:scale-95 group/btn"
                  >
                    Khám phá ngay <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => onNavigate('roadmap')}
                    className="bg-white text-[#FF8C00] px-10 py-5 rounded-3xl font-[800] text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
                  >
                    Nhận lộ trình AI <Target className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="flex items-center justify-center lg:justify-start pt-2">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-[#FF8C00] bg-white overflow-hidden shadow-lg">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} className="w-full h-full object-cover" alt="User" />
                      </div>
                    ))}
                    <div className="w-14 h-14 rounded-full border-4 border-[#FF8C00] bg-[#111E6C] flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      +50k
                    </div>
                  </div>
                  <p className="ml-8 text-sm font-[800] text-white/80 uppercase tracking-widest">Tin dùng bởi hàng ngàn học sinh</p>
                </div>
              </div>
              
              <div className="relative group flex justify-center lg:justify-end mt-8 lg:mt-0">
                 <div className="absolute -inset-12 bg-white/20 rounded-full blur-[100px] opacity-40"></div>
                 <div className="relative bg-white/10 backdrop-blur-md rounded-[3rem] p-4 border border-white/40 shadow-2xl w-full max-w-[340px] transform hover:rotate-2 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=2070&auto=format&fit=crop" 
                      className="rounded-[2.5rem] shadow-sm w-full h-auto object-cover aspect-[16/20] lg:aspect-[4/5]" 
                      alt="Student" 
                    />
                    <div className="absolute -left-6 lg:-left-10 bottom-10 bg-white p-4 lg:p-5 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-4 animate-float delay-700">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                        <ShieldCheck className="w-6 h-6 lg:w-7 lg:h-7" />
                      </div>
                      <div className="text-left">
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">Độ chính xác</p>
                        <p className="text-sm lg:text-base font-black text-slate-900 whitespace-nowrap">98.5% AI Analysis</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Thu ngắn pb từ 32 xuống 20 để giảm khoảng 1.2cm */}
      <section className="pt-24 pb-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          <div className="text-center space-y-6">
            <h2 className="text-4xl lg:text-5xl font-[800] text-slate-900">Trải nghiệm hướng nghiệp <span className="text-[#FF8C00]">khác biệt</span></h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium">Kết hợp dữ liệu tuyển sinh thực tế và thuật toán AI tiên tiến nhất.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Phân tích đa chiều', desc: 'Sử dụng khung năng lực Holland kết hợp Big Data để đánh giá chính xác tiềm năng.', icon: BrainCircuit, color: '#2F4FA8' },
              { title: 'Tối ưu lộ trình', desc: 'Thiết kế từng bước đi cụ thể từ lớp 10 đến khi ra trường cho từng cá nhân.', icon: Zap, color: '#FF8C00' },
              { title: 'Dữ liệu thời gian thực', desc: 'Luôn cập nhật xu hướng thị trường, mức lương và nhu cầu tuyển dụng mới nhất.', icon: TrendingUp, color: '#111E6C' }
            ].map((f, i) => (
              <div key={i} className="bg-white p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-100 hover:border-slate-200 transition-all hover-lift group">
                <div style={{ backgroundColor: `${f.color}10`, color: f.color }} className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                  <f.icon className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-[800] text-slate-900 mb-5">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section - Thu ngắn pt từ 40 xuống 32 để giảm thêm 0.8cm (Tổng cộng giảm ~2cm) */}
      <section className="pt-32 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-5xl font-[800] text-[#111E6C] leading-tight">Chỉ với 3 bước đơn giản</h2>
              <div className="space-y-10">
                {[
                  { step: 1, title: 'Thấu hiểu bản thân', desc: 'Hoàn thành bài test AI để nhận diện nhóm tính cách và thiên hướng nghề nghiệp.' },
                  { step: 2, title: 'Chọn lọc ngành học', desc: 'Hệ thống gợi ý các ngành hot và trường đào tạo chất lượng dựa trên điểm số.' },
                  { step: 3, title: 'Thực thi lộ trình', desc: 'Theo dõi tiến độ, nhận lời khuyên từ Mentor AI mỗi ngày để cán đích thành công.' }
                ].map((s, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-20 h-20 bg-[#FF8C00] text-white rounded-[2rem] flex items-center justify-center font-[900] text-3xl shadow-2xl shadow-orange-500/20 group-hover:rotate-6 transition-transform">
                      {s.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-[800] text-slate-900">{s.title}</h3>
                      <p className="text-slate-500 text-xl font-medium leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] -rotate-3"></div>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" className="relative rounded-[3.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/3]" alt="Steps" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ backgroundColor: '#2F4FA8' }} className="rounded-[4rem] p-16 lg:p-24 text-center text-white space-y-12 relative overflow-hidden shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black opacity-[0.05] rounded-full blur-[80px]"></div>
            
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-7xl font-[800] leading-tight">Mở khóa tương lai của bạn</h2>
              <p className="text-blue-100 text-2xl max-w-3xl mx-auto font-medium opacity-90">Gia nhập cộng đồng hơn 50,000 học sinh đang chuẩn bị cho sự nghiệp bứt phá.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8 max-w-3xl mx-auto">
              <input 
                type="email" 
                placeholder="Nhập địa chỉ email của bạn..." 
                className="px-10 py-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-blue-100/50 w-full focus:ring-4 ring-orange-400 outline-none text-xl font-semibold transition-all" 
              />
              <button className="bg-[#FF8C00] text-white px-12 py-6 rounded-3xl font-[900] text-xl hover:bg-orange-600 transition-all shadow-2xl hover:shadow-orange-500/40 active:scale-95 whitespace-nowrap">
                Đăng ký ngay
              </button>
            </div>
            <p className="text-blue-100/40 text-sm font-[800] uppercase tracking-[0.3em]">Hoàn toàn miễn phí cho tất cả học sinh</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
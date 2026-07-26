import { Lock, User, Cpu } from 'lucide-react';

export default function Login() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#e0f2fe] font-sans">
      {/* Abstract Background Waves (CSS generated for depth) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[#bae6fd] rounded-[100%] translate-y-[200px] -translate-x-[100px] scale-150 opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full h-[400px] bg-[#7dd3fc] rounded-[100%] translate-y-[150px] translate-x-[200px] scale-150 opacity-30"></div>
        <div className="absolute top-0 right-0 w-full h-[600px] bg-[#38bdf8] rounded-[100%] -translate-y-[300px] translate-x-[150px] scale-125 opacity-20"></div>
      </div>

      {/* Central Login Panel */}
      <div className="relative z-10 w-full max-w-[400px] p-12 bg-[#1e3a8a] rounded-[24px] shadow-2xl flex flex-col items-center">
        
        {/* Brand Icon: Technical Equipment/System */}
        <div className="relative flex items-center justify-center mb-6 text-white">
          <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 shadow-inner">
            <Cpu className="w-12 h-12 stroke-[1.5]" />
          </div>
        </div>

        {/* Title */}
        <div className="text-center text-white mb-10">
          <h1 className="text-[17px] font-semibold mb-2 leading-relaxed">ប្រព័ន្ធកម្មវិធីគ្រប់គ្រងសម្ភារបច្ចេកទេស</h1>
          <h2 className="text-[10px] tracking-[0.2em] font-bold text-sky-200">TECHNICAL INVENTORY SYSTEM</h2>
        </div>

        <form className="w-full space-y-4 mb-2" onSubmit={(e) => e.preventDefault()} autoComplete="off">
          {/* Username Input */}
          <div className="relative flex items-center">
            <User className="absolute left-4 w-5 h-5 text-white stroke-[2]" />
            <input
              type="text"
              placeholder="USERNAME"
              autoComplete="off"
              className="w-full bg-transparent border-2 border-white/40 rounded-lg py-4 px-12 text-white placeholder-white/60 text-xs tracking-[0.2em] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Password Input */}
          <div className="relative flex items-center">
            <Lock className="absolute left-4 w-5 h-5 text-white stroke-[2]" />
            <input
              type="password"
              placeholder="PASSWORD"
              autoComplete="new-password"
              className="w-full bg-transparent border-2 border-white/40 rounded-lg py-4 px-12 text-white placeholder-white/60 text-xs tracking-[0.2em] focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white py-4 rounded-lg text-[#1e3a8a] font-bold text-sm tracking-widest hover:bg-sky-50 transition-colors shadow-lg"
          >
            LOGIN
          </button>
        </form>
      </div>

      {/* Branding Decoration */}
      <div className="absolute bottom-8 text-[#1e3a8a]/40 font-semibold tracking-[0.4em] text-xs z-10">
        SYSTEM ACCESS • SECURE GATEWAY
      </div>
    </div>
  );
}

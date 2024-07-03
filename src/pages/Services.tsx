import { HiMiniCodeBracket, HiDevicePhoneMobile } from "react-icons/hi2";

export default function Services() {
  return (
    <div
      id="Services"
      className="min-h-screen  pt-[12rem] flex flex-col items-center gap-24"
    >
      <h1 className="text-center text-5xl font-bold">My Services</h1>

      <div className="min-w-full flex items-center justify-around gap-4 gap-y-8 flex-wrap">
        <div
          className="border-[3px] border-[#A13333] rounded-3xl w-[21rem] sm:w-[25rem] h-[25rem] flex items-start justify-center px-8 flex-col gap-8
             hover:bg-[#A13333]/70 hover:text-slate-200 hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <HiMiniCodeBracket className="text-slate-300 text-8xl" />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold">Web </p>
            <p className="text-4xl font-bold">Development</p>
          </div>

          <p className="text-slate-200 text-sm">
            I can help you build your website from scratch or improve your
            current one.
          </p>
        </div>
        <div
          className="border-[3px] border-[#A13333] rounded-3xl w-[21rem] sm:w-[25rem] h-[25rem] flex items-start justify-center px-8 flex-col  gap-8
             hover:bg-[#A13333]/70 hover:text-slate-200 hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <HiDevicePhoneMobile className="text-slate-300 text-8xl" />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold">Mobile </p>
            <p className="text-4xl font-bold">Development</p>
          </div>

          <p className="text-slate-200 text-sm">
            I can help you build your mobile app from scratch or improve your
          </p>
        </div>
        <div
          className="border-[3px] border-[#A13333] rounded-3xl  w-[21rem] sm:w-[25rem] h-[25rem] flex items-start justify-center px-8 flex-col  gap-8
             hover:bg-[#A13333]/70 hover:text-slate-200 hover:-translate-y-4 transition-all duration-300 ease-out"
        >
          <HiMiniCodeBracket className="text-slate-300 text-8xl" />
          <div className="flex flex-col gap-2">
            <p className="text-4xl font-bold">Software </p>
            <p className="text-4xl font-bold">Development</p>
          </div>

          <p className="text-slate-200 text-sm">
            I can help you build your software from scratch or improve your
            current one.
          </p>
        </div>
      </div>
    </div>
  );
}

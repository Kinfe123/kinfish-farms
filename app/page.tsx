import { Component } from "@/components/ui/animated-bg-black";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 w-full sm:w-auto -translate-x-1/2 -translate-y-1/2 z-[999] px-0 sm:px-6 lg:px-8">
        <div className="max-w-[80%] sm:max-w-full text-left mx-auto">
          <p className="mb-2 -mt-20 sm:-mt-40 text-2xl sm:text-6xl lg:text-7xl leading-none font-semibold tracking-tighter text-white">
            KiNFiSH FARMS.
          </p>
          <p className="bg-black/30 p-2 sm:p-3 text-base sm:text-xl leading-tight sm:leading-none font-semibold tracking-tighter text-white rounded-none">
            I farms things that makes sense to me through code and design.
          </p>
          <div className="flex items-center justify-end mt-4 sm:mt-2 -mr-0 sm:-mr-1">
            <Link 
              href="https://kinfish.farmui.com" 
              className="group uppercase font-mono tracking-tighter text-white hover:no-underline relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:bg-white after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-0 pb-0 text-xs sm:text-sm md:text-[14px] transition-all duration-300"
            >
              Get in touch
              <ArrowUpRight className="inline w-4 sm:w-5 mb-1 h-4 sm:h-5 group-hover:-translate-y-0.5 transition-all duration-700 ml-1" />
            </Link>
          </div>
        </div>
      </div>
      <Component />
    </div>
  );
}

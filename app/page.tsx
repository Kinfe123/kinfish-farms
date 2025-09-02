import { Component } from "@/components/ui/animated-bg-black";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[999]">

        <p className="mb-2 -mt-40 text-left font-sans text-7xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
          KiNFiSH FARMS.
        </p>
        <p className="bg-black/30 p-2 text-left font-sans text-xl leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
          I farms things that makes sense to me through code and design.
        </p>
        <div className="flex items-right justify-end -mr-1">
          <Link href="https://kinfish.farmui.com" className="group uppercase font-mono tracking-tighter text-white hover:no-underline relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-white after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0 text-sm sm:text-sm md:text-[14px] mt-2">

            Get in touch
            <ArrowUpRight className="inline w-5 mb-1 h-5 group-hover:-translate-y-0.5 transition-all duration-700" />
          </Link>
        </div>
      </ div>
      <Component />
    </div>
  );
}

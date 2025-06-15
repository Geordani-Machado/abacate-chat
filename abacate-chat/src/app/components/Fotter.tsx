
import { Github , Discord, Instagram, Twitter, Youtube } from 'iconoir-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
        fixed bottom-0 left-0 w-full bg-white 
        p-4 md:p-8 z-10 
        flex flex-row flex-wrap items-center justify-between gap-4
        text-[#4C5267]
      "
    >
      <p className="font-semibold text-base leading-[1.4] tracking-[0.1px]">
        AbacatePay @ {year}
      </p>

      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex gap-4">
          <p className="font-semibold text-base leading-[1.4] tracking-[0.1px]">
            Termos e condições
          </p>
          <p className="font-semibold text-base leading-[1.4] tracking-[0.1px]">
            Privacidade
          </p>
        </div>
        <div className="block md:hidden w-full h-px bg-zinc-200 my-2" />
        <div className="flex gap-4">
          <Discord />
          <Instagram />
          <Twitter />
          <Youtube />
          <Github />
        </div>
      </div>
    </footer>
  );
}
import IconDiscord from "@icons/discord";
import IconYoutube from "@icons/youtube";
import IconInstagram from "@icons/instagram";
import IconTwitter from "@icons/twitter";
import IconGithub from "@icons/github";

export default function Footer() {
  return (
    <footer className="flex items-center px-8 gap-4 mt-2 w-full justify-between text-[#4C5267]">
      <div>
        <p className="font-semibold text-4 text-right align-middle">
          AbacatePay @ {new Date().getFullYear()}
        </p>
      </div>
      <div className="flex gap-4 items-center">
        <p className="font-semibold text-4 text-right align-middle">
          Termos e condições
        </p>
        <p className="font-semibold text-4 text-right align-middle">
          Privacidade
        </p>
        <hr className="w-1px h-5 bg-[#E2E7F1]" />
        <IconDiscord />
        <IconInstagram />
        <IconTwitter />
        <IconYoutube />
        <IconGithub />
      </div>
    </footer>
  );
}

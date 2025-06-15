"use client";

import Footer from "@components/Fotter";
import TextArea from "@components/TextArea";
import ButtonsLanguageSelect from "@components/ButtonsLinguageSelect";
import { useState } from "react";

export default function Page() {
  const [prompt, setPrompt] = useState<string>("");

  const handleLanguageSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
  };

  return (
    <div
      className="
        bg-white w-full min-h-screen flex flex-col gap-9
        justify-start md:justify-center items-start md:items-center
        pt-28 md:pt-8 px-4
      "
    >
      <TextArea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      {/* escondido em mobile, visível a partir de md */}
      <div className="hidden md:flex">
        <ButtonsLanguageSelect onSelect={handleLanguageSelect} />
      </div>

      <Footer />
    </div>
  );
}

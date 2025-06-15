"use client";

import Footer from "@/app/components/Footer";
import TextArea from "@/app/components/MainInput";
import ButtonsLanguageSelect from "@/app/components/ButtonsLanguageSelect";
import { useState } from "react";
import { ChatInterfaceV2 } from "./components/ChatInterfaceV2";

export default function Page() {
  const [prompt, setPrompt] = useState<string>("");

  const handleLanguageSelect = (selectedPrompt: string) => {
    setPrompt(selectedPrompt);
  };

  return (
<<<<<<< HEAD
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

=======
    <div className="bg-white w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full max-w-3xl flex flex-col flex-1 overflow-hidden p-5">
        <ChatInterfaceV2 />
      </div>
>>>>>>> fe59488dfa301e7a935a4345be179958e2cc418f
      <Footer />
    </div>
  );
}

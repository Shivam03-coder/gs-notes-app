import React from "react";
import { ArrowsUpFromLine, Code, Play, DollarSign } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import LanguageSelector from "../shared/lang-slelect-btn";

const Header = async () => {
  return (
    <header className="col-span-full w-full rounded bg-black">
      <nav className="flex w-full items-center justify-between rounded-2xl px-4 py-3">
        {/* LEFT: Logo and Snippets */}
        <div className="flex items-center gap-4 text-secondary">
          <span className="rounded-xl border border-gray-600 bg-black p-2">
            <Code size={32} />
          </span>
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold">CODE-X</h4>
            <p className="text-sm text-gray-400">AI Composed Code Editor</p>
          </div>
          <button className="flex items-center gap-2 rounded-xl border border-gray-500 bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600">
            <ArrowsUpFromLine size={19} />
            Snippets
          </button>
        </div>

        {/* RIGHT: Buttons */}
        <div className="flex items-center gap-4">
          {/* Run Button */}
          <button className="flex items-center gap-2 rounded-xl border border-gray-500 bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600">
            <Play size={19} />
            Run
          </button>
          {/* Language Selector */}
          <LanguageSelector />

          {/* Subscription Button */}
          <button className="flex items-center gap-2 rounded-xl border border-gray-500 bg-yellow-500 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-600">
            <DollarSign size={19} />
            Subscription
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

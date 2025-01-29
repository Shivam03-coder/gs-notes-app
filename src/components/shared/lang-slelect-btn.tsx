"use client";
import { Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import useMount from "@/hooks/use-mount";
type Checked = DropdownMenuCheckboxItemProps["checked"];

function LanguageSelector() {
  const languages = [
    { name: "C#", shortcut: "⌘C", image: "/csharp.png" },
    { name: "C++", shortcut: "⌘C++", image: "/cpp.png" },
    { name: "Java", shortcut: "⌘J", image: "/java.png" },
    { name: "Go", shortcut: "⌘G", image: "/go.png" },
    { name: "Rust", shortcut: "⌘R", image: "/rust.png" },
    { name: "TypeScript", shortcut: "⌘TS", image: "/ts.png" },
    { name: "JavaScript", shortcut: "⌘JS", image: "/js.png" },
    { name: "Python", shortcut: "⌘P", image: "/python.png" },
    { name: "Ruby", shortcut: "⌘Rb", image: "/ruby.png" },
    { name: "Swift", shortcut: "⌘C#", image: "/swift.png" },
  ];

  const [selectedLang, setSelectedLang] = useLocalStorage("language-name", "");
  const [selectedLangImg, setSelectedLangImg] = useLocalStorage(
    "language-image",
    "",
  );

  const mount = useMount();
  const handleSelect = (language: { name: string; image: string }) => {
    setSelectedLang(language.name);
    setSelectedLangImg(language.image);
  };

  if (!mount) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="text-secondary min-w-36 rounded-xl border border-gray-500">
          {(selectedLangImg && (
            <Image
              src={selectedLangImg}
              alt={selectedLang}
              className="h-6 w-6 rounded-full"
              width={30}
              height={35}
            />
          )) || <Globe className="h-6 w-6 text-gray-400" />}
          {selectedLang || "Select Language"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 bg-primary text-secondary">
        <DropdownMenuLabel>Programming Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.name}
              className="flex items-center justify-between"
              onSelect={() => handleSelect(language)}
            >
              <div className="flex items-center">
                <Image
                  src={language.image}
                  alt={language.name}
                  className="mr-3 rounded"
                  width={30}
                  height={30}
                />
                <span>{language.name}</span>
              </div>
              {selectedLang === language.name && (
                <span className="text-green-500">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LanguageSelector;

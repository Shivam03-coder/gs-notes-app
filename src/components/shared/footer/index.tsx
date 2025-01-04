import {
  Facebook,
  GithubIcon,
  Instagram,
  Linkedin,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const Appfooter = () => {
  return (
    <footer className="w-full absolute bottom-0 left-0 bg-primary px-6 py-3 text-secondary">
      <div className="mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Developer Info */}
        <div className="mb-6 flex items-center gap-3 md:mb-0">
          <Image
            src="/dev.jpeg"
            className="rounded-full"
            height={60}
            width={60}
            alt="dev.jpeg"
          />
          <div>
            <h6 className="font-semibold">Shivam Anand</h6>
            <p className="text-sm">India (Bihar)</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mb-6 text-center md:mb-0 md:text-left">
          <p className="text-sm">© 2025 Shivam Anand. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 md:justify-end">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="text-xl transition-colors hover:text-blue-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/shivam-anand-b79136277/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="text-xl transition-colors hover:text-blue-700" />
          </a>
          <a
            href="https://github.com/Shivam03-coder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="text-xl transition-colors hover:text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Appfooter;

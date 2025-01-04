import { Pencil, Rocket } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import NavMenuBox from "../nav-menu-box";
import { currentUser } from "@clerk/nextjs/server";

const AppNavBar = async () => {
  const user = await currentUser();
  return (
    <header className="mx-auto flex w-[97%] flex-1 rounded bg-transparent py-4 text-primary shadow backdrop-blur-md">
      <nav className="flex flex-1 items-center justify-between px-2 md:px-5">
        {/* LOGO SECTION */}
        <span className="flex items-center gap-2">
          <i>
            <Pencil />
          </i>
          <h3>GS-NOTES</h3>
        </span>
        {/* NAVIGATION MENU SECTION */}
        <NavMenuBox />
        {/* SIGNIN-LOGIN SECTION */}
        {user ? (
          <Button className="rounded text-secondary">
            GO TO DASHBOARD <Rocket />{" "}
          </Button>
        ) : (
          <span className="flex items-center gap-2">
            <Button className="rounded" variant={"outline"}>
              LOGIN
            </Button>
            <Button className="rounded text-secondary">SIGN-UP</Button>
          </span>
        )}
      </nav>
    </header>
  );
};

export default AppNavBar;

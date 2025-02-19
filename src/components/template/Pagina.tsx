"use client";
import React, { ReactNode, useState } from "react";
import Menu from "./Menu";
import UsuarioInfo from "./UsuarioInfo";
import Logo from "./Logo";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface PaginaProps {
  children?: ReactNode;
}

export default function Pagina(props: PaginaProps) {
  const [tema, setTema] = useState<"dark" | "">("dark");

  function toggleTema() {
    setTema(tema === "dark" ? "" : "dark");
  }

  const usuario = {
    nome: "Pedro Lucas",
    email: "pedro@user.com",
    imagemUrl:
      "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  };

  return (
    <div
      className={`flex h-screen relative ${
        tema === "dark" ? "dark" : ""
      }`}
    >
      <aside
        className="flex flex-col 
        bg-white dark:bg-zinc-900
        text-black dark:text-white
      w-80 "
      >
        <Logo className="p-7" />
        <Menu className="px-7  flex-1" />
        <div className="bottom-0">
          <hr className="mx-7 border-zinc-400 dark:border-zinc-700" />
          <div className="p-7">
            <UsuarioInfo {...usuario} />
          </div>
        </div>
      </aside>
      <div
        className={`p-7 flex-1 
        bg-zinc-100 dark:bg-zinc-950
        text-black dark:text-white
        `}
      >
        {props.children}
      </div>
      <div className="absolute right-10 bottom-10">
        <button className=" p-2 rounded-xl 
        bg-gray-300 hover:bg-gray-400 
        dark:bg-gray-700 dark:hover:bg-gray-600" onClick={toggleTema}>
          {tema === "dark" ? <IconSun className="text-white" /> : <IconMoon />}
        </button>
      </div>
    </div>
  );
}

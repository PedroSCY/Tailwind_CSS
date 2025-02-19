import { IconDotsVertical } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

interface UsuarioInfoProps {
  nome: string;
  email: string;
  imagemUrl: string;
  className?: string;
}

export default function UsuarioInfo(props: UsuarioInfoProps) {
  return (
    <div className={`flex gap-3 rounded-md items-center py-1 px-3
     bg-gray-200 dark:bg-zinc-800
     hover:bg-gray-300 dark:hover:bg-zinc-700
    ${props.className ?? ""}`}>
        <Image
          src={props.imagemUrl}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <span className="font-semibold text-zinc-600 dark:text-zinc-100">{props.nome}</span>
          <span className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">{props.email}</span>
        </div>
      <div className="flex-1"></div>
      <IconDotsVertical className="cursor-pointer" />
    </div>
  );
}

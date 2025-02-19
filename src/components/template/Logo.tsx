import { IconBrandTailwind } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

interface LogoProps {
    className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <Link href="/">
    <div className={`flex gap-2 items-center text-zinc-700 dark:text-zinc-400 ${props.className ?? ""}`}>
      <IconBrandTailwind size={40} stroke={1} />
      <span className="">TailwindCSS</span>
    </div>
    </Link>
  );
}

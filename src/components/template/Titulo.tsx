import React from "react";

// Para aplicar o gradient no texto, é necessário usar a propriedade text-transparent e bg-clip-text
// O text-transparent faz com que o texto fique transparente, e o bg-clip-text faz com que o background seja aplicado no texto

interface TituloProps {
  principal: string;
  secundario: string;
  gradiente?: boolean;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className=" flex flex-col items-start">
      <h1 className={`
        text-4xl font-black
        ${props.gradiente ? "bg-gradient-to-br from-red-400 via-pink-600 to-purple-900 text-transparent bg-clip-text" : ''}
        `}>
        {props.principal}
        </h1>
      <h2 className="text-base font-light text-zinc-500">
        {props.secundario}
      </h2>
    </div>
  );
}

import React from "react";


// Usamos pseudo-classes do Tailwind CSS como um sistema por composição de classes
// Pseudo-classes são classes que são aplicadas a um elemento quando ele está em um estado específico 
// Exemplo: hover, focus, active, visited, first-child, last-child, odd, even, etc.

export default function Pseudo() {
  return (
    <div
      className="
    flex justify-center items-center h-full
    "
    >
      <button className=" p-2 rounded-md
      bg-green-500 hover:bg-green-700
      text-black hover:text-white">
        Salvar
      </button>
    </div>
  );
}

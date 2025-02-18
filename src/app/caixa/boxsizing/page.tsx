import Caixa from "@/components/Caixa";
import React from "react";

//box-border é o padrão, ele inclui a borda no tamanho do elemento
//box-content ignora a borda no tamanho do elemento

export default function BoxSizing() {
  return (
    <div className="flex flex-col gap-2">
      <Caixa className="w-36">#1</Caixa> {/* box-border é o padrão aqui */}
      <Caixa className="w-36 h-36 border-8 border-white box-content">#2</Caixa>
    </div>
  );
}

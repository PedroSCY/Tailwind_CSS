import Caixa from "@/components/Caixa";
import React from "react";

// Quando usamos flex ou grid, podemos usar gap para definir o espaçamento entre os elementos, mas caso não esteja usando flex ou grid, podemos usar o space para definir o espaçamento entre os elementos filhos. substituindo o uso do gap.
// diferente do gap, o space não reconhece automaticamente a direção do espaçamento, então é necessário definir a direção do espaçamento, como por exemplo space-y-5 para espaçamento vertical e space-x-5 para espaçamento horizontal, quando usados em conjunto, equivale a um gap-5. 

export default function Espacos() {
  return (
    <div className="space-y-5">
      <Caixa className="">#1</Caixa>
      <Caixa className="">#2</Caixa>
      <Caixa className="">#3</Caixa>
      <Caixa className="">#3</Caixa>
      <Caixa className="">#3</Caixa>
    </div>
  );
}

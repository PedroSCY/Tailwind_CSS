import Caixa from "@/components/Caixa";
import React from "react";

// Grid layout pode ser uma boa obção pra estruturar elementos como tabela, facilitando a proporção igualitaria dos elementos, algo um pouco mais complicado de se fazer com flexbox.

// "grid" define o layout 
// grid-cols-* define o número de colunas
//col-span-* define o número de colunas que o elemento ocupa
// row-span-* define o número de linhas que o elemento ocupa

// tembem tem o grid-rows-* que define o número de linhas

export default function GrindInicial() {
  return (
    <div
      className="
        p-7 gap-2.5 grid grid-cols-3
"
    >
      <Caixa className="row-span-2">#1</Caixa>
      <Caixa className="">#2</Caixa>
      <Caixa className="">#3</Caixa>
      {/* <Caixa className="">#4</Caixa> */}
      <Caixa className="col-span-2">#5</Caixa>
      {/* <Caixa className="">#6</Caixa> */}
      <Caixa className="col-span-2">#7</Caixa>
      {/* <Caixa className="">#8</Caixa> */}
      <Caixa className="">#9</Caixa>
    </div>
  );
}

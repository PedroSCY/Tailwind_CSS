import Caixa from "@/components/Caixa";
import React from "react";

// É padding que você quer? Então toma padding!


export default function Padding() {
  return (
    <div className="flex-center gap-5 h-screen">
      <Caixa className="px-3">#1</Caixa>
      <Caixa className="py-3">#2</Caixa>
      <Caixa className="pr-4 pb-4">#3</Caixa>
      <Caixa className="p-4">#3</Caixa>
      <Caixa className="p-[11px]">#3</Caixa>
    </div>
  );
}

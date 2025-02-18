import Caixa from "@/components/Caixa";
import React from "react";

// Margin é semelhante ao padding, mas é aplicado fora do elemento.
// A diferença é que o margin não é aplicado dentro do elemento, mas sim fora dele.


export default function Margin() {
  return (
    <div className="flex-center h-screen">
      <Caixa className="mx-3">#1</Caixa>
      <Caixa className="my-5">#2</Caixa>
      <Caixa className="mr-6 mb-16">#3</Caixa>
      <Caixa className="m-4">#3</Caixa>
      <Caixa className="mt-[50px]">#3</Caixa>
    </div>
  );
}

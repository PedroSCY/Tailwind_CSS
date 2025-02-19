import Titulo from "@/components/template/Titulo";
import React from "react";

export default function TituloPage() {
  return (
    <div className="p-10">
      <Titulo
        principal="Dashboard"
        secundario="Informação sobre a sua conta"
        gradiente
      />
    </div>
  );
}

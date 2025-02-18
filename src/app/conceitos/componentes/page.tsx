import React from "react";


// É possível criar componentes/classes de estilização personalizados com o Tailwind CSS, utilizando a propriedade @apply.
// Esses componentes ajudam a manter o código mais limpo e organizado, alem de possibilitar a reutilização de estilos personalizados recorrentes.

// Aqui eu criei três botões personalizados, com estilos de cores diferentes, que podem ser reutilizados em qualquer parte do código. ambos os botoes utilizam um outro componente de estilização personalizado chamado "btn" que contem a estrutura basica recorrente a qualquer outro botao.

// btn, btn-info, btn-success e btn-error foram definidos no global.css.

// Tambem é possivel criar componentes que simplificam o uso de um conjunto de classes recorrentes, como por exemplo, eu criei um componente flex-center, que centraliza os elementos horizontalmente e verticalmente. simplificando uma estrita mais extensa que seria "flex justify-center items-center".

export default function Componentes() {
  return (
    <div className="flex-center h-screen gap-5">

      <button className="btn-info">
        Info
      </button>

      <button className="btn-success">
        Sucesso
      </button>

      <button className="btn-error">
        Erro
      </button>
    </div>
  );
}

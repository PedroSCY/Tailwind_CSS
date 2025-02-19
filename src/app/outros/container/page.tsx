import React from 'react'

// O container é um componente que limita o conteúdo a um tamanho máximo usando breakpoints, ele é muito útil para garantir que o conteúdo não fique muito largo em telas grandes.
//mx-auto é uma classe do tailwind que centraliza o conteúdo horizontalmente.

export default function Container() {
  return (
    <div className='bg-red-500 container mx-auto text-4xl h-48 my-10'>Container</div>
  )
}

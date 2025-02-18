import React from 'react'

// mobile-fist é uma abordagem de design que prioriza o design para dispositivos móveis, e é aplicado no Tailwind CSS. 
// O Taileind tambem dispoe nativamente de brackpoints para diferentes tamanhos de tela, qual auxilia na construção de layouts responsivos.
// "xs" "sm" "md" "lg" "xl" "2xl"

export default function Mobile() {  

    return (
    <div className='
    flex justify-center items-center
    bg-red-500 h-48 text-3xl md:text-4xl lg:text-6xl
    w=[90%] 2xl:w-[70%]
    '>
        <span className='inline sm:hidden'>Mobile</span>
        <span className='hidden sm:inline'>Não mobile</span>
    </div>
  )
}

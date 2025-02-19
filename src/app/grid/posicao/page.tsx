import Caixa from '@/components/Caixa'
import React from 'react'


// row-start-* define a linha de início do elemento
// row-end-* define a linha de fim do elemento
// col-start-* define a coluna de início do elemento
// col-end-* define a coluna de fim do elemento
// essas propriedades são usadas para definir a posição dos elementos dentro do grid e quanto espaço eles ocupam de uma forma mais precisa.

export default function Posicao() {
  return (
    <div className='grid grid-cols-3 gap-2.5 m-5 h-72 bg-zinc-700'>
        <Caixa className='row-start-1 row-end-4'>#1</Caixa>
        <Caixa className='col-start-2 col-end-4 row-start-1 row-end-3'>#2</Caixa>
        <Caixa className=''>#3</Caixa>
        <Caixa className=''>#4</Caixa>

    </div>
  )
}

import Caixa from '@/components/Caixa'
import Grid from '@/components/layout/Grid'
import React from 'react'

export default function GridLayout() {
  return (
    <Grid col={1} sm={2} md={3} lg={4} xl={5} xl2={6} semEspaco className='gap-7'>
        <Caixa className=''>#1</Caixa>
        <Caixa className=''>#2</Caixa>
        <Caixa className=''>#3</Caixa>
        <Caixa className=''>#4</Caixa>
        <Caixa className=''>#5</Caixa>
        <Caixa className=''>#6</Caixa>
        <Caixa className=''>#7</Caixa>
        <Caixa className=''>#8</Caixa>
        <Caixa className=''>#9</Caixa>
    </Grid>
  )
}

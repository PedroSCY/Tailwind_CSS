import Caixa from "@/components/Caixa";

// A propriedade shrink-0 impede que o elemento seja redimensionado
// pode ser ususado pra definir prioridade de colunas em uma tabela
// A propriedade grow-0 impede que o elemento seja redimensionado
// A propriedade flex-auto faz com que o elemento se expanda para preencher o espaço restante

export default function Redimensionamento() {
    return (
        <div className="flex gap-1.5">
            <Caixa className="w-14">#1</Caixa>
            <Caixa className="w-32 flex-auto">#2</Caixa>
            <Caixa className="w-64 flex-auto">#3</Caixa>
        </div>
    )
}
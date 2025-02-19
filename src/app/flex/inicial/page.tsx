import Caixa from "@/components/Caixa";

// justify-center: centraliza os elementos horizontalmente
// items-center: centraliza os elementos verticalmente
// content-center: centraliza os elementos no eixo principal
// O Content-* é usado para alinhar os elementos no eixo principal do flex container. mais usuado com flex-wrap.

export default function Flex() {
    return (
        <div className="
            flex flex-wrap gap-1 h-full
            justify-center items-center content-center
        ">
            <Caixa className="w-2/5">#1</Caixa>
            <Caixa className="w-2/5">#2</Caixa>
            <Caixa className="w-2/5">#3</Caixa>
            <Caixa className="w-2/5">#4</Caixa>
            <Caixa className="w-2/5">#5</Caixa>
        </div>
    )
}
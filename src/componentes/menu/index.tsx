import internal from "stream";
import { Container } from "./style";

interface abrirnovaTela {
    abrirNovaTela: (valor: string) => void;
}

export function Menu({ abrirNovaTela }: abrirnovaTela) {
    return (
        <Container>
            <ul>
                <li onClick={() => abrirNovaTela('1')} >Long bob</li>
                <li onClick={() => abrirNovaTela('2')} >Blunt cut</li>
                <li onClick={() => abrirNovaTela('3')} >Pixie cut</li>
                <li onClick={() => abrirNovaTela('4')} >Assimétrico</li>
                <li onClick={() => abrirNovaTela('5')} >Repicado</li>
                <li onClick={() => abrirNovaTela('6')} >Franjinha</li>
                <li onClick={() => abrirNovaTela('7')} >Em camadas</li>
            </ul>
        </Container>
    )
}
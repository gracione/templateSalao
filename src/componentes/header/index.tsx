import { Cabelos } from "../cabelos";
import { Container, Main } from "./style";

interface abrir {
    eAbrir: boolean;
    fechar: () => void;
    valor: string;
}

export function Header({ eAbrir, fechar, valor }: abrir) {
    return (
        <Container>
            <Main>
                <Cabelos
                    eAbrir={eAbrir}
                    fechar={fechar}
                    valor={valor}
                ></Cabelos>
            </Main>
        </Container>
    )
}
import { Container } from "./style";
import logo from "../../assets/logo.png";

export function Content() {
    return (
        <Container>
            <div className="logo" >
                <img src={logo} alt="Logo" />
            </div>
            <ul>
                <li>
                    <a href="">
                        Agendar Horario
                    </a>
                </li>
                <li>
                    <a href="">
                        Sobre nos
                    </a>
                </li>
                <li>
                    <a href="https://goo.gl/maps/fCmE9WLiNZrk7VNZA">
                        Localização
                    </a>
                </li>
            </ul>

        </Container>
    )
}
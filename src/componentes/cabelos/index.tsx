import Modal from "react-modal";
import { Container } from './style';

interface abrir {
    eAbrir: boolean;
    fechar: () => void;
    valor: string;
}

export function Cabelos({ eAbrir, fechar, valor }: abrir) {
    return (
        <>
            <Modal
                isOpen={eAbrir}
                onRequestClose={fechar}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
            >
                <Container>
                    <img src={valor} alt="" />
                </Container>
            </Modal>
        </>
    );
}
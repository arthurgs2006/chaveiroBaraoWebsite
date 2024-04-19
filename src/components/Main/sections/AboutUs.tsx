import FachadaInternaChaveiro from '../../../assets/images/FachadaChaveiroInterno.jpg'
import {
    Container,
    Col,
    Row
} from "reactstrap"

export default function AboutUs() {
    return (
        <>
            <section className="bg-black text-white default-pad pb-5" id="aboutus">
                <Container >
                    <Row className="d-flex flex-wrap f-column">
                        <h1>Sobre Nós</h1>
                        <hr />
                        <Col className="d-flex">
                            <img 
                            src={FachadaInternaChaveiro}
                            alt="Fachada do Chaveiro Barão" 
                            className="img-fluid object-fit-cover rounded" />
                        </Col>
                        <Col className="d-flex align-items-center p-2 flex-wrap text-break">
                            <h5>
                                Com ínicio em 2002, o <b>Chaveiro Barão &#169; </b>
                                inicia sua carreira com nossa primeira loja, localizada
                                no Jardim Paulista. Desde lá, entregamos ao cliente
                                o melhor serviço e qualidade em todos as atividades prestadas.
                                Valorizamos um bom negócio, colocamos o cliente em primeira
                                instância e entregamos o nosso melhor, em cada lugar que
                                atendemos.
                            </h5>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
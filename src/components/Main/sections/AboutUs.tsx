import FachadaInternaChaveiro from '../../../assets/images/FachadaChaveiroInterno.jpg'
import Chaveiro2014 from '../../../assets/images/Chaveiro2014.jpg'
import Chaveiro2020 from '../../../assets/images/Chaveiro2020.jpg'
import {
    Container,
    Col,
    Row,
    UncontrolledCarousel
} from "reactstrap"

export default function AboutUs() {
    return (
        <>
            <section className="bg-black text-white default-pad pb-5">
                <Container >
                    <Row className="d-flex flex-wrap f-column">
                        <h1 id="aboutus">Sobre Nós</h1>
                        <hr />
                        <Col className="d-flex">
                            <UncontrolledCarousel
                                className='w-100 d-flex rounded overflow-hidden 
                                carousel-inner '
                                items={[{
                                    altText: 'Chaveiro Barão',
                                    caption: 'Chaveiro na Atualidade',
                                    key: 1,
                                    src: FachadaInternaChaveiro
                                },
                                {
                                    altText: 'Chaveiro em 2020',
                                    caption: 'Chaveiro em 2020',
                                    key: 2,
                                    src: Chaveiro2020
                                },
                                {
                                    altText: 'Chaveiro em 2014',
                                    caption: 'Chaveiro em 2014',
                                    key: 3,
                                    src: Chaveiro2014
                                }
                                ]}
                            />
                            {/* <img 
                            src={FachadaInternaChaveiro}
                            alt="Fachada do Chaveiro Barão" 
                            className="img-fluid object-fit-cover rounded" /> */}
                        </Col>
                        <Col className="d-flex align-items-center p-2 flex-wrap text-break" >
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
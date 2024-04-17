import { Container, Col, Row } from "reactstrap"
import sharpPilerImg from '../../../assets/images/AfiandoAlicate.jpg' 
export default function locksmithAD() {

    return (
        <>
            <section className="bg-black text-white default-pad">
                <Container>
                    <div className="d-flex flex-wrap gap-5 " >
                        <div className="border-0 bg-black mapCard">
                            <Row className="gap-2 p-3 d-flex flex-wrap">
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                            </Row>
                            <Row className="gap-2 p-3">
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                            </Row>
                            <Row className="gap-2 p-3">
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col>
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                            </Row>
                        </div>
                        <Col className="d-flex align-items-center ">
                            <h1 className="px-2 titleItem">
                                Conheça seu novo profissional,
                                pronto para qualquer serviço!
                            </h1>
                        </Col>
                    </div>
                </Container>
            </section>
        </>
    )
}
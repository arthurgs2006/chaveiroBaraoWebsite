import { Container, Col, Row } from "reactstrap"
import sharpPilerImg from '../../../assets/images/AfiandoAlicate.jpg'
export default function locksmithAD() {

    return (
        <>
            <section className="bg-black text-white default-pad">
                <Container fluid='sm'>
                    <div className="d-flex gap-5" >
                        <div className="border-0 bg-black mapCard">
                            <Row className="d-flex flex-wrap px-3 gap-2">
                                <Col className="gap-2 d-flex flex-column flex-wrap ">
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col className="gap-2 d-flex flex-column flex-wrap ">
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                                <Col className="gap-2 d-flex flex-column flex-wrap">
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </Col>
                            </Row>
                        </div>
                        <Col className="px-2 d-flex align-items-center w-100">
                            <h1 className="titleItem">
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
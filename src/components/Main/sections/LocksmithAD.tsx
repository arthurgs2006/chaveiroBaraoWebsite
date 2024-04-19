import { Container, Col, Row } from "reactstrap"
import sharpPilerImg from '../../../assets/images/AfiandoAlicate.jpg'
export default function locksmithAD() {

    return (
        <>
            <section className="bg-black text-white default-pad">
                <Container>
                    <div className="d-flex gap-2" >
                        <div className="border-0 bg-black mapCard">
                            <Row className="d-flex flex-wrap gap-3 px-0 " >
                                <div className=" d-flex flex-wrap px-0 gap-3">
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25 "
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </div>
                                <div className=" d-flex flex-wrap px-0 gap-3">
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </div>
                                <div className=" d-flex flex-wrap px-0 gap-3">
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img 
                                        className="img-fluid rounded imgGridAnimation w-25" 
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                </div>
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
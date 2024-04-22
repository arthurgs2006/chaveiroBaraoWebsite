import { Container, Col, Row } from "reactstrap"
import sharpPilerImg from '../../../assets/images/AfiandoAlicate.jpg'
import ChaveCanivete from '../../../assets/images/ChaveCanivete.png'
import SoldagemCarro from '../../../assets/images/SoldagemCarro.png'
import SoldagemPlaca from '../../../assets/images/Soldagem.png'
import Fechaduras from '../../../assets/images/Fechaduras.png'
import Cadeados from '../../../assets/images/Cadeados.png'
import Cadeado from '../../../assets/images/Cadeado.png'
import ControlesAlarme from '../../../assets/images/ControlesAlarme.png'
import ChaveCanivete2 from '../../../assets/images/ChaveCanivete (2).png'
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
                                        className="img-fluid rounded imgGridAnimation w-25 ratio ratio-1x1"
                                        src={sharpPilerImg} alt="Afiação de Alicate" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25 ratio ratio-1x1"
                                        src={SoldagemCarro} alt="Soldagem de Placas Automotivas" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25 ratio ratio-1x1"
                                        src={SoldagemPlaca} alt="Soldagem de Controles" />
                                </div>
                                <div className=" d-flex flex-wrap px-0 gap-3">
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={Fechaduras} alt="Fechadura" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={ChaveCanivete} alt="Chave Canivete" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25 ratio ratio-1x1"
                                        src={Cadeados} alt="Cadeados" />
                                </div>
                                <div className=" d-flex flex-wrap px-0 gap-3">
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={Cadeado} alt="Cadeado" />
                                    <img 
                                        className="img-fluid rounded imgGridAnimation w-25" 
                                        src={ControlesAlarme} alt="Controles de Alarme" />
                                    <img
                                        className="img-fluid rounded imgGridAnimation w-25"
                                        src={ChaveCanivete2} alt="Afiação de Alicate" />
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
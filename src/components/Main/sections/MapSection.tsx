import { Container, Card, Col } from "reactstrap"
export default function Map() {
    return (
        <>
            <section className="bg-black default-pad ">
                <Container className="text-white ">
                    <h1>Localização</h1>
                    <hr />
                    <div className="d-flex flex-wrap">
                        <Card className="mapCard w-100 border-0">
                            <div className="h-100 ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10434.970658682994!2d-47.79655668076673!3d-21.184683808682475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf1bd78a4007%3A0xe71f9f7517282334!2sChaveiro%20Bar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1712840915728!5m2!1spt-BR!2sbr"
                                    className="w-100 img-fluid rounded h-100 " loading="lazy"
                                ></iframe>
                            </div>
                        </Card>
                        <Col className="p-5 d-flex flex-column justify-content-center">
                            <h1>Sempre próximo a você!</h1>
                            <p>
                                Faça-nos uma visita e explore a diversidade que o <b>Chaveiro Barão </b>
                                pode te oferecer!
                            </p>
                        </Col>
                    </div>
                </Container>
            </section >
        </>
    )
}
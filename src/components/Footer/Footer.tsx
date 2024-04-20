import { Row, Col, Container } from 'reactstrap'
import logoCB from '../../../public/logo-cb-transparent.jpeg'

export default function Footer() {

    return (
        <>
            <footer className="bg-dark w-100 default-pad p-5">
                <Container fluid='sm'>
                    <Row className='gap-5 '>
                        <Col>
                            <a href="#top">
                                <img src={logoCB} alt="Logo do Chaveiro Barão"
                                    className='img-fluid w-50 p-3' />
                            </a>
                            <a href="https://maps.app.goo.gl/MYqnb3DfNxtVxh896"
                                target='_blank' className='text-decoration-none links' >
                                <Col className="d-flex flex-row px-4 gap-2 links
                                align-items-center">
                                    <i className="bi bi-globe2 text-secondary "></i>
                                    <h6 className='w-50'>
                                        Rua Carlos Chagas, 575 - Jardim Paulista, Ribeirão Preto, SP.
                                    </h6>
                                </Col>
                            </a>
                        </Col>
                        <Col className='text-white d-flex flex-column gap-4' id='contact'>
                            <div className='d-flex flex-column gap-1 '>
                                <h4>CONTATOS:</h4>
                                <span className="d-flex" data-toggle="tooltip" title="Telefones de Contato">
                                    <a className='text-decoration-none links
                            d-flex flex-row gap-2 align-items-center fs-5'>
                                        <i className="bi bi-telephone-fill"></i>
                                        <div className='d-flex flex-column text-wrap'>
                                            <span>
                                                ( 16 ) 99132-7077 /
                                            </span>
                                            <span>
                                                ( 16 ) 3967-3040
                                            </span>
                                        </div>
                                    </a>
                                </span>

                                <a href='#' target='_blank'
                                    className='text-decoration-none links
                            d-flex flex-row gap-2 align-items-center fs-5 text-wrap'>
                                    <i className="bi bi-whatsapp"></i>
                                    ( 16 ) 99132-7077
                                </a>
                                <span className="d-flex" data-toggle="tooltip" title="Instagram">
                                    <a href="https://www.instagram.com/chaveiro_barao509?igsh=bjBmNjVrZ3Zwd29z"
                                        className='text-decoration-none links d-flex flex-row gap-2 
                                align-items-center fs-5' target='_blank'>
                                        <i className="bi bi-instagram"></i>
                                        @chaveiro_barao509
                                    </a>
                                </span>
                                <a href="#" target='_blank' className='text-decoration-none d-flex
                             gap-2 align-items-center fs-5 links text-break'>
                                    <i className="bi bi-envelope-at-fill"></i>chaveirobarao@hotmail.com
                                </a>
                            </div>
                        </Col>
                        <Col className='text-white'>
                            <div className='d-flex flex-column gap-2'>
                                <h4>HORÁRIO DE FUNCIONAMENTO:</h4>
                                <span className='text-decoration-none text-secondary 
                            d-flex flex-row gap-2 align-items-center fs-5'>
                                    <i className="bi bi-clock-fill"></i>
                                    Segunda à Sexta: 7h as 18h
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <div className='bg-black text-center p-4'>
                <span className='h6 text-secondary'>
                    Copyright <b>Chaveiro Barão</b> Ltda |
                    Todos os Direitos Reservados |
                    Desenvolvido por <a href='https://www.linkedin.com/in/arthur-gonçalves-saldanha-375a70157'
                        target='_blank'
                        className='text-decoration-none links'>
                        <b>
                            Arthur Gonçalves Saldanha
                        </b>
                    </a>
                </span>
            </div>
        </>
    )
}
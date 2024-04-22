import { Container, Row } from 'reactstrap'
import CortandoChavedeCarro from '../../../../assets/images/CortandoChavedeCarro.png'
import ChaveCanivete from '../../../../assets/images/ChaveCanivete.png'
import ChavedeMoto from '../../../../assets/images/ChaveDeMoto.png'
import MaquinadeChave from '../../../../assets/images/MaquinadeChave.png'
import ChavePresença from '../../../../assets/images/ChavePresença.png'
import AberturadeCarro from '../../../../assets/images/AberturaCarro.png'
import ServiceItem from './serviceItem'


export default function ServiceGrid() {
    return (
        <>
            <section className="bg-black default-pad">
                <Container xs>
                    <h1 className='text-white'>
                        <i className="bi bi-escape"></i> Em Destaque
                    </h1>
                    <hr className='text-white' />
                    <Row className='d-flex justify-content-center align-items-center gap-4 mt-4 gridCol'>
                        <ServiceItem imgUrl={ChavePresença} title='Chaves Presenciais'
                            description='As Chaves Presenças são um pequeno controlo remoto, semelhante a um alarme, 
                            com botões para dar a partida, desligar o motor, travar e destravar as portas, entre outras 
                            funções. A grande diferença é que, nesta chave, não há aquela parte metálica que normalmente 
                            é inserida na ignição. Nós do Chaveiro Barão realizamos a cópia ou a confecção desta chave para
                            seu veículo com muito profissionalismo e dedicação... Venha conferir! ' id={Math.random() * 100} />
                        <ServiceItem imgUrl={CortandoChavedeCarro} title='Chaves Automotivas' description='As chaves automotivas são dispositivos simples, porém importantes para a segurança de seu veículo. São compostos por um chip eletrônico e uma lâmina metálica. O chip armazena informações cruciais do veículo, como o código de segurança, necessário para a ignição. Ao inserir a chave na ignição, o chip comunica-se com o sistema do carro, transmitindo o código. No Chaveiro Barão, oferecemos serviços especializados para cópia ou confecção dessas chaves, garantindo precisão e qualidade em nosso trabalho.' id={Math.random() * 100} />
                        <ServiceItem imgUrl={ChaveCanivete} title='Substituição de Carcaça' description='As chaves automotivas canivetes são dispositivos compactos que combinam um controle remoto com a funcionalidade de uma lâmina retrátil. Em algumas situações, pode ser necessário substituir a carcaça desgastada ou danificada dessas chaves. No Chaveiro Barão, oferecemos serviços especializados de troca de carcaça, garantindo que sua chave continue funcionando de forma eficiente e segura. Venha nos visitar e confira como podemos ajudá-lo a manter sua chave automotiva em perfeitas condições.' id={Math.random() * 100} />
                    </Row>
                    <Row className='d-flex justify-content-center gap-4 mt-4 gridCol'>
                        <ServiceItem imgUrl={ChavedeMoto} title='Chaves de Moto' description='As chaves de moto são essenciais para garantir o funcionamento seguro e eficiente do veículo. No Chaveiro Barão, oferecemos serviços especializados de cópia de chaves, garantindo precisão e qualidade em cada cópia produzida. Seja para uma chave reserva ou para substituir uma chave perdida, estamos aqui para ajudar. Visite-nos hoje mesmo e saiba como podemos atender às suas necessidades de cópia de chaves de moto com profissionalismo e dedicação.' id={Math.random() * 100} />
                        <ServiceItem imgUrl={MaquinadeChave} title='Cópias de Chaves' description='As chaves comuns ou tetras são elementos indispensáveis para o acesso e segurança de residências, empresas e automóveis. No Chaveiro Barão, oferecemos serviços especializados em cópia de chaves, garantindo precisão e qualidade em cada cópia produzida. Seja para uma chave reserva, para substituir uma chave danificada ou para qualquer outra necessidade, estamos aqui para ajudar. Visite-nos hoje mesmo e descubra como podemos atender às suas necessidades de cópias de chaves convencionais com profissionalismo e dedicação.' id={Math.random() * 100} />
                        <ServiceItem imgUrl={AberturadeCarro} title='Abertura de Carros' description='As aberturas de carro podem ser necessárias em situações de emergência, como trancar as chaves dentro do veículo. No Chaveiro Barão, oferecemos serviços especializados em aberturas de carro, utilizando técnicas seguras e eficientes para garantir o acesso ao veículo sem danificar a fechadura ou a porta. Nossa equipe altamente treinada está disponível para ajudar a resolver essas situações de forma rápida e profissional. Conte conosco para fornecer soluções confiáveis quando você mais precisa!' id={Math.random() * 100} />
                    </Row>
                </Container>
            </section>
        </>
    )
}
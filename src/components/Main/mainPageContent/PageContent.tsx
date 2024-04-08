import Typewriter from 'typewriter-effect';

export default function () {
  const services = [
    'Chaves Codificadas ?', 'Cópias de Chaves ?', 'Qualidade nos Serviços ?',
    'Controles ?', 'Tags ?', 'Chaveiros ?', 'Profissionais Competentes ?', 'Fechaduras ?',
    'Socorros ?', 'Preço Acessível ?', 'Atendimento Domiciliar ?'
  ];
  return (
    <>
      <div className='bg-black'>
        <section className=''>
          <div className="front-wallpaper">
          </div>
          <div className="overlay">
              <h1 className='text-white bg-text inner d-flex flex-column '>
                <span className=' mx-2'>
                  Procurando por
                  <Typewriter
                    options={{
                      strings: services,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                  
                </span>
              </h1>
            </div>
        </section>
      </div>
    </>
  )
}
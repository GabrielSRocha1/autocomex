import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/WhatsApp Image 2025-09-30 at 11.07.06.jpeg"
                alt="EVOIL Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Início</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Sobre</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Nossa abordagem</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Contato</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">Notícias</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-black bg-opacity-60"
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_9a4ff7921a4e43e6b95de45df6292a14f000.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.6
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Evolution Oil & Gas</h1>
            <p className="text-xl md:text-2xl mb-8">Seu parceiro seguro</p>
            <div className="space-y-4 text-lg md:text-xl max-w-3xl mx-auto">
              <p>A Evolution oil & gas tem orgulhosamente fornecido produtos e serviços de alta qualidade na indústria do petróleo.</p>
              <p>O que nos diferencia de outras empresas é nossa capacidade de nos conectar verdadeiramente com nossos fornecedores e clientes, e fornecer o serviço excepcional que eles merecem.</p>
            </div>
            <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              SABER MAIS
            </button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">O Que Fazemos</h2>
          <div className="w-24 h-1 bg-black mx-auto mb-4"></div>
          <h3 className="text-2xl text-black mb-8">Nossos Ativos</h3>
          <p className="text-lg text-black max-w-4xl mx-auto mb-16">
            A Evolution oil & gas tem investimentos estratégicos em infraestrutura industrial—refinarias, oleodutos, armazenamento e terminais—que complementam nossa atividade principal de trading e geram valor sustentável em toda a cadeia de suprimentos global para nossos clientes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1.png"
                  alt="Shipping"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-black">Transporte</h4>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1 (2).png"
                  alt="Terminals"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-black">Terminais</h4>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1 (1).png"
                  alt="Refineries"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-black">Refinarias</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Boundaries Section */}
      <section className="relative py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Image Section - Left Half */}
            <div className="w-full lg:w-1/2 relative h-[450px]">
              <Image
                src="/alternative-energy-blog-img-1.jpg"
                alt="Alternative energy facility"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Section - Right Half with Overlap */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative -mt-20 lg:mt-4 lg:-ml-24 z-10 bg-blue-600 p-6 lg:p-8 text-center lg:text-left h-[450px] flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 leading-tight">
                  Movendo fronteiras para um setor energético mais verde
                </h2>
                <div className="flex flex-col lg:flex-row items-start gap-4 mb-6">
                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm uppercase tracking-wide w-32 flex-shrink-0">
                    SABER MAIS
                  </button>
                  <p className="text-white text-lg leading-relaxed">
                    Esperamos fazer parceria com você e entregar excelência na indústria do petróleo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance and Ethics Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/11062b_aac85620fb59408f862b5c1ae10fafe7f000.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.5
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 max-w-4xl w-full">
            <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-6 uppercase">
              CONFORMIDADE E ÉTICA
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-white text-lg lg:text-xl leading-relaxed mb-8 text-left">
              Durante os últimos anos, a Evolution oil & gas investiu na construção de um Departamento de Conformidade líder da indústria. Nossas equipes trabalham continuamente para melhorar os procedimentos da empresa para mitigar riscos e antecipar outros que existem no setor de trading de commodities. Nosso objetivo é manter os mais altos padrões éticos e cumprir todas as regras e regulamentações relevantes onde quer que operemos.
            </p>
            <div className="text-center">
              <button className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                SABER MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tradings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 uppercase">
                NOSSOS TRADINGS
              </h2>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                O trading está no centro do negócio da Evolution. Expandimos nosso portfólio de trading para incluir o fornecimento e entrega global de petróleo bruto e produtos petrolíferos refinados, GLP, gás natural e GNL, biocombustíveis e fertilizantes.
              </p>
              <button className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                SABER MAIS
              </button>
            </div>

            {/* Right Column - Single Large Image */}
            <div className="relative h-[300px] lg:h-[400px] w-full">
              <Image
                src="/Home-10-22-2025_11_06_AM.png"
                alt="Our Tradings Process"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_6c7902afbfbe49568ba7c071115c6e22~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.6
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Evolution Oil & Gas</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">SOBRE NÓS</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Atribuímos nossa reputação aos relacionamentos duradouros com clientes que desenvolvemos ao longo dos anos. Acreditamos que todos os nossos clientes merecem o mais alto nível de serviço, e estamos comprometidos em fornecer exatamente isso. Explore o resto do nosso site para saber mais sobre o que temos a oferecer, e entre em contato com qualquer dúvida. A EVOLUTION OIL & GAS está aqui para você.
            </p>
          </div>
        </div>
      </section>

      {/* A Global Business Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 uppercase">
                UM NEGÓCIO GLOBAL
              </h2>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                Uma visão interativa de onde a Evolution oil & gas opera em todo o mundo.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                SABER MAIS
              </button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/image 1 (2).png"
                alt="Global business map"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px]">
              <Image
                src="/image 1.png"
                alt="Leadership team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 uppercase">
                LIDERANÇA
              </h2>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                A Evolution oil & gas mantém uma cadeia de comando curta para facilitar a tomada de decisões eficiente, o que garante que ajamos de forma decisiva para garantir vantagens no interesse de nossos parceiros e clientes.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                SABER MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 uppercase">
                NOSSA HISTÓRIA
              </h2>
              <p className="text-gray-800 text-lg lg:text-xl leading-relaxed mb-8">
                Descubra como evoluímos estrategicamente para nos tornar uma das principais casas de trading de commodities independentes do mundo.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                SABER MAIS
              </button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/image 1 (2).png"
                alt="Company history"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_8e0f52cec6514d2faabb72f00b70d9c0~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Evolution Oil & Gas</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">NOSSA ABORDAGEM</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Em todos os nossos esforços, a Evolution oil & gas mantém os mais altos padrões. Valorizamos saúde, segurança e meio ambiente, direitos dos funcionários, conformidade com leis locais e internacionais, e ser um parceiro comprometido com governos e entidades privadas.
            </p>
          </div>
        </div>
      </section>

      {/* Our Core Values Section - 2x3 Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Risk Management Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">GESTÃO DE RISCOS</h3>
              <p className="text-lg leading-relaxed">
                Nossa capacidade de gerenciar efetivamente os riscos inerentes ao trading de commodities é fundamental para o desenvolvimento contínuo e estabilidade.
              </p>
            </div>

            {/* Compliance Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">CONFORMIDADE</h3>
              <p className="text-lg leading-relaxed">
                O cenário regulatório no qual operamos está se tornando cada vez mais consistente, abrangente e transparente.
              </p>
            </div>

            {/* Sustainability & Ethics Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">SUSTENTABILIDADE E ÉTICA</h3>
              <p className="text-lg leading-relaxed">
                O gerenciamento eficaz de saúde e segurança, meio ambiente, direitos humanos e engajamento comunitário (coletivamente chamado "HSEC") é essencial para fazer crescer nosso negócio de forma sustentável e responsável.
              </p>
            </div>

            {/* Logistics Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">LOGÍSTICA</h3>
              <p className="text-lg leading-relaxed">
                Nossa equipe de logística opera perfeitamente com nossas mesas de trading para gerenciar exposições de frete e adicionar segurança e eficiência às nossas transações físicas
              </p>
            </div>

            {/* Technology Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">TECNOLOGIA</h3>
              <p className="text-lg leading-relaxed">
                Tecnologias de Informação e Comunicação fornecidas no seu melhor em negócios e operações relacionadas
              </p>
            </div>

            {/* Finance Card */}
            <div className="bg-blue-600 rounded-lg p-8 text-white relative">
              <div className="w-16 h-16 mb-6 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">FINANÇAS</h3>
              <p className="text-lg leading-relaxed">
                Central para o sucesso do nosso negócio são os relacionamentos de longo prazo que construímos no setor financeiro global.
              </p>
            </div>
          </div>
          
        </div>
      </section>


      {/* Contact Us Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_db8db979019e481da272a86e0a484809~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Evolution Oil & Gas</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Entre em Contato</h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              Em todos os nossos esforços, a Evolution oil & gas mantém os mais altos padrões. Valorizamos saúde, segurança e meio ambiente, direitos dos funcionários, conformidade com leis locais e internacionais, e ser um parceiro comprometido com governos e entidades privadas.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-gradient-to-b from-orange-900 via-gray-900 to-black text-white h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_6b2c0c352bc247de9ac22976973b73ed~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.8
            }}
          >
          </div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Top Section - Three Columns */}
          <div className="max-w-7xl mx-auto px-6 py-8 flex-1">
            <div className="grid md:grid-cols-3 gap-8 h-full">
              {/* Left Column - Company Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">
                  EVOLUTION OIL & GAS
                </h3>
                <div className="text-white text-xs leading-relaxed space-y-1">
                  <p><strong>Legal Address</strong></p>
                  <p>Building 280 Taweelah, Abu Dhabi</p>
                  <br />
                  <p><strong>Branch office</strong></p>
                  <p>Etihad Towers level 36, Po box 28686</p>
                  <p>Abu Dhabi United Arab Emirates</p>
                </div>
              </div>

              {/* Middle Column - Contact Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">
                  ENTRE EM CONTATO
                </h3>
                <div className="text-white text-xs space-y-2">
                  <p><strong>Phone:</strong> (47) 9 9942 8657</p>
                  <p><strong>Email:</strong> executivorocha@autocomex.com.br</p>
                  <p><strong>Endereço Brasileiro:</strong> R. José da Costa Flores, 28, Balneário Piçarras - SC, 88380-000</p>
                </div>
              </div>

              {/* Right Column - Newsletter */}
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-white mb-4 uppercase">
                  INSCREVA-SE PARA AS ÚLTIMAS NOTÍCIAS
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Digite seu endereço de email *"
                      className="flex-1 bg-orange-800 text-white placeholder-gray-300 px-3 py-2 rounded-l-lg border border-orange-700 focus:outline-none focus:border-orange-500 text-xs"
                    />
                    <button className="bg-orange-800 text-white px-4 py-2 rounded-r-lg border border-orange-700 hover:bg-orange-700 transition-colors font-semibold text-xs">
                      Inscrever
                    </button>
                  </div>
                  <p className="text-xs text-gray-300">ex., nome@exemplo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Navigation and Copyright */}
          <div className="border-t border-gray-700 py-4">
            <div className="max-w-7xl mx-auto px-6">
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-6 mb-3">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold uppercase text-sm">
                  INÍCIO
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-sm">
                  SOBRE
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-sm">
                  NOSSA ABORDAGEM
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-sm">
                  CONTATO
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-sm">
                  NOTÍCIAS
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-center">
                <p className="text-white text-xs">
                  ©2020 by Evolution oil & gas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed right-6 bottom-6 z-20">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors floating-chat">
          <span>💬</span>
          <span>Vamos Conversar!</span>
        </button>
      </div>
    </div>
  );
}

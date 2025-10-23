import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4 sm:py-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
              <Image
                src="/WhatsApp Image 2025-09-30 at 11.07.06.jpeg"
                alt="AutoComex Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-base font-bold text-gray-800 hidden sm:block">AutoComex</span>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Início</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Sobre</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Nossa abordagem</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Contato</a>
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors font-medium text-sm lg:text-base">Notícias</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-black bg-opacity-70"
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_9a4ff7921a4e43e6b95de45df6292a14f000.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.4
            }}
          >
          </div>
        </div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-4 leading-tight">AutoComex Oil & Gas</h1>
            <p className="text-xl sm:text-xl md:text-2xl mb-8 sm:mb-8">Seu parceiro seguro</p>
            <div className="space-y-4 sm:space-y-4 text-base sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              <p>A AutoComex oil & gas tem orgulhosamente fornecido produtos e serviços de alta qualidade na indústria do petróleo.</p>
              <p>O que nos diferencia de outras empresas é a nossa conexão direta com o tranding das refinarias eliminando atrasadores ganhando velocidade no processo e oferecendo produto de qualidade com preços imbativeis.</p>
            </div>
            <div className="flex justify-center mt-8 sm:mt-8">
              <button className="bg-white text-blue-900 px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-base sm:text-base">
                SABER MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-4">O Que Fazemos</h2>
          <div className="w-16 sm:w-24 h-1 bg-black mx-auto mb-4 sm:mb-4"></div>
          <h3 className="text-xl sm:text-xl md:text-2xl text-black mb-8 sm:mb-8">Nossos Ativos</h3>
          <p className="text-base sm:text-base md:text-lg text-black max-w-4xl mx-auto mb-16 sm:mb-16 px-4">
            A  Tranding parceira da AutoComex oil & gas tem investimentos estratégicos em infraestrutura industrial—refinarias, oleodutos, armazenamento e terminais—que complementam nossa atividade principal de trading e geram valor sustentável em toda a cadeia de suprimentos global para nossos clientes.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1.png"
                  alt="Shipping"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl sm:text-xl font-semibold text-black">Transporte</h4>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1 (2).png"
                  alt="Terminals"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl sm:text-xl font-semibold text-black">Terminais</h4>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden">
                <Image
                  src="/image 1 (1).png"
                  alt="Refineries"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl sm:text-xl font-semibold text-black">Refinarias</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Boundaries Section */}
      <section className="relative py-6 sm:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
            {/* Image Section - Left Half */}
            <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[350px] lg:h-[450px]">
              <Image
                src="/alternative-energy-blog-img-1.jpg"
                alt="Alternative energy facility"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Text Section - Right Half with Overlap */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative -mt-10 sm:-mt-16 lg:mt-4 lg:-ml-24 z-10 bg-blue-600 p-4 sm:p-6 lg:p-8 text-center lg:text-left h-[300px] sm:h-[350px] lg:h-[450px] flex flex-col justify-center">
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 sm:mb-6 leading-tight">
                  Movendo fronteiras para um setor energético mais verde
                </h2>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-4 mb-6 sm:mb-6">
                  <div className="flex justify-center lg:justify-start">
                    <button className="bg-white text-blue-600 px-6 sm:px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm sm:text-sm uppercase tracking-wide w-32 sm:w-32 flex-shrink-0">
                      SABER MAIS
                    </button>
                  </div>
                  <p className="text-white text-base sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
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
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/11062b_aac85620fb59408f862b5c1ae10fafe7f000.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.4
            }}
          >
          </div>
        </div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="bg-blue-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 max-w-4xl w-full">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-6 uppercase">
              CONFORMIDADE E ÉTICA
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-white mx-auto mb-8 sm:mb-8"></div>
            <p className="text-white text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8 text-center">
              Durante os últimos anos, a AutoComex oil & gas investiu na construção de um Departamento de Conformidade líder da indústria. Nossas equipes trabalham continuamente para melhorar os procedimentos da empresa para mitigar riscos e antecipar outros que existem no setor de trading de commodities. Nosso objetivo é manter os mais altos padrões éticos e cumprir todas as regras e regulamentações relevantes onde quer que operemos.
            </p>
            <div className="flex justify-center">
              <button className="bg-white text-blue-900 border-2 border-blue-900 px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-base sm:text-base">
                SABER MAIS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Tradings Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                NOSSOS TRADINGS
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                a Trading parceira da Autocomex. Expandimos nosso portfólio de trading para incluir o fornecimento e entrega global de petróleo bruto e produtos petrolíferos refinados, GLP, gás natural e GNL, biocombustíveis e fertilizantes.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-white text-blue-900 border-2 border-blue-900 px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-base sm:text-base">
                  SABER MAIS
                </button>
              </div>
            </div>

            {/* Right Column - Single Large Image */}
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] w-full order-1 lg:order-2">
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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_6c7902afbfbe49568ba7c071115c6e22~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.5
            }}
          >
          </div>
        </div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-4 leading-tight">AutoComex Oil & Gas</h1>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-8 uppercase">SOBRE NÓS</h2>
            <p className="text-base sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Atribuímos nossa reputação aos relacionamentos duradouros com clientes que desenvolvemos ao longo dos anos. Acreditamos que todos os nossos clientes merecem o mais alto nível de serviço, e estamos comprometidos em fornecer exatamente isso. Explore o resto do nosso site para saber mais sobre o que temos a oferecer, e entre em contato com qualquer dúvida. A AUTOCOMEX OIL & GAS está aqui para você.
            </p>
          </div>
        </div>
      </section>

      {/* A Global Business Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase leading-tight">
                A TRANDING PARCEIRA DA AUTOCOMEX TEM UMA PARCERIA GLOBAL
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Uma visão interativa de onde a AutoComex oil & gas opera em todo o mundo.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-base sm:text-base">
                  SABER MAIS
                </button>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-1">
              <Image
                src="/image 1.png"
                alt="Leadership team"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                LIDERANÇA
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                A AutoComex oil & gas mantém uma cadeia de comando curta para facilitar a tomada de decisões eficiente, o que garante que ajamos de forma decisiva para garantir vantagens no interesse de nossos parceiros e clientes.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-base sm:text-base">
                  SABER MAIS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                NOSSA HISTÓRIA
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Descubra como evoluímos estrategicamente para nos tornar uma das principais casas de trading de commodities independentes do mundo.
              </p>
              <div className="flex justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 sm:px-8 py-3 sm:py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-base sm:text-base">
                  SABER MAIS
                </button>
              </div>
            </div>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2">
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
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_8e0f52cec6514d2faabb72f00b70d9c0~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.6
            }}
          >
          </div>
        </div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-4 leading-tight">AutoComex Oil & Gas</h1>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-8 uppercase">NOSSA ABORDAGEM</h2>
            <p className="text-base sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Em todos os nossos esforços, a AutoComex oil & gas mantém os mais altos padrões. Valorizamos saúde, segurança e meio ambiente, direitos dos funcionários, conformidade com leis locais e internacionais, e ser um parceiro comprometido com governos e entidades privadas.
            </p>
          </div>
        </div>
      </section>

{/* Risk Management Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-1">
              <Image
                src="/600x400-CloudGuardWAF-a-New-approach-1-150x150.jpg"
                alt="Risk Management"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                GESTÃO DE RISCOS
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Nossa capacidade de gerenciar efetivamente os riscos inerentes ao trading de commodities é fundamental para o desenvolvimento contínuo e estabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                CONFORMIDADE
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                O cenário regulatório no qual operamos está se tornando cada vez mais consistente, abrangente e transparente.
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2">
              <Image
                src="/image 1 (1).png"
                alt="Compliance"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Ethics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-1">
              <Image
                src="/image 1 (2).png"
                alt="Sustainability & Ethics"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                SUSTENTABILIDADE E ÉTICA
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                O gerenciamento eficaz de saúde e segurança, meio ambiente, direitos humanos e engajamento comunitário (coletivamente chamado "HSEC") é essencial para fazer crescer nosso negócio de forma sustentável e responsável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                LOGÍSTICA
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Nossa equipe de logística opera perfeitamente com nossas mesas de trading para gerenciar exposições de frete e adicionar segurança e eficiência às nossas transações físicas
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2">
              <Image
                src="/image 1.png"
                alt="Logistics"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-1">
              <Image
                src="/image 1 (1).png"
                alt="Technology"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                TECNOLOGIA
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Tecnologias de Informação e Comunicação fornecidas no seu melhor em negócios e operações relacionadas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-6 sm:mb-6 uppercase">
                FINANÇAS
              </h2>
              <p className="text-gray-800 text-base sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-8">
                Central para o sucesso do nosso negócio são os relacionamentos de longo prazo que construímos no setor financeiro global.
              </p>
            </div>
            <div className="relative h-[250px] sm:h-[300px] lg:h-[400px] order-1 lg:order-2">
              <Image
                src="/image 1 (2).png"
                alt="Finance"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/7a79b8_db8db979019e481da272a86e0a484809~mv2.avif')",
              backgroundSize: "cover",
              backgroundPosition: "center top",
              backgroundRepeat: "no-repeat",
              opacity: 0.6
            }}
          >
          </div>
        </div>
        
        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-4 leading-tight">AutoComex Oil & Gas</h1>
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-8 uppercase">Entre em Contato</h2>
            <p className="text-base sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Em todos os nossos esforços, a AutoComex oil & gas mantém os mais altos padrões. Valorizamos saúde, segurança e meio ambiente, direitos dos funcionários, conformidade com leis locais e internacionais, e ser um parceiro comprometido com governos e entidades privadas.
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 h-full">
              {/* Left Column - Company Info */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase">
                  AUTOCOMEX OIL & GAS
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
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase">
                  ENTRE EM CONTATO
                </h3>
                <div className="text-white text-xs space-y-2">
                  <p><strong>Phone:</strong> (47) 9 9942 8657</p>
                  <p><strong>Email:</strong> executivorocha@autocomex.com.br</p>
                  <p><strong>Endereço Brasileiro:</strong> R. José da Costa Flores, 28, Balneário Piçarras - SC, 88380-000</p>
                </div>
              </div>

              {/* Right Column - Newsletter */}
              <div className="flex flex-col justify-center sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase">
                  INSCREVA-SE PARA AS ÚLTIMAS NOTÍCIAS
                </h3>
                <div className="space-y-2">
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Digite seu endereço de email *"
                      className="flex-1 bg-orange-800 text-white placeholder-gray-300 px-3 py-2 rounded-l-lg border border-orange-700 focus:outline-none focus:border-orange-500 text-xs"
                    />
                    <button className="bg-orange-800 text-white px-3 sm:px-4 py-2 rounded-r-lg border border-orange-700 hover:bg-orange-700 transition-colors font-semibold text-xs">
                      Inscrever
                    </button>
                  </div>
                  <p className="text-xs text-gray-300">ex., nome@exemplo.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Navigation and Copyright */}
          <div className="border-t border-gray-700 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              {/* Navigation Links */}
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-2 sm:mb-3">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold uppercase text-xs sm:text-sm">
                  INÍCIO
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-xs sm:text-sm">
                  SOBRE
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-xs sm:text-sm">
                  NOSSA ABORDAGEM
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-xs sm:text-sm">
                  CONTATO
                </a>
                <a href="#" className="text-white hover:text-gray-300 transition-colors font-semibold uppercase text-xs sm:text-sm">
                  NOTÍCIAS
                </a>
              </div>
              
              {/* Copyright */}
              <div className="text-center">
                <p className="text-white text-xs">
                  ©2020 by AutoComex oil & gas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <div className="fixed right-3 sm:right-6 bottom-3 sm:bottom-6 z-20">
        <button className="bg-blue-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center space-x-1 sm:space-x-2 hover:bg-blue-700 transition-colors floating-chat text-sm sm:text-base">
          <span>💬</span>
          <span className="hidden sm:inline">Vamos Conversar!</span>
          <span className="sm:hidden">Chat</span>
        </button>
      </div>
    </div>
  );
}

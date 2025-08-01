import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// Language translations
const translations = {
  es: {
    // Navigation
    inicio: 'Inicio',
    servicios: 'Servicios',
    documentos: 'Documentos',
    entrega: 'Entrega',
    contacto: 'Contacto',
    
    // Header
    matriculada: 'Matriculada',
    experiencia: '35+ años',
    whatsapp: 'WhatsApp',
    
    // Hero Section
    disponible: 'Disponible para nuevos proyectos',
    traducciones: 'Traducciones',
    profesionales: 'Profesionales',
    heroDescription: 'Especialista en ciudadanía italiana con más de 35 años de experiencia. Traducciones oficiales que abren puertas a tu futuro.',
    comenzarProyecto: 'Comenzar Proyecto',
    verServicios: 'Ver Servicios',
    anosExperiencia: 'Años de Experiencia',
    documentosTraducidos: 'Documentos Traducidos',
    validezLegal: 'Validez Legal',
    
    // Services Section
    serviciosPremium: 'Servicios Premium',
    serviciosDescription: 'Soluciones especializadas para cada necesidad de traducción',
    ciudadaniaItaliana: 'Ciudadanía Italiana',
    ciudadaniaDescription: 'Documentación completa para tu trámite de ciudadanía italiana con asesoramiento integral.',
    traduccionesLegales: 'Traducciones Legales',
    legalesDescription: 'Documentos judiciales, notariales y oficiales con validez legal completa.',
    juiciosMaternos: 'Juicios Maternos',
    maternosDescription: 'Especialización en documentación para juicios de ciudadanía por vía materna.',
    expressService: 'Express Service',
    expressDescription: 'Servicio prioritario para traducciones urgentes sin comprometer la calidad.',
    carpetaCompleta: 'Carpeta completa',
    asesoramiento: 'Asesoramiento',
    seguimiento: 'Seguimiento',
    validezOficial: 'Validez oficial',
    entregaRapida: 'Entrega rápida',
    calidadGarantizada: 'Calidad garantizada',
    experienciaEspecifica: 'Experiencia específica',
    documentacionCompleta: 'Documentación completa',
    consultaIncluida: 'Consulta incluida',
    horas2448: '24-48 horas',
    prioridadMaxima: 'Prioridad máxima',
    disponible247: 'Disponible 24/7',
    masInformacion: 'Más Información',
    
    // Documents Section
    documentosTitle: 'Documentos',
    documentosDescription: 'Todo tipo de documentación oficial con validez legal',
    civil: 'Civil',
    legal: 'Legal',
    educativo: 'Educativo',
    notarial: 'Notarial',
    actasNacimiento: 'Actas de Nacimiento',
    certificadosMatrimonio: 'Certificados de Matrimonio',
    actasDefuncion: 'Actas de Defunción',
    sentenciasJudiciales: 'Sentencias Judiciales',
    titulosAcademicos: 'Títulos Académicos',
    antecedentesPenales: 'Antecedentes Penales',
    escriturasPublicas: 'Escrituras Públicas',
    poderesLegales: 'Poderes Legales',
    
    // Delivery Section
    entregaFlexible: 'Entrega Flexible',
    entregaDescription: 'Recibe tus documentos como prefieras',
    firmaOlografa: 'Firma Ológrafa',
    retiroPersonal: 'Retiro personal en nuestro estudio cerca del Obelisco',
    envioPostal: 'Envío postal con seguimiento para el interior',
    firmaDigital: 'Firma Digital',
    envioInmediato: 'Envío inmediato por email con legalización',
    listosImprimir: 'Listos para imprimir con validez legal completa',
    
    // Contact Section
    hablemos: 'Hablemos',
    contactoDescription: '¿Listo para comenzar tu proyecto? Contáctame hoy mismo',
    whatsappDirecto: 'WhatsApp Directo',
    respuestaInmediata: 'Respuesta inmediata para consultas y cotizaciones sin cargo',
    enviarMensaje: 'Enviar Mensaje',
    emailProfesional: 'Email Profesional',
    consultasDetalladas: 'Para consultas detalladas y envío de documentación',
    enviarEmail: 'Enviar Email',
    
    // Footer
    traductorPublico: 'Traductora Pública de Italiano',
    matriculadaEn: 'Matriculada en:',
    ctba: 'CTBA - Ciudad Autónoma de Buenos Aires',
    ctpba: 'CTPBA - Provincia de Buenos Aires',
    especialidades: 'Especialidades:',
    traduccionesJuridicas: 'Traducciones Jurídicas',
    copyright: '© 2024 Olivia Castiglia - Traductora Pública de Italiano'
  },
  it: {
    // Navigation
    inicio: 'Home',
    servicios: 'Servizi',
    documentos: 'Documenti',
    entrega: 'Consegna',
    contacto: 'Contatto',
    
    // Header
    matriculada: 'Abilitata',
    experiencia: '35+ anni',
    whatsapp: 'WhatsApp',
    
    // Hero Section
    disponible: 'Disponibile per nuovi progetti',
    traducciones: 'Traduzioni',
    profesionales: 'Professionali',
    heroDescription: 'Specialista in cittadinanza italiana con oltre 35 anni di esperienza. Traduzioni ufficiali che aprono le porte al tuo futuro.',
    comenzarProyecto: 'Inizia Progetto',
    verServicios: 'Vedi Servizi',
    anosExperiencia: 'Anni di Esperienza',
    documentosTraducidos: 'Documenti Tradotti',
    validezLegal: 'Validità Legale',
    
    // Services Section
    serviciosPremium: 'Servizi Premium',
    serviciosDescription: 'Soluzioni specializzate per ogni esigenza di traduzione',
    ciudadaniaItaliana: 'Cittadinanza Italiana',
    ciudadaniaDescription: 'Documentazione completa per la tua pratica di cittadinanza italiana con consulenza integrale.',
    traduccionesLegales: 'Traduzioni Legali',
    legalesDescription: 'Documenti giudiziari, notarili e ufficiali con validità legale completa.',
    juiciosMaternos: 'Processi Materni',
    maternosDescription: 'Specializzazione in documentazione per processi di cittadinanza per via materna.',
    expressService: 'Servizio Express',
    expressDescription: 'Servizio prioritario per traduzioni urgenti senza compromettere la qualità.',
    carpetaCompleta: 'Cartella completa',
    asesoramiento: 'Consulenza',
    seguimiento: 'Monitoraggio',
    validezOficial: 'Validità ufficiale',
    entregaRapida: 'Consegna rapida',
    calidadGarantizada: 'Qualità garantita',
    experienciaEspecifica: 'Esperienza specifica',
    documentacionCompleta: 'Documentazione completa',
    consultaIncluida: 'Consulenza inclusa',
    horas2448: '24-48 ore',
    prioridadMaxima: 'Priorità massima',
    disponible247: 'Disponibile 24/7',
    masInformacion: 'Maggiori Informazioni',
    
    // Documents Section
    documentosTitle: 'Documenti',
    documentosDescription: 'Tutti i tipi di documentazione ufficiale con validità legale',
    civil: 'Civile',
    legal: 'Legale',
    educativo: 'Educativo',
    notarial: 'Notarile',
    actasNacimiento: 'Atti di Nascita',
    certificadosMatrimonio: 'Certificati di Matrimonio',
    actasDefuncion: 'Atti di Morte',
    sentenciasJudiciales: 'Sentenze Giudiziarie',
    titulosAcademicos: 'Titoli Accademici',
    antecedentesPenales: 'Precedenti Penali',
    escriturasPublicas: 'Atti Pubblici',
    poderesLegales: 'Procure Legali',
    
    // Delivery Section
    entregaFlexible: 'Consegna Flessibile',
    entregaDescription: 'Ricevi i tuoi documenti come preferisci',
    firmaOlografa: 'Firma Olografa',
    retiroPersonal: 'Ritiro personale nel nostro studio vicino all\'Obelisco',
    envioPostal: 'Spedizione postale con tracking per l\'interno',
    firmaDigital: 'Firma Digitale',
    envioInmediato: 'Invio immediato via email con legalizzazione',
    listosImprimir: 'Pronti per la stampa con validità legale completa',
    
    // Contact Section
    hablemos: 'Parliamo',
    contactoDescription: 'Pronto per iniziare il tuo progetto? Contattami oggi stesso',
    whatsappDirecto: 'WhatsApp Diretto',
    respuestaInmediata: 'Risposta immediata per consulenze e preventivi gratuiti',
    enviarMensaje: 'Invia Messaggio',
    emailProfesional: 'Email Professionale',
    consultasDetalladas: 'Per consulenze dettagliate e invio documentazione',
    enviarEmail: 'Invia Email',
    
    // Footer
    traductorPublico: 'Traduttrice Pubblica di Italiano',
    matriculadaEn: 'Abilitata presso:',
    ctba: 'CTBA - Città Autonoma di Buenos Aires',
    ctpba: 'CTPBA - Provincia di Buenos Aires',
    especialidades: 'Specialità:',
    traduccionesJuridicas: 'Traduzioni Giuridiche',
    copyright: '© 2024 Olivia Castiglia - Traduttrice Pubblica di Italiano'
  }
};

// Constants
const WHATSAPP_URL = "https://wa.me/5491134227461?text=Hola, me interesa conocer más sobre sus servicios";
const MAIN_NAV_HEIGHT = 144;

// Custom hooks
const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

const useTranslation = (language) => {
  return useCallback((key) => translations[language]?.[key] || key, [language]);
};

// Utility functions
const createServiceData = (t) => [
  {
    icon: '🎯',
    title: t('ciudadaniaItaliana'),
    description: t('ciudadaniaDescription'),
    color: 'from-red-500 to-pink-500',
    features: [t('carpetaCompleta'), t('asesoramiento'), t('seguimiento')]
  },
  {
    icon: '⚖️',
    title: t('traduccionesLegales'),
    description: t('legalesDescription'),
    color: 'from-blue-500 to-cyan-500',
    features: [t('validezOficial'), t('entregaRapida'), t('calidadGarantizada')]
  },
  {
    icon: '👩‍⚖️',
    title: t('juiciosMaternos'),
    description: t('maternosDescription'),
    color: 'from-purple-500 to-indigo-500',
    features: [t('experienciaEspecifica'), t('documentacionCompleta'), t('consultaIncluida')]
  },
  {
    icon: '🚀',
    title: t('expressService'),
    description: t('expressDescription'),
    color: 'from-emerald-500 to-teal-500',
    features: [t('horas2448'), t('prioridadMaxima'), t('disponible247')]
  }
];

const createDocumentData = (t) => [
  { icon: '👶', title: t('actasNacimiento'), category: t('civil') },
  { icon: '💒', title: t('certificadosMatrimonio'), category: t('civil') },
  { icon: '⚰️', title: t('actasDefuncion'), category: t('civil') },
  { icon: '👨‍⚖️', title: t('sentenciasJudiciales'), category: t('legal') },
  { icon: '🎓', title: t('titulosAcademicos'), category: t('educativo') },
  { icon: '🔍', title: t('antecedentesPenales'), category: t('legal') },
  { icon: '📜', title: t('escriturasPublicas'), category: t('notarial') },
  { icon: '⚖️', title: t('poderesLegales'), category: t('notarial') }
];

// Components
const Header = React.memo(({ scrollY, t, toggleLanguage, language }) => {
  const isScrolled = scrollY > 50;
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <button 
                onClick={toggleLanguage}
                className="text-xl sm:text-3xl hover:scale-110 transition-transform duration-300"
                title={language === 'es' ? 'Cambiar a Italiano' : 'Cambia in Spagnolo'}
                aria-label={language === 'es' ? 'Cambiar a Italiano' : 'Cambia in Spagnolo'}
              >
                🇮🇹
              </button>
              <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent" />
              <button 
                onClick={toggleLanguage}
                className="text-xl sm:text-3xl hover:scale-110 transition-transform duration-300"
                title={language === 'es' ? 'Cambiar a Italiano' : 'Cambia in Spagnolo'}
                aria-label={language === 'es' ? 'Cambiar a Italiano' : 'Cambia in Spagnolo'}
              >
                🇦🇷
              </button>
            </div>
            <div className="hidden xs:block">
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Olivia Castiglia
              </h1>
              <p className="text-xs sm:text-sm text-gray-400">{t('traductorPublico')}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gray-300">{t('matriculada')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300" />
                <span className="text-gray-300">{t('experiencia')}</span>
              </div>
            </div>
            
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 sm:space-x-2 bg-green-500 hover:bg-green-600 text-white px-2 sm:px-4 py-2 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group relative"
            >
              <span className="text-sm sm:text-lg">💬</span>
              <span className="font-medium text-[10px] xs:text-xs sm:text-sm">{t('whatsapp')}</span>
              <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-red-500 rounded-full animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
});

const Navigation = React.memo(({ activeSection, setActiveSection, t }) => {
  const navItems = useMemo(() => [
    { id: 'presentacion', label: t('inicio'), icon: '🏠' },
    { id: 'servicios', label: t('servicios'), icon: '⚡' },
    { id: 'documentos', label: t('documentos'), icon: '📋' },
    { id: 'entrega', label: t('entrega'), icon: '🚀' },
    { id: 'contacto', label: t('contacto'), icon: '💬' }
  ], [t]);

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 mt-4">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex justify-center">
          <div className="flex items-center space-x-0.5 xs:space-x-1 sm:space-x-2 bg-black/40 backdrop-blur-xl rounded-full p-1.5 sm:p-2 border border-white/10 max-w-full overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center justify-center min-w-0 px-1.5 xs:px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-xs xs:text-sm mb-0.5 xs:mb-1">{item.icon}</span>
                <span className="text-[10px] xs:text-xs leading-tight whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
});

const HeroSection = React.memo(({ t }) => {
  const stats = useMemo(() => [
    { number: '35+', label: t('anosExperiencia'), icon: '⭐' },
    { number: '1000+', label: t('documentosTraducidos'), icon: '📄' },
    { number: '100%', label: t('validezLegal'), icon: '⚖️' }
  ], [t]);

  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-3 xs:px-4 sm:px-6 py-2 border border-cyan-500/30 mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-cyan-300 text-xs sm:text-sm font-medium">{t('disponible')}</span>
          </div>
          
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              {t('traducciones')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t('profesionales')}
            </span>
          </h1>
          
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            {t('heroDescription')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2">
            <button className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
              <span className="relative z-10">{t('comenzarProyecto')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/20 rounded-full font-bold text-base sm:text-lg hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300">
              {t('verServicios')}
            </button>
          </div>
          
          <div className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 px-2">
            {stats.map((stat, index) => (
              <div key={index} className="group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const ServicesSection = React.memo(({ t }) => {
  const services = useMemo(() => createServiceData(t), [t]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {t('serviciosPremium')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('serviciosDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${service.color} font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                  {t('masInformacion')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const DocumentsSection = React.memo(({ t }) => {
  const documents = useMemo(() => createDocumentData(t), [t]);
  const categories = useMemo(() => [t('civil'), t('legal'), t('educativo'), t('notarial')], [t]);
  
  const [activeCategory, setActiveCategory] = useState(() => t('civil'));
  const [isSticky, setIsSticky] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);
  
  const sectionRef = useRef(null);
  const menuRef = useRef(null);
  const menuContainerRef = useRef(null);

  // Update activeCategory when language changes
  useEffect(() => {
    setActiveCategory(t('civil'));
  }, [t]);

  // Sticky menu logic
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !menuRef.current || !menuContainerRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const menuContainer = menuContainerRef.current.getBoundingClientRect();
      const threshold = MAIN_NAV_HEIGHT + 16;
      
      const shouldStick = menuContainer.top <= threshold && sectionRect.bottom > threshold + menuHeight;
      setIsSticky(shouldStick);
    };

    if (menuRef.current) {
      setMenuHeight(menuRef.current.offsetHeight);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [menuHeight]);

  const filteredDocs = useMemo(() => 
    documents.filter(doc => doc.category === activeCategory), 
    [documents, activeCategory]
  );

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {t('documentosTitle')}
            </span>
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-2">
            {t('documentosDescription')}
          </p>
        </div>

        <div 
          ref={menuContainerRef}
          className="relative mb-8 sm:mb-12"
          style={{ minHeight: isSticky ? `${menuHeight}px` : 'auto' }}
        >
          <div 
            ref={menuRef}
            className={`transition-all duration-300 ease-in-out ${
              isSticky 
                ? 'fixed left-0 right-0 z-30 py-4' 
                : 'relative'
            }`}
            style={{ 
              top: isSticky ? `${MAIN_NAV_HEIGHT}px` : 'auto'
            }}
          >
            <div className="container mx-auto px-3 sm:px-6">
              <div className="flex justify-center">
                <div className="flex space-x-0.5 xs:space-x-1 sm:space-x-2 bg-black/40 backdrop-blur-xl rounded-full p-1.5 sm:p-2 border border-white/10 max-w-full overflow-x-auto">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-2 xs:px-3 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-xs xs:text-sm sm:text-base whitespace-nowrap ${
                        activeCategory === category
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center px-4">
          <div className="w-full max-w-6xl">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {filteredDocs.map((doc, index) => (
                <div
                  key={index}
                  className="group p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 w-full max-w-xs sm:max-w-sm flex-shrink-0"
                  style={{ minWidth: '280px' }}
                >
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 text-center">
                    {doc.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">
                    {doc.title}
                  </h3>
                  <div className="text-emerald-400 text-xs sm:text-sm font-medium text-center">
                    {doc.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

const DeliverySection = React.memo(({ t }) => {
  const deliveryOptions = useMemo(() => [
    {
      icon: '✍️',
      title: t('firmaOlografa'),
      color: 'from-orange-500/20 to-red-500/20',
      borderColor: 'border-orange-500/30 hover:border-orange-400/50',
      bulletColor: 'bg-orange-400',
      features: [t('retiroPersonal'), t('envioPostal')]
    },
    {
      icon: '💻',
      title: t('firmaDigital'),
      color: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30 hover:border-cyan-400/50',
      bulletColor: 'bg-cyan-400',
      features: [t('envioInmediato'), t('listosImprimir')]
    }
  ], [t]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {t('entregaFlexible')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('entregaDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {deliveryOptions.map((option, index) => (
            <div key={index} className={`group p-8 rounded-3xl bg-gradient-to-br ${option.color} backdrop-blur-sm border ${option.borderColor} transition-all duration-300`}>
              <div className="text-5xl mb-6">{option.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-white">{option.title}</h3>
              <div className="space-y-4 text-gray-300">
                {option.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 ${option.bulletColor} rounded-full mt-2`} />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

const ContactSection = React.memo(({ t }) => {
  const contactOptions = useMemo(() => [
    {
      icon: '💬',
      title: t('whatsappDirecto'),
      description: t('respuestaInmediata'),
      buttonText: t('enviarMensaje'),
      buttonColor: 'from-green-500 to-emerald-500',
      bgColor: 'from-pink-500/20 to-purple-500/20',
      borderColor: 'border-pink-500/30',
      shadowColor: 'hover:shadow-green-500/25',
      href: WHATSAPP_URL
    },
    {
      icon: '📧',
      title: t('emailProfesional'),
      description: t('consultasDetalladas'),
      buttonText: t('enviarEmail'),
      buttonColor: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-500/20 to-cyan-500/20',
      borderColor: 'border-blue-500/30',
      shadowColor: 'hover:shadow-blue-500/25',
      href: 'mailto:olivia@example.com'
    }
  ], [t]);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {t('hablemos')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contactoDescription')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {contactOptions.map((option, index) => (
              <div key={index} className={`p-8 rounded-3xl bg-gradient-to-br ${option.bgColor} backdrop-blur-sm border ${option.borderColor}`}>
                <div className="text-5xl mb-6">{option.icon}</div>
                <h3 className="text-3xl font-bold mb-4 text-white">{option.title}</h3>
                <p className="text-gray-300 mb-6">
                  {option.description}
                </p>
                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 bg-gradient-to-r ${option.buttonColor} rounded-xl font-bold text-lg hover:shadow-2xl ${option.shadowColor} transition-all duration-300 text-center`}
                >
                  {option.buttonText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

const Footer = React.memo(({ t }) => {
  const professionalInfo = useMemo(() => [
    {
      icon: '⚖️',
      title: t('matriculadaEn'),
      items: [t('ctba'), t('ctpba')]
    },
    {
      icon: '🎯',
      title: t('especialidades'),
      items: [t('ciudadaniaItaliana'), t('traduccionesJuridicas')]
    }
  ], [t]);

  return (
    <footer className="py-12 border-t border-white/10 relative bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Olivia Castiglia
              </span>
            </h2>
            <p className="text-gray-300 mb-1">{t('traductorPublico')}</p>
            <p className="text-sm text-cyan-400 font-medium">{t('experiencia')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {professionalInfo.map((info, index) => (
              <div key={index} className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h3 className="text-lg font-bold mb-3 text-cyan-400 flex items-center">
                  <span className="mr-2">{info.icon}</span>{info.title}
                </h3>
                <div className="space-y-1 text-sm text-gray-300">
                  {info.items.map((item, idx) => (
                    <p key={idx}>• {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

const BackgroundElements = React.memo(() => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500" />
  </div>
));

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('presentacion');
  const [language, setLanguage] = useState('es');
  
  const scrollY = useScrollPosition();
  const t = useTranslation(language);

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'es' ? 'it' : 'es');
  }, []);

  const renderSection = useCallback(() => {
    switch (activeSection) {
      case 'presentacion': return <HeroSection t={t} />;
      case 'servicios': return <ServicesSection t={t} />;
      case 'documentos': return <DocumentsSection t={t} />;
      case 'entrega': return <DeliverySection t={t} />;
      case 'contacto': return <ContactSection t={t} />;
      default: return <HeroSection t={t} />;
    }
  }, [activeSection, t]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Header scrollY={scrollY} t={t} toggleLanguage={toggleLanguage} language={language} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} t={t} />
      <main className="relative pt-28">
        {renderSection()}
      </main>
      <Footer t={t} />
      <BackgroundElements />
    </div>
  );
};

export default App;
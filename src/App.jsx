import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('presentacion');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'presentacion': return <HeroSection />;
      case 'servicios': return <ServicesSection />;
      case 'documentos': return <DocumentsSection />;
      case 'entrega': return <DeliverySection />;
      case 'contacto': return <ContactSection />;
      default: return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Header scrollY={scrollY} />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative pt-28">
        {renderSection()}
      </main>
      <Footer />
      <WhatsAppFloat />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

const Header = ({ scrollY }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrollY > 50 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🇮🇹</span>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>
              <span className="text-3xl">🇦🇷</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Olivia Castiglia
              </h1>
              <p className="text-sm text-gray-400">Traductora Pública</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Matriculada</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-300"></div>
                <span className="text-gray-300">35+ años</span>
              </div>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5491134227461?text=Hola, me interesa conocer más sobre sus servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 group"
            >
              <span className="text-lg">💬</span>
              <span className="font-medium hidden sm:inline">WhatsApp</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Navigation = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'presentacion', label: 'Inicio', icon: '🏠' },
    { id: 'servicios', label: 'Servicios', icon: '⚡' },
    { id: 'documentos', label: 'Documentos', icon: '📋' },
    { id: 'entrega', label: 'Entrega', icon: '🚀' },
    { id: 'contacto', label: 'Contacto', icon: '💬' },
  ];

  return (
    <nav className="fixed top-16 left-0 right-0 z-40 mt-4">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="flex items-center space-x-1 sm:space-x-2 bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span className="text-xs leading-tight">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-6 py-2 border border-cyan-500/30 mb-8">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-cyan-300 text-sm font-medium">Disponible para nuevos proyectos</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Traducciones
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Profesionales
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialista en ciudadanía italiana con más de 35 años de experiencia. 
            Traducciones oficiales que abren puertas a tu futuro.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
              <span className="relative z-10">Comenzar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-white/20 rounded-full font-bold text-lg hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300">
              Ver Servicios
            </button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '35+', label: 'Años de Experiencia', icon: '⭐' },
              { number: '1000+', label: 'Documentos Traducidos', icon: '📄' },
              { number: '100%', label: 'Validez Legal', icon: '⚖️' },
            ].map((stat, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-black text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: '🎯',
      title: 'Ciudadanía Italiana',
      description: 'Documentación completa para tu trámite de ciudadanía italiana con asesoramiento integral.',
      color: 'from-red-500 to-pink-500',
      features: ['Carpeta completa', 'Asesoramiento', 'Seguimiento']
    },
    {
      icon: '⚖️',
      title: 'Traducciones Legales',
      description: 'Documentos judiciales, notariales y oficiales con validez legal completa.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Validez oficial', 'Entrega rápida', 'Calidad garantizada']
    },
    {
      icon: '👩‍⚖️',
      title: 'Juicios Maternos',
      description: 'Especialización en documentación para juicios de ciudadanía por vía materna.',
      color: 'from-purple-500 to-indigo-500',
      features: ['Experiencia específica', 'Documentación completa', 'Consulta incluida']
    },
    {
      icon: '🚀',
      title: 'Express Service',
      description: 'Servicio prioritario para traducciones urgentes sin comprometer la calidad.',
      color: 'from-emerald-500 to-teal-500',
      features: ['24-48 horas', 'Prioridad máxima', 'Disponible 24/7']
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Servicios Premium
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Soluciones especializadas para cada necesidad de traducción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
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
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`mt-6 w-full py-3 rounded-xl bg-gradient-to-r ${service.color} font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                  Más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DocumentsSection = () => {
  const documents = [
    { icon: '👶', title: 'Actas de Nacimiento', category: 'Civil' },
    { icon: '💒', title: 'Certificados de Matrimonio', category: 'Civil' },
    { icon: '⚰️', title: 'Actas de Defunción', category: 'Civil' },
    { icon: '👨‍⚖️', title: 'Sentencias Judiciales', category: 'Legal' },
    { icon: '🎓', title: 'Títulos Académicos', category: 'Educativo' },
    { icon: '🔍', title: 'Antecedentes Penales', category: 'Legal' },
    { icon: '📜', title: 'Escrituras Públicas', category: 'Notarial' },
    { icon: '⚖️', title: 'Poderes Legales', category: 'Notarial' },
  ];

  const categories = ['Civil', 'Legal', 'Educativo', 'Notarial'];
  const [activeCategory, setActiveCategory] = useState('Civil');

  const filteredDocs = documents.filter(doc => doc.category === activeCategory);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Documentos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Todo tipo de documentación oficial con validez legal
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-black/40 backdrop-blur-xl rounded-full p-2 border border-white/10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDocs.map((doc, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {doc.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {doc.title}
              </h3>
              <div className="text-emerald-400 text-sm font-medium">
                {doc.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DeliverySection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Entrega Flexible
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Recibe tus documentos como prefieras
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300">
            <div className="text-5xl mb-6">✍️</div>
            <h3 className="text-3xl font-bold mb-4 text-white">Firma Ológrafa</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <p>Retiro personal en nuestro estudio cerca del Obelisco</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full mt-2"></div>
                <p>Envío postal con seguimiento para el interior</p>
              </div>
            </div>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-5xl mb-6">💻</div>
            <h3 className="text-3xl font-bold mb-4 text-white">Firma Digital</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p>Envío inmediato por email con legalización</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                <p>Listos para imprimir con validez legal completa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hablemos
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Contáctame hoy mismo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30">
              <div className="text-5xl mb-6">💬</div>
              <h3 className="text-3xl font-bold mb-4 text-white">WhatsApp Directo</h3>
              <p className="text-gray-300 mb-6">
                Respuesta inmediata para consultas y cotizaciones sin cargo
              </p>
              <button className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300">
                Enviar Mensaje
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30">
              <div className="text-5xl mb-6">📧</div>
              <h3 className="text-3xl font-bold mb-4 text-white">Email Profesional</h3>
              <p className="text-gray-300 mb-6">
                Para consultas detalladas y envío de documentación
              </p>
              <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 relative bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black mb-3">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Olivia Castiglia
              </span>
            </h2>
            <p className="text-gray-300 mb-1">Traductora Pública de Italiano</p>
            <p className="text-sm text-cyan-400 font-medium">35+ años de experiencia</p>
          </div>
          
          {/* Professional Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-cyan-400 flex items-center">
                <span className="mr-2">⚖️</span>Matriculada en:
              </h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p>• CTBA - Ciudad Autónoma de Buenos Aires</p>
                <p>• CTPBA - Provincia de Buenos Aires</p>
              </div>
            </div>
            
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-lg font-bold mb-3 text-purple-400 flex items-center">
                <span className="mr-2">🎯</span>Especialidades:
              </h3>
              <div className="space-y-1 text-sm text-gray-300">
                <p>• Ciudadanía Italiana</p>
                <p>• Traducciones Jurídicas</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Olivia Castiglia - Traductora Pública de Italiano
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppFloat = () => {
  return null; // Removed since WhatsApp button is now in header
};

export default App;
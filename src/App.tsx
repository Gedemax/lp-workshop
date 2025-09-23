import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Monitor, Mic, CheckCircle, X, Star, Users, ArrowRight, Phone, Mail, User } from 'lucide-react';
import Tracking, { trackEvent } from './components/Tracking';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    difficulty: ''
  });

  // Contador regressivo - definir data do workshop (01 de outubro às 19h30)
  const workshopDate = new Date('2025-10-01T19:30:00-03:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = workshopDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // URL do seu Google Apps Script (substitua pela sua URL)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwL16-FRsEaFD6ISnSFgvso-oWTe9xskB9own2JzWBS2f-B8Jdxzxto9E3jMif7Dgp5/exec';
    
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' // Necessário para Google Apps Script
      });
      
      // Disparar eventos de conversão
      trackEvent.trackFormSubmission();
      
      alert('Inscrição realizada com sucesso! ✅');
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        difficulty: ''
      });
      
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao realizar inscrição. Tente novamente.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Componente de Tracking */}
      <Tracking />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Descubra como a <span className="text-amber-300">Leitura Corporal</span> pode atrair clientes de forma natural
              </h1>
              <p className="text-2xl lg:text-3xl text-purple-100 mb-8 font-bold -mt-2">
                criar confiança instantânea e abrir caminho para você viver da terapia.
              </p>
              <p className="text-lg text-purple-200 mb-8">
                Workshop gratuito e online com a especialista em Leitura Corporal e criadora do Mapa da Personalidade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Garanta sua vaga gratuita agora
                </button>
              </div>
              
              {/* Video Player */}
              <div className="max-w-2xl mx-auto">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/a0vAeRynt4o"
                    title="Workshop Leitura Corporal"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Dor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Talvez você esteja vivendo isso...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
              <div className="text-red-500 mb-4">
                <Calendar className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-800 font-medium">Agenda vazia ou instável, sem uma estratégia clara para atrair novos clientes</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div className="text-orange-500 mb-4">
                <Users className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-800 font-medium">Estuda técnicas constantemente, mas não vê clientes entrando pela porta</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <div className="text-yellow-600 mb-4">
                <X className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-800 font-medium">Cansaço de tentar fazer marketing sozinha sem conseguir resultado</p>
            </div>
          </div>
          <p className="text-xl text-gray-700 mt-12 font-medium">
            Se você se identifica com alguma dessas situações, <span className="text-purple-600 font-bold">esse workshop é para você</span>.
          </p>
        </div>
      </section>

      {/* Contador Regressivo */}
      <section className="py-6 bg-gradient-to-r from-orange-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-2">QUARTA 01/OUT - 19h30</h3>
            <div className="flex justify-center items-center space-x-4 lg:space-x-8">
              <div className="text-center">
                <div className="bg-black bg-opacity-30 rounded-lg px-4 py-3 lg:px-6 lg:py-4">
                  <div className="text-3xl lg:text-5xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                </div>
                <div className="text-sm lg:text-base font-semibold mt-2">DIAS</div>
              </div>
              <div className="text-center">
                <div className="bg-black bg-opacity-30 rounded-lg px-4 py-3 lg:px-6 lg:py-4">
                  <div className="text-3xl lg:text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                </div>
                <div className="text-sm lg:text-base font-semibold mt-2">HORAS</div>
              </div>
              <div className="text-center">
                <div className="bg-black bg-opacity-30 rounded-lg px-4 py-3 lg:px-6 lg:py-4">
                  <div className="text-3xl lg:text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                </div>
                <div className="text-sm lg:text-base font-semibold mt-2">MINUTOS</div>
              </div>
              <div className="text-center">
                <div className="bg-black bg-opacity-30 rounded-lg px-4 py-3 lg:px-6 lg:py-4">
                  <div className="text-3xl lg:text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                </div>
                <div className="text-sm lg:text-base font-semibold mt-2">SEGUNDOS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      <section id="inscricao" className="py-20 bg-gradient-to-br from-orange-100 to-orange-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Reserve sua vaga gratuita no workshop
              </h2>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-semibold">100% Gratuito</span>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <User className="h-5 w-5 inline mr-2 text-purple-600" />
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Digite seu nome completo"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Mail className="h-5 w-5 inline mr-2 text-purple-600" />
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Digite seu melhor e-mail"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  <Phone className="h-5 w-5 inline mr-2 text-purple-600" />
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Qual a sua maior dificuldade hoje para atrair clientes? (opcional)
                </label>
                <textarea
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Compartilhe conosco sua principal dificuldade..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Quero garantir minha vaga
                <CheckCircle className="ml-2 h-5 w-5 inline" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Detalhes do Workshop */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que você vai aprender nesse Workshop
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">Como usar a <strong>Leitura Corporal</strong> para atrair clientes de forma natural</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">Como gerar <strong>confiança instantânea</strong> com seus potenciais clientes</p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">Como transformar <strong>curiosidade em atendimentos pagos</strong></p>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg text-gray-700">O próximo passo: como isso se conecta a uma <strong>estrutura que pode lotar sua agenda</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que outras terapeutas dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Fiquei impressionada com facilidade que tive após vender meu primeiro Mapa. No início me preocupei por ter somente o celular, mas consegui fazer tudo sem complicações, isso me deixou ainda mais à vontade e confiante."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-purple-600">Jerusa Lima</p>
                <p className="text-sm text-gray-500">Psicoterapeuta Clínica</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Eu sempre estudei muito, mas faltava clientes. Só de aplicar o que aprendi com a Fernanda já consegui encher minha agenda de sessões."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-purple-600">Ana Paula</p>
                <p className="text-sm text-gray-500">Terapeuta Integrativa</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "A leitura corporal abriu portas que eu nunca imaginei. Foi o que me diferenciou no mercado e trouxe clientes que realmente valorizam meu trabalho."
              </p>
              <div className="border-t pt-4">
                <p className="font-semibold text-purple-600">Maristela</p>
                <p className="text-sm text-gray-500">Terapeuta Sistêmica</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quem é a Fernanda */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:space-x-12">
            <div className="lg:w-1/3 mb-12 lg:mb-0">
              <div className="relative mx-auto w-80 h-80">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="/mapa_img_terapeuta.png" 
                      alt="Oneida Fernanda - Terapeuta especialista em Leitura Corporal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-8 py-3 rounded-full shadow-lg">
                  <div className="text-center">
                    <div className="text-lg font-bold tracking-wide">Oneida</div>
                    <div className="text-lg font-bold tracking-wide -mt-1">Fernanda</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sua facilitadora no workshop
              </h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  <strong>Oneida Fernanda</strong> é terapeuta, especialista em Leitura Corporal e criadora do Mapa da Personalidade, método que já ajuda terapeutas a se diferenciar e lotar a agenda.
                </p>
                <p>
                  Com anos de experiência no mercado terapêutico, ela desenvolveu uma abordagem única que combina conhecimento técnico com estratégias práticas de atração de clientes.
                </p>
                <p>
                  Sua missão é ajudar terapeutas a prosperarem financeiramente enquanto fazem a diferença na vida das pessoas através de métodos naturais e humanos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que NÃO é */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              O que esse workshop NÃO é
            </h2>
          </div>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Não é mais um curso teórico cheio de informações que "ficam na gaveta"</p>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Não é uma fórmula mágica para fazer dinheiro e clientes sem esforço</p>
            </div>
            <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <p className="text-lg text-gray-700">Não é uma promessa genérica</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">É sim...</h3>
            <p className="text-xl">
              Uma experiência prática para você aplicar imediatamente a Leitura Corporal como ferramenta de atração e conexão com clientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            As vagas são limitadas e o workshop acontecerá em breve
          </h2>
          <p className="text-xl lg:text-2xl text-purple-100 mb-12">
            Reserve agora para garantir sua presença e transformar a forma como você atrai clientes.
          </p>
          <button 
            onClick={() => document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Quero participar do workshop gratuito
            <ArrowRight className="ml-3 h-6 w-6 inline" />
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Ao Vivo Online</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              <span>Certificado de Participação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Workshop Leitura Corporal - Oneida Fernanda. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
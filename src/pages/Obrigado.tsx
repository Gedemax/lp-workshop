import React, { useEffect, useState } from 'react';
import { CheckCircle, Calendar, Clock, MessageCircle, Heart, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import Tracking, { trackEvent } from '../components/Tracking';
import SEO from '../components/SEO';

function Obrigado() {
  const location = useLocation();
  const { name } = location.state || { name: '' };
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Scroll para o topo da página
    window.scrollTo(0, 0);
    
    // Disparar evento de conversão adicional na página de obrigado
    trackEvent.facebookCompleteRegistration();
    
    // Remover confetti após 3 segundos
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Structured Data para conversão
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Inscrição Confirmada - Workshop Leitura Corporal",
    "description": "Parabéns! Sua inscrição no Workshop de Leitura Corporal está confirmada. Entre no grupo exclusivo do WhatsApp para receber conteúdo extra.",
    "mainEntity": {
      "@type": "Event",
      "name": "Workshop Leitura Corporal - Como Atrair Clientes de Forma Natural",
      "startDate": "2025-10-01T19:30:00-03:00",
      "organizer": {
        "@type": "Person",
        "name": "Oneida Fernanda"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
      {/* SEO Otimizado */}
      <SEO 
        title={`Parabéns ${name ? name : 'Terapeuta'}! Inscrição Confirmada`}
        description="Sua vaga no Workshop de Leitura Corporal está garantida! Entre no grupo exclusivo do WhatsApp para receber conteúdo extra de preparação e avisos importantes."
        keywords="inscrição confirmada, workshop leitura corporal, grupo whatsapp, oneida fernanda, preparação workshop"
        url="/obrigado"
        structuredData={structuredData}
      />
      
      <Tracking />
      
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <div className="absolute top-10 left-10 animate-bounce text-4xl">🎉</div>
          <div className="absolute top-20 right-20 animate-bounce text-3xl delay-100">✨</div>
          <div className="absolute top-32 left-1/4 animate-bounce text-2xl delay-200">🌟</div>
          <div className="absolute top-16 right-1/3 animate-bounce text-3xl delay-300">💜</div>
          <div className="absolute top-40 right-10 animate-bounce text-2xl delay-400">🎊</div>
          <div className="absolute top-24 left-1/2 animate-bounce text-4xl delay-500">🥳</div>
        </div>
      )}
      
      {/* Header Success */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="mx-auto w-32 h-32 bg-gradient-to-br from-white to-orange-100 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              🎉 Parabéns, {name || 'Terapeuta'}!
            </h1>
            <p className="text-2xl lg:text-3xl text-orange-100 mb-8 font-bold animate-fade-in-delay">
              Sua inscrição está confirmada!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-white mb-4 font-semibold">
                Agora falta apenas <span className="text-orange-200 font-bold">1 passo</span>:
              </p>
              <p className="text-2xl font-bold text-orange-200">
                Entrar no grupo exclusivo do WhatsApp! 📱
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios do Grupo WhatsApp */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              📱 É nesse grupo que você vai receber:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conteúdo Extra</h3>
              <p className="text-gray-700">
                Material de preparação exclusivo para você chegar no workshop ainda mais preparada! 🌟
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl text-center border border-orange-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Avisos Importantes</h3>
              <p className="text-gray-700">
                Lembretes do workshop e informações importantes em primeira mão! ⏰
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-2xl text-center border border-pink-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Conexão Direta</h3>
              <p className="text-gray-700">
                Espaço para se conectar com a Fernanda e outras terapeutas incríveis! 💜
              </p>
            </div>
          </div>

          {/* CTA Principal WhatsApp */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  Clique no botão abaixo e entre agora:
                </h3>
              </div>
              
              <a 
                href="https://chat.whatsapp.com/DSEZRhtdEFECfsmBwi6HNB" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl mb-6"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                ✅ Quero entrar no grupo de WhatsApp
              </a>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-8">
                <p className="text-xl font-semibold mb-2">
                  📝 Quando entrar no grupo:
                </p>
                <p className="text-2xl font-bold text-green-100">
                  Manda um 👋 pra gente te dar boas-vindas!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Rápidas do Workshop */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              📅 Lembrete do Workshop
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="flex items-center space-x-3">
                <Calendar className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">01 de Outubro</p>
                  <p className="text-sm text-gray-600">Quarta-feira</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">19h30</p>
                  <p className="text-sm text-gray-600">Horário de Brasília</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <p className="text-purple-800 font-semibold">
                ✨ Link de acesso será enviado no grupo do WhatsApp!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Motivacional */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Sua jornada de transformação começa agora! ✨
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Em breve você terá as ferramentas para atrair clientes de forma natural e autêntica.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">
              💜 Não esqueça:
            </p>
            <p className="text-xl">
              Entre no grupo do WhatsApp agora mesmo para não perder nenhuma informação importante!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Workshop Leitura Corporal - Oneida Fernanda. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Dúvidas? Entre em contato conosco pelo e-mail: contato@souterapeuta.pro
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Obrigado;

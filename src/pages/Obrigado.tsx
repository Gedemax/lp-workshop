import React, { useEffect } from 'react';
import { CheckCircle, Calendar, Clock, Users, ArrowRight, Star } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import Tracking, { trackEvent } from '../components/Tracking';

function Obrigado() {
  const location = useLocation();
  const { name, email } = location.state || { name: '', email: '' };

  useEffect(() => {
    // Disparar evento de conversão adicional na página de obrigado
    trackEvent.facebookCompleteRegistration();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Tracking />
      
      {/* Header Success */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              🎉 Parabéns, {name || 'Terapeuta'}!
            </h1>
            <p className="text-2xl lg:text-3xl text-green-100 mb-8 font-bold">
              Sua vaga no workshop está garantida!
            </p>
            <p className="text-lg text-green-200 mb-8">
              Enviamos um e-mail de confirmação para <strong>{email}</strong> com todos os detalhes.
            </p>
          </div>
        </div>
      </section>

      {/* Próximos Passos */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              📋 Próximos Passos
            </h2>
            <p className="text-xl text-gray-600">
              Para garantir que você aproveite ao máximo o workshop
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6 bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-400">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Verifique seu e-mail</h3>
                <p className="text-gray-700">
                  Enviamos um e-mail com o link de acesso ao workshop. Se não encontrar na caixa de entrada, 
                  verifique a pasta de spam ou promoções.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-purple-50 p-6 rounded-2xl border-l-4 border-purple-400">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adicione à sua agenda</h3>
                <p className="text-gray-700">
                  <strong>Data:</strong> Quarta-feira, 01 de Outubro<br/>
                  <strong>Horário:</strong> 19h30 (horário de Brasília)<br/>
                  <strong>Duração:</strong> Aproximadamente 90 minutos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-orange-50 p-6 rounded-2xl border-l-4 border-orange-400">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prepare-se para o workshop</h3>
                <p className="text-gray-700">
                  Tenha papel e caneta em mãos. Vamos compartilhar estratégias práticas que você poderá 
                  aplicar imediatamente em sua prática terapêutica.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6 bg-green-50 p-6 rounded-2xl border-l-4 border-green-400">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compartilhe com colegas</h3>
                <p className="text-gray-700">
                  Conhece outras terapeutas que podem se beneficiar? Compartilhe o workshop! 
                  Quanto mais terapeutas prosperarem, melhor para toda a categoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações do Workshop */}
      <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                📅 Detalhes do Workshop
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Data</p>
                    <p className="text-gray-700">Quarta-feira, 01 de Outubro</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Horário</p>
                    <p className="text-gray-700">19h30 (horário de Brasília)</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Formato</p>
                    <p className="text-gray-700">Online, ao vivo e gratuito</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Star className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Facilitadora</p>
                    <p className="text-gray-700">Oneida Fernanda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lembrete Importante */}
      <section className="py-20 bg-gradient-to-br from-amber-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border-l-8 border-amber-400">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              ⚠️ Importante: Não Perca!
            </h2>
            <p className="text-xl text-gray-700 mb-6">
              Este workshop acontece apenas <strong>uma vez</strong> e as vagas são limitadas. 
              Você já garantiu a sua, agora é só aparecer!
            </p>
            <p className="text-lg text-gray-600">
              Nos vemos no dia <strong>01 de Outubro às 19h30</strong>! 🚀
            </p>
          </div>
        </div>
      </section>

      {/* CTA Compartilhar */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ajude outras terapeutas a prosperarem também! 💜
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Compartilhe este workshop com colegas que também querem lotar a agenda de clientes.
          </p>
          <Link 
            to="/inscricao"
            className="inline-flex items-center bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Compartilhar Workshop
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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

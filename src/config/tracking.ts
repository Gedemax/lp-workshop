// Configurações de Tracking
// Substitua pelos seus IDs reais quando for usar

export const TRACKING_CONFIG = {
  // ========================================
  // FACEBOOK PIXEL
  // ========================================
  // Como obter: https://business.facebook.com/events_manager
  // Exemplo: '1234567890123456'
  FACEBOOK_PIXEL_ID: 'SEU_PIXEL_ID_AQUI',
  
  // ========================================
  // GOOGLE ANALYTICS 4
  // ========================================
  // Como obter: https://analytics.google.com/
  // Exemplo: 'G-XXXXXXXXXX'
  GOOGLE_ANALYTICS_ID: 'G-XXXXXXXXXX',
  
  // ========================================
  // GOOGLE TAG MANAGER (Opcional)
  // ========================================
  // Como obter: https://tagmanager.google.com/
  // Exemplo: 'GTM-XXXXXXX'
  GOOGLE_TAG_MANAGER_ID: 'GTM-XXXXXXX',
  
  // ========================================
  // CONFIGURAÇÕES GERAIS
  // ========================================
  // Habilitar tracking apenas em produção
  ENABLE_TRACKING: process.env.NODE_ENV === 'production',
  
  // Debug mode (mostra logs no console)
  DEBUG_MODE: process.env.NODE_ENV === 'development'
};

// Função para verificar se o tracking está configurado
export const isTrackingConfigured = () => {
  return {
    facebook: TRACKING_CONFIG.FACEBOOK_PIXEL_ID !== 'SEU_PIXEL_ID_AQUI',
    googleAnalytics: TRACKING_CONFIG.GOOGLE_ANALYTICS_ID !== 'G-XXXXXXXXXX',
    googleTagManager: TRACKING_CONFIG.GOOGLE_TAG_MANAGER_ID !== 'GTM-XXXXXXX'
  };
};

// Função para debug
export const debugLog = (message: string, data?: any) => {
  if (TRACKING_CONFIG.DEBUG_MODE) {
    console.log(`[TRACKING] ${message}`, data || '');
  }
};

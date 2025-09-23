# 📊 Configuração de Tracking - Workshop Mapa

Este projeto já está preparado para receber **Facebook Pixel** e **Google Analytics**. Siga as instruções abaixo para configurar.

## 🎯 Como Configurar

### 1. Facebook Pixel

1. Acesse [Facebook Business Manager](https://business.facebook.com/events_manager)
2. Crie um Pixel (se ainda não tiver)
3. Copie o ID do Pixel (ex: `1234567890123456`)
4. Edite o arquivo `src/config/tracking.ts`
5. Substitua `'SEU_PIXEL_ID_AQUI'` pelo seu ID real

```typescript
FACEBOOK_PIXEL_ID: '1234567890123456', // Seu ID aqui
```

### 2. Google Analytics 4

1. Acesse [Google Analytics](https://analytics.google.com/)
2. Crie uma propriedade GA4 (se ainda não tiver)
3. Copie o ID de medição (ex: `G-XXXXXXXXXX`)
4. Edite o arquivo `src/config/tracking.ts`
5. Substitua `'G-XXXXXXXXXX'` pelo seu ID real

```typescript
GOOGLE_ANALYTICS_ID: 'G-ABC123DEF4', // Seu ID aqui
```

### 3. Google Tag Manager (Opcional)

1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Crie um contêiner (se ainda não tiver)
3. Copie o ID do contêiner (ex: `GTM-XXXXXXX`)
4. Edite o arquivo `src/config/tracking.ts`
5. Substitua `'GTM-XXXXXXX'` pelo seu ID real

```typescript
GOOGLE_TAG_MANAGER_ID: 'GTM-ABC123', // Seu ID aqui
```

## 🔧 Configurações Automáticas

### ✅ O que já está configurado:

- **Tracking automático**: Só funciona em produção
- **Debug mode**: Logs no console em desenvolvimento
- **Eventos de conversão**: Disparados automaticamente no envio do formulário
- **Page views**: Rastreados automaticamente

### 📈 Eventos que são disparados:

**Facebook Pixel:**
- `PageView` - Quando a página carrega
- `Lead` - Quando o formulário é enviado
- `CompleteRegistration` - Quando o formulário é enviado

**Google Analytics:**
- `page_view` - Quando a página carrega
- `generate_lead` - Quando o formulário é enviado
- `form_submit` - Quando o formulário é enviado

## 🚀 Como Testar

### Em Desenvolvimento:
- Abra o console do navegador (F12)
- Você verá logs como: `[TRACKING] Tracking desabilitado (modo desenvolvimento)`

### Em Produção:
- Use a extensão **Facebook Pixel Helper** para verificar o Pixel
- Use **Google Analytics Debugger** para verificar o GA
- Verifique os eventos em tempo real nos painéis

## 🛠️ Estrutura dos Arquivos

```
src/
├── config/
│   └── tracking.ts          # Configurações centralizadas
├── components/
│   └── Tracking.tsx         # Componente de tracking
└── App.tsx                  # Implementação dos eventos
```

## 📝 Exemplo de Configuração Completa

```typescript
// src/config/tracking.ts
export const TRACKING_CONFIG = {
  FACEBOOK_PIXEL_ID: '1234567890123456',
  GOOGLE_ANALYTICS_ID: 'G-ABC123DEF4',
  GOOGLE_TAG_MANAGER_ID: 'GTM-ABC123',
  ENABLE_TRACKING: process.env.NODE_ENV === 'production',
  DEBUG_MODE: process.env.NODE_ENV === 'development'
};
```

## ⚠️ Importante

- **Privacidade**: Certifique-se de ter uma política de privacidade
- **LGPD/GDPR**: Considere implementar um banner de cookies
- **Teste sempre**: Verifique se os eventos estão sendo disparados corretamente

## 🎯 Próximos Passos

Após configurar:
1. Faça o deploy da aplicação
2. Teste os eventos em produção
3. Configure campanhas no Facebook Ads
4. Configure metas no Google Analytics
5. Monitore as conversões

---

✅ **Tudo pronto!** Agora é só configurar os IDs e fazer o deploy.

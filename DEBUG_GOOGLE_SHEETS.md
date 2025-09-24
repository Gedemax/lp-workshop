# 🔍 Debug Google Sheets Integration

## 🚨 **Problemas Identificados**

### **1. Demora para redirecionar (RESOLVIDO)**
- ✅ Adicionado timeout de 15 segundos
- ✅ Feedback visual com loading spinner
- ✅ Mensagens de erro claras
- ✅ Redirecionamento automático mesmo com timeout

### **2. Dados não salvos no Google Sheets**

## 🔧 **Checklist de Verificação**

### **A. Verificar Google Apps Script**

1. **Acesse**: https://script.google.com
2. **Abra seu projeto** do Google Apps Script
3. **Verifique se o código está assim**:

```javascript
function doPost(e) {
  try {
    // Log para debug
    console.log('Dados recebidos:', e.postData.contents);
    
    // Parse dos dados JSON
    const data = JSON.parse(e.postData.contents);
    
    // ID da sua planilha (substitua pelo ID real)
    const SHEET_ID = 'SEU_ID_DA_PLANILHA_AQUI';
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    
    // Adicionar cabeçalhos se for a primeira linha
    if (sheet.getLastRow() === 0) {
      sheet.getRange(1, 1, 1, 5).setValues([
        ['Timestamp', 'Nome', 'Email', 'WhatsApp', 'Dificuldade']
      ]);
    }
    
    // Adicionar os dados
    const timestamp = new Date();
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.whatsapp || '',
      data.difficulty || ''
    ]);
    
    console.log('Dados salvos com sucesso');
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Dados salvos com sucesso'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Erro:', error);
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### **B. Configurações Necessárias**

1. **Deploy do Script**:
   - Clique em "Deploy" → "New deployment"
   - Type: "Web app"
   - Execute as: "Me"
   - Who has access: "Anyone"
   - Copie a URL gerada

2. **Permissões**:
   - Autorize o acesso ao Google Sheets
   - Confirme todas as permissões

3. **ID da Planilha**:
   - Abra sua planilha Google Sheets
   - Copie o ID da URL: `https://docs.google.com/spreadsheets/d/[ID_AQUI]/edit`
   - Cole no código do Apps Script

### **C. Teste Manual**

Use este comando no console do navegador (F12):

```javascript
// Teste manual do Google Apps Script
const testData = {
  name: 'Teste Debug',
  email: 'teste@debug.com',
  whatsapp: '11999999999',
  difficulty: 'Teste de integração'
};

fetch('https://script.google.com/macros/s/AKfycbwL16-FRsEaFD6ISnSFgvso-oWTe9xskB9own2JzWBS2f-B8Jdxzxto9E3jMif7Dgp5/exec', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
  mode: 'no-cors'
})
.then(() => console.log('✅ Teste enviado'))
.catch(err => console.error('❌ Erro:', err));
```

## 🔍 **Como Debugar**

### **1. Verificar Logs do Apps Script**
- No Google Apps Script, vá em "Executions"
- Veja se há execuções recentes
- Verifique os logs de erro

### **2. Verificar Network Tab**
- Abra F12 → Network
- Faça uma inscrição
- Veja se a requisição para o Google Apps Script aparece
- Verifique o status da resposta

### **3. Verificar Console**
- Abra F12 → Console
- Faça uma inscrição
- Veja as mensagens de log que adicionei:
  - "📤 Enviando dados:"
  - "✅ Dados enviados com sucesso"
  - "❌ Erro ao enviar dados:"

## 🚀 **Soluções Rápidas**

### **Se os dados não estão salvando:**

1. **Verifique o ID da planilha** no código do Apps Script
2. **Re-deploy** o Apps Script com nova URL
3. **Atualize a URL** no código React (linha 54 do Inscricao.tsx)
4. **Teste manualmente** com o código JavaScript acima

### **Se ainda houver demora:**

1. **Verifique sua conexão** com a internet
2. **Teste em outro navegador**
3. **Verifique se não há bloqueadores** (AdBlock, etc.)

## 📞 **Próximos Passos**

1. Execute o teste manual acima
2. Verifique os logs do Apps Script
3. Me informe os resultados para ajudar mais
4. Se necessário, podemos criar uma versão alternativa com webhook

---

**Status**: 🔧 Debug em andamento
**Última atualização**: 24/09/2024

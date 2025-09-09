// Serviço simplificado de chatbot
export const dialogflowService = {
  async detectIntent(text) {
    try {
      // Simula um delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const lowerText = text.toLowerCase().trim();
      
      // Respostas pré-definidas
      const responses = {
        'oi': 'Olá! Como posso ajudar você hoje?',
        'olá': 'Olá! Em que posso ser útil?',
        'ola': 'Olá! Como posso ajudá-lo?',
        'bom dia': 'Bom dia! Em que posso ajudá-lo?',
        'boa tarde': 'Boa tarde! Como posso ajudar?',
        'boa noite': 'Boa noite! Em que posso ser útil?',
        'quem é vocês': 'Somos uma empresa especializada em gestão empresarial, oferecendo soluções inovadoras para seu negócio.',
        'sobre a empresa': 'Somos especialistas em gestão empresarial com foco em resultados e eficiência.',
        'o que fazem': 'Oferecemos soluções completas em gestão, incluindo dashboard analítico, controle de usuários e suporte via IA.',
        'status do pedido': 'Para verificar o status do pedido, preciso do número do pedido. Você pode fornecer?',
        'rastreamento': 'Para rastrear seu pedido, preciso do número de rastreamento.',
        'suporte': 'Estou aqui para ajudar! Conte-me qual é o problema.',
        'ajuda': 'Posso ajudar com: informações da empresa, status de pedidos e suporte geral. O que você precisa?',
        'obrigado': 'Por nada! Estou aqui sempre que precisar.',
        'valeu': 'De nada! 😊 Conte comigo para ajudar.',
        'default': 'Desculpe, não entendi completamente. Pode reformular a pergunta ou perguntar sobre: informações da empresa, status de pedidos ou suporte?'
      };

      // Procura por correspondências
      let responseText = responses['default'];
      
      if (lowerText.includes('oi') || lowerText.includes('olá') || lowerText.includes('ola')) {
        responseText = responses['oi'];
      } else if (lowerText.includes('bom dia')) {
        responseText = responses['bom dia'];
      } else if (lowerText.includes('boa tarde')) {
        responseText = responses['boa tarde'];
      } else if (lowerText.includes('boa noite')) {
        responseText = responses['boa noite'];
      } else if (lowerText.includes('quem') || lowerText.includes('empresa') || lowerText.includes('fazem')) {
        responseText = responses['sobre a empresa'];
      } else if (lowerText.includes('status') || lowerText.includes('pedido') || lowerText.includes('entrega')) {
        responseText = responses['status do pedido'];
      } else if (lowerText.includes('rastre') || lowerText.includes('localiz')) {
        responseText = responses['rastreamento'];
      } else if (lowerText.includes('suporte') || lowerText.includes('ajuda') || lowerText.includes('problema')) {
        responseText = responses['suporte'];
      } else if (lowerText.includes('obrigad') || lowerText.includes('agradeço') || lowerText.includes('valeu')) {
        responseText = responses['obrigado'];
      }

      return {
        text: responseText,
        intent: 'success',
        confidence: 0.9,
        timestamp: new Date()
      };
      
    } catch (error) {
      console.error('Erro no serviço de chatbot:', error);
      throw new Error('Erro ao processar mensagem');
    }
  }
};
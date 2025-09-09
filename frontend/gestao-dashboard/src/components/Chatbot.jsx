import React, { useState, useRef, useEffect } from 'react';
import { dialogflowService } from '../services/dialogflow';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou seu assistente virtual. Como posso ajudar?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '' || isLoading) return;

    // Adiciona mensagem do usuário
    const userMessage = { 
      text: inputMessage, 
      sender: 'user', 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await dialogflowService.detectIntent(inputMessage);
      
      const botMessage = { 
        text: response.text, 
        sender: 'bot', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro:', error);
      const errorMessage = { 
        text: "Desculpe, estou com problemas técnicos. Tente novamente.", 
        sender: 'bot', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (quickReply) => {
    setInputMessage(quickReply);
    // Simula o envio com pequeno delay para UX
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} };
      handleSendMessage(fakeEvent);
    }, 100);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const quickReplies = [
    "Oi",
    "Sobre a empresa",
    "Status do pedido", 
    "Preciso de ajuda"
  ];

  return (
    <section id="chatbot" className="my-4">
      <div className="card">
        <div className="card-header">
          <h2 className="mb-0">🤖 Chatbot IA</h2>
        </div>
        <div className="card-body">
          <div className="card bg-dark">
            <div className="card-header bg-dark border-secondary">
              <small className="text-muted">Assistente Virtual - Gestão Empresarial</small>
            </div>
            
            <div 
              className="card-body bg-dark" 
              style={{ height: '300px', overflowY: 'auto', padding: '1rem' }}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`d-flex mb-3 ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                >
                  <div
                    className={`p-3 rounded ${message.sender === 'user' 
                      ? 'bg-primary text-white' 
                      : 'bg-secondary text-light'}`}
                    style={{ maxWidth: '70%' }}
                  >
                    <div>{message.text}</div>
                    <small className="text-muted d-block mt-1">
                      {formatTime(message.timestamp)}
                    </small>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="d-flex justify-content-start mb-3">
                  <div className="p-3 rounded bg-secondary text-light">
                    <div className="d-flex align-items-center">
                      <div className="spinner-border spinner-border-sm me-2" role="status">
                        <span className="visually-hidden">Carregando...</span>
                      </div>
                      <span>Digitando...</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="card-footer bg-dark border-secondary">
              {/* Quick Replies */}
              <div className="mb-2">
                <small className="text-muted d-block mb-1">💡 Sugestões rápidas:</small>
                <div className="d-flex flex-wrap gap-1">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      className="btn btn-outline-light btn-sm"
                      onClick={() => handleQuickReply(reply)}
                      disabled={isLoading}
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
              
              <form onSubmit={handleSendMessage} className="d-flex gap-2">
                <input
                  type="text"
                  className="form-control bg-dark border-secondary text-light"
                  placeholder="Digite sua mensagem..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={isLoading}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={isLoading || inputMessage.trim() === ''}
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;
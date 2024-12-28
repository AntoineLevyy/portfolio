import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import { createChatBotMessage } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';




// Configuration for the chatbot
const config = {
  botName: "Ant1",
  initialMessages: [createChatBotMessage("Hey, how can I help you today?")],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#f0f0f0',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {
    botAvatar: (props) => (
      <img 
        src="/bitmoji.png" 
        alt="Custom Bot Avatar" 
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%' 
        }} 
      />
    ),
  },
};

// MessageParser class
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowerCaseMessage.includes("help")) {
      this.actionProvider.handleHelp();
    }
  }
}

// ActionProvider class
class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const message = this.createChatBotMessage("Hello! How can I assist you today?");
    this.updateChatbotState(message);
  }

  handleHelp() {
    const message = this.createChatBotMessage("Sure, I'm here to help! What do you need assistance with?");
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

// Main Chatbot component
const MyChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="chatbot-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000, textAlign: 'center' }}>
      <button onClick={toggleChatbot} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src="/bitmoji.png" 
          alt="Open Chatbot" 
          style={{ width: '80px', height: '80px', borderRadius: '50%' }}
        />
        <span style={{ marginTop: '5px', fontSize: '15px', color: '#fff', fontWeight: 'bold' }}>✨ Ask Ant1 Anything! 🤖</span>
      </button>
      {isOpen && (
        <div style={{ marginTop: '10px' }}>
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default MyChatbot;
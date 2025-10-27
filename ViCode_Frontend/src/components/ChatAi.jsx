import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import axiosClient from "../utils/axios_client";
import { Send } from 'lucide-react';

// Custom hook for typewriter effect
const useTypewriter = (text, speed = 30) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!text) {
            setDisplayedText('');
            setIsTyping(false);
            return;
        }

        setIsTyping(true);
        setDisplayedText('');
        
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return { displayedText, isTyping };
};

// Component for AI messages with typewriter effect
const TypewriterMessage = ({ text, isLastMessage }) => {
    const { displayedText, isTyping } = useTypewriter(text, 25);
    
    return (
        <div className="chat-bubble bg-base-200 text-base-content animate-messageSlideIn">
            <div className="whitespace-pre-wrap leading-relaxed">
                {displayedText}
                {isTyping && isLastMessage && (
                    <span className="inline-block w-0.5 h-4 bg-base-content ml-1 animate-typewriterCursor"></span>
                )}
            </div>
        </div>
    );
};

function ChatAi({problem}) {
    const [messages, setMessages] = useState([
        { role: 'model', parts:[{text: "Hi! I'm here to help you with this problem. Feel free to ask me anything about the solution, approach, or any doubts you have."}]}
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, reset,formState: {errors} } = useForm();
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Auto-scroll during typing animation
    useEffect(() => {
        const timer = setInterval(() => {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
        
        return () => clearInterval(timer);
    }, [messages]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        
        const newMessage = { role: 'user', parts: [{ text: data.message }] };
        const updatedMessages = [...messages, newMessage];

        setMessages(updatedMessages);
        reset();

        try {
            const response = await axiosClient.post("/ai/chat", {
                messages:updatedMessages,
                title:problem.title,
                description:problem.description,
                testCases: problem.visibleTestCases,
                startCode:problem.startCode
            });

            setMessages(prev => [...prev, { 
                role: 'model', 
                parts:[{text: response.data.message}] 
            }]);
        } 
        catch (error) {
            console.error("API Error:", error.message);
            setMessages(prev => [...prev, { 
                role: 'model', 
                parts:[{text:"Sorry, I encountered an error: " + error.message}]
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full max-h-[70vh] min-h-[400px] animate-fadeIn">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => {
                    const isLastMessage = index === messages.length - 1;
                    const isLastAIMessage = isLastMessage && msg.role === 'model';
                    
                    return (
                        <div 
                            key={index} 
                            className={`chat ${msg.role === "user" ? "chat-end" : "chat-start"} animate-slideIn`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {msg.role === "user" ? (
                                <div className="chat-bubble bg-primary text-primary-content animate-fadeIn">
                                    {msg.parts[0].text}
                                </div>
                            ) : (
                                <TypewriterMessage 
                                    text={msg.parts[0].text} 
                                    isLastMessage={isLastAIMessage}
                                />
                            )}
                        </div>
                    );
                })}
                {isLoading && (
                    <div className="chat chat-start animate-messageSlideIn">
                        <div className="chat-bubble bg-base-200 text-base-content">
                            <div className="flex items-center space-x-3">
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-base-content rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-2 h-2 bg-base-content rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-2 h-2 bg-base-content rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                                <span className="text-sm opacity-70">AI is thinking...</span>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="sticky bottom-0 p-4 bg-base-100 border-t animate-slideUp"
            >
                <div className="flex items-center space-x-2">
                    <input 
                        placeholder="Ask me anything about this problem..." 
                        className="input input-bordered flex-1 transition-all duration-200 focus:input-primary" 
                        {...register("message", { required: true, minLength: 2 })}
                        disabled={isLoading}
                    />
                    <button 
                        type="submit" 
                        className={`btn btn-primary transition-all duration-200 ${isLoading ? 'loading' : ''}`}
                        disabled={errors.message || isLoading}
                    >
                        {!isLoading && <Send size={20} />}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChatAi;
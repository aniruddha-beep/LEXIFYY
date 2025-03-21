document.getElementById("chat-header").addEventListener("click", function() {
    let chatBox = document.getElementById("chat-box");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
});

document.getElementById("chat-send").addEventListener("click", function() {
    sendMessage();
});

document.getElementById("chat-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let input = document.getElementById("chat-input");
    let message = input.value.trim();
    
    if (message) {
        let chatMessages = document.getElementById("chat-messages");
        
        // Add user message
        let userMessage = document.createElement("div");
        userMessage.textContent = "You: " + message;
        userMessage.style.color = "black";
        chatMessages.appendChild(userMessage);
        
        // AI Response (Basic, can be replaced with ChatGPT API)
        let aiMessage = document.createElement("div");
        aiMessage.textContent = "Lexify AI: " + getAIResponse(message);
        aiMessage.style.color = "#0057ff";
        chatMessages.appendChild(aiMessage);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        input.value = "";
    }
}


function getAIResponse(userMessage) {
    let responses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hello! How can I assist you today?",
        "how does lexify work": "Lexify helps you create, manage, and verify legal documents with AI.",
        "what is lexify": "Lexify is an AI-powered legal assistant for contracts and compliance.",
        "bye": "Goodbye! Have a great day!"
    };

    return responses[userMessage.toLowerCase()] || "I'm still learning! Ask me something else.";
}

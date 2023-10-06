document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to send a user message to OpenAI and display the response
    function sendMessageToOpenAI(message) {
        const apiKey = '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'; // Replace with your actual API key
        const apiUrl = 'https://api.openai.com/v1/engines/davinci/completions'; // API endpoint

        // Prepare the request data
        const requestData = {
            prompt: message,
            max_tokens: 50, // Adjust as needed
        };

        // Make the API request
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        })
        .then(response => response.json())
        .then(data => {
            const botResponse = data.choices[0].text;
            displayMessage('You', message);
            displayMessage('Chatbot', botResponse);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    // Function to display a message in the chat interface
    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${sender.toLowerCase()}`;
        messageElement.innerText = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle user input and send messages to OpenAI
    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            sendMessageToOpenAI(userMessage);
            userInput.value = "";
        }
    });

    // Handle Enter key press
    userInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            sendButton.click();
        }
    });
});

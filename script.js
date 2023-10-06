document.addEventListener("DOMContentLoaded", function() {
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Function to send a user message to OpenAI and display the response
    function sendMessageToChatbot(message) {
        // Implement OpenAI API integration here
        // You'll need to set up the API call and handle the response

        // For example, you can use a mock response for testing:
        const botResponse = "This is a sample bot response.";

        displayMessage("You", message);
        displayMessage("Chatbot", botResponse);
    }

    // Function to display a message in the chat interface
    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = `message ${sender.toLowerCase()}`;
        messageElement.innerText = `${sender}: ${message}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Handle user input and send messages to the chatbot
    sendButton.addEventListener("click", function() {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            sendMessageToChatbot(userMessage);
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

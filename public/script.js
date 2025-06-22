const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage("user", userMessage);
  input.value = "";
  input.focus();

  const thinkingMessageDiv = appendMessage("bot", "Gemini is thinking...");
  thinkingMessageDiv.classList.add("thinking");

  fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: userMessage }),
  })
    .then((response) => {
      thinkingMessageDiv.remove();
      if (!response.ok) {
        return response.json().then((errorData) => {
          throw new Error(
            errorData.error || "Something went wrong on the server."
          );
        });
      }
      return response.json();
    })
    .then((data) => {
      appendMessage("bot", data.output);
    })
    .catch((error) => {
      if (thinkingMessageDiv.parentNode) {
        thinkingMessageDiv.remove();
      }
      console.error("Error:", error);
      appendMessage("bot", `Error: ${error.message}`);
    });
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}

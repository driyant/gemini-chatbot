# Gemini Chatbot Web App

A simple chatbot web app using **Node.js** (Express) and **Vanilla JavaScript** that connects to Gemini AI for generating responses.

## Features

- Simple chat interface (frontend)
- Sends user input to backend via `POST /api/chat`
- Gemini AI generates responses
- Animated "Gemini is thinking..." indicator

## Folder Structure

```
gemini-chatbot/
├── public/
│   ├── index.html
│   ├── script.js
│   └── style.css
├── server.js
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/gemini-chatbot.git
cd gemini-chatbot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Gemini API

- Add your Gemini API key or credentials as needed in your backend (`server.js`).

### 4. Run the app

```bash
npm run start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

- Open the app in your browser.
- Type your message in the input field and press Enter or click Send.
- The bot will reply using Gemini AI.

## Example API Response

The backend should return JSON like:

```json
{
  "reply": "This is Gemini's response."
}
```

## Customization

- Edit `public/style.css` to change the look and feel.
- Modify `public/script.js` for frontend logic.
- Update `server.js` for backend logic and Gemini API integration.

# 🚀 AI Investment Research Agent

An AI-powered Investment Research Agent that analyzes publicly listed companies using **live financial data**, **latest news**, and **Large Language Models (LLMs)** to generate structured investment recommendations.

The application provides a simple interface where users enter a company name and receive:

* 📈 Financial Overview
* 📰 Latest Company News
* 🤖 AI Generated Investment Analysis
* ⚠️ Risk Assessment
* 📊 Investment Recommendation

---

# 📌 Project Overview

Traditional investment research requires collecting financial data, reading multiple news articles, and manually analyzing market conditions.

This project automates that workflow using AI.

The system collects real-time financial information and recent news, combines both datasets, and sends them to an LLM to generate a structured investment report.

---

# ✨ Features

* AI Powered Investment Recommendation
* Live Financial Data
* Latest Company News
* SWOT Analysis
* Risk Analysis
* Confidence Score
* Buy / Hold / Sell Recommendation
* Simple React Dashboard
* REST API Backend
* Responsive UI

---

# 🛠 Tech Stack

## Frontend

* React 19
* Vite
* Axios
* React Router
* Tailwind CSS

---

## Backend

* Node.js
* Express.js
* JavaScript (ES Modules)

---

## AI

* OpenAI Compatible API
* NVIDIA GPT OSS 120B

---

## External APIs

* Yahoo Finance
* NewsAPI

---

## Deployment

* Frontend → Vercel
* Backend → Render

---

# 📂 Project Structure

```
AI_Investment_Agent

│

├── backend
│   ├── src
│   │
│   ├── config
│   ├── controllers
│   ├── prompts
│   ├── routes
│   ├── services
│   ├── tools
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │
│   ├── components
│   ├── pages
│   ├── services
│   ├── styles
│   ├── App.jsx
│   └── package.json
│
└── README.md
```

---

# ⚙️ How It Works

```
                User

                  │

                  ▼

        React Frontend

                  │

      POST /api/research

                  │

                  ▼

          Express Backend

                  │

                  ▼

      Investment Service

         ┌───────────────┐
         │               │
         ▼               ▼

 Yahoo Finance      News API

         │               │

         └──────┬────────┘

                ▼

       Prompt Generation

                ▼

     NVIDIA GPT OSS 120B

                ▼

     Structured JSON Report

                ▼

      React Dashboard
```

---

# 🧠 AI Workflow

### Step 1

User enters company name.

Example

```
Tesla
```

---

### Step 2

Backend fetches

* Company Financial Data
* Latest News

---

### Step 3

Both datasets are merged into an AI prompt.

Example

```
Financial Data

Latest News

Analyze the company

Generate recommendation
```

---

### Step 4

Prompt is sent to GPT OSS 120B.

---

### Step 5

AI returns

* Recommendation
* Score
* Confidence
* SWOT
* Risk
* Summary
* Future Outlook

---

### Step 6

Frontend displays the report.

---

# 📡 API

## Health Check

```
GET /
```

Response

```json
{
  "success": true,
  "message": "Investment Research Agent Backend is Running 🚀"
}
```

---

## Investment Research

```
POST /api/research
```

Body

```json
{
  "company": "Tesla"
}
```

Response

```json
{
  "success": true,
  "data": {
    "finance": {},
    "analysis": {},
    "news": []
  }
}
```

---

# 🔑 Environment Variables

## Backend (.env)

```
PORT=5000

OPENAI_API_KEY=YOUR_OPENAI_KEY

OPENAI_BASE_URL=https://integrate.api.nvidia.com/v1

NEWS_API_KEY=YOUR_NEWS_API_KEY
```

---

## Frontend (.env)

```
VITE_API_URL=http://localhost:5000/api
```

For production

```
VITE_API_URL=https://YOUR_RENDER_BACKEND/api
```

---

# 💻 Running Locally

## 1. Clone Repository

```
git clone https://github.com/raghav-ri/ai_investment_agent.git
```

```
cd ai_investment_agent
```

---

## 2. Install Backend

```
cd backend

npm install
```

Create

```
backend/.env
```

Add

```
PORT=5000

OPENAI_API_KEY=YOUR_KEY

OPENAI_BASE_URL=https://integrate.api.nvidia.com/v1

NEWS_API_KEY=YOUR_KEY
```

Run

```
npm run dev
```

Backend

```
http://localhost:5000
```

---

## 3. Install Frontend

Open another terminal

```
cd frontend

npm install
```

Create

```
frontend/.env
```

```
VITE_API_URL=http://localhost:5000/api
```

Run

```
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 🌐 Deployment

## Backend

Deploy using

* Render

Add environment variables

```
OPENAI_API_KEY

OPENAI_BASE_URL

NEWS_API_KEY

PORT
```

---

## Frontend

Deploy using

* Vercel

Environment Variable

```
VITE_API_URL=https://YOUR_RENDER_BACKEND/api
```

---

# 📸 Screenshots

Add screenshots here

* Home Page
* AI Recommendation
* Financial Data
* Latest News

---

# 🔮 Future Improvements

* Company Comparison
* Historical Charts
* Portfolio Analysis
* Sentiment Analysis
* AI Chat Assistant
* PDF Report Export
* Watchlist
* User Authentication
* Email Alerts
* Real-time Stock Updates

---

# 👨‍💻 Author

**Raghav Kumar Issar**

GitHub

https://github.com/raghav-ri

---

# 📄 License

This project is developed for educational and assignment purposes.

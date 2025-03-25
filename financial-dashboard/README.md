# Financial Dashboard

A real-time financial data visualization app built with React (frontend) and Node.js (backend), powered by Vite for fast development and Docker for easy deployment.
- [Features](#-features)
- [Prerequisites](#%EF%B8%8F-prerequisites)
- [Running the Application](#-running-the-application)
- [API Endpoints](#-api-endpoints)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [Authors](#-authors)

## Features
- **Financial News**: Latest news with titles, descriptions, and images
- **Exchange Rates**: Real-time USD rates for major currencies
- **Responsive Design**: Works on desktop and mobile
- **Docker Support**: One-command deployment

## ⚙️ Prerequisites

Before running, ensure you have installed:
- Node.js (v14 or higher)
- Docker (optional, for containerized deployment)

## Running the Application

### Local Development

1. Install dependencies:
   # Backend
   cd server
   npm install

   # Frontend
   cd client
   npm install

2. Start services:
    # Backend (runs on port 3001)
    cd server
    npm start

    # Frontend (runs on port 3000)
    cd client
    npm run dev

## Docker Deployment
1. Build and run:
    docker-compose up --build
2. Access the app:
    Frontend: http://localhost:3000
    Backend API: http://localhost:3001

# API Endpoints
## News Endpoints
GET /api/news - Fetch latest financial news
# Exchange Rate Endpoints
GET /api/exchange-rates - Get current USD exchange rates

#  Environment Variables
# Create .env in server/ with:
    NEWS_API_TOKEN=your_newsapi_token
    EXCHANGE_RATE_API_TOKEN=your_exchangerateapi_token

# Usage
## View Financial News:
The dashboard automatically displays the latest news
Scroll through articles with titles and summaries
## Check Exchange Rates:
Real-time rates are shown in the exchange rates section
Updates automatically every 5 minutes

### Authors
    Liangchao Xu（100919775）
    Ning Han（100946232）
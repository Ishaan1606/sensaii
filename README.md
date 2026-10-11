# 🚀 SensAI | AI-Powered Career Preparation Platform

**SensAI** is an AI-powered career preparation platform designed to help students and aspiring developers prepare for technical interviews, improve their resumes, identify skill gaps, and take the next step toward their dream careers.

By leveraging artificial intelligence, SensAI delivers personalized insights and career guidance to make interview preparation more structured, efficient, and accessible.

## 🌟 Features

- **📄 AI Resume Analysis:** Analyze resumes and receive actionable feedback to improve content, structure, and relevance.
- **🎯 Mock Interview Preparation:** Practice technical and HR interview questions to build confidence and improve interview readiness.
- **🤖 AI-Powered Assistance:** Get intelligent, personalized guidance for career preparation.
- **📊 Skill Gap Identification:** Identify areas for improvement and discover skills to focus on for your target role.
- **💡 Personalized Recommendations:** Receive suggestions tailored to your career goals and preparation needs.
- **📱 Responsive Interface:** Access the platform through a clean, user-friendly interface across different screen sizes.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js, JavaScript, HTML5, CSS3 |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| AI Integration | OpenAI API |
| Deployment | Vercel |
| Version Control | Git, GitHub |

## 🏗️ Architecture

SensAI follows a full-stack architecture in which the frontend communicates with backend APIs, the backend handles application logic and database operations, and the AI integration powers intelligent career-related features.

```text
              ┌──────────────────────┐
              │       User           │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ React.js Frontend    │
              │ Tailwind CSS         │
              └──────────┬───────────┘
                         │
                         ▼
              ┌──────────────────────┐
              │ Node.js + Express.js │
              │ Backend APIs         │
              └──────┬─────────┬─────┘
                     │         │
             ┌───────▼───┐ ┌───▼──────────┐
             │PostgreSQL │ │ OpenAI API   │
             │ Database  │ │ AI Features  │
             └───────────┘ └──────────────┘
```

## ⚙️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- PostgreSQL
- An OpenAI API key

### 1. Clone the Repository

```bash
git clone https://github.com/Ishaan1606/SensAI.git
cd SensAI
```

### 2. Install Dependencies

Navigate to the frontend and backend directories, if your repository uses a separate frontend/backend structure, and install their dependencies:

```bash
npm install
```

Repeat this in each application directory that has its own `package.json`.

### 3. Configure Environment Variables

Create a `.env` file in the appropriate application directory and configure the variables required by your implementation.

Example:

```env
OPENAI_API_KEY=your_openai_api_key
DATABASE_URL=your_postgresql_connection_string
```

**Important:** Use the exact variable names expected by your source code. Never commit API keys, database credentials, or other secrets to GitHub.

### 4. Start the Application

Run the frontend and backend using the development scripts defined in their respective `package.json` files.

```bash
npm run dev
```

If your project uses different scripts or a combined application structure, follow the commands specified in your configuration.

## 🔐 Security Considerations

- Keep API keys and database credentials in environment variables.
- Never expose private API keys in client-side code.
- Validate user input on the server.
- Apply appropriate authentication, authorization, and error handling wherever required.

## 🎯 Project Objectives

SensAI aims to simplify career preparation by combining AI-driven feedback with practical interview preparation. The platform focuses on helping users understand their strengths, identify areas for improvement, and prepare more effectively for technical and HR interviews.

## 🔮 Future Enhancements

- Advanced AI-powered mock interviews with detailed feedback.
- Resume optimization for specific job descriptions.
- Personalized learning roadmaps based on skill gaps.
- Progress tracking and performance analytics.
- Integration with job opportunities and application tracking.

## 🌐 Project Links

- **GitHub Repository:** [SensAI on GitHub](https://github.com/Ishaan1606/SensAI)
- **Live Demo:** [Explore SensAI](https://sensaii-vwfu.vercel.app/)

## 👨‍💻 Author

**Ishaan Kumar**

- GitHub: [@Ishaan1606](https://github.com/Ishaan1606)

---

⭐ If you find this project interesting, consider giving the repository a star!

*Built with a passion for AI, software development, and making career preparation smarter.*

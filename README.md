![Header](images/header.png)

# Smart API Doc Generator

[![Type: Capstone](https://img.shields.io/badge/Type-Capstone-blue)]()
[![Track: Backend AI Engineering](https://img.shields.io/badge/Track-Backend%20AI%20Engineering-green)]()
[![Week: 8](https://img.shields.io/badge/Week-8-orange)]()
[![Workload: 8h](https://img.shields.io/badge/Workload-8h-lightgrey)]()

---

## 📌 Problem Statement
Software teams often struggle with keeping API documentation accurate, accessible, and up‑to‑date. Manual processes lead to outdated specs, poor developer experience, and wasted time.  
This project solves that by automating documentation generation, integrating caching, and providing a seamless developer workflow.

---

## 🚀 Solution Overview
The **Smart API Doc Generator** is a backend service that automates API documentation creation and distribution.  
It integrates with:
- Databases
- Authentication
- Background jobs
- Reporting
- Caching
- LLMs  

All tools are free, ensuring accessibility and scalability without cost barriers.

---

## ⚙️ Implementation Details
- **API Endpoints** → CRUD routes for users, authentication, and documentation management.  
- **Database** → PostgreSQL integration for persistent storage of users and specs.  
- **Authentication** → JWT‑based middleware securing routes and protecting API specs.  
- **Background Jobs** → Automated job (`generateDocs.job.js`) to refresh and generate documentation.  
- **Reporting** → PDF generation and email delivery services for sharing documentation.  
- **Caching** → Redis integration for fast retrieval of frequently accessed docs.  
- **LLM Integration** → OpenAI API used to enhance documentation with AI‑generated summaries.  

---

## 🛠️ Installation & Setup
Clone the repo and install dependencies:
```bash
git clone https://github.com/leonardphokane/smart-api-doc-generator.git
cd smart-api-doc-generator
npm install
```

---

Create a .env file:

```bash
DATABASE_URL=postgres://postgres:newpassword@localhost:5432/smartapidocs
REDIS_URL=redis://localhost:6379
JWT_SECRET=supersecret
OPENAI_API_KEY=your_openai_api_key_here
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

Run the server:
```bash
npm run dev
```

---

## 📖 Usage
Visit /api-docs → Swagger UI with JWT security.

Health checks:

/api/db-check → Database connectivity.

/api/redis-check → Redis connectivity.

Auth endpoints: /api/auth.

Docs endpoints: /api/docs.

---

## 🧩 Milestones
One‑page plan: Defined problem, solution, and tech stack.

Repo setup: Public GitHub repository with README and environment configuration.

Core features: Implemented API, DB, Auth, Jobs, Reporting, Cache, and LLM.

Testing & Documentation: Swagger UI with JWT security, unit tests for auth and docs.

Final submission package: GitHub repo link and explanatory document.

---

## 📌 Constraints
All tools used are free (Postgres, Redis, Node.js, Swagger, OpenAI free tier).

Scope kept realistic and finishable within ~8 hours.

No live presentation required; submission only.

---

## 📦 Deliverables
Public GitHub repository: Smart API Doc Generator

Short explanatory document: “My 10x Solution – Leonard Phokane”

Swagger/OpenAPI documentation included.

Working demo endpoints tested via Swagger UI and Postman.

---

## ✅ Conclusion
The Smart API Doc Generator solves the problem of outdated API documentation by automating generation, caching, and distribution.
It demonstrates mastery of backend engineering concepts while staying within the capstone requirements.
This project is practical, portfolio‑ready, and showcases my ability to design and deliver impactful backend solutions.

---


## 👨‍💻 Developer Portfolio Highlights

| ![Portfolio Highlight 1](images/portfolio-highlight1.png) | ![Portfolio Highlight 2](images/portfolio-highlight2.png) |
|:--------------------------------------------------:|:--------------------------------------------------:|
| **AI / ML Engineer & Cloud-Native Builder**<br>I design and ship production AI systems — from optimized models and ML pipelines to full-stack React/Node apps running on automated, containerized infrastructure. I turn research into reliable, measurable software. | **Certifications & verified credentials**<br>Independently verified across cloud, ML, and platform engineering. |

---

![Footer](images/footer.png)

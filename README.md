# 📸 Pixisphere Backend

**Pixisphere** is a modular backend system for an AI-powered photography marketplace connecting clients with verified photographers and studios across India.  
This project demonstrates **role-based authentication**, **partner verification**, **lead management**, and **admin moderation** APIs built with **Node.js**, **Express**, and **MongoDB**.

---

## 🚀 Tech Stack
- **Node.js + Express.js** – RESTful API Framework  
- **MongoDB + Mongoose** – Database Layer  
- **JWT Authentication** – Secure access control  
- **Postman** – API testing and documentation  
- **Render** – Live deployment  

---

## 📂 Folder Structure

- /backend
- │-- /config # Database connection & environment setup
- │-- /controllers # Route controllers for each module
- │-- /middlewares # Auth & role-based access
- │-- /models # MongoDB models (User, Partner, Inquiry, etc.)
- │-- /routes # Express routes for each feature
- │-- /utils # Helper functions
- │-- app.js # Main server file
- │-- .env.example # Environment variable template
- │-- Pixisphere_Postman_Collection.json # API testing collection

  
---
```
## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/your-username/pixisphere-backend.git
cd pixisphere-backend
```

```
npm install
```

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

```
npm run dev
```

## Authentication & Roles

### Pixisphere supports three user roles:

**Role	Description**
- client	End user who submits inquiries
- partner	Photographer or vendor who receives leads
- admin	Moderator who manages verification & stats

  Available API Endpoints
Auth Routes
Method	Endpoint	Role	Description
POST	/api/auth/signup	All	Register user with role
POST	/api/auth/login	All	Login and receive JWT
Partner Routes
Method	Endpoint	Role	Description
POST	/api/partner/create-profile	Partner	Create or update profile
GET	/api/partner/status	Partner	Check verification status
Inquiry Routes
Method	Endpoint	Role	Description
POST	/api/inquiry	Client	Submit a new service inquiry
Portfolio Routes
Method	Endpoint	Role	Description
POST	/api/portfolio	Partner	Add portfolio images & descriptions
Admin Routes
Method	Endpoint	Role	Description
GET	/api/admin/stats	Admin	View overall KPIs
PUT	/api/admin/verify/:id	Admin	Approve or reject partner
🧪 API Testing with Postman

You can test all routes using the included Postman collection:
Pixisphere_Postman_Collection.json

Steps:

Open Postman → Import → Upload this file.

Set BASE_URL = http://localhost:5000

Run endpoints in order:

Signup → Login → Copy Token

Use token in Authorization header (Bearer <token>) for protected routes.

📊 Features Implemented

✅ Role-based Authentication (Client, Partner, Admin)
✅ Partner Verification Workflow
✅ Inquiry/Lead Management System
✅ Portfolio Management Module
✅ Admin Moderation & Stats API
✅ JWT Protection & Role Middleware
✅ Postman Collection for Testing

🌍 Live Demo

Render Deployment: https://pixisphere-backend-xqco.onrender.com/

GitHub Repository: https://github.com/your-username/pixisphere-backend

🧑‍💻 Author

Saurav — Full Stack Developer
📧 jhasaurav593@gmail.com

💼 LinkedIn Profile
https://www.linkedin.com/in/jha-saurav97/

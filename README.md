[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## 🔐 Vault manager

Vault manager is a simple and minimal password manager. Developed by MERN Stack.

This is a self-learning project. So don’t aspect all functionality which has a real password manager. The repo is absolutely for beginners. <br>
So, _What I did in this project_?

`In Backend:`
Created user module and vault module. so users can able signup, sign in, and manage their profile. And also store their vaults by vault module. And all important vault data are encrypted by cryptoJS(symmetric-key algorithm) and user module data are encrypted by bcrypt package. So the data are well protected on the database.

`In front-end:`
Made a minimal and user-friendly interface by React and daisyUI(tailwind-based CSS framework). All data are coming from the backend via REST-FULL API. And I used Redux for state management. I know this is overwhelming to use redux in a small project like this. but for learning purposes, I did that.

### Technology:

### Frontend:

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![daisyUI](https://img.shields.io/badge/daisy--UI-Based%20on%20Tailwind%20CSS-green?style=for-the-badge&logo=appveyor)

### Backend

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

#### Core Library for backend

```
   bcrypt,
   cors,
   crypto-js,
   express-validator,
   jsonwebtoken,
   mongoose

```

### ✅ Done

- [x] USER CRUD `frontend + backend`
- [x] Vaults CRUD `frontend + backend`
- [x] Profile Page `frontend`
- [x] Forget password `frontend`
- [x] Logout `frontend`

### 🏗️ Working progress

- [x] add user profile
- [ ] delete profile
- [ ] add profile photo
- [ ] Validate registration field (username and password length should be 6 character)
- [ ] Show proper validation message and error (backend)
- [ ] add forget password (frontend + backend)
- [ ] Support PWA
- [ ] Use RTK and RTK-query
- [x] `Dockerize` the app

### 🔌 Basic Setup:

      1. 🔨 Set up .env file from 📁 /backend :

            Rename .env.example to .env and update by your data.

      2. 💿 Install Yarn globally `(optional)`:

            sudo npm install -g yarn

      3. 💿 Install dependencies`:

            Via npm:
            cd backend ->  npm install
            cd frontend -> npm install

### 🚀 Run Project By Docker container:

      1. ✏️ Type in terminal:

            docker compose up -d

      You are good to go! visit http://localhost

### 📹 Live Demo link

[Click here](https://vault-manager.herokuapp.com/) (`It may slow to response for the 1st time.`)

[![Alt text](https://user-images.githubusercontent.com/35423413/188283404-24401770-b874-44a2-b41e-994468982d30.png)](https://www.youtube.com/watch?v=RMCiZWTUtfA)

## test

# CalmCorner - Production Deployment Guide

## Overview

Your CalmCorner application is now **production-ready**! All hardcoded URLs have been replaced with environment variables, making it easy to deploy to different environments (development, staging, production).

---

## Backend Configuration

### Environment Variables Setup

Create a `.env` file in the `Back-End` directory with the following variables:

```env
# MongoDB Connection
MONGODB_URI=your-mongodb-connection-string

# Server Configuration
PORT=5226

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Session Secret
SESSION_SECRET=your-session-secret-change-in-production

# Google OAuth Configuration
CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret

# Frontend URL (for CORS and redirects)
FRONTEND_URL=https://your-vercel-app.vercel.app

# Backend URL (for OAuth callback)
BACKEND_URL=https://your-backend-url.onrender.com
```

### Backend Files Updated
- ✅ `server.js` - CORS origins now use `FRONTEND_URL` environment variable
- ✅ `GoogleAuth/GoogleAuth.js` - All OAuth URLs now use environment variables
  - Callback URL uses `BACKEND_URL`
  - Success/failure redirects use `FRONTEND_URL`
  - Session secret uses `SESSION_SECRET`
- ✅ `.env.example` - Template created with all required variables

---

## Frontend Configuration

### Environment Variables Setup

The frontend now uses environment variables for all backend connections. This makes it easy to switch between development, staging, and production environments.

#### Required Environment Variables

Create a `.env` file in the `Front-End` directory with the following variables:

```env
# Backend API URL (with /api path)
VITE_API_BASE_URL=https://your-backend-url.com/api

# Backend Base URL (without /api, for Google OAuth)
VITE_BACKEND_URL=https://your-backend-url.com
```

#### Local Development Setup

For local development:

**Backend `.env`:**
```env
MONGODB_URI=mongodb://localhost:27017/calmcorner
PORT=5226
JWT_SECRET=dev-jwt-secret
SESSION_SECRET=dev-session-secret
CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:5226
```

**Frontend `.env`:**
```env
VITE_API_BASE_URL=http://localhost:5226/api
VITE_BACKEND_URL=http://localhost:5226
```

#### Production Setup

For production (example with Render + Vercel):

**Backend `.env` (Render):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/calmcorner
PORT=5226
JWT_SECRET=production-jwt-secret-super-secure
SESSION_SECRET=production-session-secret
CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret
FRONTEND_URL=https://calmcorner-red.vercel.app
BACKEND_URL=https://s61-srikeerthi-capstone-calmcorner-6.onrender.com
```

**Frontend `.env` (Vercel):**
```env
VITE_API_BASE_URL=https://s61-srikeerthi-capstone-calmcorner-6.onrender.com/api
VITE_BACKEND_URL=https://s61-srikeerthi-capstone-calmcorner-6.onrender.com
```

### Frontend Files Updated
- ✅ `.env.example` - Template for environment variables
- ✅ `.env` - Actual environment variables (not in git)
- ✅ `vite.config.js` - Configured for environment variables
- ✅ `src/Components/WellnessHub/axios/axios.jsx` - Uses `VITE_API_BASE_URL`
- ✅ `src/Components/AuthContext/AuthContext.jsx` - Uses `VITE_API_BASE_URL`
- ✅ `src/Components/Login/Login.jsx` - Uses `VITE_BACKEND_URL`
- ✅ `src/Components/SignIn/Signin.jsx` - Uses both env vars
- ✅ `src/Components/WellnessHub/MoodEntry/MoodEntry.jsx` - Uses `VITE_API_BASE_URL`
- ✅ `src/Components/WellnessHub/TrackMood/TrackMood.jsx` - Uses `VITE_API_BASE_URL`
- ✅ `src/Components/WellnessHub/UpdateEntry/UpdateEntry.jsx` - Uses `VITE_API_BASE_URL`

---

## Deployment Steps

### 1. Backend Deployment (Render)

1. **Prepare Backend Repository**
   ```bash
   cd Back-End
   # Make sure .env.example exists but .env is in .gitignore
   git add .
   git commit -m "Backend ready for production"
   git push
   ```

2. **Deploy to Render**
   - Go to [Render Dashboard](https://dashboard.render.com/)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Configure:
     - **Name**: calmcorner-backend (or your preferred name)
     - **Root Directory**: `Back-End`
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `node server.js`

3. **Add Environment Variables in Render**
   - Go to "Environment" tab
   - Add all variables from `.env.example`:
     ```
     MONGODB_URI=your-mongodb-atlas-connection-string
     PORT=5226
     JWT_SECRET=generate-a-strong-secret
     SESSION_SECRET=generate-another-strong-secret
     CLIENT_ID=your-google-oauth-client-id
     CLIENT_SECRET=your-google-oauth-client-secret
     FRONTEND_URL=https://your-app.vercel.app
     BACKEND_URL=https://your-service.onrender.com
     ```
   - **Important**: Update `BACKEND_URL` after deployment with your actual Render URL

4. **Update Google OAuth Settings**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Navigate to: APIs & Services → Credentials
   - Edit your OAuth 2.0 Client ID
   - Add to "Authorized redirect URIs":
     ```
     https://your-render-url.onrender.com/auth/google/callback
     ```

### 2. Frontend Deployment (Vercel)

1. **Prepare Frontend Repository**
   ```bash
   cd Front-End
   # Make sure .env.example exists but .env is in .gitignore
   git add .
   git commit -m "Frontend ready for production"
   git push
   ```

2. **Deploy to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Configure:
     - **Root Directory**: `Front-End`
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`

3. **Add Environment Variables in Vercel**
   - Go to "Settings" → "Environment Variables"
   - Add variables for all environments (Production, Preview, Development):
     ```
     VITE_API_BASE_URL=https://your-render-backend.onrender.com/api
     VITE_BACKEND_URL=https://your-render-backend.onrender.com
     ```

4. **Redeploy**
   - After adding environment variables, trigger a new deployment
   - Go to "Deployments" tab → Click "..." on latest deployment → "Redeploy"

### 3. Final Configuration

1. **Update Backend FRONTEND_URL**
   - Go back to Render
   - Update `FRONTEND_URL` environment variable with your actual Vercel URL
   - Example: `https://calmcorner-red.vercel.app`
   - Save and wait for automatic redeploy

2. **Update Google OAuth Authorized Origins**
   - Go to Google Cloud Console → Credentials
   - Add to "Authorized JavaScript origins":
     ```
     https://your-vercel-app.vercel.app
     ```

---

## Testing the Configuration

After deployment, test the following:

### ✅ Backend Health Check
```bash
curl https://your-backend.onrender.com/
# Should return: {"message":"Welcome to the CalmCorner","database":"connected"}
```

### ✅ Frontend Connectivity
1. Open browser DevTools (F12) → Console
2. Check environment variables:
   ```javascript
   console.log(import.meta.env.VITE_API_BASE_URL);
   console.log(import.meta.env.VITE_BACKEND_URL);
   ```

### ✅ Feature Testing
- [ ] User registration (signup)
- [ ] User login (email/password)
- [ ] Google OAuth login
- [ ] Create mood entry
- [ ] View mood entries (track mood)
- [ ] Update mood entry
- [ ] Delete mood entry
- [ ] Logout functionality

---

## Troubleshooting

### Common Issues

#### 1. API calls failing (Network Error)
**Problem**: Frontend can't connect to backend
**Solutions**:
- ✅ Verify `VITE_API_BASE_URL` in Vercel environment variables
- ✅ Check backend is running (visit backend URL in browser)
- ✅ Check browser console for exact error
- ✅ Ensure backend CORS includes frontend URL

#### 2. Google OAuth not working
**Problem**: "redirect_uri_mismatch" error
**Solutions**:
- ✅ Verify `VITE_BACKEND_URL` is correct in Vercel
- ✅ Check `BACKEND_URL` in Render environment variables
- ✅ Ensure Google Console has correct callback URL:
  ```
  https://your-backend.onrender.com/auth/google/callback
  ```
- ✅ Add frontend URL to Google Console authorized origins

#### 3. CORS errors
**Problem**: "Access-Control-Allow-Origin" error
**Solutions**:
- ✅ Check `FRONTEND_URL` in backend Render environment variables
- ✅ Ensure it matches your actual Vercel deployment URL
- ✅ No trailing slash in `FRONTEND_URL`
- ✅ Redeploy backend after changing CORS settings

#### 4. Environment variables not loading
**Problem**: `undefined` when accessing env vars
**Solutions**:
- ✅ Frontend variables must be prefixed with `VITE_`
- ✅ Restart dev server after changing `.env` file
- ✅ On Vercel, redeploy after adding environment variables
- ✅ Check variables are set for correct environment (Production/Preview/Development)

#### 5. MongoDB connection issues
**Problem**: Backend shows "database: disconnected"
**Solutions**:
- ✅ Check `MONGODB_URI` in Render environment variables
- ✅ Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- ✅ Verify MongoDB credentials are correct
- ✅ Check MongoDB cluster is running

#### 6. JWT/Session issues
**Problem**: Users can't stay logged in
**Solutions**:
- ✅ Verify `JWT_SECRET` is set in backend
- ✅ Check `SESSION_SECRET` is set in backend
- ✅ Ensure cookies are being set (check browser DevTools → Application → Cookies)
- ✅ For production, ensure cookies use `secure: true` and `sameSite: 'None'`

---

## Environment Variables Reference

### Backend Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `MONGODB_URI` | ✅ Yes | MongoDB connection string | `mongodb+srv://...` |
| `PORT` | ⚠️ Optional | Server port (Render sets automatically) | `5226` |
| `JWT_SECRET` | ✅ Yes | Secret for JWT token generation | `your-secret-key` |
| `SESSION_SECRET` | ✅ Yes | Secret for session management | `your-session-secret` |
| `CLIENT_ID` | ✅ Yes | Google OAuth Client ID | `123456.apps.googleusercontent.com` |
| `CLIENT_SECRET` | ✅ Yes | Google OAuth Client Secret | `GOCSPX-...` |
| `FRONTEND_URL` | ✅ Yes | Your Vercel frontend URL | `https://app.vercel.app` |
| `BACKEND_URL` | ✅ Yes | Your Render backend URL | `https://api.onrender.com` |

### Frontend Environment Variables

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_API_BASE_URL` | ✅ Yes | Backend API base URL (with /api) | `https://api.onrender.com/api` |
| `VITE_BACKEND_URL` | ✅ Yes | Backend base URL (without /api) | `https://api.onrender.com` |

---

## Security Best Practices

### ✅ Implemented
1. ✅ All sensitive URLs are in environment variables
2. ✅ `.env` files are excluded from version control (.gitignore)
3. ✅ `.env.example` templates provided for all developers
4. ✅ CORS properly configured with environment variables
5. ✅ JWT secrets are configurable per environment
6. ✅ Session secrets are configurable per environment

### 🔒 Additional Recommendations
1. 🔒 Use strong, random secrets for production (minimum 32 characters)
2. 🔒 Enable HTTPS in production (automatically done by Render/Vercel)
3. 🔒 Regularly rotate JWT and session secrets
4. 🔒 Keep dependencies updated (`npm audit` and `npm update`)
5. 🔒 Use MongoDB Atlas IP whitelist (or allow from anywhere for cloud deployments)
6. 🔒 Never commit `.env` files to version control
7. 🔒 Use different secrets for dev, staging, and production
8. 🔒 Enable rate limiting for API endpoints (consider adding)
9. 🔒 Monitor logs for suspicious activity

---

## Local Development Quick Start

### Prerequisites
- Node.js 16+ installed
- MongoDB running locally (or MongoDB Atlas account)
- Google OAuth credentials

### Setup Steps

1. **Clone and Install**
   ```bash
   git clone <your-repo>
   cd S61_SriKeerthi_Capstone_CalmCorner
   
   # Install backend dependencies
   cd Back-End
   npm install
   
   # Install frontend dependencies
   cd ../Front-End
   npm install
   ```

2. **Configure Backend**
   ```bash
   cd Back-End
   cp .env.example .env
   # Edit .env and fill in your values
   ```

3. **Configure Frontend**
   ```bash
   cd Front-End
   cp .env.example .env
   # Edit .env with local backend URL
   ```

4. **Start Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd Back-End
   npm start
   # Or use nodemon: npm run dev
   
   # Terminal 2 - Frontend
   cd Front-End
   npm run dev
   ```

5. **Access Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5226

---

## Production Checklist

### Before Deploying

- [ ] All hardcoded URLs removed from code
- [ ] `.env.example` files created for both frontend and backend
- [ ] `.env` files in `.gitignore`
- [ ] Strong, unique secrets generated for production
- [ ] Google OAuth credentials obtained and configured
- [ ] MongoDB Atlas cluster created and configured
- [ ] Code tested locally with production-like configuration

### Backend Deployment (Render)

- [ ] Repository connected to Render
- [ ] All environment variables configured
- [ ] `BACKEND_URL` matches actual Render URL
- [ ] `FRONTEND_URL` points to Vercel deployment
- [ ] Google OAuth callback URL updated
- [ ] MongoDB connection working
- [ ] Health check endpoint responding

### Frontend Deployment (Vercel)

- [ ] Repository connected to Vercel
- [ ] All `VITE_*` environment variables configured
- [ ] Variables set for Production environment
- [ ] Build completes successfully
- [ ] Environment variables loaded correctly

### Post-Deployment

- [ ] Google OAuth authorized origins updated
- [ ] Google OAuth callback URL updated
- [ ] All features tested in production
- [ ] CORS working correctly
- [ ] Cookies being set and maintained
- [ ] SSL certificates active (HTTPS)

---

## Support and Resources

### Documentation
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas](https://www.mongodb.com/docs/atlas/)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)

### Need Help?
If you encounter issues not covered in this guide:
1. Check browser console for error messages
2. Check Render logs for backend errors
3. Verify all environment variables are correctly set
4. Ensure URLs don't have trailing slashes
5. Check that CORS origins match exactly

---

## Summary of Changes

### What Was Updated?

#### Backend Changes
- ✅ `server.js` - CORS configuration now uses `FRONTEND_URL`
- ✅ `GoogleAuth/GoogleAuth.js`:
  - OAuth callback URL uses `BACKEND_URL`
  - Success/failure redirects use `FRONTEND_URL`
  - Session secret uses `SESSION_SECRET`
- ✅ `.env.example` created with all required backend variables

#### Frontend Changes
- ✅ `.env` and `.env.example` created
- ✅ `vite.config.js` configured for environment variables
- ✅ All API calls updated to use `VITE_API_BASE_URL`
- ✅ All Google OAuth redirects use `VITE_BACKEND_URL`
- ✅ 7 component files updated

### Benefits
✨ **Easy environment switching** - Just change `.env` file
✨ **No code changes for deployment** - Configure once, deploy anywhere
✨ **Secure** - No hardcoded credentials in codebase
✨ **Team-friendly** - Each developer can have their own `.env`
✨ **Production-ready** - Follows industry best practices

---

**Status**: ✅ Production Ready

**Last Updated**: January 8, 2026

**All hardcoded URLs have been replaced with environment variables!**

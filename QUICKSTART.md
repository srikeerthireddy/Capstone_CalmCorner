# Quick Setup Guide - CalmCorner

## 🚀 First Time Setup (5 minutes)

### Backend Setup
```bash
cd Back-End
cp .env.example .env
```

Edit `Back-End/.env` with your values:
```env
MONGODB_URI=your-mongodb-connection
JWT_SECRET=your-jwt-secret
SESSION_SECRET=your-session-secret
CLIENT_ID=your-google-client-id
CLIENT_SECRET=your-google-client-secret
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:5226
```

### Frontend Setup
```bash
cd Front-End
cp .env.example .env
```

Edit `Front-End/.env`:
```env
VITE_API_BASE_URL=http://localhost:5226/api
VITE_BACKEND_URL=http://localhost:5226
```

### Run Application
```bash
# Terminal 1 - Backend
cd Back-End
npm install
npm start

# Terminal 2 - Frontend
cd Front-End
npm install
npm run dev
```

Visit: http://localhost:5173

---

## 🌐 Production Deployment

### Backend (Render)
1. Deploy to Render
2. Add environment variables (copy from `.env.example`)
3. Set `FRONTEND_URL` to your Vercel URL
4. Set `BACKEND_URL` to your Render URL

### Frontend (Vercel)
1. Deploy to Vercel
2. Add environment variables:
   - `VITE_API_BASE_URL` = `https://your-backend.onrender.com/api`
   - `VITE_BACKEND_URL` = `https://your-backend.onrender.com`

### Google OAuth
Update callback URL in Google Console:
```
https://your-backend.onrender.com/auth/google/callback
```

---

## ✅ What Changed?

### All hardcoded URLs removed from:
- ✅ Frontend (7 files updated)
- ✅ Backend (2 files updated)
- ✅ Google OAuth configuration

### Environment variables added:
- ✅ `VITE_API_BASE_URL` - Frontend API calls
- ✅ `VITE_BACKEND_URL` - Frontend Google OAuth
- ✅ `FRONTEND_URL` - Backend CORS & redirects
- ✅ `BACKEND_URL` - Backend OAuth callback
- ✅ `SESSION_SECRET` - Backend session security

---

## 📚 Full Documentation

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment guide with troubleshooting.

---

**Status**: ✅ Production Ready

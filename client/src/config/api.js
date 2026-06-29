// Central API base URL for the entire app.
// In local dev, vite proxies /api → localhost:5000, so this is empty string.
// In production (Vercel), set VITE_API_URL to your backend URL e.g. https://shopsphere-api.onrender.com
const API_BASE_URL = import.meta.env.VITE_API_URL || "";

export default API_BASE_URL;

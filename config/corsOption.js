const corsOption = {
    origin: [
        "https://ordenes-frontend-rho.vercel.app/",
        "http://localhost:5173",
    
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    
};  

module.exports = corsOption;
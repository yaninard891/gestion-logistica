const corsOption = {
    origin: [
        "http://localhost:5173",
    
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
    
};  

module.exports = corsOption;
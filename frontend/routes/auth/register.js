const express = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();

router.post('/api/users/register', async (req, res) => {
    console.log("Received request:", req.body); // Log incoming request

    const { first_name, last_name, email, password } = req.body;
    const body = JSON.stringify({
        first_name,
        last_name,
        email,
        password
    });

    try {
        console.log("Attempting to register user..."); // Log before fetch
        const registerRes = await fetch(`${process.env.API_URL}/api/users/register/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body,
        });
        
        const data = await registerRes.json();
        console.log("User registration response:", data); // Log response data
        return res.status(registerRes.status).json(data);
    } catch (err) {
        console.error("Error during registration:", err); // Log errors
        return res.status(500).json({
            error: 'Something went wrong when registering the account'
        });
    }
});


module.exports = router;
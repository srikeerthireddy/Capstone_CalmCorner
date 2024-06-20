const express=require("express");
const router=express.Router();
const userModel=require('../User/userSchema');
const multer = require("multer");
const {registerSchema,loginSchema}=require('../User/Validation');
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname,'../uploads');
if(!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir);
}

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // Uploads directory
    },
    filename: function(req, file, cb) {
        // Generate unique filename
        cb(null, Date.now() + '-' + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });
router.post('/signin',upload.single('profilePicture'),async (req,res)=>{
    try{
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const {username,emailId,password}=req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser=await userModel.create({username,emailId,password:hashedPassword,profilePicture: req.file ? req.file.path : null});
        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
        res.status(201).json({message:'User created successfully',token,user:newUser});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const { username, password } = req.body;
    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user._id, username: user.username, emailId: user.emailId },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        res.cookie("token", token, { httpOnly: true });
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/logout',async (req,res)=>{
    try{
        res.clearCookie("token"); // Clear the "token" cookie
        res.status(200).json({message:'Logout successful'});
        console.log("User Logout successfully");
    }catch(error){
        res.status(500).send({ error: "Internal server error" });
    }
    
});
router.get('/user', async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userModel.find();

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
module.exports=router;
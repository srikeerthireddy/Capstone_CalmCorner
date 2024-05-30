const express=require("express");
const router=express.Router();
const userModel=require('../User/userSchema');
const {registerSchema,loginSchema}=require('../User/Validation');
router.post('/signin',async (req,res)=>{
    try{
        const { error } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const {username,emailId,password}=req.body;
        const newUser=await userModel.create({username,emailId,password});
        res.status(201).json({message:'User created successfully',user:newUser});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

router.post('/login',async (req,res)=>{
    const { error } = loginSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    const {username,emailId,password}=req.body;
    try{
       
        const user=await userModel.findOne({username});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        if(user.password!==password){
                return res.status(401).json({message:"Invalid credentials"});
        }
        res.status(200).json({message:"Login successful"});
        
    }catch(error){
        res.status(400).json({message:error.message});
    }
});
router.post('/logout',async (req,res)=>{
    try{
        res.status(200).json({message:'Logout successful'});
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
const User = require('../models/user')

const handlGetallusers = async (req, res) => {
    const allUsers = await User.find({})
    return res.status(200).json({ msg: "users fetch successful", allUsers });
}

const handlGetwithbyid = async (req, res) => {
    const user = await User.findById(req?.params?.id)
    if (!user) return res.status(400).json({ msg: "user not found" })
    return res.status(200).json(user)
}

const handlUpdatewithbyid = async (req, res) => {
    const user = await User.findByIdAndUpdate(req?.params?.id, {
        // first_name: body?.first_name,
        // last_name: body?.last_name,
        // email: body?.email,
        job_title: "React native",
        // salary: body?.salary,
    });
    if (!user) return res.status(400).json({ msg: "user not found" })
    return res.status(200).json({ msg: "updated sucessfully" })
}

const handlDeletewithbyid = async (req, res) => {
    const user = await User.findByIdAndDelete(req?.params?.id);
    if (!user) return res.status(400).json({ msg: "user not found" })
    return res.status(200).json({ msg: "record deleted sucessfully" })
}

const hadleCreateuser = async (req, res) => {
    const body = req.body;
    console.log("i am body from post", body)
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.job_title ||
        !body.salary
    ) {
        return res.status(400).json({ msg: "All fields are req..." })
    }

    const response = await User.create({
        first_name: body?.first_name,
        last_name: body?.last_name,
        email: body?.email,
        job_title: body?.job_title,
        salary: body?.salary,
    })
    console.log("here is the post response", response)
    return res.status(201).json({ msg: "recorded created succesfully" ,id : response._id })
}


module.exports = {
    handlGetallusers,
    handlGetwithbyid,
    handlUpdatewithbyid,
    handlDeletewithbyid,
    hadleCreateuser
}
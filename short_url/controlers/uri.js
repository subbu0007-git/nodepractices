const URL = require("../models/url");


const handlegenrateShortenurl = async (req, res) => {
    const body = req.body;
    console.log("ia, req", req.body)
    if (!body?.uri) {
        return res.status(400).json({ error: "URI is required" });
    }

    // Generate a pseudo-random short ID
    const shortId = Math.random().toString(36).substring(2, 10); // 8-character string

    await URL.create({
        short_id: shortId,
        redirectUrl: body.uri,
        vistHistory: []
    });

    return res.status(200).json({ id: shortId });
};


const handlecountvistofthaturl = async (req, res) => {
    const shorid = req.params.shorid; // Retrieve short_id from params
    console.log("Incoming shorid:", shorid);

    try {
        const entry = await URL.findOneAndUpdate(
            { short_id: shorid },
            { $push: { vistHistory: { timestamp: Date.now() } } }, // Push an object
            { new: true } // Return the updated document
        );

        if (!entry) {
            return res.status(404).json({ error: "Short URL not found" });
        }

        res.redirect(entry.redirectUrl); // Redirect to the original URL
    } catch (error) {
        console.error("Error updating visit history:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};



module.exports = {
    handlegenrateShortenurl,
    handlecountvistofthaturl
};
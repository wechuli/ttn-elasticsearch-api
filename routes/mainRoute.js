const express = require("express");
const client = require("../elastic/connection");

const router = express.Router();

router
    .route("/")
    .post(async(req, res) => {
        const data = req.body;
        // console.log(data);

        try {
            const response = await client.index({
                index: "iotdata",
                type: "all",
                body: data
            });
            // console.log(response);
            return res.status(200).json({ message: "all good" });
        } catch (error) {
            res.status(500).json(error);
        }
    })
    .get(async(req, res) => {
        return res.status(200).json({ message: "all good, you can now get" });
    });

module.exports = router;
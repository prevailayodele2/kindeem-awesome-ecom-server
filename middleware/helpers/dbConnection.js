const mongoose = require("mongoose");
const Fawn = require("fawn");

module.exports = () => {
    const self = module.exports;
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("DB Connected"))
        .catch(err => {
            console.error(
                "Failed to connect to the database on startup - retrying in 5 sec"
            );
            setTimeout(self, 5000);
        });
        return Fawn.init(mongoose)
};
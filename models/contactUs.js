var mongoose = require("mongoose");

var contactSchema=new mongoose.Schema({
    teamName: String,
    details: String
});
module.exports = mongoose.model("Contact",contactSchema)
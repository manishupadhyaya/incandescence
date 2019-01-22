var mongoose = require("mongoose");
var eventSchema=new mongoose.Schema({
    eventName: String,
    details: String
});
module.exports = mongoose.model("Event",eventSchema)
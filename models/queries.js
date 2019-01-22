var mongoose = require("mongoose");

var querySchema=new mongoose.Schema({
    eventName: String,
    query: String
});
module.exports = mongoose.model("Queries",querySchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const environmentSchema = new Schema({
    incidentDetails: {
        date: { type: String, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        witnesses: { type: [String], required: true } // Array of strings
    },
    environmentalImpact: { type: String, required: true },
    incidentDescription: { type: String, required: true },
    actionsTaken: { type: String, required: true },
    reportedToAuthorities: { type: String, required: true },
    reportDetails: { type: String, required: true },
    followUpActions: { type: String, required: true },
    preventiveMeasures: { type: String, required: true },
    additionalComments: { type: String, required: false }, // Optional field
    reportFiler: {
        name: { type: String, required: true },
        jobTitle: { type: String, required: true },
        contactDetails: { type: String, required: true }
    }
}, { timestamps: true }, {collection: 'environment'});

const model = mongoose.model('Environment', environmentSchema);
module.exports = model;
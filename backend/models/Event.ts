const mongoose = require('mongoose');

// https://stackoverflow.com/questions/8737082/mongoose-schema-within-schema
const EventSchema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    EventDate: {
        type: Date,
        required: true
    },
});

export default mongoose.model('Event', EventSchema);
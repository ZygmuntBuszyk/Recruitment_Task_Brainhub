const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
});

export default mongoose.model('EventSchema', EventSchema);
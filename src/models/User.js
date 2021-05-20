import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    }
})

export default mongoose.model('projectSchema', projectSchema)
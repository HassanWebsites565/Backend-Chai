import mongoose, {Schema} from "mongoose"

const subscriptionSchema = new Schema({
    subscriber:  {
        type: Schema.Types.ObjectId, // One who is subscribing
        ref: "User"
    },
    channel:  {
        type: Schema.Types.ObjectId, // One to whom is subscribing channel owner
        ref: "User"
    },
})


export const Subscription = mongoose.model("Subscripton",
    subscriptionSchema
)
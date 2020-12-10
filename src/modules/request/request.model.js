import mongoose, {Schema} from "mongoose";
import status from "./request.status";

const RequestSchema = new Schema(
    {
        bookIds: [{
            type: String,
        }],
        userId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default: status.PENDING,
            enum: [status.PENDING, status.APPROVED, status.CANCELLED, status.CLOSED]
        }
    },
    {timestamps: true}
);

export default mongoose.model('Request', RequestSchema);

import mongoose, {Schema} from "mongoose";

const BookSchema = new Schema(
	{
		bookName: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		genre: {
			type: String,
			required: true,
		},
		releaseDate: {
			type: String,
			required: true
		},
		isActive: {
			type: Boolean,
			default: true
		}
	},
	{timestamps: true}
);

export default mongoose.model('Book', BookSchema);

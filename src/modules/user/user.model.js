import mongoose, { Schema } from "mongoose";
import userRoles from "./user.roles";

const UserSchema = new Schema(
	{
		name: String,
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: userRoles.student,
			enum: [userRoles.admin, userRoles.student],
		},
		accessToken: {
			type: String,
		},
	},
	{ timestamps: true }
);

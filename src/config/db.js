import mongoose from "mongoose";
import { DB_URL } from "../../secret";

mongoose.Promise = global.Promise;

mongoose.set("debug", true);
mongoose.set("useCreateIndex", true);

const dburl = process.env.DB_URL
    // || DB_URL;

try {
    mongoose.connect(dburl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
} catch (error) {
    mongoose.createConnection(dburl, {
        useNewURlParser: true,
        useUnifiedTopology: true,
    });
}

mongoose.connection
    .once("open", () => {
        console.log("MongoDB running");
    })
    .on("error", (err) => {
        throw err;
    });

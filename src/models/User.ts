import { Document, model, Schema } from "mongoose";

enum platform {
  android = "android",
  web = "web",
  ios = "ios",
}

interface userInterface extends Document {
  name: string;
  email: string;
  platform: platform;
}

const userSchema = new Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  platform: {
    type: String,
    default: platform.web,
    enum: Object.values(platform),
  },
});

export default model<userInterface>("user", userSchema);

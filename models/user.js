import { userSchema } from "@/schema/user";
import { model, models } from "mongoose";

const User = models.User || model("User", userSchema);
export default User;
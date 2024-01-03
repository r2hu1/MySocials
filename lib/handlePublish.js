import { ID } from "appwrite";
import { databases } from "./appwrite";

export const handlePublish = async (username,bio,insta,face,github) => {
    let data = {
        "username": username,
        "bio": bio,
        links: [
            {
                insta: insta,
                face: face,
                github: github
            }
        ]
    };
    let pro = await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID,
        process.env.APPWRITE_USER_COLLECTION_ID,
        ID.unique(),
        data,
    );
    console.log(pro);
};
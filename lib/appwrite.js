import { Client, Databases, ID, Query } from 'appwrite';

export const config = {
    projectId: process.env.APPWRITE_PROJECT_ID,
    endpoint: 'https://cloud.appwrite.io/v1',
    databaseId: process.env.APPWRITE_DATABASE_ID,
    userCollectionId: process.env.APPWRITE_USER_COLLECTION_ID,
};

const client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

export const databases = new Databases(client);
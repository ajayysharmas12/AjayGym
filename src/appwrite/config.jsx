import { Client, Account, Databases } from "appwrite";

export const client = new Client();
client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_URL);
export const database = new Databases(client);
export const account = new Account(client);

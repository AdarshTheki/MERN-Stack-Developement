import { Client, Account, ID } from "appwrite";
import { config } from "../EnvConfig";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appWriteUrl)
      .setProject(config.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // call another account
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("AppWrite service :: Create Account: ", error.message);
      // throw error
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("AppWrite service :: Login: ", error.message);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite service :: Get Current User: ", error.message);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("AppWrite service :: Logout: ", error.message);
    }
  }
}

export const authServices = new AuthService();

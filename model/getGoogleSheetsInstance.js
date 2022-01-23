import { auth } from "./auth.js";
import {google} from 'googleapis';

const authClientObject = await auth.getClient();

const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });

export {googleSheetsInstance}
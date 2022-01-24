import {google} from 'googleapis';
import dotenv from 'dotenv';

dotenv.config();
const googleSheetsInstance = google.sheets({ version: "v4", auth: process.env.GOOGLE_API_KEY });

export {googleSheetsInstance}
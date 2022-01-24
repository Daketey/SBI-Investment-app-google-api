import { googleSheetsInstance } from "../model/getGoogleSheetsInstance.js";
// import {auth} from '../model/auth.js'
import dotenv from 'dotenv';

dotenv.config();

const spreadsheetId = process.env.SHEET_ID;

const insertData = async()=>{
    await googleSheetsInstance.spreadsheets.values.append({
        auth:process.env.GOOGLE_API_KEY, //auth object
        spreadsheetId, //spreadsheet id
        range: "Sheet1!A:B", //sheet name and range of cells
        valueInputOption: "USER_ENTERED", // The information will be passed according to what the usere passes in as date, number or text
        resource: {
            values: [["User Goo", "the time"]],
        },
    });
}

const readData = async(sheetName, columns) =>{
    const readData = await googleSheetsInstance.spreadsheets.values.get({
        auth: process.env.GOOGLE_API_KEY, //auth object
        spreadsheetId, // spreadsheet id
        range: `${sheetName}!${columns}`, //range of cells to read from.
    })

    return readData.data;
}

export {insertData, readData}
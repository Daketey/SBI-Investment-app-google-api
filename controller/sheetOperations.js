import { googleSheetsInstance } from "../model/getGoogleSheetsInstance.js";
import {auth} from '../model/auth.js'

const spreadsheetId = "1VPp_VqFgJAKbjiKlgiG_KR77jQbZXwjmt-uBwsEkN1U";

const insertData = async()=>{
    await googleSheetsInstance.spreadsheets.values.append({
        auth, //auth object
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
        auth, //auth object
        spreadsheetId, // spreadsheet id
        range: `${sheetName}!${columns}`, //range of cells to read from.
    })

    return readData.data;
}

export {insertData, readData}
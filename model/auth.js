import {google} from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile: "./model/sheets-project-339016-5d4579c1cd31.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets", 
});

export {auth}
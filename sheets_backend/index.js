const express = require("express");
const {google} = require("googleapis");

const app = express();

app.get("/", async (req, res) => {
    // authenticating with google 
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })

    const client = await auth.getClient();


    // instance of google sheets api
    const googleSheets = google.sheets({version: "v4", auth: client});
    const spreadsheetID = "1MLjfAEIkFRyJ7zFu-UkR89hMh5U4bg-iHsP-EWbv1KU";
    
    // const metaData = await googleSheets.spreadsheets.get({
    //     auth: auth,
    //     spreadsheetId: spreadsheetID
    // });

    //read existing rows from the spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
        auth: auth,
        spreadsheetId: spreadsheetID,
        range: "Sheet1"
    })

    // const name = "random"
    // const phone = "243234"
    // const email = "khan@gmail.com"

    // const newData = [...getRows.data.values, name, phone, email];
    // res.send(getRows.data.values)
    

    // ****Write data to spreadsheet
    await googleSheets.spreadsheets.values.append({
        auth,
        spreadsheetId: spreadsheetID,
        range: "Sheet1!A:C",
        valueInputOption: "USER_ENTERED",
        resource: {
            values: [["Raihan", "8982423424", "khan@gmail.com"]]
        }
    })

    res.send(getRows.data);
    // res.send(metaData.data);

});

app.listen(8080, (req, res) => console.log("Running on port 8080"));
import csv from "csv-parser";
import fs from "fs";
import readline from "readline";
import { Employee2 } from "../domain/employee2";
export class CSVHandler {
    read(dataFile: string): any[] {
        this.processLineByLine(dataFile);
        const objects: any[] = [];
        return objects;
        fs.createReadStream(dataFile)
            .on("data", (row) => {
                objects.push(row);
            });
        return objects;
    }

    assureFileExists(dataFile: string) {
        const file = dataFile;
        console.log(`Trying to create new file :${file} !`);
        if (fs.existsSync(file)) {
            console.log(`File :${file}  already exists !`);
        } else {
            // writeFile function with filename, content and callback function
            fs.writeFile(file, "", function(err) {
                if (err) throw err;
                console.log(`Created new file :${file} !`);
            });
        }
    }

    async processLineByLine(dataFile: string) {

        let objects: any[] = [];
        var readStream = fs.createReadStream(dataFile);

        let promise = new Promise((resolve, reject) => {
            readStream
                .on("open", function() {
                    // This just pipes the read stream to the response object (which goes to the client)
                })
                .on("data", function(data) {
                    let parts: string[] = ("" + data).split("\n");
                    parts.forEach((row) => {
                        if (row !== "") {
                            let json;
                            try {
                                json = JSON.parse(row);
                                objects.push(json);
                            } catch (error) {
                                console.log(`error-row = `, row);
                                console.log(`error = `, error);
                            }
                        }
                    });
                })
                .on("end", function() {
                    resolve(objects);
                })
                .on("error", () => {
                    reject("File reading error!");
                }).close;
        });

        let result: Employee2[] = <Employee2[]>await promise; // wait until the promise resolves (*)

        return result;
    }

    write(dataFile: string, data: any[]) {
        const stream = fs.createWriteStream(dataFile);

        console.log("written data=", data);
        data.forEach((obj) => {
            const json = JSON.stringify(obj) + "\n";
            fs.appendFile(dataFile, json, function(err) {
                if (err) {
                    console.log("err=", err);
                } else {
                }
            });
        });
    }
}

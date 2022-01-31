import * as fs from "fs";
import * as path from "path";
import * as csv from "fast-csv";
import { villageModel } from "../models/villageModel";
export const villageController = () => {
  const dataVillage: any = [];
  fs.createReadStream(
    path.resolve(__dirname, "../data/v1/csv", "village_en.csv")
  )
    .pipe(csv.parse({ headers: true, delimiter: ";", encoding: "utf8" }))
    .on("data", (data: any) => {
      dataVillage.push(data);
    });

  const get = (req: any, res: any) => {
    const json = {
      data: dataVillage,
    };
    return res.json(json);
  };

  return {
    get,
  };
};

import { Request, Response } from "express";
import { Web3Storage } from "web3.storage";

export default class UserController {
  public putFiles = async (req: Request, res: Response): Promise<any> => {
    function makeFileObjects() {
      const obj = { hello: "world" };
      const blob = new Blob([JSON.stringify(obj)], {
        type: "application/json",
      });

      const files = [
        new File(["Geospatial ISRO Data"], "plain-utf8.txt"),
        new File([blob], "data.json"),
      ];
      return files;
    }
    const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
    const cid = await client.put(makeFileObjects());
    console.log("stored files with cid:", cid);
    res.status(200).json({ cid });
  };

  public getFiles = async (req: Request, res: Response): Promise<any> => {
    const { cid } = req.params;
    const client = new Web3Storage({ token: process.env.WEB3STORAGE_TOKEN });
    const response = await client.get(cid);
    console.log(`Got a response! [${response.status}] ${response.statusText}`);
    if (!response.ok) {
      throw new Error(
        `failed to get ${cid} - [${response.status}] ${response.statusText}`
      );
    }

    // unpack File objects from the response
    const files = await response.files();
    // for (const file of files) {
    //   console.log(`${file.cid} -- ${file} -- ${file.size}`);
    // }
    res.status(200).json(files);
  };
}

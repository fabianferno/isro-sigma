import { Request, Response } from "express";
import { storeFiles, retrieveFiles } from "../../helpers/helper";

export default class UserController {
  public putFiles = async (req: Request, res: Response): Promise<any> => {
    function makeFileObjects() {
      const obj = { hello: "world" };
      const blob = new Blob([JSON.stringify(obj)], {
        type: "application/json",
      });

      const files = [
        new File(["contents-of-file-1"], "plain-utf8.txt"),
        new File([blob], "hello.json"),
      ];
      return files;
    }
    storeFiles(makeFileObjects());
  };

  public getFiles = async (req: Request, res: Response): Promise<any> => {
    const { cid } = req.params;
    retrieveFiles(cid);
  };
}

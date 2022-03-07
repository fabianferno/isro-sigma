import { Router } from "express";
import Controller from "../../helpers/helper";

const files: Router = Router();
const controller = new Controller();

// Retrieve all Users
files.put("/uploadFile", controller.putFiles);
files.get("/getFile", controller.getFiles);

export default files;

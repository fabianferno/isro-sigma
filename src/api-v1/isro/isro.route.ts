import { Router } from "express";
import Controller from "../../helpers/isroHelper";

const files: Router = Router();
const controller = new Controller();

// Retrieve all Users
files.put("/", controller.putFiles);
files.get("/", controller.getFiles);

export default files;

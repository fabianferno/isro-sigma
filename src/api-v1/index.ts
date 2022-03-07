import { Router } from "express";

import isro from "./isro/isro.route";

const router: Router = Router();

router.use("/isro", isro);

export default router;

import { Router } from "express";
import * as Controller from "./controller";

const storyRouter = Router();

storyRouter.route("/").get(Controller.index);
storyRouter.route("/store").post(Controller.store);
storyRouter.route("/edit/:id").put(Controller.edit);
storyRouter.route("/kill/:id").delete(Controller.kill);

export default storyRouter;

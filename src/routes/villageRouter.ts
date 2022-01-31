import express from "express";
import { villageController } from "../controllers/villageController";

export const villageRouter = express.Router();

const controller = villageController();
villageRouter.route("/villages").get(controller.get);
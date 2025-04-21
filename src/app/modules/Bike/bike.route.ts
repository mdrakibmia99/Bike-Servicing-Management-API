import { Router } from "express";
import { bikeController } from "./bike.controller";
import { validRequest } from "../../middlewares/validRequest";
import { bikeSchema, updateBikeSchema } from "./bike.validation";

const router = Router()

router.post('/', validRequest(bikeSchema), bikeController.bikeCreate)

router.get('/', bikeController.getAllBikes)

router.get('/:bikeId', bikeController.getSingleBike)

router.patch('/:bikeId', validRequest(updateBikeSchema), bikeController.updateBike)

router.delete('/:bikeId', bikeController.deleteBike)

export const bikeRoutes = router
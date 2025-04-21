import { RequestHandler } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { bikeServices } from "./bike.service"
import { sendResponse } from "../../utils/sendResponse"
import status from "http-status"

const bikeCreate: RequestHandler = catchAsync(async (req, res) => {
    const result = await bikeServices.bikeCreateIntoDb(req.body)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Bike added successfully",
        data: result
    })
})

const getAllBikes: RequestHandler = catchAsync(async (req, res) => {
    const result = await bikeServices.getAllBikes()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Bikes fetched successfully",
        data: result
    })
})

const getSingleBike: RequestHandler = catchAsync(async (req, res) => {
    const { bikeId } = req.params
    const result = await bikeServices.getSingleBike(bikeId)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Bike fetched successfully",
        data: result
    })
})

const updateBike: RequestHandler = catchAsync(async (req, res) => {
    const { bikeId } = req.params
    const result = await bikeServices.updateBike(bikeId, req.body)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Bike updated successfully",
        data: result
    })
})

const deleteBike: RequestHandler = catchAsync(async (req, res) => {
    const { bikeId } = req.params
    const result = await bikeServices.deleteBike(bikeId)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Bike deleted successfully",
        data: result
    })
})

export const bikeController = {
    bikeCreate,
    getAllBikes,
    getSingleBike,
    updateBike,
    deleteBike
}
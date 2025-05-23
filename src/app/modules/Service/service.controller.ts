import { RequestHandler } from "express"
import { catchAsync } from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import status from "http-status"
import { serviceServices } from "./service.services"

const ServiceCreate: RequestHandler = catchAsync(async (req, res) => {
    const result = await serviceServices.serviceCreateIntoDb(req.body)
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Service added successfully",
        data: result
    })
})

const getAllServices: RequestHandler = catchAsync(async (req, res) => {
    const result = await serviceServices.getAllServices()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Services fetched successfully",
        data: result
    })
})

const getSingleService: RequestHandler = catchAsync(async (req, res) => {
    const { ServiceId } = req.params
    const result = await serviceServices.getSingleService(ServiceId)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service fetched successfully",
        data: result
    })
})

const serviceCompleted: RequestHandler = catchAsync(async (req, res) => {
    const { ServiceId } = req.params
    const result = await serviceServices.serviceCompleted(ServiceId)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service marked as completed",
        data: result
    })
})

const updateService: RequestHandler = catchAsync(async (req, res) => {
    const { ServiceId } = req.params
    const result = await serviceServices.updateService(ServiceId, req.body)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service updated successfully",
        data: result
    })
})

const deleteService: RequestHandler = catchAsync(async (req, res) => {
    const { ServiceId } = req.params
    const result = await serviceServices.deleteService(ServiceId)
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Service deleted successfully",
        data: result
    })
})

const serviceStatus: RequestHandler = catchAsync(async (req, res) => {
    const result = await serviceServices.serviceStatus()
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result
    })
})

export const ServiceController = {
    ServiceCreate,
    getAllServices,
    getSingleService,
    serviceCompleted,
    updateService,
    deleteService,
    serviceStatus
}
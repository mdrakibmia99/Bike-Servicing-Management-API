"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBikeSchema = exports.bikeSchema = void 0;
const zod_1 = require("zod");
exports.bikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, "Brand is required"),
        model: zod_1.z.string().min(1, "Model is required"),
        year: zod_1.z.number().int().min(1900).max(new Date().getFullYear()),
        customerId: zod_1.z.string().uuid("Invalid UUID for customerId")
    })
});
exports.updateBikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, "Brand is required").optional(),
        model: zod_1.z.string().min(1, "Model is required").optional(),
        year: zod_1.z.number().int().min(1900).max(new Date().getFullYear()).optional(),
        customerId: zod_1.z.string().uuid("Invalid UUID for customerId").optional()
    })
});

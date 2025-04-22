"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("../modules/Customer/user.route");
const bike_route_1 = require("../modules/Bike/bike.route");
const service_routes_1 = require("../modules/Service/service.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/customers",
        route: user_route_1.customerRoutes,
    },
    {
        path: "/bikes",
        route: bike_route_1.bikeRoutes,
    },
    {
        path: "/services",
        route: service_routes_1.serviceRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;

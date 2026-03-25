import { Request, Response } from "express";
export declare const OrderController: {
    createOrder: (req: Request, res: Response) => Promise<void>;
    getUserOrders: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=order.controller.d.ts.map
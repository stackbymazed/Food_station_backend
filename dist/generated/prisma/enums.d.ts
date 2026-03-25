export declare const OptionType: {
    readonly size: "size";
    readonly addon: "addon";
};
export type OptionType = (typeof OptionType)[keyof typeof OptionType];
export declare const MealCategory: {
    readonly BURGER: "BURGER";
    readonly CHICKEN: "CHICKEN";
    readonly PIZZA: "PIZZA";
    readonly DESSERTS: "DESSERTS";
};
export type MealCategory = (typeof MealCategory)[keyof typeof MealCategory];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly PROCESSING: "PROCESSING";
    readonly DELIVERED: "DELIVERED";
    readonly CANCELLED: "CANCELLED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
//# sourceMappingURL=enums.d.ts.map
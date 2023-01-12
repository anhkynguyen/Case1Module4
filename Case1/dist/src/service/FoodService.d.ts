declare class FoodService {
    constructor();
    getAll: () => Promise<Omit<import("mongoose").Document<unknown, any, import("../model/food").IFood> & import("../model/food").IFood & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    save: (food: any) => Promise<import("mongoose").Document<unknown, any, import("../model/food").IFood> & import("../model/food").IFood & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update: (id: any, newFood: any) => Promise<import("mongodb").UpdateResult>;
    findById: (id: any) => Promise<import("mongoose").Document<unknown, any, import("../model/food").IFood> & import("../model/food").IFood & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove: (id: any) => Promise<import("mongodb").DeleteResult>;
}
declare const _default: FoodService;
export default _default;

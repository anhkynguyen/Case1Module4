import { Request, Response } from "express";
declare class HomeController {
    private foodService;
    private categoryService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showFormCreate: (req: Request, res: Response) => Promise<void>;
    showFormDelete: (req: Request, res: Response) => Promise<void>;
    showFormUpdate: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
}
declare const _default: HomeController;
export default _default;

import { NextFunction, Request, Response } from "express";
import createError from 'http-errors'

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated() && req.user && req.session) {
        return next()
    }
    next(createError(401));
}

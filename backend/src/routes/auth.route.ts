import { NextFunction, Response } from 'express';
import passport, { session } from 'passport';
import express, { Request } from 'express';

const router = express.Router();

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
);

router.get(
    '/auth/google/redirect',
    passport.authenticate('google', {
        failureRedirect: `${process.env.NODE_ENV === 'development'
            ? process.env.CLIENT_SERVER_DEV
            : process.env.CLIENT_SERVER_PROD
            }/login`,
    }),
    (req: Request, res: Response) => {
        console.log('REQ USER')
        console.log(req.user)
        res.redirect(
            `${process.env.NODE_ENV === 'development'
            ? process.env.CLIENT_SERVER_DEV
            : process.env.CLIENT_SERVER_PROD
            }`,
        );
    }
);

router.get('/auth/logout', (req , res: Response, next: NextFunction) => {
    req.logout(()=>{
        console.log('logged out');
    })
    res.sendStatus(200)
});
export default router;
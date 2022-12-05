import { NextFunction, Response } from 'express';
import passport from 'passport';
import express, { Request } from 'express';

const router = express.Router();

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'login',
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
        res.redirect(
            `${process.env.NODE_ENV === 'development'
            ? process.env.CLIENT_SERVER_DEV
            : process.env.CLIENT_SERVER_PROD
            }`,
        );
    }
);

router.get('/auth/logout', (req , res: Response, next: NextFunction) => {
    req.session=null;
    req.user = undefined;
    res.clearCookie('connect.sid')
    req.logout({keepSessionInfo: false},()=>{
        console.log('logged out');
    })
    res.sendStatus(200)
});
export default router;
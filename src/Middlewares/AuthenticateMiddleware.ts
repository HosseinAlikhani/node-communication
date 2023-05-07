import MiddlewareInterface from "./MiddlewareInterface";

export default class AuthenticateMiddleware implements MiddlewareInterface
{
    /**
     * handle middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req, res, next)
    {
        console.log('middleware handle');
    }
}
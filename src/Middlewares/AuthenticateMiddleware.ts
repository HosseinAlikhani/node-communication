import MiddlewareInterface from "../Infrastructure/Contracts/MiddlewareInterface";
import RequestInterface from "../Infrastructure/Request/RequestInterface";

export default class AuthenticateMiddleware implements MiddlewareInterface
{
    /**
     * handle middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req: RequestInterface, res, next)
    {
        let authorizationToken = req.getHeaders('authorization');
        return next();
    }
}
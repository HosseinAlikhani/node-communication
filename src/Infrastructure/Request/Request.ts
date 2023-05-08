import MiddlewareInterface from "../Contracts/MiddlewareInterface";

export default class Request implements MiddlewareInterface
{
    /**
     * handle request middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req, res, next)
    {
        this.setcontent(req);
        this.setHeaders(req);
        this.setAuthUser(req, null);
        return next();
    }

    /**
     * set get content closure
     * @param req 
     * @returns 
     */
    private setcontent(req)
    {
        return req.getContent = (key?: string) => {
            if(key){
                return req.body[key] ?? null;
            }
            return req.body;
        };
    }

    /**
     * set headers closure
     * @param req 
     * @returns object|string|null
     */
    private setHeaders(req): object|string|null
    {
        return req.getHeaders = (key?: string) => {
            if(key){
                return req.headers[key] ?? null;
            }
            return req.headers;
        };
    }

    /**
     * set auth user instance
     * @param req
     * @param object|null user 
     */
    private setAuthUser(req, user: object|null)
    {
        req.setAuthUser = (user: object|null) => {
            req.authUser = user;
        };

        req.auth = () => {
            return req.authUser;
        }
        
        return req;
    }
}
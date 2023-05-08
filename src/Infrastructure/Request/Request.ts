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
     * @returns 
     */
    private setHeaders(req)
    {
        return req.getHeaders = (key?: string) => {
            if(key){
                return req.headers[key] ?? null;
            }
            return req.headers;
        };
    }
}
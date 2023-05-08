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
        req = this.setcontent(req);
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
                console.log('key is ', key);
                return req.body[key] ?? null;
            }
            return req.body;
        }
    }
}
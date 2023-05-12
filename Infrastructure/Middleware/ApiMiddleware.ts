import Request from "../Request/Request";
import RequestInterface from "../Request/RequestInterface";
import ResponseInterface from "../Response/ResponseInterface";
import MiddlewareInterface from "./MiddlewareInterface";

export default class ApiMiddleware implements MiddlewareInterface
{
    public handle(req: RequestInterface, res: ResponseInterface, next: any)
    {
        let api = req.getHeaders('x-requested-with');
        if(! api || api != 'XMLHttpRequest'){
            return res.responseJson({
                message: global.trans('RequesterNotValid'),
                status: Request.HTTP_UNAUTHORIZED
            });
        }

        return next();
    }
}
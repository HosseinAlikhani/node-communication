import MiddlewareInterface from "../../Infrastructure/Middleware/MiddlewareInterface";
import RequestInterface from "../../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../../Infrastructure/Response/ResponseInterface";
import JWTService from "../../Infrastructure/Services/JWT/JWTService";

export default class AuthenticateMiddleware implements MiddlewareInterface
{
    /**
     * handle middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req: RequestInterface, res: ResponseInterface, next)
    {
        let authorizationToken = req.getHeaders('authorization');
        if(! authorizationToken){
            return res.responseJson({
                status: 401,
                message: global.trans('UNAUTHORIZED')
            });
        }

        try{
            let data = (new JWTService).decodePassPhrase(authorizationToken);
            if(! data.uuid ){
                return res.responseJson({
                    status: 401,
                    message: global.trans('UNAUTHORIZED')
                });
            }

            req.setAuthUser(data);
            return next();
        }catch(e){
            return res.responseJson({
                status: 401,
                message: global.trans('UNAUTHORIZED')
            });
        }
    }
}
import RequestInterface from "../../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../../Infrastructure/Response/ResponseInterface";

export default class AuthController
{
    /**
     * check authenticate code
     * @param RequestInterface req 
     * @param ResponseInterface res 
     * @returns 
     */
    public static checkAuhtenticate(req: RequestInterface, res: ResponseInterface)
    {
        return res.responseJson({
            data: req.auth()
        });
    }

}
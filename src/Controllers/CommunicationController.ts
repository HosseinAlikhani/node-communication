import RequestInterface from "../../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../../Infrastructure/Response/ResponseInterface";

export default class CommunicationController
{
    /**
     * post communication for add new record
     * @method post
     * @link /api/communications
     * @param req 
     * @param res 
     * @returns 
     */
    public static async postCommunication(req: RequestInterface, res: ResponseInterface)
    {
        return res.responseJson({
            message: "ok"
        });
    }
}
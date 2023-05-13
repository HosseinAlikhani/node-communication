import Request from "../../../Infrastructure/Request/Request";
import RequestInterface from "../../../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../../../Infrastructure/Response/ResponseInterface";
import PostCommunicationRequest from "../../Requests/PostCommunicationRequest";

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
        try{
            let validate = await PostCommunicationRequest.validate(req.getContent());


        }catch(error: any){
            return res.responseJson({
                message: error.message,
                status: Request.HTTP_UNPROCESSABLE_ENTITY
            });
        }
    }
}
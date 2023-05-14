import Request from "../../../Infrastructure/Request/Request";
import RequestInterface from "../../../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../../../Infrastructure/Response/ResponseInterface";
import PostCommunicationRequest from "../../Requests/PostCommunicationRequest";
import CommunicationService from "../Services/CommunicationService";

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

            let controllerResult = await CommunicationService.initialize().createCommunication(validate);

            return res.responseJson({
                message: global.trans('CreateSuccessfuly'),
                status: Request.HTTP_CREATED,
                data: controllerResult
            });
        }catch(error: any){
            return res.responseJson({
                message: error.message,
                status: Request.HTTP_UNPROCESSABLE_ENTITY
            });
        }
    }
}
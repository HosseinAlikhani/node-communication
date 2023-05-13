import AuthController from "../Http/Controllers/AuthController";
import CommunicationController from "../Http/Controllers/CommunicationController";
import AuthenticateMiddleware from "../Middlewares/AuthenticateMiddleware";
import Routes from "./Routes";

export default class ApiRoutes extends Routes
{
    public register()
    {
        this.communication();
    }

    private auth()
    {
        let groupAuth = this.express.Router();
        groupAuth.get('/check',(new AuthenticateMiddleware()).handle,
            AuthController.checkAuhtenticate
        );

        this.application.use('/api/auth', groupAuth);
    }

    private communication()
    {
        let groupCommunication = this.express.Router();

        groupCommunication.post('', CommunicationController.postCommunication);

        this.application.use('/api/communications', groupCommunication);
    }
}
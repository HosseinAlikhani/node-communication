import AuthController from "../Controllers/AuthController";
import AuthenticateMiddleware from "../Middlewares/AuthenticateMiddleware";
import Routes from "./Routes";

export default class ApiRoutes extends Routes
{
    public register()
    {
        this.auth();
    }

    private auth()
    {
        let groupAuth = this.express.Router();
        groupAuth.get('/check',(new AuthenticateMiddleware()).handle,
            AuthController.checkAuhtenticate
        );

        this.application.use('/api/auth', groupAuth);
    }
}
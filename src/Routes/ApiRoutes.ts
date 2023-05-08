import RequestInterface from "../Infrastructure/Request/RequestInterface";
import ResponseInterface from "../Infrastructure/Response/ResponseInterface";
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
        groupAuth.get('/check', function(req: RequestInterface, res: ResponseInterface){
            return res.jsonResponseInit({});
        });

        groupAuth.post('/', function(req: RequestInterface, res: ResponseInterface){
            return res.jsonResponseInit({});
        });
        
        this.application.use(
            (req, res, next) => (new AuthenticateMiddleware()).handle(req, res, next)
        )
        this.application.use('/api/auth', groupAuth);
    }
}
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
        groupAuth.get('/check', function(req, res){
            return res.send('check auth');
        });

        this.application.use('/auth', groupAuth);
    }
}
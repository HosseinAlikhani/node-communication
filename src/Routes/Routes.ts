import ApplicationInterface from "../ApplicationInterface";
import ExpressInterface from "../ExpressInterface";

export default class Routes
{
    /**
     * store express instance
     * @var ExpressInterface
     */
    protected express: ExpressInterface;

    /**
     * store application instance
     * @var ApplicationInterface
     */
    protected application: ApplicationInterface;

    public constructor(express: ExpressInterface, application: ApplicationInterface)
    {
        this.express = express;
        this.application = application;
    }
}
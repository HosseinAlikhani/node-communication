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

    protected constructor(express: ExpressInterface, application: ApplicationInterface)
    {
        this.express = express;
        this.application = application;
    }

    /**
     * initialize routes
     * @param ExpressInterface express
     * @param ApplicationInterface application
     * @return void
     */
    public static initialize(express: ExpressInterface, application: ApplicationInterface): void
    {
        let instance = new this(express, application);
        instance.register();
    }

    public register()
    {
        // register methods - routes - api
    }
}
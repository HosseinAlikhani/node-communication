import ApplicationInterface from "./ApplicationInterface";
import ExpressInterface from "./ExpressInterface";
import ApiRoutes from "./Routes/ApiRoutes";
const express = require('express');

export default class Communication {
    
    /**
     * store express instance
     * @var ExpressInterface
     */
    private express: ExpressInterface;

    /**
     * store application instance
     * @var ApplicationInterface
     */
    private application: ApplicationInterface;

    /**
     * store Communication instance
     */
    private static instance;

    /**
     * communication constructor
     */
    public constructor()
    {
        this.express = express
        this.application = express();

        this.registerEnv(); // register .env
        this.publishRoutes(); // register routes
    }

    /**
     * initialize application routes
     * @return void
     */
    private publishRoutes(): void
    {
        ApiRoutes.initialize(this.express, this.application);
    }

    /**
     * register env variable
     * @return void
     */
    private registerEnv(): void
    {
        const dotenv = require('dotenv');
        dotenv.config({path: __dirname+'/../.env'});
    }

    /**
     * initialize communication object
     * @returns Communication
     */
    public static initialize(): Communication
    {
        if(! this.instance){
            this.instance = new this();
            this.instance.startApplication();
        }

        return this.instance;
    }

    /**
     * start communication application on specific port
     */
    public startApplication()
    {
        const port = process.env.APP_PORT;

        this.application.listen( port ?? 3000, function(){
            console.log(`start application on port ${port} ...!`);
        })
    }
}
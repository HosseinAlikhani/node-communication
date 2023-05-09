import ApplicationInterface from "./ApplicationInterface";
import ExpressInterface from "./ExpressInterface";
import Request from "../Infrastructure/Request/Request";
import Response from "../Infrastructure/Response/Response";
import ApiRoutes from "./Routes/ApiRoutes";
import bodyParser from "body-parser";
import I18nService from "../Infrastructure/Services/I18n/I18nService";
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
        this.registerInfrastructure(); // register infrastructure service
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
     * register infrastructure
     * @return void
     */
    private registerInfrastructure()
    {
        // parse application/x-www-form-urlencoded
        this.application.use(bodyParser.urlencoded({ extended: false }))
        // parse application/json
        this.application.use(bodyParser.json())

        // register Request & Response middleware
        this.application.use( (req, res, next) => (new Request()).handle(req, res, next) );
        this.application.use( (req, res, next) => (new Response()).handle(req, res, next) );

        // register localization
        I18nService.initialize();
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
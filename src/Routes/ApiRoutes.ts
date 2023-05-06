import ApplicationInterface from "../ApplicationInterface";
import ExpressInterface from "../ExpressInterface";
import Routes from "./Routes";

export default class ApiRoutes extends Routes
{
    public constructor(express: ExpressInterface, application: ApplicationInterface)
    {
        super(express, application);
    }
}
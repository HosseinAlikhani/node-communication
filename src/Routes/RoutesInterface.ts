import ApplicationInterface from "../ApplicationInterface";
import ExpressInterface from "../ExpressInterface";

export default interface RoutesInterface
{
    /**
     * initialize routes
     * @param ExpressInterface express
     * @param ApplicationInterface application
     * @return void
     */
    initialize(express: ExpressInterface, application: ApplicationInterface): void;
}
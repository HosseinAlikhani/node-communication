import ApplicationInterface from "../Contracts/ApplicationInterface";
import ExpressInterface from "../Contracts/ExpressInterface";

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
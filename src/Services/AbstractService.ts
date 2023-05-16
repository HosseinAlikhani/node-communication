const fs = require('fs');
import SlackService from "./SlackService";

export default class AbstractService
{
    protected static serviceIDs: object = {
        "11001": "SlackService"
    };

    protected static instnace;

    public static isServiceValid(_service)
    {
        let service = this.getService(_service);

        try{
            // check service is exists or not
            if(fs.existsSync(`${process.env.PWD}/src/Services/${service}.ts`)){
                return true;
            }
            throw new Error(global.trans("ServiceNotValid", {
                service: service
            }));
        }catch(e){
            throw new Error(global.trans("ServiceNotValid", {
                service: service
            }));
        }
    }
    
    /**
     * get service name from service unique id
     * @param _service
     * @returns 
     */
    public static getService(_service: string)
    {
        // check if exists in serviceIDs property
        let service = this.serviceIDs[_service];
        if(! service){
            throw new Error(global.trans("ServiceNotValid", {
                service: _service
            }));
        }
        return service;
    }

    /**
     * TODO must change async with out import service class for check port
     * check service port's is valid or not
     * @param _service
     * @param _port 
     */
    public static async isPortValid(_service, _port)
    {
        try{
            let service = ( await import(`./${this.getService(_service)}`) ).default;

            // check service's port
            if( service.portIDs[_port] ){
                // check port method is exists or not
                if( service.prototype[ service.portIDs[_port] ] ){
                    return true;
                }
            }
            
            throw 'ERROR';

        }catch(e: any){
            throw new Error(`Port '${_port}' not found ..!`);
        }
    }
}
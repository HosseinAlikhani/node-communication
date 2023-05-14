const fs = require('fs');

export default class AbstractService
{
    protected static serviceIDs: object = {
        "11001": "SlackService"
    };

    protected static instnace;

    public static isServiceValid(_service)
    {
        // check if exists in serviceIDs property
        let service = this.serviceIDs[_service];
        if(! service){
            throw new Error(global.trans("ServiceNotValid", {
                service: _service
            }));
        }

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
}
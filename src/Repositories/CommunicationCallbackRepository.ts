import Repository from "./Repository";
const moment = require('moment');

export default class CommunicationCallbackRepository extends Repository
{
    protected collection = 'communication_callbacks';

    private static instance;

    /**
     * initialize communication repository
     */
    public static initialize()
    {
        if(! this.instance){
            this.instance = new this();
        }
        return this.instance;
    }

    /**
     * connect to communication callback collection
     */
    private async tableConnection()
    {
        let dbConnection = await this.connect();
        return dbConnection.collection(this.collection);
    }
}
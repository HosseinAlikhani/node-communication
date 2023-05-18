import Repository from "./Repository";

export default class CommunicationLogRepository extends Repository
{
    protected collection = 'communication_logs';

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
     * create communication log
     * @param _communicationId 
     * @param _logData 
     */
    public async createCommunicationLog(_communicationId, _logData)
    {
        return await this.create({
            communication_id: _communicationId,
            status: _logData.status,
            message: _logData.message,
            created_at: this.nowDateTime()
        });
    }
}
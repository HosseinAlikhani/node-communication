import Repository from "./Repository";

export default class CommunicationRepository extends Repository
{
    protected collection = 'communications';

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
     * find all communications
     */
    public async findCommunications()
    {
        return this.find();
    }

    /**
     * find communication by id
     * @param _id
     */
    public async findCommunicationById(_id)
    {
        return await this.findOne({
            _id: _id
        });
    }

    /**
     * insert communications to database
     */
    public async createCommunication(data)
    {
        data.created_at = this.nowDateTime();
        data.updated_at = this.nowDateTime();
        let createResult = await this.create({
            service: data.service,
            port: data.port,
            model_type: data.model_type,
            model_id: data.model_id,
            template: data.template,
            template_id: data.template_id,
            template_data: data.template_data,
            receiver_data: data.receiver_data,
            send_at: data.send_at,
            thread: data.thread,
            callback: data.callback,
            callback_data: data.callback_data,
            try_count: 0,
            delivery_at: null,
            created_at: this.nowDateTime(),
            updated_at: this.nowDateTime(),
        });
        return await this.findCommunicationById(createResult.insertedId);
    }
}
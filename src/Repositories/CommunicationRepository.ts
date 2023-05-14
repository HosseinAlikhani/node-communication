import Repository from "./Repository";
const moment = require('moment');

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
    public async find()
    {
        let result = await (await this.tableConnection()).find().toArray();
        return result;
    }

    /**
     * find communication by id
     * @param _id
     */
    public async findCommunicationById(_id)
    {
        return await (await this.tableConnection()).find({
            _id: _id
        }).toArray();
    }

    /**
     * insert communications to database
     */
    public async createCommunication(data)
    {
        data.created_at = moment().unix();
        data.updated_at = moment().unix();
        let createResult = await this.create(data);
        return await this.findCommunicationById(createResult.insertedId);
    }
}
import Repository from "./Repository";

export default class CommunicationRepository extends Repository
{
    protected collection = 'communications';

    /**
     * connect to communication collection
     */
    private async communication()
    {
        await this.connect();
        return await this.getConnection().collection(this.collection);
    }

    /**
     * find all communications
     */
    public async find()
    {
        return (await this.communication()).find().toArray();
    }

    /**
     * insert communications to database
     */
    public async insert()
    {
        return (await this.communication()).insertOne({
            first_name: 'hossein',
            last_name: 'alikhani',
            mobile: '09361374744',
            email: 'hossein.alikhani@gmail.com'
        });
    }
}
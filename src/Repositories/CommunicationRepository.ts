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
}
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
     * connect to communication collection
     */
    private async communication()
    {
        let dbConnection = await this.connect();
        return dbConnection.collection(this.collection);
    }

    /**
     * find all communications
     */
    public async find()
    {
        let result = await (await this.communication()).find().toArray();
        this.close();
        return result;
    }

    /**
     * insert communications to database
     */
    public async insert()
    {
        (await this.communication()).insertOne({
            first_name: 'hossein',
            last_name: 'alikhani',
            mobile: '09361374744',
            email: 'hossein.alikhani@gmail.com'
        });

        this.close();
    }
}
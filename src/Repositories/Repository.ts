var MongoClient = require('mongodb').MongoClient;
const moment = require('moment');

export default class Repository
{
    /**
     * store mongo url connection
     * @var string|null
     */
    private url?: string;

    /**
     * store mongo database name
     * @var string|null
     */
    private db?: string;
    
    /**
     * store mongo database connection instance
     */
    private connection;

    /**
     * store collection name
     */
    protected collection: string;

    /**
     * repository constructor
     */
    public constructor()
    {
        this.db = process.env.MONGODB_DB_NAME;
        this.url = process.env.MONGODB_URL;
    }

    /**
     * return now date time with unix timestamp
     * @return number
     */
    protected nowDateTime(): number
    {
        return moment().unix()
    }

    /**
     * connect to mongo database
     */
    protected async connect()
    {            
        this.connection = await MongoClient.connect(this.url);

        return await this.connection.db(this.db); //connect to database
    }

    /**
     * get connection
     */
    protected getConnection()
    {
        return this.connection;
    }

    /**
     * close connection
     */
    protected async close()
    {
        return await this.connection.close();
    }

    /**
     * table connection
     */
    protected async tableConnection()
    {
        let dbConnection = await this.connect();
        return dbConnection.collection(this.collection);
    }

    /**
     * find one 
     * @param query 
     * @returns 
     */
    protected async findOne(query)
    {
        return await (await this.tableConnection()).findOne(query);
    }

    /**
    * insert to database
    * @param data
    */
    public async create(data)
    {
        return await (await this.tableConnection()).insertOne(data);
    }
}
var MongoClient = require('mongodb').MongoClient;
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
     * repository constructor
     */
    public constructor()
    {
        this.db = process.env.MONGODB_DB_NAME;
        this.url = process.env.MONGODB_URL;
    }

    /**
     * connect to mongo database
     */
    protected async connect()
    {            
        this.connection = await MongoClient.connect(this.url, function(err, db) {
            if (err) throw err;
            db.close();
        });

        this.connection.db(this.db); //connect to database 
        return this.connection;
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
}
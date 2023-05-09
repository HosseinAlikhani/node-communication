var MongoClient = require('mongodb').MongoClient;
export default class Repository
{
    private host?: string;
    private port?: string;
    private username?: string;
    private password?: string;
    private db?: string;
    private connection;

    public constructor()
    {
        this.initializeConfig();
    }

    private initializeConfig()
    {
        this.host = process.env.MONGODB_HOST;
        this.port = process.env.MONGODB_PORT;
        this.username = process.env.MONGODB_USERNAME;
        this.password = process.env.MONGODB_PASSWORD;
        this.db = process.env.MONGODB_DB_NAME;
        
        if(! this.host || ! this.port || ! this.username || ! this.password || ! this.db){
            throw new Error( global.trans() );
        }
    }

    protected async connect()
    {            
        var url = `mongodb://${this.username}:${this.password}@${this.host}:${this.port}/${this.db}`;
        this.connection = await MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            db.close();
        });

        return this.connection.db(this.db);
    }

    protected async close()
    {
        return await this.connection.close();
    }
}
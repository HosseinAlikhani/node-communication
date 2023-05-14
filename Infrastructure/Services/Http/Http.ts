export default class Http
{
    private static instance: Http;

    public axios;

    /**
     * Http service constructor
     */
    public constructor()
    {
        this.axios = require('axios');
    }

    /**
     * initialize Http
     * @returns Http
     */
    public static initialize(): Http
    {
        if(! this.instance){
            this.instance = new this();
        }
        return this.instance;
    }

    /**
     * get http request
     * @param _url 
     */
    public static get(_url)
    {
        let http = this.initialize();
        return http.axios.get(_url);
    }
}
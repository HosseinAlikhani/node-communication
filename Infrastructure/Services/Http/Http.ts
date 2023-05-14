export default class Http
{
    private static instance: Http;
    
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
}
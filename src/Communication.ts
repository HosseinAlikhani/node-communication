export default class Communication {
    
    /**
     * store express instance
     */
    private express;

    /**
     * store application instance
     */
    private application;

    /**
     * store Communication instance
     */
    private static instance;

    /**
     * communication constructor
     */
    public constructor()
    {
        this.express = require('express');
        this.application = this.express();
    }

    /**
     * initialize communication object
     * @returns Communication
     */
    public static initialize(): Communication
    {
        if(! this.instance){
            this.instance = new this();
            this.instance.startApplication();
        }

        return this.instance;
    }

    /**
     * start communication application on specific port
     */
    public startApplication()
    {
        this.application.listen(3000, function(){
            console.log('start application on port 3000 ...!');
        })
    }
}
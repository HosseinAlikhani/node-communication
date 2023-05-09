const { I18n } = require('i18n');
const path = require('path');

export default class I18nService
{
    private static instance;

    private i18n;

    public constructor()
    {
        this.i18n = new I18n({
            locales: ['en'],
            defaultLocale: 'en',
            directory: `${process.env.PWD}/Lang`
        });
    }

    /**
     * initialize i18n service
     */
    public static initialize()
    {
        if(! this.instance ){
            this.instance = new this();
        }

        // set global trans  closure
        global.trans = (key) => this.instance.trans(key);

        return this.instance;
    }

    /**
     * trans keyword
     * @param string key
     * @return string
     */
    public trans(key: string): string
    {
        return this.i18n.__(key);
    }
}
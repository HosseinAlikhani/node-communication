import jwt from "jsonwebtoken";
const fs = require('fs');

export default class JWTService
{
    /**
     * store alg
     * @var ?string
     */
    private alg: string;

    /**
     * store path
     * @var ?string
     */
    private path?: string;

    /**
     * store cert public name
     * @var ?string
     */
    private publicCertName?: string;

    /**
     * constructor jwt service
     * @param string alg 
     * @param string path 
     */
    public constructor(alg: string = 'RS256', path?: string, publicCertName?: string)
    {
        this.alg = alg;
        this.path = path ?? `${process.env.PWD}/ssh-key/`;
        this.publicCertName = publicCertName ?? 'public-key.pem';
    }

    /**
     * decode token with RS256 alg
     * @param token 
     */
    public decodePassPhrase(token: string)
    {
        var cert = fs.readFileSync(`${this.path}${this.publicCertName}`);  // get public key
        return jwt.verify(token, cert);
    }
}
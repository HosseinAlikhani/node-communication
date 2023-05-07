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
     * store cert private name
     * @var ?string
     */
    private privateCertName?: string;

    /**
     * constructor jwt service
     * @param string alg 
     * @param string path 
     */
    public constructor(alg: string = 'RS256', path?: string, publicCertName?: string, privateCertName?: string)
    {
        this.alg = alg;
        this.path = path ?? `${process.env.PWD}/ssh-key/`;
        this.publicCertName = publicCertName ?? 'public-key.pem';
        this.privateCertName = privateCertName ?? 'private-key.pem';
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

    /**
     * encode data with RS256 alg
     * @param data 
     * @returns 
     */
    public encodePassPhrase(data: object): string
    {
        var privateCert = fs.readFileSync(`${this.path}${this.privateCertName}`);
        return jwt.sign( data, privateCert, { algorithm: 'RS256' });
    }
}
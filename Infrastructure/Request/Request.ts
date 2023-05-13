import MiddlewareInterface from "../Middleware/MiddlewareInterface";

export default class Request implements MiddlewareInterface
{
    public static HTTP_CONTINUE = 100;
    public static HTTP_SWITCHING_PROTOCOLS = 101;
    public static HTTP_PROCESSING = 102;            // RFC2518
    public static HTTP_EARLY_HINTS = 103;           // RFC8297
    public static HTTP_OK = 200;
    public static HTTP_CREATED = 201;
    public static HTTP_ACCEPTED = 202;
    public static HTTP_NON_AUTHORITATIVE_INFORMATION = 203;
    public static HTTP_NO_CONTENT = 204;
    public static HTTP_RESET_CONTENT = 205;
    public static HTTP_PARTIAL_CONTENT = 206;
    public static HTTP_MULTI_STATUS = 207;          // RFC4918
    public static HTTP_ALREADY_REPORTED = 208;      // RFC5842
    public static HTTP_IM_USED = 226;               // RFC3229
    public static HTTP_MULTIPLE_CHOICES = 300;
    public static HTTP_MOVED_PERMANENTLY = 301;
    public static HTTP_FOUND = 302;
    public static HTTP_SEE_OTHER = 303;
    public static HTTP_NOT_MODIFIED = 304;
    public static HTTP_USE_PROXY = 305;
    public static HTTP_RESERVED = 306;
    public static HTTP_TEMPORARY_REDIRECT = 307;
    public static HTTP_PERMANENTLY_REDIRECT = 308;  // RFC7238
    public static HTTP_BAD_REQUEST = 400;
    public static HTTP_UNAUTHORIZED = 401;
    public static HTTP_PAYMENT_REQUIRED = 402;
    public static HTTP_FORBIDDEN = 403;
    public static HTTP_NOT_FOUND = 404;
    public static HTTP_METHOD_NOT_ALLOWED = 405;
    public static HTTP_NOT_ACCEPTABLE = 406;
    public static HTTP_PROXY_AUTHENTICATION_REQUIRED = 407;
    public static HTTP_REQUEST_TIMEOUT = 408;
    public static HTTP_CONFLICT = 409;
    public static HTTP_GONE = 410;
    public static HTTP_LENGTH_REQUIRED = 411;
    public static HTTP_PRECONDITION_FAILED = 412;
    public static HTTP_REQUEST_ENTITY_TOO_LARGE = 413;
    public static HTTP_REQUEST_URI_TOO_LONG = 414;
    public static HTTP_UNSUPPORTED_MEDIA_TYPE = 415;
    public static HTTP_REQUESTED_RANGE_NOT_SATISFIABLE = 416;
    public static HTTP_EXPECTATION_FAILED = 417;
    public static HTTP_I_AM_A_TEAPOT = 418;                                               // RFC2324
    public static HTTP_MISDIRECTED_REQUEST = 421;                                         // RFC7540
    public static HTTP_UNPROCESSABLE_ENTITY = 422;                                        // RFC4918
    public static HTTP_LOCKED = 423;                                                      // RFC4918
    public static HTTP_FAILED_DEPENDENCY = 424;                                           // RFC4918
    public static HTTP_TOO_EARLY = 425;                                                   // RFC-ietf-httpbis-replay-04
    public static HTTP_UPGRADE_REQUIRED = 426;                                            // RFC2817
    public static HTTP_PRECONDITION_REQUIRED = 428;                                       // RFC6585
    public static HTTP_TOO_MANY_REQUESTS = 429;                                           // RFC6585
    public static HTTP_REQUEST_HEADER_FIELDS_TOO_LARGE = 431;                             // RFC6585
    public static HTTP_UNAVAILABLE_FOR_LEGAL_REASONS = 451;                               // RFC7725
    public static HTTP_INTERNAL_SERVER_ERROR = 500;
    public static HTTP_NOT_IMPLEMENTED = 501;
    public static HTTP_BAD_GATEWAY = 502;
    public static HTTP_SERVICE_UNAVAILABLE = 503;
    public static HTTP_GATEWAY_TIMEOUT = 504;
    public static HTTP_VERSION_NOT_SUPPORTED = 505;
    public static HTTP_VARIANT_ALSO_NEGOTIATES_EXPERIMENTAL = 506;                        // RFC2295
    public static HTTP_INSUFFICIENT_STORAGE = 507;                                        // RFC4918
    public static HTTP_LOOP_DETECTED = 508;                                               // RFC5842
    public static HTTP_NOT_EXTENDED = 510;                                                // RFC2774
    public static HTTP_NETWORK_AUTHENTICATION_REQUIRED = 511;  

    /**
     * handle request middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req, res, next)
    {
        this.setcontent(req);
        this.setHeaders(req);
        this.setAuthUser(req, null);
        return next();
    }

    /**
     * set get content closure
     * @param req 
     * @returns 
     */
    private setcontent(req)
    {
        return req.getContent = (key?: string) => {
            if(key){
                return req.body[key] ?? {};
            }
            return req.body;
        };
    }

    /**
     * set headers closure
     * @param req 
     * @returns object|string|null
     */
    private setHeaders(req): object|string|null
    {
        return req.getHeaders = (key?: string) => {
            if(key){
                return req.headers[key] ?? null;
            }
            return req.headers;
        };
    }

    /**
     * set auth user instance
     * @param req
     * @param object|null user 
     */
    private setAuthUser(req, user: object|null)
    {
        req.setAuthUser = (user: object|null) => {
            req.authUser = user;
        };

        req.auth = () => {
            return req.authUser;
        }
        
        return req;
    }
}
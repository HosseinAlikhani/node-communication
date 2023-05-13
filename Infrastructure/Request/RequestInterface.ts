export default interface RequestInterface
{
    /**
     * get request object
     * @param ?string key
     * @return object
     */
    getContent(key?: string): object;

    /**
     * get headers
     * @param string|null key
     * @return object|string|null
     */
    getHeaders(key?: string): object|string|null;

    /**
     * set auth user
     * @param object|null user 
     */
    setAuthUser(user?: object): void

    /**
     * get authenticate user instance
     * @return object|null
     */
    auth(): object|null
}
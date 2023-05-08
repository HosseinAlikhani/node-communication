export default interface RequestInterface
{
    /**
     * get request object
     * @param ?string key
     * @return object|null
     */
    getContent(key?: string): object|null;

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
}
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
     * @return object|null
     */
    getHeaders(key?: string): object|null;
}
export default interface ApplicationInterface
{
    /**
     * TODO check signature of methods
     * @param number 
     * @param closure 
     */
    listen(number, closure);

    /**
     * get http verb
     * @param url 
     * @param callback 
     * @param action 
     */
    get(url: string, callback?: Function, action?: Function);

    /**
     * application use action
     * @param actionName 
     * @param action 
     */
    use(actionName: string|Function, action?: Function);
}
export default class PostCommunicationRequest
{
    /**
     * send via which service
     * @var number
     */
    public service: number;

    /**
     * send via which port of service
     * @var number
     */
    public port: number;

    /**
     * which model trigger
     * @var string
     */
    public modelType: string;

    /**
     * which model id trigger
     * @var string
     */
    public modelId: string;

    /**
     * send via template structure
     * @var string|null
     */
    public template: string|null;

    /**
     * send via template id
     * @var number|null
     */
    public templateId: number|null;

    /**
     * template data
     * @var object
     */
    public templateData: object;

    /**
     * receiver data
     * @var object
     */
    public receiverData: object;

    /**
     * when send request
     * @var string
     */
    public sendAt: string;

    /**
     * sync or async
     */
    public thread: number;

    /**
     * callback when sent
     * @var string|null
     */
    public callback: string|null;

    /**
     * callback data
     * @var object|null
     */
    public callbackData: object|null;
}
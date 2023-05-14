import AbstractService from "../Services/AbstractService";

const Joi = require('joi');

export default class PostCommunicationRequest
{
    /**
     * send via which service
     * @var number
     */
    public service: string;

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
    public sendAt: string|null;

    /**
     * sync or async
     */
    public thread: number|null;

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

    private constructor(data)
    {
        this.service = this.setService(data.service);
        this.port = data.port;
        this.modelType = data.model_type;
        this.modelId = data.model_id;
        this.template = data.template;
        this.templateId = data.template_id;
        this.templateData = data.template_data;
        this.receiverData = data.receiver_data;
        this.sendAt = data.send_at;
        this.thread = data.thread;
        this.callback = data.callback;
        this.callbackData = data.callback_data;
    }

    /**
     * set service & validate service
     * @param _service
     */
    private setService(_service)
    {
        if(AbstractService.isServiceValid(_service) ){
            return _service;
        }
    }

    /**
     * validate request data
     * @param data
     */
    public static async validate(data)
    {
        const validation = Joi.object({
            service: Joi.required(),
            port: Joi.required(),
            model_type: Joi.required(),
            model_id: Joi.required(),
            template: Joi.string(),
            template_id: Joi.any().when('template', { is: Joi.any().valid(null,''), then: Joi.required(), otherwise: Joi.any() }),
            template_data: Joi.object().required(),
            receiver_data: Joi.object().required(),
            callback: Joi.string(),
            callback_data: Joi.object()
        });

        try{
            const value = await validation.validateAsync(data);
            return new this(data);
        }catch(error: any){
            throw new Error(error.message);
        }
    }

    /**
     * to array request instance
     * @return object
     */
    public toObject(): object
    {
        return {
            service: this.service,
            port: this.port,
            model_type: this.modelType,
            model_id: this.modelId,
            template: this.template,
            template_id: this.templateId,
            template_data: this.templateData,
            receiver_data: this.receiverData,
            send_at: this.sendAt,
            thread: this.thread,
            callback: this.callback,
            callback_data: this.callbackData
        };
    }
}
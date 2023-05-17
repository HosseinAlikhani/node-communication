import AbstractService from "./AbstractService";

export default class SlackService extends AbstractService
{
    public static portIDs: object = {
        "00101": "sendHook"
    };

    public sendHook()
    {
        //
    }
}
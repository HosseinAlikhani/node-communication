import Http from "../../Infrastructure/Services/Http/Http";
import AbstractService from "./AbstractService";

export default class SlackService extends AbstractService
{
    public static portIDs: object = {
        "00101": "sendHook"
    };

    public async sendHook()
    {
        let url = process.env.SLACK_HOOK_URL,
            data = {
                text: this.communication.template
            };

        try {
            if(! url){
                throw new Error("SLACK_HOOK_URL is not set ...!");
            }

            Http.post(url, data)
            .then( (res) => {
                this.delivered();
            })
            .catch( (res) => {
                throw new Error(res.response.data);
            })
        }catch(error: any){
            await this.log({
                message: error.message,
                status: 500
            });
        }

    }
}
import CommunicationRepository from "../../Repositories/CommunicationRepository";
import PostCommunicationRequest from "../../Requests/PostCommunicationRequest";

export default class CommunicationService
{
    private static instance: CommunicationService|null;

    /**
     * initialize communication service
     * @returns CommunicationService
     */
    public static initialize(): CommunicationService
    {
        if(! this.instance){
            this.instance = new this();
        }

        return this.instance;
    }

    /**
     * create communication record
     * @param communicationData
     */
    public async createCommunication(communicationData: PostCommunicationRequest)
    {
        let repository = CommunicationRepository.initialize();
        let communication = await repository.createCommunication(communicationData.toObject());
        repository.close();
        return communication;
    }
}
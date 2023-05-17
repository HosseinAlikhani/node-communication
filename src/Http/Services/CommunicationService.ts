import CommunicationRepository from "../../Repositories/CommunicationRepository";
import PostCommunicationRequest from "../../Requests/PostCommunicationRequest";
import AbstractService from "../../Services/AbstractService";

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
        // insert communication data to database
        let repository = CommunicationRepository.initialize(),
            communication = await repository.createCommunication(communicationData.toObject());
        repository.close();

        await AbstractService.execute(communication);
        return communication;
    }
}
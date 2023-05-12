import MiddlewareInterface from "../Middleware/MiddlewareInterface";

export interface jsonResponse {
    status?: number;
    message?: string;
    data?: Object;
}
export default class Response implements MiddlewareInterface
{
    /**
     * handle middleware
     * @param req 
     * @param res 
     * @param next 
     */
    public handle(req, res, next)
    {
        this.setJsonResponse(res);
        return next();
    }

    /**
     * set json response
     * @param res
     */
    private setJsonResponse(res)
    {
        return res.responseJson = (response: jsonResponse) => {
            return res.json({
                status: response.status && response.status == ( 200 | 201 ) ? true : false,
                status_code: response.status ?? 400,
                message: response.message ?? null,
                data: response.data ?? null
            });
        }
    }
}
import { IEventRequest } from "../../components/events/Events";
import api from '../api';
import { message } from 'antd';
import { appApiRoutes } from "../apiRoutes";

export const createEvent = async (values: IEventRequest) => {
    return new Promise((resolve, reject) =>
        api
            .post(appApiRoutes.events.createEvent, values)
            .then(response => {
                message.success('Event was successfully added.');
                resolve({ data: response.data, status: response.status })
            })
            .catch(err => {
                message.error(err);
                reject({ status: err.response.status })
            })
        );
}
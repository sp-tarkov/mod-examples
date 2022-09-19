import { INotification } from "../models/eft/notifier/INotifier";
import { HttpServer } from "../servers/HttpServer";
import { NotificationService } from "../services/NotificationService";
export declare class NotificationSendHelper {
    protected httpServer: HttpServer;
    protected notificationService: NotificationService;
    constructor(httpServer: HttpServer, notificationService: NotificationService);
    /**
     * Send notification message to the appropiate channel
     */
    sendMessage(sessionID: string, notificationMessage: INotification): void;
}

import { INotification } from "../@types/eft/notifier/INotifier";
import { IHttpServer } from "../@types/spt/server/IHttpServer";
import { NotificationService } from "../services/NotificationService";
export declare class NotificationSendHelper {
    private httpServer;
    private notificationService;
    constructor(httpServer: IHttpServer, notificationService: NotificationService);
    /**
     * Send notification message to the appropiate channel
     */
    sendMessage(sessionID: string, notificationMessage: INotification): void;
}

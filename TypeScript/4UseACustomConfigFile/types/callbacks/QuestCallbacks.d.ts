import { QuestController } from "../controllers/QuestController";
import { RepeatableQuestController } from "../controllers/RepeatableQuestController";
import { IPmcData } from "../@types/eft/common/IPmcData";
import { IAcceptQuestRequestData } from "../@types/eft/quests/IAcceptQuestRequestData";
import { IGetBodyResponseData } from "../@types/eft/httpResponse/IGetBodyResponseData";
import { IListQuestsRequestData } from "../@types/eft/quests/IListQuestsRequestData";
import { IEmptyRequestData } from "../@types/eft/common/IEmptyRequestData";
import { ICompleteQuestRequestData } from "../@types/eft/quests/ICompleteQuestRequestData";
import { IHandoverQuestRequestData } from "../@types/eft/quests/IHandoverQuestRequestData";
import { IItemEventRouterResponse } from "../@types/eft/itemEvent/IItemEventRouterResponse";
import { IQuest } from "../@types/eft/common/tables/IQuest";
import { IPmcDataRepeatableQuest } from "../@types/eft/common/tables/IRepeatableQuests";
import { IRepeatableQuestChangeRequest } from "../@types/eft/quests/IRepeatableQuestChangeRequest";
import { HttpResponse } from "../utils/HttpResponse";
export declare class QuestCallbacks {
    private httpResponse;
    private questController;
    private repeatableQuestController;
    constructor(httpResponse: HttpResponse, questController: QuestController, repeatableQuestController: RepeatableQuestController);
    changeRepeatableQuest(pmcData: IPmcData, body: IRepeatableQuestChangeRequest, sessionID: string): IItemEventRouterResponse;
    acceptQuest(pmcData: IPmcData, body: IAcceptQuestRequestData, sessionID: string): IItemEventRouterResponse;
    completeQuest(pmcData: IPmcData, body: ICompleteQuestRequestData, sessionID: string): IItemEventRouterResponse;
    handoverQuest(pmcData: IPmcData, body: IHandoverQuestRequestData, sessionID: string): IItemEventRouterResponse;
    listQuests(url: string, info: IListQuestsRequestData, sessionID: string): IGetBodyResponseData<IQuest[]>;
    activityPeriods(url: string, info: IEmptyRequestData, sessionID: string): IGetBodyResponseData<IPmcDataRepeatableQuest[]>;
}

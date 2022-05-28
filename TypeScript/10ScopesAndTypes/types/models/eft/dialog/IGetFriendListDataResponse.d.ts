import { MemberCategory } from "../../enums/MemberCategory";
export interface IGetFriendListDataResponse {
    Friends: Friend[];
    Ignore: any[];
    InIgnoreList: any[];
}
export interface Friend {
    _id: string;
    Info: Info;
}
export interface Info {
    Nickname: string;
    Side: string;
    Level: number;
    MemberCategory: MemberCategory;
}

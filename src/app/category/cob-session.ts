import { Session } from "./session";

export interface CobSession {
    session: Session;
    cobrandId: number;
    applicationId: string;
    locale: string;
}

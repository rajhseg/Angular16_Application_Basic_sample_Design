import { Logger } from "./Logger";

export class DbLogger implements Logger{
    LogInfo(message: string): void {
        console.log("DbLogger Loginfo");
    }
    LogError(message: string): void {
        console.log("DbLogger LogError");
    }

}
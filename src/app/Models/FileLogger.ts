import { Logger } from './Logger';
export class FileLogger implements Logger {
    LogInfo(message: string): void {
        console.log("FileLogger LogInfo");
    }
    LogError(message: string): void {
        console.log("FileLogger LogError");
    }

}
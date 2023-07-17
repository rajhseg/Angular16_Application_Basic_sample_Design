export abstract class Logger {
    abstract LogInfo(message: string): void;
    abstract LogError(message: string): void;
}
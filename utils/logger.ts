class Logger {
    public constructor() {};

    private getTime(): string {
        const date = new Date();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
        return `[${month}-${day} | ${hours}:${minutes}:${seconds}.${milliseconds}]`;
    }

    public info(message: string): void {
        console.log(`\x1b[32mINFO\x1b[0m`, this.getTime(), message);
    };
    
    public warn(message: string): void {
        console.log(`\x1b[33mWARN\x1b[0m`, this.getTime(), message);
    };
    
    public error(message: string): void {
        console.log(`\x1b[31mERROR\x1b[0m`, this.getTime(), message);
    };
};

export default new Logger();
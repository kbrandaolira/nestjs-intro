export declare class Crypt {
    bcrypt: any;
    execute(text: string): string;
    compare(text: string, hash: string): boolean;
}

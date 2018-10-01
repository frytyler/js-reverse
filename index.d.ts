declare namespace JSReverse {
    type register = {[key: string]: string}
    type getArgs = {[key: string]: any} 
}

declare class JSReverse {
    constructor(hostname: string)

    nameIsValid(name: string): boolean;
    
    urlsIsRegistered(): boolean;

    nameIsAvailable(name: string): boolean;

    register(urls: JSReverse.register): void;

    get<T>(name: string, args?: JSReverse.getArgs, queryString?: JSReverse.getArgs): string | T;
} 

declare module 'js-reverse' {
    export = JSReverse;
}

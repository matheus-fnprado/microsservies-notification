export class Content {
    private readonly content: string

    get value(): string {
        return this.content;
    }

    private validateContentLength(content: string): boolean{
        return content.length > 4 && content.length < 241;
    }

    constructor(content: string){
        const isContentLengthValid = this.validateContentLength(content);

        if(!isContentLengthValid){
            throw new Error("Content lenght error.;")
        }

        this.content = content;
    }
}
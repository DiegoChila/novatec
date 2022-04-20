export class ResponseData<type> {
    code: number;
    errors: string[];
    response: type;

    constructor(code: number, errors: string[], response: type) {
        this.code = code;
        this.errors = errors;
        this.response = response;
    }

}
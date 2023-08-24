class Data {
    private method: String;
    private uri: String;
    private version: String;
    private message: String;
    private response: String;
    private fulfilled: Boolean;

    constructor(
        method: String,
        uri: String,
        version: String,
        message: String
    ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
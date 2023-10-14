class LoginOutput{
    token: string;
    message: string;

    constructor(token: string, message: string){
        this.token = token;
        this.message = message;
    }
};

export default LoginOutput;
import { checkSender } from '../api/sender/check.sender';
import { LoginSenderProps, loginSender } from '../api/sender/login.sender';
import { logoutSender } from '../api/sender/logout.sender';
import { SigninSenderProps, signinSender } from '../api/sender/signin.sender';

export class AuthServices {

    static check = () => {
        return checkSender();
    };

    static signin = (data: SigninSenderProps) => {
        return signinSender(data);
    };

    static login = (data: LoginSenderProps) => {
        return loginSender(data);
    };

    static logout = () => {
        return logoutSender();
    };

}
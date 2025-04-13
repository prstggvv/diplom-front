import { Api } from "./Api";
import { 
  IUserRegData,
  IUserResData,
  IUserAuthData,
  IUserAuthRes,
} from "../../types";

class UserApi extends Api {
  constructor(baseUrl: string, jwt?: string, options?: RequestInit) {
    const headers = {
      ...options?.headers,
      'Authorization': `Bearer ${jwt}`,
    };
    super(baseUrl, { ...options, headers });
  }

  registration(data: IUserRegData): Promise<IUserResData> {
    return this.post('/signup', data);
  }

  login(data: IUserAuthData): Promise<IUserAuthRes> {
    return this.post('/signin', data);
  }

  checkToken(jwt: string | null): Promise<IUserResData> {
    return this.get('/users/me', {
      headers: {
        'Authorization': `Bearer ${jwt}`,
      },
    });
  }
}

export const userApi = new UserApi('http://localhost:3000')

import { Api } from "./Api";
import { 
  IUserRegData,
  IUserResData,
  IUserAuthData,
  IUserAuthRes,
} from "../../types";

export class UserApi extends Api {
  constructor(baseUrl: string, initData: string, options?: RequestInit) {
    const headers = {
      ...options?.headers,
      'Authorization': `Bearer ${initData}`,
    };
    super(baseUrl, { ...options, headers });
  }

  registration(data: IUserRegData): Promise<IUserResData> {
    return this.post('/signup', data);
  }

  login(data: IUserAuthData): Promise<IUserAuthRes> {
    return this.post('/signin', data);
  }
}

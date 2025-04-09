export interface IUserRegData {
  name: string;
  email: string;
  password: string;
}

export interface IUserResData {
  email: string;
  name: string;
}

export interface IUserAuthData {
  email: string;
  password: string;
}

export interface IUserAuthRes {
  token: string;
}
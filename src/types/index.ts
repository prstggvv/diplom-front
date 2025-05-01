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

export interface IGroupRes {
  name: string;
  course: number;
}

export interface ISubjectRes {
  teacherName: string;
  subjectName: string;
  subjectType: string;
  group: string;
}

export interface IGroupByIdRes {
  name: string;
  course: string;
  groupId: string;
  subjects: ISubjectRes[];
}
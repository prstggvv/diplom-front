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

export interface IGroup {
  _id: string;
  name: string;
  course: number;
  groupId: number;
  subjects: ISubjectRes[];
}

export interface OptionType {
  value: string;
  label: string;
}

export interface IGroupRes {
  groups: IGroup[];
}

export type IGroupResponse = IGroup[];

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

export interface ICardData {
  subject: string;
  teacher: string;
}
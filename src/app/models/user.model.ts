export class User{
  constructor(
    public id: number,
    public pictureUrl: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
  ){}
}
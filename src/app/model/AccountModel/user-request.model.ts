export interface UserRequest{
    fullName: string;
    email: string;
    password: string;
    registrationDate:Date;
    expirationDate:Date;
    registrationPackageId:number;
}
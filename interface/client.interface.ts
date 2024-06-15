export interface ClientInterface {
  readonly firstname: string;
  readonly lastname: string;
  readonly username: string;
  readonly email: string;
  password: string;
  readonly city: string;
  readonly province: string;
  // TODO: if i use number can i include: +? like : +98 917 433 0422?
  readonly phoneNumber: number;
  acess_token: string;
}

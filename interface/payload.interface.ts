export interface PayloadClientInterface {
      sub: {
        uuid: number,
        firstname: string,
        lastname: string,
        profile: string,
      },
}



export interface PayloadLawyerInterface {
  username: string;
  sub: {
    job_area: Array<string>;
    firstname: string;
    lastname: string;
  }
}
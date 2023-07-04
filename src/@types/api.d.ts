declare namespace Api {
  export namespace User {
    export namespace Req {
      export interface Login {
        email: string;
        password: string;
      }
      export interface Create {
        firstName: string;
        lastName: string;
        email: string;
        userName: string;
        password: string;
        confirmPassword: string;
      }
    }
    export namespace Res {
      export interface Create {
        id: number;
        userName: string;
      }
    }
  }
}

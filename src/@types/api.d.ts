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
  export namespace Product {
    export namespace Req {
      export interface Create {
        userId: number;
        title: string;
        description: string;
        category: string;
        salePrice: number;
        condition: string;
        contactMethod: string;
        firstLastName: string;
        email: string;
        phoneNumber: number;
        acceptsSMS: boolean;
        zipCode: number;
        city: string;
        state: string;
      }
    }
    export namespace Res {
      export interface Create {
        id: number;
      }
    }
  }
}

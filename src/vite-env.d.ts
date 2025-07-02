/* eslint-disable @typescript-eslint/no-explicit-any */
/// <reference types="vite/client" />
declare module "host/firebase" {
  export const firebase: {
    auth: {
      currentUser: any;
    };
  };
}

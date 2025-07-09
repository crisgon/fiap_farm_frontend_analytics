/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useAppDispatch } from "@/stores/redux/hooks";
// import { setUser } from "@/stores/redux/slices/authSlice";
import { store } from "@/stores/redux/store";
import { useEffect } from "react";
import { Provider } from "react-redux";

function AuthGate({ children }: { children: React.JSX.Element }) {
  //   const dispatch = useAppDispatch();
  useEffect(() => {
    const handler = (event: Event) => {
      const customEvent = event as CustomEvent<{ detail: unknown }>;

      console.log("AUTH GATE PAYLOAD: ", customEvent.detail);

      //   dispatch(setUser(customEvent.detail));
    };
    window.addEventListener("user-authenticated", handler);

    window.dispatchEvent(new CustomEvent("request-user-authenticated"));

    return () => window.removeEventListener("user-authenticated", handler);
  }, []);

  return children;
}

export function withAuthGate(WrappedComponent: any) {
  function ComponentWithAuth(props: any) {
    return (
      <AuthGate>
        <WrappedComponent {...props} />
      </AuthGate>
    );
  }
  return ComponentWithAuth;
}

export function withStore(WrappedComponent: any) {
  function ComponentWithStore(props: any) {
    return (
      <Provider store={store}>
        <AuthGate>
          <WrappedComponent {...props} />
        </AuthGate>
      </Provider>
    );
  }
  return ComponentWithStore;
}

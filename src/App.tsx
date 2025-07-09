import { Route, Routes } from "react-router-dom";
import { Home } from "./modules";
import { useAppDispatch, useAppSelector } from "./stores/redux/hooks";
import { useEffect } from "react";
import { setUser } from "./stores/redux/slices/authSlice";

interface AppComponent {
  user?: unknown;
}

function App({ user }: AppComponent) {
  const dispatch = useAppDispatch();

  const store = useAppSelector((state) => state);
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  console.log("ANALYTICS", store);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="reports" element={<div>ANALYTICS</div>} />
    </Routes>
  );
}

export { App };

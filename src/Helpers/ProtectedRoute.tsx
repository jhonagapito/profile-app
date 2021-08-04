import React from "react";
import { Redirect, Route } from "react-router-dom";
import useToken from "./useToken";

const ProtectedRoute: React.FC<any> = ({
  comp: Component,
  ...restofProps
}) => {
  const { token } = useToken();
  return (
    <Route
      {...restofProps}
      render={(props) =>
        !token.isAuth ? <Redirect to="/login" /> : <Component {...props} /> }
    />
  );
};

export default ProtectedRoute;

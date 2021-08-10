import React from "react";
import App from "./App";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// const httpLink = createHttpLink({
//   uri: "/graphql",
// });

// const authLink = setContext(() => {
//   const token = localStorage.getItem("auth_token");
//   return {
//     headers: {
//       Authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("auth_token");

    operation.setContext({
      headers: {
        Authorization: token ? token : "",
      },
    });
  },
  url: "/graphql",
});

export default (
  <ApolloProvider client={client}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </ApolloProvider>
);

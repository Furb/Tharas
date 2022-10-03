import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl77l8qn414ox01uk0emv0mr6/master",
  cache: new InMemoryCache(),
});

export default client;

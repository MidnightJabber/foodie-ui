// https://dev-blog.apollodata.com/full-stack-react-graphql-tutorial-582ac8d24e3b
const typeDefs = `
  type User {
    id: ID!
    userName: String
    firstName: String
    lastName: String
    email: String
  }

  type Ingredient {
    id: ID!
    name: String!
    image: String
  }
`;

export default typeDefs;

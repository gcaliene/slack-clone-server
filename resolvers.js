// resolvers should match the schema

export default {
  Query: {
    hi: (parent, args, context, info) => 'hi',
  },
};

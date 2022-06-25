import { fileLoader, mergeResolvers } from 'merge-graphql-schemas';
import path from "path";

const resolvers = mergeResolvers(fileLoader(path.join(__dirname,'modules','**','*.js')));

export default resolvers;

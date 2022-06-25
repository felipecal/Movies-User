import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname,'modules','**','*.gql')));

export default typeDefs;

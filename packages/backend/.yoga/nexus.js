/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */






declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  EstateTypeEnum: "lease" | "sale"
}

export interface NexusGenRootTypes {
  Estate: { // root type
    area: number; // Int!
    description: string; // String!
    facilities: string[]; // [String!]!
    id: string; // ID!
    title: string; // String!
    type: NexusGenEnums['EstateTypeEnum']; // EstateTypeEnum!
  }
  EstatePrice: { // root type
    amount: number; // Float!
    currency: string; // String!
  }
  Media: { // root type
    id: string; // ID!
    url: string; // String!
  }
  Mutation: {};
  Query: {};
  User: { // root type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    surname: string; // String!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  EstateTypeEnum: NexusGenEnums['EstateTypeEnum'];
}

export interface NexusGenFieldTypes {
  Estate: { // field return type
    area: number; // Int!
    description: string; // String!
    facilities: string[]; // [String!]!
    fullAddress: string; // String!
    id: string; // ID!
    medias: NexusGenRootTypes['Media'][]; // [Media!]!
    price: NexusGenRootTypes['EstatePrice']; // EstatePrice!
    title: string; // String!
    type: NexusGenEnums['EstateTypeEnum']; // EstateTypeEnum!
    user: NexusGenRootTypes['User']; // User!
  }
  EstatePrice: { // field return type
    amount: number; // Float!
    currency: string; // String!
  }
  Media: { // field return type
    id: string; // ID!
    url: string; // String!
  }
  Mutation: { // field return type
    createUser: NexusGenRootTypes['User']; // User!
    deleteUser: NexusGenRootTypes['User']; // User!
    updateUser: NexusGenRootTypes['User']; // User!
  }
  Query: { // field return type
    estate: NexusGenRootTypes['Estate']; // Estate!
    estates: NexusGenRootTypes['Estate'][]; // [Estate!]!
    estatesOffsetBased: NexusGenRootTypes['Estate'][]; // [Estate!]!
    hello: string; // String!
    media: NexusGenRootTypes['Media']; // Media!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  User: { // field return type
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    surname: string; // String!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      email: string; // String!
      name: string; // String!
      surname: string; // String!
    }
    deleteUser: { // args
      id: string; // String!
    }
    updateUser: { // args
      email?: string | null; // String
      id: string; // String!
      name?: string | null; // String
      surname?: string | null; // String
    }
  }
  Query: {
    estate: { // args
      id: number; // Int!
    }
    estates: { // args
      limit: number; // Int!
      offset: number; // Int!
    }
    estatesOffsetBased: { // args
      after: number; // Int!
      before: number; // Int!
      first: number; // Int!
      last: number; // Int!
    }
    hello: { // args
      name: string; // String!
    }
    media: { // args
      id: string; // ID!
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "Estate" | "EstatePrice" | "Media" | "Mutation" | "Query" | "User";

export type NexusGenInputNames = never;

export type NexusGenEnumNames = "EstateTypeEnum";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}
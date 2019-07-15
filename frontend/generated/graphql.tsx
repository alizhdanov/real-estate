import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Estate = {
  __typename?: "Estate";
  id: Scalars["ID"];
  title: Scalars["String"];
  type: EstateTypeEnum;
  price: EstatePrice;
  description: Scalars["String"];
  area: Scalars["Int"];
  fullAddress: Scalars["String"];
  facilities: Array<Scalars["String"]>;
  user: User;
  medias: Array<Media>;
};

export type EstatePrice = {
  __typename?: "EstatePrice";
  amount: Scalars["Float"];
  currency: Scalars["String"];
};

export enum EstateTypeEnum {
  Sale = "sale",
  Lease = "lease"
}

export type Media = {
  __typename?: "Media";
  id: Scalars["ID"];
  url: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createUser: User;
  updateUser: User;
  deleteUser: User;
};

export type MutationCreateUserArgs = {
  name: Scalars["String"];
  surname: Scalars["String"];
  email: Scalars["String"];
};

export type MutationUpdateUserArgs = {
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
  surname?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
};

export type MutationDeleteUserArgs = {
  id: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  hello: Scalars["String"];
  users: Array<User>;
  estate: Estate;
  estates: Array<Estate>;
  estatesOffsetBased: Array<Estate>;
  media: Media;
};

export type QueryHelloArgs = {
  name: Scalars["String"];
};

export type QueryEstateArgs = {
  id: Scalars["Int"];
};

export type QueryEstatesArgs = {
  limit?: Scalars["Int"];
  offset?: Scalars["Int"];
};

export type QueryEstatesOffsetBasedArgs = {
  first?: Scalars["Int"];
  last?: Scalars["Int"];
  before?: Scalars["Int"];
  after?: Scalars["Int"];
};

export type QueryMediaArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  name: Scalars["String"];
  surname: Scalars["String"];
  email: Scalars["String"];
};
export type ApartmentsQueryQueryVariables = {};

export type ApartmentsQueryQuery = { __typename?: "Query" } & {
  estates: Array<
    { __typename?: "Estate" } & Pick<Estate, "id"> & AppartmentCard_DataFragment
  >;
};

export type AppartmentCard_DataFragment = { __typename?: "Estate" } & Pick<
  Estate,
  "id" | "title"
> & {
    price: { __typename?: "EstatePrice" } & Pick<EstatePrice, "amount">;
    medias: Array<{ __typename?: "Media" } & Pick<Media, "url">>;
  };

export type EstateQueryQueryVariables = {
  id: Scalars["Int"];
};

export type EstateQueryQuery = { __typename?: "Query" } & {
  estate: { __typename?: "Estate" } & Pick<
    Estate,
    "id" | "title" | "area" | "fullAddress"
  > & { price: { __typename?: "EstatePrice" } & Pick<EstatePrice, "amount"> };
};
export const AppartmentCard_dataFragmentDoc = gql`
  fragment AppartmentCard_data on Estate {
    id
    title
    price {
      amount
    }
    medias {
      url
    }
  }
`;
export const ApartmentsQueryDocument = gql`
  query ApartmentsQuery {
    estates(limit: 6) {
      id
      ...AppartmentCard_data
    }
  }
  ${AppartmentCard_dataFragmentDoc}
`;
export type ApartmentsQueryComponentProps = Omit<
  ReactApollo.QueryProps<ApartmentsQueryQuery, ApartmentsQueryQueryVariables>,
  "query"
>;

export const ApartmentsQueryComponent = (
  props: ApartmentsQueryComponentProps
) => (
  <ReactApollo.Query<ApartmentsQueryQuery, ApartmentsQueryQueryVariables>
    query={ApartmentsQueryDocument}
    {...props}
  />
);

export type ApartmentsQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ApartmentsQueryQuery, ApartmentsQueryQueryVariables>
> &
  TChildProps;
export function withApartmentsQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ApartmentsQueryQuery,
    ApartmentsQueryQueryVariables,
    ApartmentsQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    ApartmentsQueryQuery,
    ApartmentsQueryQueryVariables,
    ApartmentsQueryProps<TChildProps>
  >(ApartmentsQueryDocument, {
    alias: "withApartmentsQuery",
    ...operationOptions
  });
}
export const EstateQueryDocument = gql`
  query EstateQuery($id: Int!) {
    estate(id: $id) {
      id
      title
      price {
        amount
      }
      area
      fullAddress
    }
  }
`;
export type EstateQueryComponentProps = Omit<
  ReactApollo.QueryProps<EstateQueryQuery, EstateQueryQueryVariables>,
  "query"
> &
  ({ variables: EstateQueryQueryVariables; skip?: false } | { skip: true });

export const EstateQueryComponent = (props: EstateQueryComponentProps) => (
  <ReactApollo.Query<EstateQueryQuery, EstateQueryQueryVariables>
    query={EstateQueryDocument}
    {...props}
  />
);

export type EstateQueryProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<EstateQueryQuery, EstateQueryQueryVariables>
> &
  TChildProps;
export function withEstateQuery<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    EstateQueryQuery,
    EstateQueryQueryVariables,
    EstateQueryProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    EstateQueryQuery,
    EstateQueryQueryVariables,
    EstateQueryProps<TChildProps>
  >(EstateQueryDocument, {
    alias: "withEstateQuery",
    ...operationOptions
  });
}
export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}

const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};

export default result;

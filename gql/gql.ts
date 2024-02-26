/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query activeAuction {\n  auctionsCollection(filter: {isActive: {eq: true}}) {\n    edges {\n      node {\n        name\n        link\n        isActive\n      }\n    }\n  }\n}": types.ActiveAuctionDocument,
    "query allAnalysis {\n  analysisCollection {\n    edges {\n      node {\n        id\n        protocol\n        category\n        tvl\n        liquidity\n        assetcoverage\n        userbase\n        hastoken\n        narrative\n        sentiment\n        contractrisk\n        audit\n        reputation\n        team\n        grating\n        safety\n        lastupdate\n      }\n    }\n  }\n}": types.AllAnalysisDocument,
    "query AllBlogs {\n  blogCollection {\n    edges {\n      node {\n        id\n        title\n        subtitle\n        publishDate\n        content\n        cardImage\n      }\n    }\n  }\n}": types.AllBlogsDocument,
    "query AllInvestments {\n  investmentsCollection {\n    edges {\n      node {\n        id\n        name\n        date\n        status\n        imageUrl\n      }\n    }\n  }\n}": types.AllInvestmentsDocument,
    "query AllNotes {\n  notesCollection {\n    __typename\n    edges {\n      node {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}": types.AllNotesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query activeAuction {\n  auctionsCollection(filter: {isActive: {eq: true}}) {\n    edges {\n      node {\n        name\n        link\n        isActive\n      }\n    }\n  }\n}"): (typeof documents)["query activeAuction {\n  auctionsCollection(filter: {isActive: {eq: true}}) {\n    edges {\n      node {\n        name\n        link\n        isActive\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allAnalysis {\n  analysisCollection {\n    edges {\n      node {\n        id\n        protocol\n        category\n        tvl\n        liquidity\n        assetcoverage\n        userbase\n        hastoken\n        narrative\n        sentiment\n        contractrisk\n        audit\n        reputation\n        team\n        grating\n        safety\n        lastupdate\n      }\n    }\n  }\n}"): (typeof documents)["query allAnalysis {\n  analysisCollection {\n    edges {\n      node {\n        id\n        protocol\n        category\n        tvl\n        liquidity\n        assetcoverage\n        userbase\n        hastoken\n        narrative\n        sentiment\n        contractrisk\n        audit\n        reputation\n        team\n        grating\n        safety\n        lastupdate\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllBlogs {\n  blogCollection {\n    edges {\n      node {\n        id\n        title\n        subtitle\n        publishDate\n        content\n        cardImage\n      }\n    }\n  }\n}"): (typeof documents)["query AllBlogs {\n  blogCollection {\n    edges {\n      node {\n        id\n        title\n        subtitle\n        publishDate\n        content\n        cardImage\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllInvestments {\n  investmentsCollection {\n    edges {\n      node {\n        id\n        name\n        date\n        status\n        imageUrl\n      }\n    }\n  }\n}"): (typeof documents)["query AllInvestments {\n  investmentsCollection {\n    edges {\n      node {\n        id\n        name\n        date\n        status\n        imageUrl\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query AllNotes {\n  notesCollection {\n    __typename\n    edges {\n      node {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}"): (typeof documents)["query AllNotes {\n  notesCollection {\n    __typename\n    edges {\n      node {\n        nodeId\n        id\n        title\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;
/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
	[_ in K]?: never;
};
export type Incremental<T> =
	| T
	| { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
	/** A high precision floating point value represented as a string */
	BigFloat: { input: any; output: any };
	/** An arbitrary size integer represented as a string */
	BigInt: { input: any; output: any };
	/** An opaque string using for tracking a position in results during pagination */
	Cursor: { input: any; output: any };
	/** A date wihout time information */
	Date: { input: any; output: any };
	/** A date and time */
	Datetime: { input: any; output: any };
	/** A Javascript Object Notation value serialized as a string */
	JSON: { input: any; output: any };
	/** Any type not handled by the type system */
	Opaque: { input: any; output: any };
	/** A time without date information */
	Time: { input: any; output: any };
	/** A universally unique identifier */
	UUID: { input: any; output: any };
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
	eq?: InputMaybe<Scalars["BigFloat"]["input"]>;
	gt?: InputMaybe<Scalars["BigFloat"]["input"]>;
	gte?: InputMaybe<Scalars["BigFloat"]["input"]>;
	in?: InputMaybe<Array<Scalars["BigFloat"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["BigFloat"]["input"]>;
	lte?: InputMaybe<Scalars["BigFloat"]["input"]>;
	neq?: InputMaybe<Scalars["BigFloat"]["input"]>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
	eq?: InputMaybe<Scalars["BigInt"]["input"]>;
	gt?: InputMaybe<Scalars["BigInt"]["input"]>;
	gte?: InputMaybe<Scalars["BigInt"]["input"]>;
	in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["BigInt"]["input"]>;
	lte?: InputMaybe<Scalars["BigInt"]["input"]>;
	neq?: InputMaybe<Scalars["BigInt"]["input"]>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
	eq?: InputMaybe<Scalars["Boolean"]["input"]>;
	is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
	eq?: InputMaybe<Scalars["Date"]["input"]>;
	gt?: InputMaybe<Scalars["Date"]["input"]>;
	gte?: InputMaybe<Scalars["Date"]["input"]>;
	in?: InputMaybe<Array<Scalars["Date"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Date"]["input"]>;
	lte?: InputMaybe<Scalars["Date"]["input"]>;
	neq?: InputMaybe<Scalars["Date"]["input"]>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
	eq?: InputMaybe<Scalars["Datetime"]["input"]>;
	gt?: InputMaybe<Scalars["Datetime"]["input"]>;
	gte?: InputMaybe<Scalars["Datetime"]["input"]>;
	in?: InputMaybe<Array<Scalars["Datetime"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Datetime"]["input"]>;
	lte?: InputMaybe<Scalars["Datetime"]["input"]>;
	neq?: InputMaybe<Scalars["Datetime"]["input"]>;
};

export enum FilterIs {
	NotNull = "NOT_NULL",
	Null = "NULL",
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
	eq?: InputMaybe<Scalars["Float"]["input"]>;
	gt?: InputMaybe<Scalars["Float"]["input"]>;
	gte?: InputMaybe<Scalars["Float"]["input"]>;
	in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Float"]["input"]>;
	lte?: InputMaybe<Scalars["Float"]["input"]>;
	neq?: InputMaybe<Scalars["Float"]["input"]>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
	eq?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
	eq?: InputMaybe<Scalars["Int"]["input"]>;
	gt?: InputMaybe<Scalars["Int"]["input"]>;
	gte?: InputMaybe<Scalars["Int"]["input"]>;
	in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Int"]["input"]>;
	lte?: InputMaybe<Scalars["Int"]["input"]>;
	neq?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The root type for creating and mutating data */
export type Mutation = {
	__typename?: "Mutation";
	/** Deletes zero or more records from the `auctions` collection */
	deleteFromauctionsCollection: AuctionsDeleteResponse;
	/** Deletes zero or more records from the `blog` collection */
	deleteFromblogCollection: BlogDeleteResponse;
	/** Deletes zero or more records from the `investments` collection */
	deleteFrominvestmentsCollection: InvestmentsDeleteResponse;
	/** Deletes zero or more records from the `notes` collection */
	deleteFromnotesCollection: NotesDeleteResponse;
	/** Adds one or more `auctions` records to the collection */
	insertIntoauctionsCollection?: Maybe<AuctionsInsertResponse>;
	/** Adds one or more `blog` records to the collection */
	insertIntoblogCollection?: Maybe<BlogInsertResponse>;
	/** Adds one or more `investments` records to the collection */
	insertIntoinvestmentsCollection?: Maybe<InvestmentsInsertResponse>;
	/** Adds one or more `notes` records to the collection */
	insertIntonotesCollection?: Maybe<NotesInsertResponse>;
	/** Updates zero or more records in the `auctions` collection */
	updateauctionsCollection: AuctionsUpdateResponse;
	/** Updates zero or more records in the `blog` collection */
	updateblogCollection: BlogUpdateResponse;
	/** Updates zero or more records in the `investments` collection */
	updateinvestmentsCollection: InvestmentsUpdateResponse;
	/** Updates zero or more records in the `notes` collection */
	updatenotesCollection: NotesUpdateResponse;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromauctionsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<AuctionsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromblogCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<BlogFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFrominvestmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<InvestmentsFilter>;
};

/** The root type for creating and mutating data */
export type MutationDeleteFromnotesCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<NotesFilter>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoauctionsCollectionArgs = {
	objects: Array<AuctionsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoblogCollectionArgs = {
	objects: Array<BlogInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntoinvestmentsCollectionArgs = {
	objects: Array<InvestmentsInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationInsertIntonotesCollectionArgs = {
	objects: Array<NotesInsertInput>;
};

/** The root type for creating and mutating data */
export type MutationUpdateauctionsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<AuctionsFilter>;
	set: AuctionsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateblogCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<BlogFilter>;
	set: BlogUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdateinvestmentsCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<InvestmentsFilter>;
	set: InvestmentsUpdateInput;
};

/** The root type for creating and mutating data */
export type MutationUpdatenotesCollectionArgs = {
	atMost?: Scalars["Int"]["input"];
	filter?: InputMaybe<NotesFilter>;
	set: NotesUpdateInput;
};

export type Node = {
	/** Retrieves a record by `ID` */
	nodeId?: Scalars["ID"]["output"];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
	eq?: InputMaybe<Scalars["Opaque"]["input"]>;
	is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
	/** Ascending order, nulls first */
	AscNullsFirst = "AscNullsFirst",
	/** Ascending order, nulls last */
	AscNullsLast = "AscNullsLast",
	/** Descending order, nulls first */
	DescNullsFirst = "DescNullsFirst",
	/** Descending order, nulls last */
	DescNullsLast = "DescNullsLast",
}

export type PageInfo = {
	__typename?: "PageInfo";
	endCursor?: Maybe<Scalars["String"]["output"]>;
	hasNextPage: Scalars["Boolean"]["output"];
	hasPreviousPage: Scalars["Boolean"]["output"];
	startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The root type for querying data */
export type Query = {
	__typename?: "Query";
	/** A pagable collection of type `auctions` */
	auctionsCollection?: Maybe<AuctionsConnection>;
	/** A pagable collection of type `blog` */
	blogCollection?: Maybe<BlogConnection>;
	/** A pagable collection of type `investments` */
	investmentsCollection?: Maybe<InvestmentsConnection>;
	/** Retrieve a record by its `ID` */
	node?: Maybe<Node>;
	/** A pagable collection of type `notes` */
	notesCollection?: Maybe<NotesConnection>;
};

/** The root type for querying data */
export type QueryAuctionsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<AuctionsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<AuctionsOrderBy>>;
};

/** The root type for querying data */
export type QueryBlogCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<BlogFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<BlogOrderBy>>;
};

/** The root type for querying data */
export type QueryInvestmentsCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<InvestmentsFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<InvestmentsOrderBy>>;
};

/** The root type for querying data */
export type QueryNodeArgs = {
	nodeId: Scalars["ID"]["input"];
};

/** The root type for querying data */
export type QueryNotesCollectionArgs = {
	after?: InputMaybe<Scalars["Cursor"]["input"]>;
	before?: InputMaybe<Scalars["Cursor"]["input"]>;
	filter?: InputMaybe<NotesFilter>;
	first?: InputMaybe<Scalars["Int"]["input"]>;
	last?: InputMaybe<Scalars["Int"]["input"]>;
	orderBy?: InputMaybe<Array<NotesOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
	eq?: InputMaybe<Scalars["String"]["input"]>;
	gt?: InputMaybe<Scalars["String"]["input"]>;
	gte?: InputMaybe<Scalars["String"]["input"]>;
	ilike?: InputMaybe<Scalars["String"]["input"]>;
	in?: InputMaybe<Array<Scalars["String"]["input"]>>;
	iregex?: InputMaybe<Scalars["String"]["input"]>;
	is?: InputMaybe<FilterIs>;
	like?: InputMaybe<Scalars["String"]["input"]>;
	lt?: InputMaybe<Scalars["String"]["input"]>;
	lte?: InputMaybe<Scalars["String"]["input"]>;
	neq?: InputMaybe<Scalars["String"]["input"]>;
	regex?: InputMaybe<Scalars["String"]["input"]>;
	startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
	eq?: InputMaybe<Scalars["Time"]["input"]>;
	gt?: InputMaybe<Scalars["Time"]["input"]>;
	gte?: InputMaybe<Scalars["Time"]["input"]>;
	in?: InputMaybe<Array<Scalars["Time"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	lt?: InputMaybe<Scalars["Time"]["input"]>;
	lte?: InputMaybe<Scalars["Time"]["input"]>;
	neq?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
	eq?: InputMaybe<Scalars["UUID"]["input"]>;
	in?: InputMaybe<Array<Scalars["UUID"]["input"]>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<Scalars["UUID"]["input"]>;
};

export type Auctions = Node & {
	__typename?: "auctions";
	id: Scalars["BigInt"]["output"];
	isActive?: Maybe<Scalars["Boolean"]["output"]>;
	link?: Maybe<Scalars["String"]["output"]>;
	name?: Maybe<Scalars["String"]["output"]>;
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
};

export type AuctionsConnection = {
	__typename?: "auctionsConnection";
	edges: Array<AuctionsEdge>;
	pageInfo: PageInfo;
};

export type AuctionsDeleteResponse = {
	__typename?: "auctionsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Auctions>;
};

export type AuctionsEdge = {
	__typename?: "auctionsEdge";
	cursor: Scalars["String"]["output"];
	node: Auctions;
};

export type AuctionsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<AuctionsFilter>>;
	id?: InputMaybe<BigIntFilter>;
	isActive?: InputMaybe<BooleanFilter>;
	link?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<AuctionsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<AuctionsFilter>>;
};

export type AuctionsInsertInput = {
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	link?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuctionsInsertResponse = {
	__typename?: "auctionsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Auctions>;
};

export type AuctionsOrderBy = {
	id?: InputMaybe<OrderByDirection>;
	isActive?: InputMaybe<OrderByDirection>;
	link?: InputMaybe<OrderByDirection>;
	name?: InputMaybe<OrderByDirection>;
};

export type AuctionsUpdateInput = {
	isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
	link?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
};

export type AuctionsUpdateResponse = {
	__typename?: "auctionsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Auctions>;
};

export type Blog = Node & {
	__typename?: "blog";
	cardImage?: Maybe<Scalars["String"]["output"]>;
	content?: Maybe<Scalars["String"]["output"]>;
	id?: Scalars["Int"]["output"];
	/** Globally Unique Record Identifier */
	nodeId?: Scalars["ID"]["output"];
	publishDate?: Maybe<Scalars["Date"]["output"]>;
	subtitle?: Maybe<Scalars["String"]["output"]>;
	title: Scalars["String"]["output"];
};

export type BlogConnection = {
	__typename?: "blogConnection";
	edges: Array<BlogEdge>;
	pageInfo: PageInfo;
};

export type BlogDeleteResponse = {
	__typename?: "blogDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Blog>;
};

export type BlogEdge = {
	__typename?: "blogEdge";
	cursor: Scalars["String"]["output"];
	node: Blog;
};

export type BlogFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<BlogFilter>>;
	cardImage?: InputMaybe<StringFilter>;
	content?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<BlogFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<BlogFilter>>;
	publishDate?: InputMaybe<DateFilter>;
	subtitle?: InputMaybe<StringFilter>;
	title?: InputMaybe<StringFilter>;
};

export type BlogInsertInput = {
	cardImage?: InputMaybe<Scalars["String"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	publishDate?: InputMaybe<Scalars["Date"]["input"]>;
	subtitle?: InputMaybe<Scalars["String"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogInsertResponse = {
	__typename?: "blogInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Blog>;
};

export type BlogOrderBy = {
	cardImage?: InputMaybe<OrderByDirection>;
	content?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	publishDate?: InputMaybe<OrderByDirection>;
	subtitle?: InputMaybe<OrderByDirection>;
	title?: InputMaybe<OrderByDirection>;
};

export type BlogUpdateInput = {
	cardImage?: InputMaybe<Scalars["String"]["input"]>;
	content?: InputMaybe<Scalars["String"]["input"]>;
	publishDate?: InputMaybe<Scalars["Date"]["input"]>;
	subtitle?: InputMaybe<Scalars["String"]["input"]>;
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogUpdateResponse = {
	__typename?: "blogUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Blog>;
};

export enum InvestmentStatus {
	InProgress = "in_progress",
	Invested = "invested",
}

/** Boolean expression comparing fields on type "investmentStatus" */
export type InvestmentStatusFilter = {
	eq?: InputMaybe<InvestmentStatus>;
	in?: InputMaybe<Array<InvestmentStatus>>;
	is?: InputMaybe<FilterIs>;
	neq?: InputMaybe<InvestmentStatus>;
};

export type Investments = Node & {
	__typename?: "investments";
	date?: Maybe<Scalars["String"]["output"]>;
	id?: Scalars["Int"]["output"];
	imageUrl?: Maybe<Scalars["String"]["output"]>;
	name: Scalars["String"]["output"];
	/** Globally Unique Record Identifier */
	nodeId?: Scalars["ID"]["output"];
	status?: Maybe<InvestmentStatus>;
};

export type InvestmentsConnection = {
	__typename?: "investmentsConnection";
	edges: Array<InvestmentsEdge>;
	pageInfo: PageInfo;
};

export type InvestmentsDeleteResponse = {
	__typename?: "investmentsDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Investments>;
};

export type InvestmentsEdge = {
	__typename?: "investmentsEdge";
	cursor: Scalars["String"]["output"];
	node: Investments;
};

export type InvestmentsFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<InvestmentsFilter>>;
	date?: InputMaybe<StringFilter>;
	id?: InputMaybe<IntFilter>;
	imageUrl?: InputMaybe<StringFilter>;
	name?: InputMaybe<StringFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<InvestmentsFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<InvestmentsFilter>>;
	status?: InputMaybe<InvestmentStatusFilter>;
};

export type InvestmentsInsertInput = {
	date?: InputMaybe<Scalars["String"]["input"]>;
	imageUrl?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<InvestmentStatus>;
};

export type InvestmentsInsertResponse = {
	__typename?: "investmentsInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Investments>;
};

export type InvestmentsOrderBy = {
	date?: InputMaybe<OrderByDirection>;
	id?: InputMaybe<OrderByDirection>;
	imageUrl?: InputMaybe<OrderByDirection>;
	name?: InputMaybe<OrderByDirection>;
	status?: InputMaybe<OrderByDirection>;
};

export type InvestmentsUpdateInput = {
	date?: InputMaybe<Scalars["String"]["input"]>;
	imageUrl?: InputMaybe<Scalars["String"]["input"]>;
	name?: InputMaybe<Scalars["String"]["input"]>;
	status?: InputMaybe<InvestmentStatus>;
};

export type InvestmentsUpdateResponse = {
	__typename?: "investmentsUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Investments>;
};

export type Notes = Node & {
	__typename?: "notes";
	id: Scalars["Int"]["output"];
	/** Globally Unique Record Identifier */
	nodeId: Scalars["ID"]["output"];
	title?: Maybe<Scalars["String"]["output"]>;
};

export type NotesConnection = {
	__typename?: "notesConnection";
	edges: Array<NotesEdge>;
	pageInfo: PageInfo;
};

export type NotesDeleteResponse = {
	__typename?: "notesDeleteResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notes>;
};

export type NotesEdge = {
	__typename?: "notesEdge";
	cursor: Scalars["String"]["output"];
	node: Notes;
};

export type NotesFilter = {
	/** Returns true only if all its inner filters are true, otherwise returns false */
	and?: InputMaybe<Array<NotesFilter>>;
	id?: InputMaybe<IntFilter>;
	nodeId?: InputMaybe<IdFilter>;
	/** Negates a filter */
	not?: InputMaybe<NotesFilter>;
	/** Returns true if at least one of its inner filters is true, otherwise returns false */
	or?: InputMaybe<Array<NotesFilter>>;
	title?: InputMaybe<StringFilter>;
};

export type NotesInsertInput = {
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type NotesInsertResponse = {
	__typename?: "notesInsertResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notes>;
};

export type NotesOrderBy = {
	id?: InputMaybe<OrderByDirection>;
	title?: InputMaybe<OrderByDirection>;
};

export type NotesUpdateInput = {
	title?: InputMaybe<Scalars["String"]["input"]>;
};

export type NotesUpdateResponse = {
	__typename?: "notesUpdateResponse";
	/** Count of the records impacted by the mutation */
	affectedCount: Scalars["Int"]["output"];
	/** Array of records impacted by the mutation */
	records: Array<Notes>;
};

export type ActiveAuctionQueryVariables = Exact<{ [key: string]: never }>;

export type ActiveAuctionQuery = {
	__typename?: "Query";
	auctionsCollection?: {
		__typename?: "auctionsConnection";
		edges: Array<{
			__typename?: "auctionsEdge";
			node: {
				__typename?: "auctions";
				name?: string | null;
				link?: string | null;
				isActive?: boolean | null;
			};
		}>;
	} | null;
};

export type AllBlogsQueryVariables = Exact<{ [key: string]: never }>;

export type AllBlogsQuery = {
	__typename?: "Query";
	blogCollection?: {
		__typename?: "blogConnection";
		edges: Array<{
			__typename?: "blogEdge";
			node: {
				__typename?: "blog";
				id: number;
				title: string;
				subtitle?: string | null;
				publishDate?: any | null;
				content?: string | null;
				cardImage?: string | null;
			};
		}>;
	} | null;
};

export type AllInvestmentsQueryVariables = Exact<{ [key: string]: never }>;

export type AllInvestmentsQuery = {
	__typename?: "Query";
	investmentsCollection?: {
		__typename?: "investmentsConnection";
		edges: Array<{
			__typename?: "investmentsEdge";
			node: {
				__typename?: "investments";
				id: number;
				name: string;
				date?: string | null;
				status?: InvestmentStatus | null;
				imageUrl?: string | null;
			};
		}>;
	} | null;
};

export type AllNotesQueryVariables = Exact<{ [key: string]: never }>;

export type AllNotesQuery = {
	__typename?: "Query";
	notesCollection?: {
		__typename: "notesConnection";
		edges: Array<{
			__typename?: "notesEdge";
			node: { __typename?: "notes"; nodeId: string; id: number; title?: string | null };
		}>;
	} | null;
};

export const ActiveAuctionDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "activeAuction" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "auctionsCollection" },
						arguments: [
							{
								kind: "Argument",
								name: { kind: "Name", value: "filter" },
								value: {
									kind: "ObjectValue",
									fields: [
										{
											kind: "ObjectField",
											name: { kind: "Name", value: "isActive" },
											value: {
												kind: "ObjectValue",
												fields: [
													{
														kind: "ObjectField",
														name: { kind: "Name", value: "eq" },
														value: {
															kind: "BooleanValue",
															value: true,
														},
													},
												],
											},
										},
									],
								},
							},
						],
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "edges" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "node" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "name" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "link" },
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "isActive",
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<ActiveAuctionQuery, ActiveAuctionQueryVariables>;
export const AllBlogsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "AllBlogs" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "blogCollection" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "edges" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "node" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "id" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "title" },
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "subtitle",
															},
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "publishDate",
															},
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "content",
															},
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "cardImage",
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AllBlogsQuery, AllBlogsQueryVariables>;
export const AllInvestmentsDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "AllInvestments" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "investmentsCollection" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{
									kind: "Field",
									name: { kind: "Name", value: "edges" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "node" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "id" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "name" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "date" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "status" },
														},
														{
															kind: "Field",
															name: {
																kind: "Name",
																value: "imageUrl",
															},
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AllInvestmentsQuery, AllInvestmentsQueryVariables>;
export const AllNotesDocument = {
	kind: "Document",
	definitions: [
		{
			kind: "OperationDefinition",
			operation: "query",
			name: { kind: "Name", value: "AllNotes" },
			selectionSet: {
				kind: "SelectionSet",
				selections: [
					{
						kind: "Field",
						name: { kind: "Name", value: "notesCollection" },
						selectionSet: {
							kind: "SelectionSet",
							selections: [
								{ kind: "Field", name: { kind: "Name", value: "__typename" } },
								{
									kind: "Field",
									name: { kind: "Name", value: "edges" },
									selectionSet: {
										kind: "SelectionSet",
										selections: [
											{
												kind: "Field",
												name: { kind: "Name", value: "node" },
												selectionSet: {
													kind: "SelectionSet",
													selections: [
														{
															kind: "Field",
															name: { kind: "Name", value: "nodeId" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "id" },
														},
														{
															kind: "Field",
															name: { kind: "Name", value: "title" },
														},
													],
												},
											},
										],
									},
								},
							],
						},
					},
				],
			},
		},
	],
} as unknown as DocumentNode<AllNotesQuery, AllNotesQueryVariables>;

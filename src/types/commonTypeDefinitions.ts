// define your typings for the store state
export interface State {
    count: number,
    products: ResponseType | null,
    productDetail: ProductType | null,
}
export type ResponseType = {
    "id": string,
    "name": string,
    "categoryType": string,
    "groups": ProductType[],
    "totalPages": number,
    "categories": []
}
export type ProductType = {
    "id": string,
    "name": string,
    "links": {
        "www": string
    },
    "price": {
        "regular": number,
        "selling": number
    },
    "thumbnail": {
        "size": string,
        "meta": string,
        "alt": string,
        "rel": string,
        "width": number,
        "href": string,
        "height": number
    },
    "hero": {
        "size": string,
        "meta": string,
        "alt": string,
        "rel": string,
        "width": number,
        "href": string,
        "height": number
    },
    "images": {
        "size": string,
        "meta": string,
        "alt": string,
        "rel": string,
        "width": number,
        "href": string,
        "height": number
    }[],
    "swatches": [],
    "messages": [],
    "flags": {
        "bopisSuppress": false,
        "rank": number,
        "id": string
    }[],
    "reviews": {
        "recommendationCount": number,
        "likelihood": number,
        "reviewCount": number,
        "averageRating": number,
        "id": string,
        "type": string
    }
}

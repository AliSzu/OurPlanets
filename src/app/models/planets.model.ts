export interface BasicDetail {
    mass: string;
    volume: string;
}

export interface ImgSrc {
    img: string;
    imgDescription: string;
}

export interface Planet {
    basicDetails: BasicDetail[];
    description: string;
    id: number;
    imgSrc: ImgSrc[];
    key: string;
    name: string;
    planetOrder: string;
    source: string;
    wikiLink: string;
}
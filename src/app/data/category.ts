export interface categoryProps{
    imageSrc: string;
    imageAlt: string;
    imageTitle: string;
}

export const categoryData: categoryProps[] =[
    {
        imageSrc: "/Image/phone.png",
        imageAlt: "showing iPhones",
        imageTitle: "smartphones"
    },
    {
        imageSrc: "/Image/tv.png",
        imageAlt: "showing android phones",
        imageTitle: "tvs"
    },
    {
        imageSrc: "/Image/laptop.png",
        imageAlt: "showing phone cases",
        imageTitle: "laptops"
    },
    {
        imageSrc: "/Image/accessory.png",
        imageAlt: "showing sound accessories",
        imageTitle: "accessories"
    }
];
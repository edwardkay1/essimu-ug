export interface categoryProps{
    imageSrc: string;
    imageAlt: string;
    imageTitle: string;
}

export const categoryData: categoryProps[] =[
    {
        imageSrc: "/Image/iPhones.png",
        imageAlt: "showing iPhones",
        imageTitle: "smartphones"
    },
    {
        imageSrc: "/Image/androids.png",
        imageAlt: "showing android phones",
        imageTitle: "tvs"
    },
    {
        imageSrc: "/Image/cases.png",
        imageAlt: "showing phone cases",
        imageTitle: "laptops"
    },
    {
        imageSrc: "/Image/sound.png",
        imageAlt: "showing sound accessories",
        imageTitle: "accessories"
    }
];
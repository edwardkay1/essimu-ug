export interface categoryProps{
    imageSrc: string;
    imageAlt: string;
    imageTitle: string;
}

export const categoryData: categoryProps[] =[
    {
        imageSrc: "/Image/iPhones.png",
        imageAlt: "showing iPhones",
        imageTitle: "iPhones"
    },
    {
        imageSrc: "/Image/androids.png",
        imageAlt: "showing android phones",
        imageTitle: "Androids"
    },
    {
        imageSrc: "/Image/cases.png",
        imageAlt: "showing phone cases",
        imageTitle: "Protective Cases"
    },
    {
        imageSrc: "/Image/sound.png",
        imageAlt: "showing sound accessories",
        imageTitle: "Audio & Sound"
    }
];


interface Equipment{
    name: string,
    description: string,
    tags: string[]
    image?: string
}

interface Contact{
    icon?: string;
    title: string;
    value: string;
}

interface Construction{
    name: string;
    description: string;
    cost: string;
    date: string;
    customer: string;
    year: number;
    image: string;
}

export {Equipment, Contact, Construction}
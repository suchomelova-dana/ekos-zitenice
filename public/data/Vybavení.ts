import {Equipment} from "@/interfaces/Interfaces";

const equipmentArr : Equipment[] = [
    {
        name: 'Trubkové lasery',
        description: '',
        tags: [],
    },
    {
        name: 'Laserové dálkoměry',
        description: '',
        tags: [],
    },
    {
        name: 'Laserové rotační lasery',
        description: '',
        tags: [],
    },
    {
        name: 'Nivelační přístroje',
        description: '',
        tags: [],
    },
    {
        name: 'Totální stanice',
        description: '',
        tags: [],
    },
    {
        name: 'Skalní fréza',
        description: '',
        tags: [],
    },
    {
        name: 'Bourací kladiva 100 - 800 kg',
        description: '',
        tags: [],
    },
    {
        name: 'WACKER - pěch',
        description: '',
        tags: [],
    },
    {
        name: 'vibrační pěch DYNAPAC',
        description: '',
        tags: [],
    },
    {
        name: 'vibrační pěch BOMAG BT 65/4',
        description: '',
        tags: [],
    },
    {
        name: 'BOMAG BMP 851',
        description: '4 x vibrační válec',
        tags: [],
        image: '03.jpg'
    },
    {
        name: 'Zametač pro smykem řízený nakladač KOMATSU SK 714',
        description: '',
        tags: [],
        image: '39.jpg'
    },
    {
        name: 'Zametací stroj RAVO 5002 ST',
        description: '',
        tags: [],
        image: '38.jpg'
    },
    {
        name: 'Možnost také dopravy stroje nebo materiálu do 27 t',
        description: '',
        tags: [],
        image: '31.jpg'
    },
    {
        name: 'TATRA T 815',
        description: 's třístrannou sklopnou korbou',
        tags: ['nosnost 14t'],
        image: '18.jpg'
    },
    {
        name: 'AVIA D 120',
        description: 'nákladní automobil',
        tags: ['12t'],
        image: '17.jpg'
    },
    {
        name: 'Nákladní automobil IVECO TRAKKER 8X8',
        description: 's třístrannou sklopnou korbou a bočním hydraulickým čelem',
        tags: ['nosnost 15t'],
        image: '42.jpg'
    },
    {
        name: 'Nákladní automobil IVECO TRAKKER 8x8',
        description: 's třístrannou sklopnou korbou a bočním hydraulickým čelem ',
        tags: ['nosnost 16t'],
        image: '22.jpg'
    },
    {
        name: 'Nákladní automobil IVECO TRAKKER 6X6',
        description: 's třístrannou sklopnou korbou a bočním hydraulickým čelem',
        tags: ['nosnost 12t'],
        image: '41.jpg'
    },
    {
        name: 'Nákladní automobil IVECO TRAKKER',
        description: '',
        tags: ['objem vany 15m3', 'nosnost 26,5t'],
        image: '28.jpg'
    },
    {
        name: 'Tažný válec BOMAG BW 124 PHD-5',
        description: '',
        tags: ['hmotnost 3,3t'],
        image: '37.jpg'
    },
    {
        name: 'Pásový dozer KOMATSU D41E',
        description: 's vysokokapacitní úhlově stavitelnou radlicí',
        tags: ['váha 13t'],
        image: '21.jpg'
    },
    {
        name: 'KOMATSU CK 30-1',
        description: 'housenicový nakladač, dělená čelní lopata, rychloupínač, paletizační vidle, vyznačuje se robustností, značnou trakční silou i ve ztížených podmínkách',
        tags: ['nosnost 1,2t' ],
        image: '12.jpg'
    },
    {
        name: 'JCB 409',
        description: 'přední kolový nakladač',
        tags: ['nosnost 1,7t'],
        image: '36.jpg'
    },
    {
        name: 'JCB 541-70',
        description: 'kolový teleskopický manipulátor',
        tags: ['nosnost 4,1t'],
        image: '35.jpg'
    },
    {
        name: 'KOMATSU SK 714',
        description: 'smykem řízený nakladač',
        tags: ['nosnost 0,9t'],
        image: '02.jpg'
    },
    {
        name: 'KOMATSU PW 180-7EO',
        description: 'kolový bagr se zalomeným ramenem pro práci v zastavěném území, vybavený rychloupínačem, vhodné rovněž jako manipulátor',
        tags: ['váha 18,5t', 'nosnost až 4t', 'lžíce o šíře 20 až 130 cm', 'svahová lžíce šíře 2m'],
        image: '25.jpg'
    },
    {
        name: 'CASE WX 165',
        description: 'kolový bagr se zalomeným ramenem pro práci v zastavěném území, hydraulický rychloupínač, vhodné rovněž jako manipulátor',
        tags: ['váha 18t', 'nosnost až 4t', 'lžíce o šíře 60, 80, 100 a 120 cm'],
        image: '15.jpg'
    },
    {
        name: 'CASE WX 125',
        description: 'kolové rypadlo se zalomeným ramenem a ofsetem se zkrácenou zádí pro práci v zastavěném území, vybavený rychloupínačem, vhodné rovněž jako manipulátor',
        tags: ['váha 13,5t', 'nosnost až 3t', 'šíře podkopových lopat 45, 60 a 80'],
        image: '09.jpg'
    },
    {
        name: 'KOMATSU HB 215LC-2 Hybrid',
        description: 'pásové rypadlo moderní konstrukce s prodlouženým výložníkem',
        tags: ['dosah do hloubky přes 6 m', 'váha 22,5t', 'podkopové lžíce šíře 80, 100 a 140 cm'],
        image: '04.jpg',
    },
    {
        name: 'HITACHI ZX 130',
        description: 'pásové rypadlo, vybavený rychloupínačem, vhodné rovněž jako manipulátor',
        tags: ['váha 11,3 t', 'nosnost až 3t', 'šíře podkopových lopat 80, 100 a 120'],
        image: '34.jpg'
    },
    {
        name: 'CAT 317',
        description: 'Pásové rypadlo s výložníkem, ocelovými pásy, rychloupínačem, včetně svahové lopaty s pevnou naklápěcí hlavou',
        tags: ['podkop šíře 60, 80 a 100 cm s dosahem do velkých hloubek', 'váha 17,5t'],
        image: '40.jpg'
    },
    {
        name: 'CAT 309',
        description: 'Pásové rypadlo s výložníkem a zkrácenou zádí vhodné pro práci v zastavěném území, gumovými pásy, ofsetem, rychloupínačem, včetně svahové lopaty s pevnou naklápěcí hlavou',
        tags: ['podkop šíře 60, 80 a 100 cm', 'váha 10t'],
        image: '33.jpg'
    },
    {
        name: 'SCHAEFF TC 60',
        description: 'pásový minibagr s prodlouženým výložníkem a zkrácenou zádí vhodné pro práci v zastavěném území, gumovými pásy, ofsetem, rychloupínačem, možnost svahové lopaty',
        tags: ['podkop šíře 45-90 cm', 'váha 6t'],
        image: '26.jpg'
    },
    {
        name: 'KOMATSU PC 30 MR-3',
        description: 'pásový minibagr s prodlouženým výložníkem a zkrácenou zádí (vhodné pro práci v zastavěném území), gumovými pásy, ofsetem, rychloupínačem',
        tags: ['podkop šíře 40-80 cm', 'váha 3t'],
        image: '19.jpg'
    },
    {
        name: 'KOMATSU PC 30 MR-3',
        description: 'pásový minibagr s prodlouženým výložníkem a zkrácenou zádí (vhodné pro práci v zastavěném území), gumovými pásy, ofsetem, rychloupínačem',
        tags: ['podkop šíře 40-80 cm', 'váha 3t'],
        image: '19.jpg'
    },

]

export default equipmentArr.reverse()

import {Construction} from "../../src/interfaces/Interfaces";

const ConstructionsArr : Construction[] = [
    // 2009 -------------------------------------------------------------
    {
        name: 'Kralupy nad Vltavou – BUTADIEN II',
        description: 'Rekonstrukce vodovodu vč. přípojek a VŠ',
        cost: 'cca 6,2 mil.',
        date: '08-11/2009',
        customer: 'PRŮMSTAV a.s.',
        year: 2009,
        image: '2009-Kralupy.jpg'
    },
    {
        name: 'Hradec Králové – letní koupaliště',
        description: 'Realizace vodovodu a kanalizace',
        cost: 'cca 3,9 mil.',
        date: '07-12/2009',
        customer: 'GEOSAN DOPRAVNÍ STAVBY a.s.',
        year: 2009,
        image: '2009-HradecKr.jpg'
    },
    {
        name: 'Zásmuky – Silnice ½ - Průtah Zásmuky II.',
        description: 'Realizace retenční nádrže a kanalizace',
        cost: 'cca 2,0 mil.',
        date: '07-09/2009',
        customer: 'GEOSAN DOPRAVNÍ STAVBY a.s.',
        year: 2009,
        image: '2009-Zasmuky.jpg'
    },
    {
        name: 'Praha – Vozovna Kobylisy',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 4,4 mil.',
        date: '06-08/2009',
        customer: 'EDIKT a.s.',
        year: 2009,
        image: '2009-PrahaKobylisy.jpg'
    },
    {
        name: 'Ústí nad Labem – Protipovodňová hráz',
        description: 'Rekonstrukce vodovodu vč. přípojek a VŠ',
        cost: 'cca 4,2 mil.',
        date: '05/2009-12/2010',
        customer: 'SKD Průmstav – stavby, a.s.',
        year: 2009,
        image: '2009-Usti.jpg'
    },
    {
        name: 'Chabařovice (UL) – Rekultivace Milada Petri',
        description: 'Realizace vodovodu vč. výtlaku kanalizace',
        cost: 'cca 2,2 mil.',
        date: '05-07/2009',
        customer: 'REKULTIVACE Ústí nad Labem s.r.o.',
        year: 2009,
        image: '2009-Chabarovice.jpg'
    },
    {
        name: 'Kolín - BIOEBERGO',
        description: 'Rekonstrukce vodovodu vč. přípojek a VŠ',
        cost: 'cca 1,5 mil.',
        date: '01-02/2009',
        customer: 'GEOSAN DOPRAVNÍ STAVBY a.s.',
        year: 2009,
        image: '2009-Kolin.jpg'
    },

    // 2010 -------------------------------------------------------------
    {
        name: 'Praha – ÚOCHB - Rek. a oprava budovy C',
        description: 'Realizace vodovodu a kanalizace',
        cost: 'cca 6,6 mil.',
        date: '09/2010-04/2011',
        customer: 'METROSTAV a.s.',
        year: 2010,
        image: '2010-PrahaUOCHB.jpg'
    },
    {
        name: 'Obec Hlavenec - Splašková kan. + přípojky\n' +
            '– I. etapa',
        description: 'Realizace kanalizace vč. přípojek',
        cost: 'cca 16,6 mil.',
        date: '10/2010-07/2011',
        customer: 'Obec Hlavenec',
        year: 2010,
        image: '2010-Hlavenec.jpg'
    },
    {
        name: 'Praha – Rek. tramvajové trati Plzeňská',
        description: 'Rekonstrukce kanalizace',
        cost: '5,5 mil',
        date: '06-08/2010',
        customer: 'ZEVYP a.s.',
        year: 2010,
        image: '2010-PrahaPlzenska.jpg'
    },
    {
        name: 'Hradec Králové – Fakultní nemocnice (patologie a vasografie)',
        description: 'Realizace vodovodu a kanalizace',
        cost: 'cca 6,2 mil.',
        date: '05-08/2010',
        customer: 'DOPRAVNÍ STAVBY BOHEMIA a.s.',
        year: 2010,
        image: '2010-HradecKr.jpg'
    },
    {
        name: 'Jíčín – koupaliště Kníže',
        description: 'Realizace vodovodu a kanalizace',
        cost: 'cca 4,8 mil.',
        date: '04-09/2010',
        customer: 'DOPRAVNÍ STAVBY BOHEMIA a.s.',
        year: 2010,
        image: '2010-Jicin.jpg'
    },
    {
        name: 'Kolín - oblastní nemocnice',
        description: 'Realizace vodovodu a kanalizace',
        cost: 'cca 2,6 mil.',
        date: '02-06/2010',
        customer: 'DOPRAVNÍ STAVBY BOHEMIA a.s.',
        year: 2010,
        image: '2010-Kolin.jpg'
    },

    // 2011 -------------------------------------------------------------
    {
        name: 'Litvínov – Obchodní centrum Kaufland',
        description: 'Realizace vodovodu a kanalizace vč. zatrubnění potoka',
        cost: 'cca 6,0 mil.',
        date: '10/2011-04/2012',
        customer: 'YSSEN – spol. s r.o.',
        year: 2011,
        image: '2011-Litvinov.jpg'
    },
    {
        name: 'Obec Hlavenec - Kanalizace + přípojky – II. etapa',
        description: 'Realizace kanalizace vč. přípojek',
        cost: 'cca 11,0 mil.',
        date: '08/2011-03/2012',
        customer: 'Obec Hlavenec',
        year: 2011,
        image: '2011-Hlavenec.jpg'
    },
    {
        name: 'Kadaň – rekonstrukce ul. Poštovní',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 2,1 mil.',
        date: '08-11/2011',
        customer: 'RAVEL spol. s r.o.\n',
        year: 2011,
        image: '2011-Kadan.jpg'
    },
    {
        name: 'Praha – ÚOCHB, rek. a oprava budovy C',
        description: 'Realizace komunikací',
        cost: 'cca 1,1 mil.',
        date: '08-10/2011',
        customer: 'METROSTAV a.s.',
        year: 2011,
        image: '2011-PrahaUOCHB.jpg'
    },
    {
        name: 'Praha - Komerční zóna Horní Počernice',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 7,7 mil.',
        date: '07/2011-04/2012',
        customer: 'PP 53, a.s.',
        year: 2011,
        image: '2011-PrahaPocernice.jpg'
    },
    {
        name: 'Kladno - LEGO',
        description: 'Realizace kanalizace - retence',
        cost: 'cca 34,9 mil.',
        date: '06-07/2011',
        customer: 'DOPRAVNÍ STAVBY BOHEMIA a.s.',
        year: 2011,
        image: '2011-Kladno.jpg'
    },
    {
        name: 'Praha, Hostivař - Bydlení nad přehradou II.',
        description: 'Realizace vodovodu, kanalizace vč. retence a ČS',
        cost: 'cca 3,0 mil.',
        date: '04/2011-04/2012',
        customer: 'PP 53, a.s.',
        year: 2011,
        image: '2011-PrahaHostivar.jpg'
    },
    {
        name: 'Mělník - Chloumek, dostavba kanalizace II.etapa',
        description: 'Realizace kanalizace',
        cost: 'cca 32,4 mil.',
        date: '02/2011-04/2012',
        customer: 'CGM Czech, a.s.',
        year: 2011,
        image: '2011-Melnik.jpg'
    },

    // 2012 -------------------------------------------------------------
    {
        name: 'Horní Jiřetín - kanalizace a ČOV',
        description: 'Realizace výstavby nové kanalizace vč. přípojek',
        cost: 'cca 46,9 mil.',
        date: '06/2012-10/2014',
        customer: 'Metrostav a.s.',
        year: 2012,
        image: '2012-HorniJiretin.jpg'
    },
    {
        name: 'Ústí nad Labem - SPU - II. ETAPA DOSTAVBA',
        description: 'Realizace vodovodu, kanalizace a HTÚ',
        cost: 'cca 3,7 mil.',
        date: '09-12/2012',
        customer: 'SKD Průmstav – stavby, a.s.',
        year: 2012,
        image: '2012-Usti.jpg'
    },
    {
        name: 'Litoměřice - prodejna LIDL',
        description: 'Realizace vodovodu, kanalizace, plynu a komunikace',
        cost: 'cca 10,3 mil.',
        date: '08-12/2012',
        customer: 'Lidl Česká republika v.o.s.',
        year: 2012,
        image: '2012-Litomerice.jpg'
    },
    {
        name: 'Žatec - PZ TRIANGLE - HARGO',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 3,8 mil.',
        date: '08-12/2012',
        customer: 'SKD Průmstav – stavby, a.s.',
        year: 2012,
        image: '2012-Zatec.jpg'
    },
    {
        name: 'Povrly - Sídliště rodinných domků I. etapa',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 3,5 mil.',
        date: '06-11/2012',
        customer: 'RAVEL spol. s r.o.',
        year: 2012,
        image: '2012-Povrly.jpg'
    },
    {
        name: 'Praha - Polyfunkční dům Pod Ladronkou',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 1,2 mil.',
        date: '01-07/2012',
        customer: 'METROSTAV a.s.',
        year: 2012,
        image: '2012-PrahaLadronka.jpg'
    },

    // 2013 -------------------------------------------------------------
    {
        name: 'Praha, Nové Měcholupy IV a V – objekt E a F',
        description: 'Realizace HTÚ, ČTÚ, demolice a výstavby inženýrských sítí vč. retencí',
        cost: 'cca 2,7 mil.',
        date: '10/2013 - 11/2015',
        customer: 'PRŮMSTAV, a.s.',
        year: 2013,
        image: '2013-MecholupyE,F.jpg'
    },
    {
        name: 'Praha, Nové Měcholupy IV a V – objekt D a G',
        description: 'Realizace HTÚ, ČTÚ, demolice a výstavby inženýrských sítí vč. retencí',
        cost: 'cca 9,8 mil.',
        date: '05/2013 - 08/2014',
        customer: 'PP 53, a.s.',
        year: 2013,
        image: '2013-MecholupyD,G.jpg'
    },
    {
        name: 'Kolín - rekonstrukce ČOV',
        description: 'Realizace spojovacího potrubí vč. armatur a zemních prací',
        cost: 'cca 5,0 mil.',
        date: '11/2012 - 12/2014',
        customer: '11/2012 - 12/2014',
        year: 2013,
        image: '2013-Kolin.jpg'
    },
    {
        name: 'Litvínov - Obměna potrubního systému horkovodu',
        description: 'Realizace zemních prací, úprava komunikací a ploch',
        cost: 'cca 5,0 mil.',
        date: '06-08/2013',
        customer: 'INFRATECH s.r.o.',
        year: 2013,
        image: '2013-Litvinov.jpg'
    },
    {
        name: 'Praha - VILY CHUCHLE',
        description: 'Realizace kanalizace vč. přípojek',
        cost: 'cca 3,4 mil.',
        date: '04-08/2013',
        customer: 'ZEPRIS s.r.o.',
        year: 2013,
        image: '2013-Chuchle.jpg'
    },
    {
        name: 'Terezín - Protipovodňová opatření',
        description: 'Hradidlové kanalizační šachty',
        cost: 'cca 1,2 mil.',
        date: '03-11/2013',
        customer: 'VHS spol. s r.o.',
        year: 2013,
        image: '2013-Terezin.jpg'
    },

    // 2014 -------------------------------------------------------------
    {
        name: 'Praha - Administrativní centrum Pankrác',
        description: 'Realizace přeložek a nženýrských sítí',
        cost: 'cca 6,3 mil.',
        date: '11/2013 - 12/2015',
        customer: 'STRABAG a.s.',
        year: 2014,
        image: '2014-PrahaPankrac.jpg'
    },
    {
        name: 'Ústí nad Labem - VÝSTAVBA VĚDECKO-TECHNICKÉHO PARKU NUPHARO PARK II',
        description: 'Realizace ZTI kanalizace a zemní práce',
        cost: 'cca 1,6 mil.',
        date: '10-12/2014',
        customer: 'Metrostav a.s.',
        year: 2014,
        image: '2014-Usti.jpg'
    },
    {
        name: 'Nová Ves pod Přimdou – kanalizace a ČOV',
        description: 'Realizace kořenové ČOV 150 EO',
        cost: 'cca 2,6 mil.',
        date: '06-10/2014',
        customer: 'STAMOZA, společnost s ručením omezeným',
        year: 2014,
        image: '2014-NovaVes.jpg'
    },
    {
        name: 'Most - Generální oprava sítě V. etapa, úsek 1,3,4-1 a 4-2',
        description: 'KPL realizace prací týkající se výměny horkovodu vč. armatur a opravy šachet',
        cost: 'cca 18,5 mil.',
        date: '06-09/2014',
        customer: 'Severočeská teplárenská, a.s.',
        year: 2014,
        image: '2014-Most.jpg'
    },
    {
        name: 'Praha - TRIO Rezidence Zlíčín',
        description: 'Realizace zemních prací v rámci přípravy území',
        cost: 'cca 1,8 mil.',
        date: '02-12/2014',
        customer: 'IMOS Brno, a.s.',
        year: 2014,
        image: '2014-PrahaZlicin.jpg'
    },
    {
        name: 'Praha - ATRIUM RADLICKÁ',
        description: 'Zemní práce v rámci přípravy území pro realizaci objektu',
        cost: 'cca 8,7 mil.',
        date: '02-09/2014',
        customer: 'STRABAG a.s.',
        year: 2014,
        image: '2014-PrahaRadlicka.jpg'
    },

    // 2015 -------------------------------------------------------------
    {
        name: 'Praha - RIVER GARDENS - Západ 2 - budova Z3',
        description: 'Realizace kanalizace, vodovodu a horkovodu',
        cost: 'cca 4,8 mil.',
        date: '10/2014 - 07/2015',
        customer: 'VCES a.s.',
        year: 2015,
        image: '2015-PrahaRiverGardens.jpg'
    },
    {
        name: 'Most - rekonstrukce horkovodu : OBMĚNA POTRUBNÍHO SYSTÉMU LEBIT TN 9-1 MOST (1.,2.,3. a 4. ČÁST), REKONSTRUKCE TN VRŠANY ÚSEK Š KORDY - PIONÝRŮ (1., 2. A 3. ČÁST), ZKAPACITNĚNÍ TRASY 6-9 (I. A II. ČÁST)',
        description: 'Rekonstrukce horkovodu vč. armatur a opravy šachet',
        cost: 'cca 36,3 mil.',
        date: '06-09/2015',
        customer: 'Severočeská teplárenská, a.s.',
        year: 2015,
        image: '2015-Most.jpg'
    },
    {
        name: 'Praha - Polyfunkční budova CHODOV Palace, ul. Babákova',
        description: 'Realizace demolice a zemních prací',
        cost: 'cca 4,1 mil.',
        date: '01-06/2015',
        customer: 'STRABAG a.s.',
        year: 2015,
        image: '2015-PrahaChodov.jpg'
    },
    {
        name: 'Ústí n/L - VÝSTAVBA VĚDECKO-TECHNICKÉHO PARKU NUPHARO PARK III',
        description: 'Výstavba inženýrských sítí, ZTI, ČOV, ATS a komunikací',
        cost: 'cca 39,0 mil.',
        date: '01-12/2015',
        customer: 'MORAVOSTAV Brno, a.s. stavební společnost',
        year: 2015,
        image: '2015-Usti.jpg'
    },
    {
        name: 'Hnojice – kanalizace a ČOV',
        description: 'Realizace kořenové ČOV vč. propojovacího potrubí',
        cost: 'cca 6,2 mil.',
        date: '11/2014 - 11/2015',
        customer: 'HOCHTIEF CZ a.s.',
        year: 2015,
        image: '2015-Hnojice.jpg'
    },
    {
        name: 'ROZŠÍŘENÍ PRŮMYSLOVÉ ZÓNY VRCHLABÍ – JIH, ÚSEK STUDENEC – DOLNÍ BRANNÁ',
        description: 'Realizace propustků, UV a odvodnění',
        cost: 'cca 8,2 mil.',
        date: '09/2014 - 11/2015',
        customer: 'VHS spol. s r.o.',
        year: 2015,
        image: '2015-DolniBranna.jpg'
    },

    // 2016 -------------------------------------------------------------
    {
        name: 'Praha - Obytný soubor Vivus Uhříněves, 2. etapa',
        description: 'Realizace kanalizace vč. výtlaku a ČS, vodovodu a plynu',
        cost: 'cca 8,8 mil.',
        date: '11/2016 - 08/2017',
        customer: 'Metrostav a.s.',
        year: 2016,
        image: '2016-PrahaVivus.jpg'
    },
    {
        name: 'Litoměřice - Samoobslužné myčky pro osobní automobily',
        description: 'Realizace stavební části, kanalizace, vodovodu, plynu a NN',
        cost: 'cca 2,4 mil.',
        date: '11/2016 - 01/2017',
        customer: 'CW plus s.r.o.',
        year: 2016,
        image: '2016-Litomerice.jpg'
    },
    {
        name: 'Praha – OC Kaufland Horní Měcholupy',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 7,1 mil.',
        date: '07 - 12/2016',
        customer: 'V.P. Procházka s.r.o.',
        year: 2016,
        image: '2016-PrahaMecholupyKaufland.jpg'
    },
    {
        name: 'Praha - Ruční mytí vozidel – Horní Měcholupy',
        description: 'Realizace kanalizace, vodovodu, plynu, NN a VO',
        cost: 'cca 5,7 mil.',
        date: '05 - 09/2016',
        customer: 'ModulW s.r.o.',
        year: 2016,
        image: '2016-PrahaMecholupyMyti.jpg'
    },
    {
        name: 'Žatec – KISWIRE, průmyslová zóna Triangle',
        description: 'Realizace kanalizace, vodovodu, ZTI a odvodnění',
        cost: 'cca 19,4 mil.',
        date: '05 - 10/2016',
        customer: 'SYNER, s.r.o.',
        year: 2016,
        image: '2016-Zatec.jpg'
    },
    {
        name: 'Stod u Plzně - Prodejna potravin PENNY a drogerie TETA',
        description: 'Realizace kanalizace, vodovodu, ZTI a HTÚ',
        cost: 'cca 6,1 mil.',
        date: '04 - 10/2016',
        customer: 'Dopravní a zemní stavby Teplice s.r.o.',
        year: 2016,
        image: '2016-StodUPlzne.jpg'
    },
    {
        name: 'Hořešovice - I/7 křižovatka s I/16',
        description: 'Realizace odvodnění',
        cost: 'cca 3,0 mil.',
        date: '03 - 09/2016',
        customer: 'GEOSAN GROUP a.s.',
        year: 2016,
        image: '2016-Horesovice.jpg'
    },
    {
        name: 'Praha - Ruční mytí vozidel - Libeň',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 1,8 mil.',
        date: '02 - 03/2016',
        customer: 'Global Lease, s.r.o. a DiBO EAST s.r.o.',
        year: 2016,
        image: '2016-PrahaLiben.jpg'
    },

    // 2017 -------------------------------------------------------------
    {
        name: 'Praha - Obytný soubor Vivus Uhříněves, 3. etapa',
        description: 'Realizace kanalizace a ZTI',
        cost: 'cca 1,0 mil.',
        date: '12/2017 - 02/2018',
        customer: 'Metrostav a.s.',
        year: 2017,
        image: '2017-PrahaVivus.jpg'
    },
    {
        name: 'Most - Přeložka Hořanského koridoru – Tepelný napáječ - IV. Úsek',
        description: 'Realizace základových patek pro přeložku horkovodu',
        cost: 'cca 4,1 mil.',
        date: '10 - 12/2017',
        customer: 'A - BENET s.r.o.',
        year: 2017,
        image: '2017-Most.jpg'
    },
    {
        name: 'Nové Kopisty - polní cesta “HPC 6“',
        description: 'Realizace opravy závlah a komunikace',
        cost: 'cca 2,9 mil.',
        date: '09 - 11/2017',
        customer: 'STRABAG a.s.',
        year: 2017,
        image: '2017-NoveKopisty.jpg'
    },
    {
        name: 'Sedlec u Prahy – Lokalita "U lípy", 16 RD',
        description: 'Realizace kanalizace, vodovodu a komunikace',
        cost: 'cca 5,6 mil.',
        date: '10/2017 - 02/2018',
        customer: 'Půdy alfa, s.r.o.',
        year: 2017,
        image: '2017-SedlecUPrahy.jpg'
    },
    {
        name: 'Litvínov a Janov - Rekonstrukce tepelné sítě :\n' +
            '- REKO tepelné sítě Janov (úsek EC3-AŠJ8-AŠJ18/5)\n' +
            'Most - Modernizace sek. rozvodů tepla ST :\n' +
            '- REKO TK VS 36 - TV a ÚT, Lomená\n' +
            '- Rekonstrukce tepelné sítě IX. etapa',
        description: 'Realizace stavebních prací při rekonstrukci horkovodů',
        cost: 'cca 8,1 mil.',
        date: '06 - 09/2017',
        customer: 'A - BENET s.r.o.',
        year: 2017,
        image: '2017-LitvinovJanov1.jpg'
    },
    {
        name: 'Litvínov a Janov - Rekonstrukce tepelné sítě :\n' +
            '- REKO a přeložka přípojky VS SKN 1579, Litvínov\n' +
            '- REKO TN Janov (úsek v TK k AŠJ3)',
        description: 'Realizace rek. horkovodů vč. armatur a opravy šachet',
        cost: 'cca 6,1 mil.',
        date: '06 - 09/2017',
        customer: 'Severočeská teplárenská, a.s.',
        year: 2017,
        image: '2017-LitvinovJanov2.jpg'
    },
    {
        name: 'Klášterec nad Ohří - Výrobní areál BENTELER',
        description: 'Realizace kanalizace vč. RN, ORL a LT, vodovodu pitného a požárního, ZTI',
        cost: 'cca 27,5 mil.',
        date: '03 - 11/2017',
        customer: 'SYNER, s.r.o.',
        year: 2017,
        image: '2017-Klasterec.jpg'
    },

    // 2018 -------------------------------------------------------------
    {
        name: 'Jirkov - Výstavba okružní křižovatky na silnici III/0135 vč. přeložek IS',
        description: 'Realizace přeložek IS vč. kruhového objezdu OK 1',
        cost: 'cca 18,5 mil.',
        date: '09/2018 - 05/2019',
        customer: 'Metrostav a.s.',
        year: 2018,
        image: '2018-Jirkov.jpg'
    },
    {
        name: 'Praha - Obytný soubor Vivus Uhříněves, 3. etapa (BD D,E,F,G a H)',
        description: 'Realizace kanalizace, vodovodu a ZTI',
        cost: 'cca 4,0 mil.',
        date: '06/2018 - 05/2019',
        customer: 'Metrostav a.s.',
        year: 2018,
        image: '2018-PrahaVivus.jpg'
    },
    {
        name: 'Most – Rek. tepelné sítě Velebudice - úsek od odbočky VSV1 k odbočce Grammer',
        description: 'Realizace stavebních prací při rekonstrukci horkovodů',
        cost: 'cca 3,4 mil.',
        date: '07 - 09/2018',
        customer: 'A - BENET s.r.o.',
        year: 2018,
        image: '2018-MostVelebudice1.jpg'
    },
    {
        name: 'Most – Rek. tepelné sítě Velebudice - úsek od VSV2 k odbočce VSV1',
        description: 'Realizace stavebních prací při rekonstrukci horkovodů',
        cost: ' cca 3,5 mil.',
        date: '07 - 09/2018',
        customer: 'A - BENET s.r.o.',
        year: 2018,
        image: '2018-MostVelebudice2.jpg'
    },
    {
        name: 'Most - IO 05 – PRŮMYSLOVÝ VODOVOD NECHRANICE',
        description: 'Realizace zemních a stavebních prací vč. šachet',
        cost: 'cca 4,6 mil.',
        date: '04 - 11/2018',
        customer: 'A - BENET s.r.o.',
        year: 2018,
        image: '2018-MostNechranice.jpg'
    },
    {
        name: 'Plzeň – Car Wash Center 24 H, MAKRO',
        description: 'Realizace zemních a stavebních prací, rozvod IS',
        cost: 'cca 2,4 mil.',
        date: '04 - 07/2018',
        customer: 'DHK consulting, s.r.o.',
        year: 2018,
        image: '2018-Plzen.jpg'
    },
    {
        name: 'Praha – ČZU – High-tech Technologicko-výukový pavilon FLD',
        description: 'Realizace zemních prací, kanalizace a vodovodu',
        cost: 'cca 2,8 mil.',
        date: '03 - 11/2018',
        customer: 'Metrostav a.s.',
        year: 2018,
        image: '2018-PrahaCZU.jpg'
    },
    {
        name: 'Žatec–NEXEN TIRE, průmyslová zóna Triangle',
        description: 'Realizace kanalizace a vodovodu',
        cost: 'cca 7,8 mil.',
        date: '03 - 09/2018',
        customer: 'VHS spol. s r.o.',
        year: 2018,
        image: '2018-Zatec.jpg'
    },
    {
        name: 'Litvínov – Centrum služeb a obchodu',
        description: 'Realizace kanalizace, vodovodu, plynovodu, retencí, základů a podlahových konstrukcí, zemní práce',
        cost: 'cca 36,5 mil.',
        date: '12/2017 - 01/2019',
        customer: 'PROJEKTYSS s.r.o.',
        year: 2018,
        image: '2018-Litvinov.jpg'
    },

    // 2019 -------------------------------------------------------------
    {
        name: 'Mariánské Radčice - Biotechnologický systém čerpaných důlních vod z MR1',
        description: 'Realizace technologie ČOV - plovoucí ostrovy vč. mokřadní vegetace a aktivního provzdušňování, systém čerpání důlních vod',
        cost: 'cca 13,5 mil.',
        date: '08/2019 - 05/2020',
        customer: 'sdružení EUROVIA CS, a.s. + HERKUL a.s.',
        year: 2019,
        image: '2019-MarianskeRadcice.jpg'
    },
    {
        name: 'Štětí - PILA',
        description: 'Realizace dešťové a splaškové kan. vč. výtlaků a RN, realizace vodovodu vč. SHZ a skrápění, horkovody',
        cost: 'cca 72,4 mil',
        date: '05/2019 - 04/2020',
        customer: 'STRABAG a.s.',
        year: 2019,
        image: '2019-Steti.jpg'
    },
    {
        name: 'Praha - Obytný soubor Vivus Uhříněves, IV. etapa (BD I,J,H)',
        description: 'Realizace kanalizace, vodovodu a ZP pro teplovody',
        cost: 'cca 1,1 mil.',
        date: '11/2019 - 02/2020',
        customer: 'Metrostav a.s.',
        year: 2019,
        image: '2019-PrahaVivus.jpg'
    },
    {
        name: 'Ústí nad Labem – Rekonstrukce venkovní části Plaveckého areálu Klíše',
        description: 'Realizace rekonstrukce kanalizace a vodovodu',
        cost: 'cca 4,8 mil.',
        date: '03/2019 - 03/2020',
        customer: 'Metrostav a.s.',
        year: 2019,
        image: '2019-Usti.jpg'
    },

    // 2020 -------------------------------------------------------------
    {
        name: 'Velvary – Velká Bučina',
        description: 'Výstavba splaškové kanalizace',
        cost: 'cca 15,5 mil.',
        date: '05/2020 - 06/2021',
        customer: 'VHS, spol. s r.o.',
        year: 2020,
        image: '2020-Velvary.jpg'
    },
    {
        name: 'Štětí – MONDI',
        description: 'Realizace sanace “stoky “G“',
        cost: 'cca 7,4 mil.',
        date: '04 - 09/2020',
        customer: 'Mondi Štětí a.s.',
        year: 2020,
        image: '2020-Steti.jpg'
    },
    {
        name: 'Louny – ul. 5.května a Elišky Krásnohorské',
        description: 'Realizace rekonstrukce kanalizace a vodovodu včetně komunikací',
        cost: 'cca 6,3 mil.',
        date: '04 - 09/2020',
        customer: 'INFRATECH s.r.o.',
        year: 2020,
        image: '2020-Louny.jpg'
    },
    {
        name: 'Praha – Rezidence Golf Hostivař',
        description: 'Realizace výstavby vodovodu a kanalizace vč. přípojek',
        cost: 'cca 24,3 mil.',
        date: '03/2020 - 04/2021',
        customer: 'KONSIT a.s.',
        year: 2020,
        image: '2020-PrahaHostivar.jpg'
    },
    {
        name: 'Praha – ZOO - Nový pavilon goril',
        description: 'Realizace zemních prací, vodovodu a kanalizace vč. ZTI',
        cost: 'cca 13,7 mil.',
        date: '11/2019 - 06/2021',
        customer: 'STRABAG a.s.',
        year: 2020,
        image: '2020-PrahaZOO.jpg'
    },

    // 2021 -------------------------------------------------------------
    {
        name: 'Praha - ARCUS CITY OBYTNÝ SOUBOR STODŮLKY JIH',
        description: 'Realizace ZP a kanalizace ZTI pro BD',
        cost: 'cca 6,5 mil.',
        date: '08/2021 - 05/2022',
        customer: 'ALGON, a.s.',
        year: 2021,
        image: '2021-PrahaStodulky.jpg'
    },
    {
        name: 'Velvary – Velká Bučina',
        description: 'Rekonstrukce komunikací',
        cost: 'cca 3,5 mil.',
        date: '06 - 10/2021',
        customer: 'město Velvary',
        year: 2021,
        image: '2021-Velvary.jpg'
    },
    {
        name: 'Štětí – MONDI',
        description: 'Realizace sanace “stoky “G - 2nd step“',
        cost: 'cca 8,3 mil.',
        date: '05 - 11/2021',
        customer: 'Mondi Štětí a.s',
        year: 2021,
        image: '2021-Steti.jpg'
    },
    {
        name: 'Praha - ARCUS CITY OBYTNÝ SOUBOR STODŮLKY JIH',
        description: 'Realizace HTÚ, ZP, kanalizace, vodovodu, poldru a komunikací',
        cost: 'cca 116,3 mil.',
        date: '12/2020 - 02/2025',
        customer: 'UBM Stodůlky s.r.o.',
        year: 2021,
        image: '2021-PrahaStodulkyJih.jpg'
    },
    {
        name: 'Odkanalizování obcí v povodí Jizery – část B - Obec Holé Vrchy',
        description: 'Realizace kanalizace a vodovodu vč. přípojek',
        cost: 'cca 24,7 mil.',
        date: '11/2020 - 01/2023',
        customer: ' VCES a.s.',
        year: 2021,
        image: '2021-HoleVrchy.jpg'
    },
    // 2022 -------------------------------------------------------------
     {
        name: 'Žatec – Nexen Tire Europe Factory – ph2',
        description: 'Realizace přeložek kanalizace a vodovodu',
        cost: 'cca 5,5 mil.',
        date: '01 - 05/2022',
        customer: 'STRABAG a.s.',
        year: 2022,
        image: '2022-Zatec.jpg'
    },
    {
        name: 'Praha – NOVÁ WALTROVKA INFRA',
        description: 'Realizace ZP, vodovodu, kanalizace a plynu vč. přípojek',
        cost: 'cca 19,7 mil.',
        date: '04/2022 – 12/2023 ',
        customer: 'Next Development, s.r.o.',
        year: 2022,
        image: '2022-WALT.jpg'
    },
    {
        name: 'Chomutov – Nemocnice - Nový pavilon Emergency',
        description: 'Realizace zemních prací',
        cost: 'cca 11,5 mil.',
        date: '04/2022 – 01/2023',
        customer: 'I S T A R, společnost s ručením omezeným',
        year: 2022,
        image: '2022-NeCho.jpg'
    },
     {
        name: 'Praha – Zahradní město',
        description: 'Realizace přeložky kanalizace DN 1200',
        cost: 'cca 16,1 mil.',
        date: '07/2022 - 02/2023',
        customer: 'Vivus Zahradní Město s.r.o.',
        year: 2022,
        image: '2022-ZahMesto.jpg'
    },
    {
        name: 'Ústí nad Labem – Obchodní centrum Europe BAUHAUS',
        description: 'Realizace IS vč. ATS a kolektoru',
        cost: 'cca 31,1 mil.',
        date: '08/2022 - 06/2023',
        customer: 'POZIS-BAU s.r.o.',
        year: 2022,
        image: '2022-Trmice.jpg'
    },
     {
        name: 'Praha – OBYTNÝ SOUBOR STODŮLKY - RD Řepora, Bytový dům a Zdravotní středisko',
        description: 'Realizace ZP, IS a komunikací',
        cost: 'cca 50,6 mil.',
        date: '08/2022 - 01/2025',
        customer: 'STEP, spol. s r.o.',
        year: 2022,
        image: '2022-OSS.jpg'
    },
     // 2023 -------------------------------------------------------------
     {
        name: 'Praha – Suchdol, ČZU - Dostavba FŽP',
        description: 'Realizace mokřadního biotopu + MaR',
        cost: 'cca 4,7 mil.',
        date: '01 - 07/2023',
        customer: 'ESOX, spol. s r.o.',
        year: 2023,
        image: '2023-Suchdol.jpg'
    },
     {
        name: 'Jinočany – LOGPORT',
        description: 'Realizace ZP a montáž vod. a kan.',
        cost: 'cca 9,0 mil.',
        date: '02 - 07/2023',
        customer: 'POZIS-BAU s.r.o.',
        year: 2023,
        image: '2023-Jinocany.jpg'
    },
    {
        name: 'Štětí - Mondi - EcoKraft',
        description: 'Realizace ZP a přeložek vod. a kan.',
        cost: 'cca 4,6 mil.',
        date: '04 - 06/2023',
        customer: 'Mondi Štětí a.s.',
        year: 2023,
        image: '2023-MONDI.jpg'
    },
    {
        name: 'Kladno - Logport Poldi',
        description: 'Realizace inženýrských sítí vč. ocelové retence DN 1200',
        cost: 'cca 11,2 mil.',
        date: '07/2023 - 09/2024',
        customer: 'POZIS-BAU s.r.o.',
        year: 2023,
        image: '2023-Kladno.jpg'
    },
    {
        name: 'Litvínov - McDonald´s',
        description: 'Realizace přeložky vodovodního potrubí DN 500',
        cost: 'cca 2,7 mil.',
        date: '10 - 12/2023',
        customer: 'KK výstavby, spol s r.o.',
        year: 2023,
        image: '2023-Litvinov.jpg'
    },
     // 2024 -------------------------------------------------------------
     {
        name: 'Praha – PÍSNICKÉ ZAHRADY (BD)',
        description: 'Realizace ZP, IS a komunikace',
        cost: 'cca 16,8 mil.',
        date: '11/2023 - 12/2024',
        customer: 'EKOSPOL a.s.',
        year: 2024,
        image: '2024-PISNICE.jpg'         
    },
    {
        name: 'Štětí - Mondi – EcoKraft II.',
        description: 'Realizace přeložek vod. a kan. vč. jímek (vývařiště a ORL)',
        cost: 'cca 7,7 mil.',
        date: '02 - 07/2024',
        customer: 'Mondi Štětí a.s.',
        year: 2024,
        image: '2024-MONDI.jpg'         
    },
    {
        name: 'Černé Voděrady - lokalita zahrádky',
        description: 'Prodloužení kanalizace a vodovodu',
        cost: 'cca 5,9 mil.',
        date: '04 - 06/2024',
        customer: 'Obec Černé Voděrady',
        year: 2024,
        image: '2024-VODERADY.jpg'         
    },
    {
        name: 'Hořesedly – výstavba dálnice D6',
        description: 'Realizace kanalizace vč. UV, HV a žlabů',
        cost: 'cca 30,0 mil.',
        date: '06/2024 - 06/2025',
        customer: 'REMPLUS s.r.o.',
        year: 2024,
        image: '2024-D6.jpg'         
    },
    {
        name: 'Žatec - Rekonstrukce ul. Husova',
        description: 'Rekonstrukce kanalizace a vodovodu vč. komunikace',
        cost: 'cca 38,0 mil.',
        date: '07/2024 - 07/2025',
        customer: 'Čermák a Hrachovec a.s.',
        year: 2024,
        image: '2024-ZATEC.jpg'         
    },
    {
        name: 'Ústí n.L. – Rekonstrukce mostu Eduarda Beneše',
        description: 'Realizace přeložek kanalizace a vodovodu',
        cost: 'cca 12,2 mil.',
        date: '10/2024 - 07/2026 (s přerušením po dobu rek. mostu)',
        customer: 'Metrostav TBR a.s.',
        year: 2024,
        image: '2024-USTI.jpg'         
    },
]

export default ConstructionsArr

export type Vehicle = {
    id: number;
    title: string;
    price: string;
    desc?: string;
    img?: string;
    category: 'camiones' | 'cortes' | 'coches' | 'fabrica';
    images: string[];
    modelo?: string;
    anio?: string;
    motor?: string;
    transmision?: string;
    caballaje?: string;
};

export const vehicles: Vehicle[] = [
    // --- CAMIONES ---
    {
        id: 1,
        title: 'FREIGHTLINER M2 2016',
        price: '$550,000 MXN',
        img: '/images/M2.webp',
        images: ['/images/M2.webp', '/images/M2.webp', '/images/M2.webp', '/images/M2.webp', '/images/M2.webp', '/images/M2.webp', '/images/M2.webp', '/images/M2.webp'],
        category: 'camiones',
        modelo: 'FREIGHTLINER M2',
        anio: '2016',
        motor: 'CUMMINS ISL',
        transmision: 'automática de 6 velocidades',
        caballaje: '300 HP'
    },
    {
        id: 2,
        title: 'FREIGHTLINER M2 2016',
        price: '$520,000 MXN',
        img: '/images/FREIGM2.webp',
        images: ['/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp', '/images/FREIGM2.webp'],
        category: 'camiones',
        modelo: 'FREIGHTLINER M2',
        anio: '2016',
        motor: 'CUMMINS ISB',
        transmision: 'automática',
        caballaje: '240 HP'
    },
    {
        id: 3,
        title: 'INTERNATIONAL PROSTAR LF627 2017',
        price: '$435,000 MXN',
        img: '/images/PROSTAR.webp',
        images: ['/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp', '/images/PROSTAR.webp'],
        category: 'camiones',
        modelo: 'PROSTAR LF627',
        anio: '2017',
        motor: 'NAVISTAR A430',
        transmision: 'manual',
        caballaje: '450 HP'
    },
    {
        id: 4,
        title: 'INTERNATIONAL PROSTAR+ 2015',
        price: '$903,000 MXN',
        img: '/images/PROSTAR+.webp',
        images: ['/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp', '/images/PROSTAR+.webp'],
        category: 'camiones',
        modelo: 'PROSTAR+',
        anio: '2015',
        motor: 'CUMMINS ISX15',
        transmision: 'EATON 13 manual',
        caballaje: '400 HP'
    },
    {
        id: 5,
        title: 'INTERNATIONAL PROSTAR+',
        price: '$743,000 MXN',
        img: '/images/PROSTAR+VER.webp',
        images: ['/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp', '/images/PROSTAR+VER.webp'],
        category: 'camiones',
        modelo: 'PROSTAR+',
        anio: '2015',
        motor: 'CUMMINS ISX15',
        transmision: 'EATON 10 automática',
        caballaje: '450 HP'
    },
    {
        id: 6,
        title: 'FREIGHTLINER CASCADIA',
        price: '$793,000 MXN',
        img: '/images/CASCADIA.webp',
        images: ['/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp', '/images/CASCADIA.webp'],
        category: 'camiones',
        modelo: 'CASCADIA',
        anio: '2014',
        motor: 'DETROIT DD13',
        transmision: 'EATON 10 manual',
        caballaje: '327 HP'
    },
    {
        id: 7,
        title: 'CASCADIA',
        price: '$654,000 MXN',
        img: '/images/CASCADIABLAN.webp',
        images: ['/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp', '/images/CASCADIABLAN.webp'],
        category: 'camiones',
        modelo: 'CASCADIA',
        anio: '2016',
        motor: 'DETROIT DD15',
        transmision: 'EATON 10 manual',
        caballaje: '505 HP'
    },
    {
        id: 8,
        title: 'INTERNATIONAL PROSTAR+',
        price: '$635,000 MXN',
        img: '/images/PROSTAR+BLA.webp',
        images: ['/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp', '/images/PROSTAR+BLA.webp'],
        category: 'camiones',
        modelo: 'INTERNATIONAL PROSTAR+',
        anio: '2013',
        motor: 'MAXXFORCE 13',
        transmision: 'Eaton 10 manual',
        caballaje: '430 HP'
    },
    {
        id: 9,
        title: 'INTERNATIONAL PROSTAR PREMIUN',
        price: '$450,000 MXN',
        img: '/images/PROSTARPREM.webp',
        images: ['/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp', '/images/PROSTARPREM.webp'],
        category: 'camiones',
        modelo: 'PROSTAR PREMIUN',
        anio: '2011',
        motor: 'CUMMINS 15X',
        transmision: 'automática de 10 velocidades',
        caballaje: '450 HP'
    },
    {
        id: 10,
        title: 'KENWORTH T660',
        price: '$680,000 MXN',
        img: '/images/T660.webp',
        images: ['/images/T660.webp', '/images/T660.webp', '/images/T660.webp', '/images/T660.webp', '/images/T660.webp', '/images/T660.webp', '/images/T660.webp', '/images/T660.webp'],
        category: 'camiones',
        modelo: 'KENWORTH T660',
        anio: '2011',
        motor: 'CUMMINS ISX',
        transmision: 'EATON 10 automática',
        caballaje: '350 HP'
    },
    {
        id: 11,
        title: 'CAMIÓN VOLTEO INTERNATIONAL AGUILA 2005',
        price: '$800,000 MXN',
        img: '/images/AGUILA.webp',
        images: ['/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp', '/images/AGUILA.webp'],
        category: 'camiones',
        modelo: 'ÁGUILA',
        anio: '2005',
        motor: 'N14',
        transmision: 'FULLER 15 manual',
        caballaje: '435 HP'
    },
    {
        id: 12,
        title: 'CAMIÓN VOLTEO FREIGHTLINER CASCADIA 2013',
        price: '$990,000 MXN',
        img: '/images/VOLTEOCAS.webp',
        images: ['/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp', '/images/VOLTEOCAS.webp'],
        category: 'camiones',
        modelo: 'CASCADIA',
        anio: '2013',
        motor: 'M11 SELECT PLUS',
        transmision: 'FULLER 10 manual'
    },
    {
        id: 13,
        title: 'FREIGHTLINER CASCADIA',
        price: '$990,000 MXN',
        img: '/images/FREIGHCAS.webp',
        images: ['/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp', '/images/FREIGHCAS.webp'],
        category: 'camiones',
        modelo: 'CASCADIA',
        motor: 'DD15',
        transmision: 'FULLER 10 estándar'
    },
    {
        id: 14,
        title: 'CAMIÓN FREIGHTLINER 2007 M2',
        price: '$720,000 MXN',
        img: '/images/M2 FREIGHTLINER.webp',
        images: ['/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp', '/images/M2 FREIGHTLINER.webp'],
        category: 'camiones',
        desc: 'Caja de volteo de 7 metros',
        modelo: 'FREIGHTLINER M2',
        anio: '2007',
        motor: 'MERCEDES 9-26',
        transmision: 'EATON 7 FULLER',
        caballaje: '220 HP'
    },
    {
        id: 15,
        title: 'INTERNATIONAL PROSTAR',
        price: '$800,000 MXN',
        img: '/images/PROSTARGREEN.webp',
        images: ['/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp', '/images/PROSTARGREEN.webp'],
        category: 'camiones',
        desc: 'Incluye freno de motor, Suspension de aire y  Diferencial de 42,000 LBS',
        modelo: 'INTERNATIONAL PROSTAR',
        anio: '2012',
        motor: 'MAX FOR NAVISTAR',
        transmision: '10 VELOCIDADES FULLER',
        caballaje: '400 HP'
    },
    {
        id: 16,
        title: 'CAMIÓN PIPA KENWORTH',
        price: '$650,000 MXN',
        img: '/images/T370.webp',
        images: ['/images/T370.webp', '/images/T370.webp', '/images/T370.webp', '/images/T370.webp', '/images/T370.webp', '/images/T370.webp', '/images/T370.webp', '/images/T370.webp'],
        category: 'camiones',
        modelo: 'T370',
        motor: 'CUMMINS PX8',
        transmision: 'Automática de 6 velocidades',
        caballaje: '240 HP'
    },
    {
        id: 17,
        title: 'CAMIÓN PIPA KENWORTH T370',
        price: '$635,000 MXN',
        img: '/images/PIPA.webp',
        images: ['/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp', '/images/PIPA.webp'],
        category: 'camiones',
        modelo: 'T370',
        anio: '2008',
        motor: 'CUMMINS PX8',
        transmision: 'Automática de 6 velocidades',
        caballaje: '240 HP'
    },
    {
        id: 18,
        title: 'CAMIÓN FREIGHTLINER REVOLVEDORA',
        price: '$500,000 MXN',
        img: '/images/REVOLVEDORA.webp',
        images: ['/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp', '/images/REVOLVEDORA.webp'],
        category: 'camiones',
        modelo: 'FREIGHTLINER M2 106',
        anio: '2004',
        motor: 'CATERPILLAR 3126',
        transmision: 'manual'
    },
    {
        id: 19,
        title: 'PLATAFORMA INTERNATIONAL 2016',
        price: '$650,000 MXN',
        img: '/images/PLATROJA.webp',
        images: ['/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp', '/images/PLATROJA.webp'],
        category: 'camiones',
        modelo: 'PROSTAR',
        anio: '2016',
        motor: 'CUMMINS ISMX10',
        transmision: 'FULLER 10 velocidades',
        caballaje: '370 HP'
    },
    {
        id: 20,
        title: 'CAMIÓN GRUA FORD',
        price: '$580,000 MXN',
        img: '/images/GRUA.webp',
        images: ['/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp', '/images/GRUA.webp'],
        category: 'camiones',
        modelo: 'FORD GRÚA',
        anio: '1996',
        motor: 'CATERPILLAR',
        transmision: 'automática',
        caballaje: '175 HP'
    },
    {
        id: 21,
        title: 'GRUA FORD F-450',
        price: '$180,000 MXN',
        img: '/images/f450.webp',
        images: ['/images/f450.webp', '/images/f450.webp', '/images/f450.webp', '/images/f450.webp', '/images/f450.webp', '/images/f450.webp', '/images/f450.webp', '/images/f450.webp'],
        category: 'camiones',
        modelo: 'FORD SUPER DUTY',
        anio: '1998',
        transmision: 'Manual 4 velocidades',
        motor: 'V8 de GAS',
        caballaje: '400 HP'
    },
    {
        id: 22,
        title: 'CAMIÓN FREIGHTLINER 1997',
        price: '$480,000 MXN',
        img: '/images/FREIGH97.webp',
        images: ['/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp', '/images/FREIGH97.webp'],
        category: 'camiones',
        modelo: 'FREIGHTLINER',
        anio: '1997',
        motor: 'M11',
        transmision: 'SUPER 10',
        caballaje: '330 HP'
    },
    {
        id: 23,
        title: 'CAMIÓN VACTOR PARA DRENAJE Y ALCANTARILLADO',
        price: '$900,000 MXN',
        img: '/images/VECTOR.webp',
        images: ['/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp', '/images/VECTOR.webp'],
        category: 'camiones',
        modelo: 'STERLING L79500',
        motor: 'CATERPILLAR C15 BITURBO',
        transmision: 'FULLER 15 manual',
        caballaje: '475 HP'
    },
    {
        id: 24,
        title: 'RETROEXCAVADORA CASE 580E',
        price: '$350,000 MXN',
        desc: 'Kit para martillo, 4x4',
        img: '/images/580E.webp',
        images: ['/images/580E.webp', '/images/580E.webp', '/images/580E.webp', '/images/580E.webp', '/images/580E.webp', '/images/580E.webp', '/images/580E.webp', '/images/580E.webp'],
        category: 'camiones',
        modelo: 'CASE 580E'
    },
    {
        id: 25,
        title: 'RETROEXCAVADORA CASE 580K',
        price: '$490,000 MXN',
        desc: 'Kit para martillo, 4x4',
        img: '/images/580K.webp',
        images: ['/images/580K.webp', '/images/580K.webp', '/images/580K.webp', '/images/580K.webp', '/images/580K.webp', '/images/580K.webp', '/images/580K.webp', '/images/580K.webp'],
        category: 'camiones',
        modelo: 'CASE 580K'
    },
    {
        id: 26,
        title: 'CATERPILLAR',
        price: '$350,000 MXN',
        desc: 'Motor caterpillar de 120HP de 6 cilindros, transmisión manual',
        img: '/images/CATERPILLAR.webp',
        images: ['/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp', '/images/CATERPILLAR.webp'],
        category: 'camiones',
        modelo: 'MOTOCORFORMADORA',
        motor: 'Caterpillar',
        transmision: 'manual',
        caballaje: '120 HP'
    },
    {
        id: 27,
        title: 'MINIEXCAVADORA AGT-H12 2023',
        price: '$140,000 MXN',
        img: '/images/MINIVER.webp',
        images: ['/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp', '/images/MINIVER.webp'],
        category: 'camiones',
        modelo: 'AGT-H12',
        anio: '2023',
        motor: 'B&S',
        caballaje: '13.5 HP'
    },
    {
        id: 28,
        title: 'MINICARGADORA LRT23 2023',
        price: '$155,000 MXN',
        img: '/images/MINIROJ.webp',
        images: ['/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp', '/images/MINIROJ.webp'],
        category: 'camiones',
        modelo: 'MINICARGADORA LRT23',
        anio: '2023',
        motor: 'R740',
        caballaje: '13.5 HP'
    },
    {
        id: 29,
        title: 'CAJA DE 53" 2007',
        price: '$325,000 MXN',
        desc: "Marca utility van trailer, suspensión de aire, dimensiones 53'x102' puerta de libro",
        img: '/images/CAJA.webp',
        images: ['/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp', '/images/CAJA.webp'],
        category: 'camiones',
        modelo: 'CAJA 53"',
        anio: '2007'
    },
    {
        id: 30,
        title: 'CAJA DE 53" 2003',
        price: '$195,000 MXN',
        desc: 'Marca wabash national corporation, Modelo 2003 de 2 EJES',
        img: '/images/CAJANAR.webp',
        images: ['/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp', '/images/CAJANAR.webp'],
        category: 'camiones',
        modelo: 'CAJA 53"',
        anio: '2003'
    },
    {
        id: 31,
        title: 'CAJA DE 48" 2006',
        price: '$330,000 MXN',
        desc: 'Marca great dane, 2 ejes, puerta de cortina',
        img: '/images/CAJA48.webp',
        images: ['/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp', '/images/CAJA48.webp'],
        category: 'camiones',
        modelo: 'CAJA 48"',
        anio: '2006'
    },

    // --- COCHES ---
    {
        id: 32,
        title: 'CHEVROLET BEAT LS 2019',
        price: '$120,000 MXN',
        img: '/images/BEAT.webp',
        images: ['/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp', '/images/BEAT.webp'],
        category: 'coches',
        modelo: 'CHEVROLET BEAT LS',
        anio: '2019',
        motor: '4 Cil.',
        transmision: 'manual'
    },
    {
        id: 33,
        title: 'CHEVROLET TRAX LT 2014',
        price: '$155,000 MXN',
        img: '/images/TRAX.webp',
        images: ['/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp', '/images/TRAX.webp'],
        category: 'coches',
        modelo: 'CHEVROLET TRAX LT',
        anio: '2014',
        motor: '4 Cil. 1.8L',
        transmision: 'automática'
    },
    {
        id: 34,
        title: 'JEEP WRANGLER 1995',
        price: '$210,000 MXN',
        img: '/images/JEEP.webp',
        images: ['/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp', '/images/JEEP.webp'],
        category: 'coches',
        modelo: 'JEEP WRANGLER',
        anio: '1995',
        motor: '4 Cil.',
        transmision: 'manual'
    },
    {
        id: 35,
        title: 'JEEP GRAND CHEROKEE SRT 2009',
        price: '$350,000 MXN',
        img: '/images/SRT.webp',
        images: ['/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp', '/images/SRT.webp'],
        category: 'coches',
        modelo: 'JEEP GRAND CHEROKEE SRT',
        anio: '2009',
        motor: '8 Cil.',
        transmision: 'automática'
    },
    {
        id: 36,
        title: 'GMC YUKON DENALI 2016',
        price: '$560,000 MXN',
        img: '/images/YUKON.webp',
        images: ['/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp', '/images/YUKON.webp'],
        category: 'coches',
        modelo: 'GMC YUKON DENALI',
        anio: '2016',
        motor: '8 Cil.',
        transmision: 'automática'
    },
    {
        id: 37,
        title: 'SUSUKI VITARA 2016',
        price: '$215,000 MXN',
        img: '/images/VITALI.webp',
        images: ['/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp', '/images/VITALI.webp'],
        category: 'coches',
        modelo: 'SUSUKI VITARA',
        anio: '2016',
        motor: '4 Cil.',
        transmision: 'automática'
    },
    {
        id: 38,
        title: 'TOYOTA HILUX 2014',
        price: '$250,000 MXN',
        img: '/images/HILUX.webp',
        images: ['/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp', '/images/HILUX.webp'],
        category: 'coches',
        modelo: 'TOYOTA HILUX',
        anio: '2014',
        motor: '4 Cil.',
        transmision: 'manual'
    },
    {
        id: 39,
        title: 'NISSAN FRONTIER 2022',
        price: '$600,000 MXN',
        img: '/images/FRONTIER.webp',
        images: ['/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp', '/images/FRONTIER.webp'],
        category: 'coches',
        modelo: 'NISSAN FRONTIER',
        anio: '2022',
        motor: '4 Cil. 2.5L',
        transmision: 'automática'
    },
    {
        id: 40,
        title: 'KIA RIO',
        price: '$190,000 MXN',
        img: '/images/RIO.webp',
        images: ['/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp', '/images/RIO.webp'],
        category: 'coches',
        modelo: 'KIA RIO EX HB TM 6V',
        anio: '2022',
        motor: '4 Cil. 1.6L',
        transmision: 'Manual'
    },
    {
        id: 41,
        title: 'VOLKSWAGEN GOLF',
        price: '$105,000 MXN',
        img: '/images/Golf.webp',
        images: ['/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp', '/images/Golf.webp'],
        category: 'coches',
        modelo: 'GOLF',
        anio: '1992',
        motor: '4 cilindros, 1.8 litros',
        transmision: 'STANDARD',
    },
    {
        id: 42,
        title: 'CHEVROLET SILVERADO',
        price: '$190,000 MXN',
        img: '/images/Silverado.webp',
        images: ['/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp', '/images/Silverado.webp'],
        category: 'coches',
        modelo: 'SILVERADO 1500',
        anio: '2017',
        motor: 'EcoTec3 5.3L V8, Gasolina',
        transmision: 'Automática'
    },
    {
        id: 43,
        title: 'KEYSTONE SPRINTER 2004',
        price: '$200,000 MXN',
        img: '/images/RODANTE1.webp',
        images: ['/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp', '/images/RODANTE1.webp'],
        category: 'coches',
        modelo: 'KEYSTONE SPRINTER',
        anio: '2004'
    },
    {
        id: 44,
        title: 'COBRA SIERRA 1988',
        price: '$150,000 MXN',
        img: '/images/RODANTE2.webp',
        images: ['/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp', '/images/RODANTE2.webp'],
        category: 'coches',
        modelo: 'COBRA SIERRA',
        anio: '1988'
    },
    {
        id: 45,
        title: 'SEADOO GTX 6106 2004',
        price: '$85,000 MXN',
        img: '/images/SEAWOOD.webp',
        images: ['/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp', '/images/SEAWOOD.webp'],
        category: 'coches',
        modelo: 'SEADOO GTX 6106',
        anio: '2004',
        motor: '2 tiempos'
    },
    {
        id: 46,
        title: 'SEADOO GTX 2003',
        price: '$100,000 MXN',
        img: '/images/SEAWOOD2.webp',
        images: ['/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp', '/images/SEAWOOD2.webp'],
        category: 'coches',
        modelo: 'SEADOO GTX',
        anio: '2003',
        motor: '4 tiempos'
    },

    // --- CORTES ---
    {
        id: 47,
        title: 'KENWORTH T680',
        price: '$750,000 MXN',
        img: '/images/CORTES/T680.webp',
        images: ['/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp', '/images/CORTES/T680.webp'],
        category: 'cortes',
        modelo: 'KENWORTH T680'
    },
    {
        id: 48,
        title: 'FREIGHTLINER M2',
        price: '$130,000 MXN',
        img: '/images/CORTES/INTAMERICA.webp',
        images: ['/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp', '/images/CORTES/INTAMERICA.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER M2'
    },
    {
        id: 49,
        title: 'FREIGHTLINER F170',
        price: '$195,000 MXN',
        img: '/images/CORTES/F170.webp',
        images: ['/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp', '/images/CORTES/F170.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER F170'
    },
    {
        id: 50,
        title: 'FREIGHTLINER CASCADIA',
        price: '$270,000 MXN',
        img: '/images/CORTES/FRCASNAR2.webp',
        images: ['/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp', '/images/CORTES/FRCASNAR2.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA'
    },
    {
        id: 51,
        title: 'INTERNATIONAL 4400',
        price: '$240,000 MXN',
        img: '/images/CORTES/INT4400.webp',
        images: ['/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp', '/images/CORTES/INT4400.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4400'
    },
    {
        id: 52,
        title: 'INTERNATIONAL 4300',
        price: '$210,000 MXN',
        img: '/images/CORTES/INT4300.webp',
        images: ['/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp', '/images/CORTES/INT4300.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4300'
    },
    {
        id: 53,
        title: 'INTERNATIONAL 4400',
        price: '$230,000 MXN',
        img: '/images/CORTES/INT4400BLN.webp',
        images: ['/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp', '/images/CORTES/INT4400BLN.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4400'
    },
    {
        id: 54,
        title: 'MITSUBISHI FUSO',
        price: '$210,000 MXN',
        img: '/images/CORTES/FUSO.webp',
        images: ['/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp', '/images/CORTES/FUSO.webp'],
        category: 'cortes',
        modelo: 'MITSUBISHI FUSO'
    },
    {
        id: 55,
        title: 'INTERNATIONAL 4400',
        price: '$390,000 MXN',
        img: '/images/CORTES/INT440BLN2.webp',
        images: ['/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp', '/images/CORTES/INT440BLN2.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4400'
    },
    {
        id: 56,
        title: 'NAVISTAR 4700',
        price: '$200,000 MXN',
        img: '/images/CORTES/47002.webp',
        images: ['/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp', '/images/CORTES/47002.webp'],
        category: 'cortes',
        modelo: 'NAVISTAR 4700'
    },
    {
        id: 57,
        title: 'NAVISTAR 4700',
        price: '$220,000 MXN',
        img: '/images/CORTES/17.webp',
        images: ['/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp', '/images/CORTES/17.webp'],
        category: 'cortes',
        modelo: 'NAVISTAR 4700'
    },
    {
        id: 58,
        title: 'INTERNATIONAL 8600',
        price: '$320,000 MXN',
        img: '/images/CORTES/INT8600.webp',
        images: ['/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp', '/images/CORTES/INT8600.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 8600'
    },
    {
        id: 59,
        title: 'INTERNATIONAL 4300',
        price: '$220,000 MXN',
        img: '/images/CORTES/INTTIGRE.webp',
        images: ['/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp', '/images/CORTES/INTTIGRE.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4300'
    },
    {
        id: 60,
        title: 'FREIGHTLINER CASCADIA',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/18.webp',
        images: ['/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp', '/images/CORTES/18.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA'
    },
    {
        id: 61,
        title: 'FREIGHTLINER CASCADIA 125',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/19.webp',
        images: ['/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp', '/images/CORTES/19.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA 125'
    },
    {
        id: 62,
        title: 'NAVISTAR 4700',
        price: '$240,000 MXN',
        img: '/images/CORTES/20.webp',
        images: ['/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp', '/images/CORTES/20.webp'],
        category: 'cortes',
        modelo: 'NAVISTAR 4700'
    },
    {
        id: 63,
        title: 'DODGE SPRINTER',
        price: '$240,000 MXN',
        img: '/images/CORTES/2.webp',
        images: ['/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp', '/images/CORTES/2.webp'],
        category: 'cortes',
        modelo: 'DODGE SPRINTER'
    },
    {
        id: 64,
        title: 'VOLVO VNL',
        price: '$75,000 MXN',
        img: '/images/CORTES/3.webp',
        images: ['/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp', '/images/CORTES/3.webp'],
        category: 'cortes',
        modelo: 'VOLVO VNL'
    },
    {
        id: 65,
        title: 'INTERNATIONAL 4200',
        price: '$215,000 MXN',
        img: '/images/CORTES/MEDIOINT.webp',
        images: ['/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp', '/images/CORTES/MEDIOINT.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4200'
    },
    {
        id: 66,
        title: 'FREIGHTLINER CENTURY',
        price: '$340,000 MXN',
        img: '/images/CORTES/FRCENTURY.webp',
        images: ['/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp', '/images/CORTES/FRCENTURY.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CENTURY'
    },
    {
        id: 67,
        title: 'FREIGHTLINER CASCADIA',
        price: '$380,000 MXN',
        img: '/images/CORTES/FRCASCADIA.webp',
        images: ['/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp', '/images/CORTES/FRCASCADIA.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA'
    },
    {
        id: 68,
        title: 'FREIGHTLINER CASCADIA',
        price: '$380,000 MXN',
        img: '/images/CORTES/21.webp',
        images: ['/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp', '/images/CORTES/21.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA'
    },
    {
        id: 69,
        title: 'INTERNATIONAL 4300',
        price: '$350,000 MXN',
        img: '/images/CORTES/INTBLANCO27.webp',
        images: ['/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp', '/images/CORTES/INTBLANCO27.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4300'
    },
    {
        id: 70,
        title: 'FORD CARGO 7000',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/5.webp',
        images: ['/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp', '/images/CORTES/5.webp'],
        category: 'cortes',
        modelo: 'FORD CARGO 7000'
    },
    {
        id: 71,
        title: 'FREIGHTLINER CASCADIA',
        price: '$350,000 MXN',
        img: '/images/CORTES/FRCASNAR.webp',
        images: ['/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp', '/images/CORTES/FRCASNAR.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER CASCADIA'
    },
    {
        id: 72,
        title: 'INTERNATIONAL 4700',
        price: '$210,000 MXN',
        img: '/images/CORTES/22.webp',
        images: ['/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp', '/images/CORTES/22.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL 4700'
    },
    {
        id: 73,
        title: 'INTERNATIONAL MA-025',
        price: '$220,000 MXN',
        img: '/images/CORTES/7.webp',
        images: ['/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp', '/images/CORTES/7.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL MA-025'
    },
    {
        id: 74,
        title: 'KENWORTH 4700',
        price: '$320,000 MXN',
        img: '/images/CORTES/8.webp',
        images: ['/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp', '/images/CORTES/8.webp'],
        category: 'cortes',
        modelo: 'KENWORTH 4700'
    },
    {
        id: 75,
        title: 'KENWORTH T300',
        price: '$240,000 MXN',
        img: '/images/CORTES/9.webp',
        images: ['/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp', '/images/CORTES/9.webp'],
        category: 'cortes',
        modelo: 'KENWORTH T300'
    },
    {
        id: 76,
        title: 'INTERNATIONAL PROSTAR',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/10.webp',
        images: ['/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp', '/images/CORTES/10.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL PROSTAR'
    },
    {
        id: 77,
        title: 'INTERNATIONAL PROSTAR',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/11.webp',
        images: ['/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp', '/images/CORTES/11.webp'],
        category: 'cortes',
        modelo: 'INTERNATIONAL PROSTAR'
    },
    {
        id: 78,
        title: 'FREIGHTLINER M2',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/12.webp',
        images: ['/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp', '/images/CORTES/12.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER M2'
    },
    {
        id: 79,
        title: 'FREIGHTLINER',
        price: '$220,000 MXN',
        img: '/images/CORTES/13.webp',
        images: ['/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp', '/images/CORTES/13.webp'],
        category: 'cortes',
        modelo: 'FREIGHTLINER'
    },
    {
        id: 80,
        title: 'GMC TOPKICK',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/CORTES/14.webp',
        images: ['/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp', '/images/CORTES/14.webp'],
        category: 'cortes',
        modelo: 'GMC TOPKICK'
    },

    // --- FABRICA ---
    {
        id: 81,
        title: 'PIPAS DE AGUA',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/PIPAS.webp',
        images: ['/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp', '/images/PIPAS.webp'],
        category: 'fabrica',
        modelo: 'PIPAS DE AGUA'
    },
    {
        id: 82,
        title: 'CAJA DE VOLTEO 7 METROS',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/Volteo.webp',
        images: ['/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp'],
        category: 'fabrica',
        modelo: 'CAJA DE VOLTEO 7 METROS'
    },
    {
        id: 83,
        title: 'CAJA DE VOLTEO 14 METROS',
        price: 'CONTACTANOS PARA COTIZAR EL PRECIO',
        img: '/images/Volteo.webp',
        images: ['/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp', '/images/Volteo.webp'],
        category: 'fabrica',
        modelo: 'CAJA DE VOLTEO 14 METROS'
    }
];
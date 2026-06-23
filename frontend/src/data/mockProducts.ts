import type { Product } from '@/types'

export const mockProducts: Product[] = [
  {
    id: '1',
    name: {
      zh: 'FDM-500 桌面级3D打印机',
      en: 'FDM-500 Desktop 3D Printer',
      fr: 'Imprimante 3D de bureau FDM-500',
      ru: 'Настольный 3D-принтер FDM-500',
      es: 'Impresora 3D de escritorio FDM-500'
    },
    description: {
      zh: '高精度桌面级FDM 3D打印机，支持多种耗材，适合个人用户和小型工作室使用。',
      en: 'High-precision desktop FDM 3D printer, supports multiple materials, ideal for personal users and small studios.',
      fr: 'Imprimante 3D FDM de bureau haute précision, compatible avec多种 matériaux, idéale pour les utilisateurs individuels et les petits ateliers.',
      ru: 'Высокоточный настольный 3D-принтер FDM, поддерживает多种 материалы, идеально подходит для индивидуальных пользователей и небольших студий.',
      es: 'Impresora 3D FDM de escritorio de alta precisión, compatible con多种 materiales, ideal para usuarios individuales y pequeños estudios.'
    },
    price: 2999,
    originalPrice: 3499,
    category: 'printer',
    subCategory: 'fdm',
    specs: {
      buildVolume: '300 x 300 x 400 mm',
      layerHeight: '0.05-0.3 mm',
      nozzleDiameter: '0.4 mm',
      maxPrintSpeed: '200 mm/s',
      power: '350W',
      weight: '25 kg'
    },
    features: ['自动调平', '断电续打', '静音运行', '远程监控'],
    applications: ['原型制作', '教育教学', '创意设计', '小批量生产'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20desktop%20FDM%203D%20printer%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 50,
    sales: 1234,
    rating: 4.8,
    reviews: 234,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    name: {
      zh: 'SLA-300 光固化3D打印机',
      en: 'SLA-300 Resin 3D Printer',
      fr: 'Imprimante 3D résine SLA-300',
      ru: '3D-принтер на фотополимере SLA-300',
      es: 'Impresora 3D de resina SLA-300'
    },
    description: {
      zh: '高精度光固化3D打印机，适合珠宝设计、牙科模型等精细零件制作。',
      en: 'High-precision resin 3D printer, ideal for jewelry design, dental models and other fine parts.',
      fr: 'Imprimante 3D résine haute précision, idéale pour la conception de bijoux, les modèles dentaires et autres pièces fines.',
      ru: 'Высокоточный 3D-принтер на фотополимере, идеально подходит для дизайна ювелирных изделий, стоматологических моделей и других мелких деталей.',
      es: 'Impresora 3D de resina de alta precisión, ideal para diseño de joyas, modelos dentales y otras piezas finas.'
    },
    price: 4999,
    originalPrice: 5999,
    category: 'printer',
    subCategory: 'sla',
    specs: {
      buildVolume: '150 x 150 x 200 mm',
      layerHeight: '0.02-0.1 mm',
      resolution: '2K',
      printSpeed: '30 mm/h',
      power: '200W',
      weight: '18 kg'
    },
    features: ['高精度打印', '低气味树脂', '智能温控', '一键操作'],
    applications: ['珠宝设计', '牙科模型', '手办制作', '精密零件'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=SLA%20resin%203D%20printer%20professional%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 30,
    sales: 567,
    rating: 4.9,
    reviews: 156,
    createdAt: '2024-02-20'
  },
  {
    id: '3',
    name: {
      zh: 'SLS-800 选择性激光烧结机',
      en: 'SLS-800 Selective Laser Sintering',
      fr: 'Sinterisation laser sélective SLS-800',
      ru: 'Селективный лазерный синтез SLS-800',
      es: 'Sinterización láser selectiva SLS-800'
    },
    description: {
      zh: '工业级SLS 3D打印机，适合功能性零件生产，高强度材料打印。',
      en: 'Industrial-grade SLS 3D printer, ideal for functional parts production with high-strength materials.',
      fr: 'Imprimante 3D SLS industrielle, idéale pour la production de pièces fonctionnelles avec des matériaux haute résistance.',
      ru: 'Промышленный 3D-принтер SLS, идеально подходит для производства функциональных деталей из высокопрочных материалов.',
      es: 'Impresora 3D SLS industrial, ideal para producción de piezas funcionales con materiales de alta resistencia.'
    },
    price: 29999,
    originalPrice: 35999,
    category: 'printer',
    subCategory: 'sls',
    specs: {
      buildVolume: '350 x 350 x 400 mm',
      layerHeight: '0.05-0.2 mm',
      laserPower: '40W',
      printSpeed: '50 mm/h',
      power: '1500W',
      weight: '180 kg'
    },
    features: ['工业级精度', '无需支撑', '高强度零件', '大尺寸打印'],
    applications: ['航空航天', '汽车制造', '医疗器械', '模具制造'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=industrial%20SLS%203D%20printer%20large%20machine%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 10,
    sales: 89,
    rating: 4.7,
    reviews: 45,
    createdAt: '2024-03-10'
  },
  {
    id: '4',
    name: {
      zh: 'PLA 耗材 1kg 白色',
      en: 'PLA Filament 1kg White',
      fr: 'Filament PLA 1kg Blanc',
      ru: 'Проволока PLA 1кг Белый',
      es: 'Filamento PLA 1kg Blanco'
    },
    description: {
      zh: '高品质PLA耗材，环保可降解，打印流畅，适合各种FDM打印机。',
      en: 'High-quality PLA filament, eco-friendly and biodegradable, smooth printing, compatible with all FDM printers.',
      fr: 'Filament PLA de haute qualité, écologique et biodégradable, impression fluide, compatible avec toutes les imprimantes FDM.',
      ru: 'Высококачественная проволока PLA, экологичная и биоразлагаемая, плавная печать, совместима со всеми FDM-принтерами.',
      es: 'Filamento PLA de alta calidad, ecológico y biodegradable, impresión fluida, compatible con todas las impresoras FDM.'
    },
    price: 59,
    originalPrice: 79,
    category: 'material',
    subCategory: 'pla',
    specs: {
      diameter: '1.75 mm',
      weight: '1 kg',
      tolerance: '+/- 0.02 mm',
      meltingPoint: '190-220°C',
      color: '白色',
      packing: '真空包装'
    },
    features: ['高精度公差', '无气泡', '打印流畅', '环保材料'],
    applications: ['原型制作', '教育教学', '创意设计', '日常用品'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=white%20PLA%203D%20printer%20filament%20spool%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 200,
    sales: 5678,
    rating: 4.9,
    reviews: 890,
    createdAt: '2024-01-05'
  },
  {
    id: '5',
    name: {
      zh: 'PETG 耗材 1kg 透明',
      en: 'PETG Filament 1kg Clear',
      fr: 'Filament PETG 1kg Transparent',
      ru: 'Проволока PETG 1кг Прозрачный',
      es: 'Filamento PETG 1kg Transparente'
    },
    description: {
      zh: '高强度PETG耗材，耐冲击，透明质感，适合功能性零件打印。',
      en: 'High-strength PETG filament, impact-resistant, transparent, ideal for functional parts.',
      fr: 'Filament PETG haute résistance, résistant aux chocs, transparent, idéal pour les pièces fonctionnelles.',
      ru: 'Высокопрочная проволока PETG, ударопрочная, прозрачная, идеально подходит для функциональных деталей.',
      es: 'Filamento PETG de alta resistencia, resistente a impactos, transparente, ideal para piezas funcionales.'
    },
    price: 79,
    originalPrice: 99,
    category: 'material',
    subCategory: 'petg',
    specs: {
      diameter: '1.75 mm',
      weight: '1 kg',
      tolerance: '+/- 0.02 mm',
      meltingPoint: '220-250°C',
      color: '透明',
      packing: '真空包装'
    },
    features: ['高强度', '耐冲击', '透明质感', '耐化学腐蚀'],
    applications: ['功能性零件', '机械部件', '透明外壳', '容器制作'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=clear%20transparent%20PETG%203D%20printer%20filament%20spool%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 150,
    sales: 3456,
    rating: 4.8,
    reviews: 567,
    createdAt: '2024-01-10'
  },
  {
    id: '6',
    name: {
      zh: '光敏树脂 500ml 灰色',
      en: 'Resin 500ml Gray',
      fr: 'Résine 500ml Gris',
      ru: 'Фотополимерная смола 500мл Серый',
      es: 'Resina 500ml Gris'
    },
    description: {
      zh: '高品质光敏树脂，低气味，高精度打印，适合SLA/DLP打印机。',
      en: 'High-quality photosensitive resin, low odor, high-precision printing, compatible with SLA/DLP printers.',
      fr: 'Résine photosensible de haute qualité, faible odeur, impression haute précision, compatible avec les imprimantes SLA/DLP.',
      ru: 'Высококачественная фотополимерная смола, низкий запах, высокоточная печать, совместима с SLA/DLP-принтерами.',
      es: 'Resina fotosensible de alta calidad, bajo olor, impresión de alta precisión, compatible con impresoras SLA/DLP.'
    },
    price: 129,
    originalPrice: 159,
    category: 'material',
    subCategory: 'resin',
    specs: {
      volume: '500 ml',
      color: '灰色',
      viscosity: '1500-2000 mPa·s',
      curingTime: '5-10s',
      shelfLife: '6个月',
      packing: '避光瓶'
    },
    features: ['低气味', '高精度', '快速固化', '低收缩率'],
    applications: ['珠宝设计', '牙科模型', '手办制作', '精密零件'],
    images: ['https://neeko-copilot.bytedance.net/api/text_to_image?prompt=gray%20photopolymer%20resin%20bottle%20for%20SLA%203D%20printer%20white%20background%20product%20photo&image_size=square_hd'],
    stock: 80,
    sales: 1234,
    rating: 4.7,
    reviews: 234,
    createdAt: '2024-02-01'
  }
]

export const productCategories = [
  { id: 'printer', name: { zh: '3D打印机', en: '3D Printers', fr: 'Imprimantes 3D', ru: '3D-принтеры', es: 'Impresoras 3D' } },
  { id: 'material', name: { zh: '打印耗材', en: 'Materials', fr: 'Matériaux', ru: 'Материалы', es: 'Materiales' } }
]

export const productSubCategories = {
  printer: [
    { id: 'fdm', name: { zh: 'FDM桌面机', en: 'FDM Desktop', fr: 'FDM Bureau', ru: 'FDM Настольные', es: 'FDM Escritorio' } },
    { id: 'sla', name: { zh: 'SLA光固化', en: 'SLA Resin', fr: 'SLA Résine', ru: 'SLA Фотополимер', es: 'SLA Resina' } },
    { id: 'sls', name: { zh: 'SLS工业机', en: 'SLS Industrial', fr: 'SLS Industriel', ru: 'SLS Промышленные', es: 'SLS Industrial' } }
  ],
  material: [
    { id: 'pla', name: { zh: 'PLA耗材', en: 'PLA Filament', fr: 'Filament PLA', ru: 'Проволока PLA', es: 'Filamento PLA' } },
    { id: 'petg', name: { zh: 'PETG耗材', en: 'PETG Filament', fr: 'Filament PETG', ru: 'Проволока PETG', es: 'Filamento PETG' } },
    { id: 'resin', name: { zh: '光敏树脂', en: 'Resin', fr: 'Résine', ru: 'Фотополимер', es: 'Resina' } }
  ]
}

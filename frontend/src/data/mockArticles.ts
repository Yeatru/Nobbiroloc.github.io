import type { Article } from '@/types'

export const mockArticles: Article[] = [
  {
    id: '1',
    title: {
      zh: '2024年3D打印技术最新发展趋势',
      en: 'Latest 3D Printing Technology Trends in 2024',
      fr: 'Tendances techniques d impression 3D en 2024',
      ru: 'Новейшие тенденции технологии 3D-печати в 2024 году',
      es: 'Tendencias tecnológicas de impresión 3D en 2024'
    },
    summary: {
      zh: '本文介绍了2024年3D打印技术的最新发展趋势，包括新材料、新工艺和新应用领域。',
      en: 'This article introduces the latest development trends of 3D printing technology in 2024, including new materials, new processes and new application areas.',
      fr: 'Cet article présente les dernières tendances du développement de la technologie d impression 3D en 2024, y compris les nouveaux matériaux, les nouveaux processus et les nouveaux domaines d application.',
      ru: 'В этой статье представлены последние тенденции развития технологии 3D-печати в 2024 году, включая новые материалы, новые процессы и новые области применения.',
      es: 'Este artículo presenta las últimas tendencias del desarrollo de la tecnología de impresión 3D en 2024, incluyendo nuevos materiales, nuevos procesos y nuevas áreas de aplicación.'
    },
    content: {
      zh: '<h2>一、新材料的突破</h2><p>2024年，3D打印材料领域取得了重大突破。新型高强度复合材料、生物可降解材料和导电材料不断涌现，为3D打印技术开辟了更广阔的应用前景。</p><h2>二、工艺创新</h2><p>随着技术的进步，3D打印工艺也在不断创新。高速打印、多材料打印和微纳3D打印等新技术正在改变制造业的面貌。</p><h2>三、应用领域扩展</h2><p>3D打印技术正在从传统的原型制作向大规模生产转变，航空航天、医疗、汽车等领域的应用越来越广泛。</p>',
      en: '<h2>1. Breakthrough in New Materials</h2><p>In 2024, significant breakthroughs have been made in 3D printing materials. New high-strength composite materials, biodegradable materials and conductive materials continue to emerge, opening up broader application prospects for 3D printing technology.</p><h2>2. Process Innovation</h2><p>With technological advances, 3D printing processes are also constantly innovating. New technologies such as high-speed printing, multi-material printing and micro-nano 3D printing are changing the face of manufacturing.</p><h2>3. Application Field Expansion</h2><p>3D printing technology is transitioning from traditional prototyping to mass production, with applications in aerospace, medical, automotive and other fields becoming increasingly widespread.</p>',
      fr: '<h2>1. Percée dans les nouveaux matériaux</h2><p>En 2024, des percées significatives ont été réalisées dans les matériaux d impression 3D. De nouveaux matériaux composites haute résistance, des matériaux biodégradables et des matériaux conducteurs continuent d apparaitre, ouvrant de plus larges perspectives d application pour la technologie d impression 3D.</p><h2>2. Innovation de processus</h2><p>Grâce aux progrès technologiques, les processus d impression 3D sont également en constante innovation. De nouvelles technologies telles que l impression haute vitesse, l impression multi-matériaux et l impression 3D micro-nano modifient le visage de la fabrication.</p><h2>3. Expansion des domaines d application</h2><p>La technologie d impression 3D passe de la prototypage traditionnel à la production de masse, ses applications dans les domaines aéronautique, médical, automobile et autres devenant de plus en plus répandues.</p>',
      ru: '<h2>1. Прорыв в новых материалах</h2><p>В 2024 году достигнуты значительные прорывы в области материалов для 3D-печати. Появляются новые высокопрочные композитные материалы, биоразлагаемые материалы и проводящие материалы, открывая более широкие перспективы применения технологии 3D-печати.</p><h2>2. Инновации в процессах</h2><p>С развитием технологий процессы 3D-печати также постоянно совершенствуются. Новые технологии, такие как высокоскоростная печать, многоматериальная печать и микро- и нанотехнологическая 3D-печать, меняют облик производства.</p><h2>3. Расширение областей применения</h2><p>Технология 3D-печати переходит от традиционного прототипирования к массовому производству, и ее применение в аэрокосмической, медицинской, автомобильной и других отраслях становится все более широким.</p>',
      es: '<h2>1. Avance en nuevos materiales</h2><p>En 2024, se han logrado avances significativos en materiales de impresión 3D. Nuevos materiales compuestos de alta resistencia, materiales biodegradables y materiales conductores siguen surgiendo, abriendo perspectivas más amplias para la tecnología de impresión 3D.</p><h2>2. Innovación en procesos</h2><p>Con los avances tecnológicos, los procesos de impresión 3D también están en constante innovación. Nuevas tecnologías como la impresión de alta velocidad, la impresión multimaterial y la impresión 3D micro y nano están cambiando la faz de la manufactura.</p><h2>3. Expansión de áreas de aplicación</h2><p>La tecnología de impresión 3D está pasando de la prototipado tradicional a la producción masiva, con aplicaciones en aeronáutica, medicina, automoción y otros campos cada vez más extendidas.</p>'
    },
    author: {
      zh: '技术团队',
      en: 'Tech Team',
      fr: 'Équipe technique',
      ru: 'Техническая команда',
      es: 'Equipo técnico'
    },
    category: {
      zh: '行业资讯',
      en: 'Industry News',
      fr: 'Actualités industrielles',
      ru: 'Индустрийные новости',
      es: 'Noticias de la industria'
    },
    views: 2345,
    createdAt: '2024-03-15',
    image: '/images/article1.jpg'
  },
  {
    id: '2',
    title: {
      zh: '如何选择适合您的3D打印机',
      en: 'How to Choose the Right 3D Printer for You',
      fr: 'Comment choisir la bonne imprimante 3D pour vous',
      ru: 'Как выбрать подходящий 3D-принтер для себя',
      es: 'Cómo elegir la impresora 3D adecuada para usted'
    },
    summary: {
      zh: '本文为您介绍选择3D打印机时需要考虑的关键因素，帮助您做出明智的购买决策。',
      en: 'This article introduces the key factors to consider when choosing a 3D printer, helping you make an informed purchasing decision.',
      fr: 'Cet article vous présente les facteurs clés à prendre en compte lors du choix d une imprimante 3D, vous aidant à prendre une décision d achat éclairée.',
      ru: 'В этой статье представлены ключевые факторы, которые нужно учитывать при выборе 3D-принтера, помогая вам принять обоснованное решение о покупке.',
      es: 'Este artículo presenta los factores clave a considerar al elegir una impresora 3D, ayudándole a tomar una decisión de compra informada.'
    },
    content: {
      zh: '<h2>一、明确需求</h2><p>在购买3D打印机之前，首先要明确您的使用需求。是用于原型制作、教育教学还是小规模生产？不同的需求对应不同类型的打印机。</p><h2>二、技术参数</h2><p>打印尺寸、精度、速度和材料兼容性是选择打印机时需要重点考虑的技术参数。</p><h2>三、预算考量</h2><p>3D打印机的价格范围很广，从几千元到几十万元不等。根据您的预算选择合适的设备。</p>',
      en: '<h2>1. Define Your Needs</h2><p>Before purchasing a 3D printer, it is important to define your usage requirements. Is it for prototyping, education or small-scale production? Different needs correspond to different types of printers.</p><h2>2. Technical Specifications</h2><p>Print size, precision, speed and material compatibility are important technical parameters to consider when choosing a printer.</p><h2>3. Budget Considerations</h2><p>3D printers range in price from a few thousand yuan to hundreds of thousands of yuan. Choose the right equipment according to your budget.</p>',
      fr: '<h2>1. Définir vos besoins</h2><p>Avant d acheter une imprimante 3D, il est important de définir vos besoins d utilisation. Est-ce pour le prototypage, l éducation ou la production à petite échelle ? Différents besoins correspondent à différents types d imprimantes.</p><h2>2. Spécifications techniques</h2><p>La taille d impression, la précision, la vitesse et la compatibilité des matériaux sont des paramètres techniques importants à considérer lors du choix d une imprimante.</p><h2>3. Considérations budgétaires</h2><p>Les imprimantes 3D varient en prix de quelques milliers de yuans à plusieurs centaines de milliers de yuans. Choisissez l équipement approprié selon votre budget.</p>',
      ru: '<h2>1. Определите свои потребности</h2><p>Перед покупкой 3D-принтера важно определить ваши потребности в использовании. Это для прототипирования, образования или мелкосерийного производства? Разные потребности соответствуют разным типам принтеров.</p><h2>2. Технические характеристики</h2><p>Размер печати, точность, скорость и совместимость материалов — это важные технические параметры, которые нужно учитывать при выборе принтера.</p><h2>3. Бюджетные соображения</h2><p>Цены на 3D-принтеры варьируются от нескольких тысяч до нескольких сотен тысяч юаней. Выберите подходящее оборудование в соответствии с вашим бюджетом.</p>',
      es: '<h2>1. Defina sus necesidades</h2><p>Antes de comprar una impresora 3D, es importante definir sus requisitos de uso. ¿Es para prototipado, educación o producción a pequeña escala? Diferentes necesidades corresponden a diferentes tipos de impresoras.</p><h2>2. Especificaciones técnicas</h2><p>El tamaño de impresión, la precisión, la velocidad y la compatibilidad de materiales son parámetros técnicos importantes a considerar al elegir una impresora.</p><h2>3. Consideraciones presupuestarias</h2><p>Las impresoras 3D varían en precio desde unos pocos miles de yuanes hasta cientos de miles de yuanes. Elija el equipo adecuado según su presupuesto.</p>'
    },
    author: {
      zh: '产品专家',
      en: 'Product Expert',
      fr: 'Expert produit',
      ru: 'Эксперт по продукту',
      es: 'Experto en productos'
    },
    category: {
      zh: '选购指南',
      en: 'Buying Guide',
      fr: 'Guide d achat',
      ru: 'Покупательский гид',
      es: 'Guía de compra'
    },
    views: 1876,
    createdAt: '2024-03-10',
    image: '/images/article2.jpg'
  },
  {
    id: '3',
    title: {
      zh: '3D打印在医疗领域的创新应用',
      en: 'Innovative Applications of 3D Printing in Healthcare',
      fr: 'Applications innovantes de l impression 3D dans le domaine de la santé',
      ru: 'Инновационные приложения 3D-печати в сфере здравоохранения',
      es: 'Aplicaciones innovadoras de la impresión 3D en el sector sanitario'
    },
    summary: {
      zh: '3D打印技术正在医疗领域引发革命性变革，从定制假肢到生物打印器官，应用前景无限。',
      en: '3D printing technology is revolutionizing the healthcare field, from custom prosthetics to bioprinted organs, with unlimited application prospects.',
      fr: 'La technologie d impression 3D révolutionne le domaine de la santé, des prothèses personnalisées aux organes imprimés en 3D, avec des perspectives d application illimitées.',
      ru: 'Технология 3D-печати революционизирует сферу здравоохранения — от индивидуальных протезов до биопечатных органов, с неограниченными перспективами применения.',
      es: 'La tecnología de impresión 3D está revolucionando el sector sanitario, desde prótesis personalizadas hasta órganos bioprintados, con perspectivas de aplicación ilimitadas.'
    },
    content: {
      zh: '<h2>一、定制医疗设备</h2><p>3D打印技术使得定制化医疗设备成为可能，每个患者都能获得最适合自己的治疗方案。</p><h2>二、组织工程</h2><p>生物打印技术正在快速发展，未来有望实现人体器官的体外制造。</p><h2>三、药物研发</h2><p>3D打印技术在药物研发领域也有广泛应用，可以快速制造药物模型进行测试。</p>',
      en: '<h2>1. Custom Medical Devices</h2><p>3D printing technology enables customized medical devices, allowing each patient to receive the most suitable treatment plan.</p><h2>2. Tissue Engineering</h2><p>Bioprinting technology is rapidly developing, with the potential to manufacture human organs outside the body in the future.</p><h2>3. Pharmaceutical Research</h2><p>3D printing technology is also widely used in pharmaceutical research, enabling rapid manufacturing of drug models for testing.</p>',
      fr: '<h2>1. Dispositifs médicaux personnalisés</h2><p>La technologie d impression 3D permet la fabrication de dispositifs médicaux personnalisés, permettant à chaque patient de recevoir le plan de traitement le plus adapté.</p><h2>2. Ingénierie tissulaire</h2><p>La technologie de bioprinting se développe rapidement, avec la possibilité de fabriquer des organes humains hors du corps à l avenir.</p><h2>3. Recherche pharmaceutique</h2><p>La technologie d impression 3D est également largement utilisée dans la recherche pharmaceutique, permettant la fabrication rapide de modèles de médicaments pour les tests.</p>',
      ru: '<h2>1. Индивидуальные медицинские устройства</h2><p>Технология 3D-печати позволяет создавать индивидуальные медицинские устройства, позволяя каждому пациенту получить наиболее подходящий план лечения.</p><h2>2. Тканевая инженерия</h2><p>Технология биопечати быстро развивается, и в будущем有望实现体外制造人体器官。</p><h2>3. Фармацевтические исследования</h2><p>Технология 3D-печати также широко используется в фармацевтических исследованиях, позволяя быстро создавать модели лекарств для тестирования.</p>',
      es: '<h2>1. Dispositivos médicos personalizados</h2><p>La tecnología de impresión 3D permite dispositivos médicos personalizados, permitiendo a cada paciente recibir el plan de tratamiento más adecuado.</p><h2>2. Ingeniería tisular</h2><p>La tecnología de bioprinting se está desarrollando rápidamente, con el potencial de fabricar órganos humanos fuera del cuerpo en el futuro.</p><h2>3. Investigación farmacéutica</h2><p>La tecnología de impresión 3D también se usa ampliamente en la investigación farmacéutica, permitiendo la fabricación rápida de modelos de fármacos para pruebas.</p>'
    },
    author: {
      zh: '医疗事业部',
      en: 'Medical Division',
      fr: 'Division médicale',
      ru: 'Медицинское подразделение',
      es: 'División médica'
    },
    category: {
      zh: '应用案例',
      en: 'Case Studies',
      fr: 'Études de cas',
      ru: 'Примеры применения',
      es: 'Estudios de caso'
    },
    views: 3456,
    createdAt: '2024-03-05',
    image: '/images/article3.jpg'
  },
  {
    id: '4',
    title: {
      zh: '3D打印耗材选择指南',
      en: 'Guide to Choosing 3D Printing Materials',
      fr: 'Guide pour choisir les matériaux d impression 3D',
      ru: 'Гид по выбору материалов для 3D-печати',
      es: 'Guía para elegir materiales de impresión 3D'
    },
    summary: {
      zh: '本文详细介绍了各种3D打印耗材的特性和适用场景，帮助您选择最适合的打印材料。',
      en: 'This article provides a detailed introduction to the characteristics and application scenarios of various 3D printing materials, helping you choose the most suitable printing material.',
      fr: 'Cet article présente en détail les caractéristiques et les scénarios d application de divers matériaux d impression 3D, vous aidant à choisir le matériau d impression le plus adapté.',
      ru: 'В этой статье подробно представлены характеристики и сценарии применения различных материалов для 3D-печати, помогая вам выбрать наиболее подходящий материал для печати.',
      es: 'Este artículo presenta detalladamente las características y escenarios de aplicación de varios materiales de impresión 3D, ayudándole a elegir el material de impresión más adecuado.'
    },
    content: {
      zh: '<h2>一、PLA耗材</h2><p>PLA是最常用的3D打印耗材之一，易于打印，环保可降解，但耐热性较差。</p><h2>二、ABS耗材</h2><p>ABS耗材强度高，耐热性好，但需要加热床，且打印时有异味。</p><h2>三、PETG耗材</h2><p>PETG结合了PLA和ABS的优点，强度高、透明度好、耐冲击。</p><h2>四、光敏树脂</h2><p>光敏树脂适用于光固化打印机，打印精度高，但材料成本较高。</p>',
      en: '<h2>1. PLA Filament</h2><p>PLA is one of the most commonly used 3D printing materials, easy to print, eco-friendly and biodegradable, but has poor heat resistance.</p><h2>2. ABS Filament</h2><p>ABS filament has high strength and good heat resistance, but requires a heated bed and produces odor during printing.</p><h2>3. PETG Filament</h2><p>PETG combines the advantages of PLA and ABS, with high strength, good transparency and impact resistance.</p><h2>4. Photopolymer Resin</h2><p>Photopolymer resin is suitable for resin printers, with high printing precision but higher material cost.</p>',
      fr: '<h2>1. Filament PLA</h2><p>Le PLA est l un des matériaux d impression 3D les plus couramment utilisés, facile à imprimer, écologique et biodégradable, mais avec une résistance à la chaleur médiocre.</p><h2>2. Filament ABS</h2><p>Le filament ABS a une haute résistance et une bonne résistance à la chaleur, mais nécessite un lit chauffant et produit une odeur lors de l impression.</p><h2>3. Filament PETG</h2><p>Le PETG combine les avantages du PLA et de l ABS, avec une haute résistance, une bonne transparence et une résistance aux chocs.</p><h2>4. Résine photopolymère</h2><p>La résine photopolymère est adaptée aux imprimantes à résine, avec une précision d impression élevée mais un coût de matériau plus élevé.</p>',
      ru: '<h2>1. Проволока PLA</h2><p>PLA — один из самых часто используемых материалов для 3D-печати, легко печатается, экологичен и биоразлагаем, но имеет низкую теплостойкость.</p><h2>2. Проволока ABS</h2><p>Проволока ABS обладает высокой прочностью и хорошей теплостойкостью, но требует нагретого стола и производит запах во время печати.</p><h2>3. Проволока PETG</h2><p>PETG сочетает преимущества PLA и ABS, обладает высокой прочностью, хорошей прозрачностью и ударопрочностью.</p><h2>4. Фотополимерная смола</h2><p>Фотополимерная смола подходит для смольных принтеров, имеет высокую точность печати, но более высокая стоимость материала.</p>',
      es: '<h2>1. Filamento PLA</h2><p>El PLA es uno de los materiales de impresión 3D más utilizados, fácil de imprimir, ecológico y biodegradable, pero con poca resistencia al calor.</p><h2>2. Filamento ABS</h2><p>El filamento ABS tiene alta resistencia y buena resistencia al calor, pero requiere una cama calentada y produce olor durante la impresión.</p><h2>3. Filamento PETG</h2><p>El PETG combina las ventajas del PLA y el ABS, con alta resistencia, buena transparencia y resistencia a impactos.</p><h2>4. Resina fotopolimérica</h2><p>La resina fotopolimérica es adecuada para impresoras de resina, con alta precisión de impresión pero costo de material más alto.</p>'
    },
    author: {
      zh: '技术支持',
      en: 'Technical Support',
      fr: 'Support technique',
      ru: 'Техническая поддержка',
      es: 'Soporte técnico'
    },
    category: {
      zh: '使用教程',
      en: 'Tutorials',
      fr: 'Tutoriels',
      ru: 'Руководства',
      es: 'Tutoriales'
    },
    views: 2134,
    createdAt: '2024-02-28',
    image: '/images/article4.jpg'
  }
]

export const articleCategories = [
  { id: 'news', name: { zh: '行业资讯', en: 'Industry News', fr: 'Actualités', ru: 'Новости', es: 'Noticias' } },
  { id: 'guide', name: { zh: '选购指南', en: 'Buying Guide', fr: 'Guide', ru: 'Гид', es: 'Guía' } },
  { id: 'case', name: { zh: '应用案例', en: 'Case Studies', fr: 'Études', ru: 'Кейсы', es: 'Casos' } },
  { id: 'tutorial', name: { zh: '使用教程', en: 'Tutorials', fr: 'Tutoriels', ru: 'Туториалы', es: 'Tutoriales' } }
]

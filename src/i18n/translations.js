const translations = {
  kg: {
    // Navigation
    'nav.home': 'Башкы бет',
    'nav.skills': 'Көндүмдөр',
    'nav.experience': 'Тажрыйба',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Байланыш',

    // Home
    'home.name': 'Акдил Кубанычбеков',
    'home.greeting': 'Салам, мен',
    'home.title': 'Middle Front-End Engineer',
    'home.info':
      '"Санарип билим берүү" бөлүмүндөгү Middle Front-End Engineer, "Түндүк" ААК. Билим берүү мекемелери үчүн заманбап санарип чечимдерди түзүүгө кызыгам.',
    'home.location': 'Бишкек, Кыргызстан',
    'home.downloadCv': 'CV жүктөө',

    // Skills
    'skills.title': 'Көндүмдөр',

    // Experience
    'experience.title': 'Тажрыйба',
    'experience.education': 'Билим',

    // Experience - Tunduk
    'exp.tunduk.company': '"Түндүк" ААК',
    'exp.tunduk.role': 'Middle Front-End Engineer',
    'exp.tunduk.period': 'Август 2025 - Азыр',
    'exp.tunduk.location': 'Бишкек, Кыргызстан',
    'exp.tunduk.desc1': 'Билим берүү мекемелерин жакшыртуу үчүн заманбап санарип чечимдерди түзүү жана оптималдаштыруу',
    'exp.tunduk.desc2': 'Билим берүү маалымат системалары үчүн колдонуучу интерфейстерин иштеп чыгуу',
    'exp.tunduk.desc3': 'Маалымат базасы менен иштөө',
    'exp.tunduk.desc4': 'API иштеп чыгуу',
    'exp.tunduk.desc5': 'Кодду рефакторинг кылуу',

    // Experience - DEC
    'exp.dec.company': 'Санарип билим берүү борбору (БИМ КР)',
    'exp.dec.role': 'Front-End Инженер',
    'exp.dec.period': 'Декабрь 2023 - Август 2025',
    'exp.dec.location': 'Бишкек, Кыргызстан',
    'exp.dec.desc1': '"АИС Мугалим" долбоорун иштеп чыгуу',
    'exp.dec.desc2': '"Вакансиялар" долбоорун иштеп чыгуу',
    'exp.dec.desc3': '"Конкурстар" долбоорун иштеп чыгуу',
    'exp.dec.desc4': '"Тестирлөө" долбоорун иштеп чыгуу',
    'exp.dec.desc5': 'Билим берүү маалымат системалары үчүн колдонуучу интерфейстерин иштеп чыгуу',

    // Experience - Freelance
    'exp.freelance.company': 'Фриланс',
    'exp.freelance.role': 'Front-End Иштеп чыгуучу',
    'exp.freelance.period': 'Ноябрь 2023 - Май 2025',
    'exp.freelance.location': 'Бишкек, Кыргызстан',
    'exp.freelance.desc1': 'Фриланс веб-иштеп чыгуу долбоорлору',

    // Experience - IT-RUN
    'exp.itrun.company': 'IT-RUN Academy',
    'exp.itrun.role': 'Front-End Ментор',
    'exp.itrun.period': 'Июнь 2021 - Январь 2025',
    'exp.itrun.location': 'Бишкек, Кыргызстан',
    'exp.itrun.desc1': 'Front-End иштеп чыгуу боюнча сабактарды өткөрүү',
    'exp.itrun.desc2': 'Балдар үчүн Front-End Ментор (30+ окуучу)',
    'exp.itrun.desc3': 'Ментор жардамчысы (100+ окуучу)',
    'exp.itrun.desc4': 'Окуучулардын жетишкендигин жана катышуусун эсепке алуу',

    // Experience - Future
    'exp.future.company': 'Future',
    'exp.future.role': 'Frontend Иштеп чыгуучу',
    'exp.future.period': 'Август 2022 - Апрель 2023',
    'exp.future.location': 'Бишкек, Кыргызстан',
    'exp.future.desc1': 'Вебсайт иштеп чыгуу',
    'exp.future.desc2': 'SEO оптималдаштыруу менен иштөө',

    // Experience - HST
    'exp.hst.company': 'HST Technologies',
    'exp.hst.role': 'IT Адис',
    'exp.hst.period': 'Декабрь 2018 - Январь 2020',
    'exp.hst.location': 'Нарын, Кыргызстан',
    'exp.hst.desc1': 'Компьютерлерди оңдоо',
    'exp.hst.desc2': '500+ түзмөктөрдү текшерүү жана башкаруу',
    'exp.hst.desc3': 'Видеокарталарды прошивкалоо, материндик платаларды жана BIOS орнотуу',
    'exp.hst.desc4': 'HIVE OS башкаруу жана мониторинг',

    // Education
    'edu.university': 'Нарын Мамлекеттик Университети',
    'edu.degree': 'Бакалавр - Саламаттык сактоо информатикасы жана биомедициналык инженерия',
    'edu.period': 'Сентябрь 2018 - Июнь 2022',

    // Portfolio
    'portfolio.title': 'Портфолио',
    'portfolio.viewProject': 'Долбоорду көрүү',
    'portfolio.ort.title': 'ОРТ Каттоо',
    'portfolio.ort.desc': 'Жалпы республикалык тестирлөөгө каттоо системасы',
    'portfolio.mugalim.title': 'АИС Мугалим',
    'portfolio.mugalim.desc': 'Мугалимдер үчүн билим берүү маалымат системасы',
    'portfolio.vacancies.title': 'Вакансиялар порталы',
    'portfolio.vacancies.desc': 'Билим берүү тармагы үчүн вакансиялар платформасы',
    'portfolio.contests.title': 'Конкурстар',
    'portfolio.contests.desc': 'Билим берүү тармагы үчүн конкурстар платформасы',
    'portfolio.hyundai.title': 'Hyundai KG',
    'portfolio.hyundai.desc': 'Hyundai расмий дилердик вебсайт',

    // Footer
    'footer.contact': 'Байланыш',
    'footer.languages': 'Тилдер',
    'footer.kyrgyz': 'Кыргызча - Эне тили',
    'footer.russian': 'Орусча - Толук кесиптик',
    'footer.german': 'Немисче - Баштапкы',
    'footer.copyright': '2026 Акдил Кубанычбеков. Бардык укуктар корголгон.',

    // Theme
    'theme.toggle': 'Теманы өзгөртүү',
  },

  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.skills': 'Навыки',
    'nav.experience': 'Опыт',
    'nav.portfolio': 'Портфолио',
    'nav.contact': 'Контакты',

    // Home
    'home.name': 'Акдил Кубанычбеков',
    'home.greeting': 'Привет, я',
    'home.title': 'Middle Front-End Engineer',
    'home.info':
      'Middle Front-End Engineer в "Департаменте цифрового образования" в ОАО "Тундук". Увлечен созданием современных цифровых решений для образовательных учреждений.',
    'home.location': 'Бишкек, Кыргызстан',
    'home.downloadCv': 'Скачать CV',

    // Skills
    'skills.title': 'Навыки',

    // Experience
    'experience.title': 'Опыт работы',
    'experience.education': 'Образование',

    // Experience - Tunduk
    'exp.tunduk.company': 'ОАО "Тундук"',
    'exp.tunduk.role': 'Middle Front-End Engineer',
    'exp.tunduk.period': 'Август 2025 - Настоящее время',
    'exp.tunduk.location': 'Бишкек, Кыргызстан',
    'exp.tunduk.desc1': 'Создание и оптимизация современных цифровых решений для улучшения образовательных учреждений',
    'exp.tunduk.desc2': 'Разработка пользовательских интерфейсов для образовательных информационных систем',
    'exp.tunduk.desc3': 'Работа с базой данных',
    'exp.tunduk.desc4': 'Разработка API',
    'exp.tunduk.desc5': 'Рефакторинг кода',

    // Experience - DEC
    'exp.dec.company': 'Центр цифрового образования (МОН КР)',
    'exp.dec.role': 'Front-End Инженер',
    'exp.dec.period': 'Декабрь 2023 - Август 2025',
    'exp.dec.location': 'Бишкек, Кыргызстан',
    'exp.dec.desc1': 'Разработка проекта "АИС Мугалим"',
    'exp.dec.desc2': 'Разработка проекта "Вакансии"',
    'exp.dec.desc3': 'Разработка проекта "Конкурсы"',
    'exp.dec.desc4': 'Разработка проекта "Тестирование"',
    'exp.dec.desc5': 'Разработка пользовательских интерфейсов для образовательных информационных систем',

    // Experience - Freelance
    'exp.freelance.company': 'Фриланс',
    'exp.freelance.role': 'Front-End Разработчик',
    'exp.freelance.period': 'Ноябрь 2023 - Май 2025',
    'exp.freelance.location': 'Бишкек, Кыргызстан',
    'exp.freelance.desc1': 'Фриланс проекты веб-разработки',

    // Experience - IT-RUN
    'exp.itrun.company': 'IT-RUN Academy',
    'exp.itrun.role': 'Front-End Ментор',
    'exp.itrun.period': 'Июнь 2021 - Январь 2025',
    'exp.itrun.location': 'Бишкек, Кыргызстан',
    'exp.itrun.desc1': 'Проведение занятий по Front-End разработке',
    'exp.itrun.desc2': 'Front-End Ментор для детей (30+ учеников)',
    'exp.itrun.desc3': 'Помощник ментора (100+ учеников)',
    'exp.itrun.desc4': 'Учет успеваемости и посещаемости студентов',

    // Experience - Future
    'exp.future.company': 'Future',
    'exp.future.role': 'Frontend Разработчик',
    'exp.future.period': 'Август 2022 - Апрель 2023',
    'exp.future.location': 'Бишкек, Кыргызстан',
    'exp.future.desc1': 'Разработка веб-сайтов',
    'exp.future.desc2': 'Работа с SEO оптимизацией',

    // Experience - HST
    'exp.hst.company': 'HST Technologies',
    'exp.hst.role': 'IT Специалист',
    'exp.hst.period': 'Декабрь 2018 - Январь 2020',
    'exp.hst.location': 'Нарын, Кыргызстан',
    'exp.hst.desc1': 'Ремонт компьютеров',
    'exp.hst.desc2': 'Проверка и управление более 500 устройствами',
    'exp.hst.desc3': 'Прошивка видеокарт, настройка материнских плат и BIOS',
    'exp.hst.desc4': 'Управление и мониторинг HIVE OS',

    // Education
    'edu.university': 'Нарынский Государственный Университет',
    'edu.degree': 'Бакалавр - Медицинская информатика и биомедицинская инженерия',
    'edu.period': 'Сентябрь 2018 - Июнь 2022',

    // Portfolio
    'portfolio.title': 'Портфолио',
    'portfolio.viewProject': 'Смотреть проект',
    'portfolio.ort.title': 'Регистрация ОРТ',
    'portfolio.ort.desc': 'Система регистрации на Общереспубликанское тестирование',
    'portfolio.mugalim.title': 'АИС Мугалим',
    'portfolio.mugalim.desc': 'Образовательная информационная система для учителей',
    'portfolio.vacancies.title': 'Портал вакансий',
    'portfolio.vacancies.desc': 'Платформа вакансий для сферы образования',
    'portfolio.contests.title': 'Конкурсы',
    'portfolio.contests.desc': 'Платформа конкурсов для сферы образования',
    'portfolio.hyundai.title': 'Hyundai KG',
    'portfolio.hyundai.desc': 'Официальный сайт дилера Hyundai',

    // Footer
    'footer.contact': 'Контакты',
    'footer.languages': 'Языки',
    'footer.kyrgyz': 'Кыргызский - Родной',
    'footer.russian': 'Русский - Профессиональный',
    'footer.german': 'Немецкий - Начальный',
    'footer.copyright': '2026 Акдил Кубанычбеков. Все права защищены.',

    // Theme
    'theme.toggle': 'Переключить тему',
  },

  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.skills': 'Fähigkeiten',
    'nav.experience': 'Erfahrung',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Kontakt',

    // Home
    'home.name': 'Akdil Kubanychbekov',
    'home.greeting': 'Hallo, ich bin',
    'home.title': 'Middle Front-End Engineer',
    'home.info':
      'Middle Front-End Engineer in der "Abteilung für digitale Bildung" bei der AG "Tunduk". Leidenschaftlich für die Entwicklung moderner digitaler Lösungen für Bildungseinrichtungen.',
    'home.location': 'Bischkek, Kirgisistan',
    'home.downloadCv': 'CV herunterladen',

    // Skills
    'skills.title': 'Fähigkeiten',

    // Experience
    'experience.title': 'Berufserfahrung',
    'experience.education': 'Ausbildung',

    // Experience - Tunduk
    'exp.tunduk.company': 'AG "Tunduk"',
    'exp.tunduk.role': 'Middle Front-End Engineer',
    'exp.tunduk.period': 'August 2025 - Heute',
    'exp.tunduk.location': 'Bischkek, Kirgisistan',
    'exp.tunduk.desc1': 'Erstellung und Optimierung moderner digitaler Lösungen zur Verbesserung von Bildungseinrichtungen',
    'exp.tunduk.desc2': 'Entwicklung von Benutzeroberflächen für Bildungsinformationssysteme',
    'exp.tunduk.desc3': 'Arbeit mit der Datenbank',
    'exp.tunduk.desc4': 'API-Entwicklung',
    'exp.tunduk.desc5': 'Code-Refactoring',

    // Experience - DEC
    'exp.dec.company': 'Zentrum für digitale Bildung (MON KR)',
    'exp.dec.role': 'Front-End Ingenieur',
    'exp.dec.period': 'Dezember 2023 - August 2025',
    'exp.dec.location': 'Bischkek, Kirgisistan',
    'exp.dec.desc1': 'Entwicklung des Projekts "AIS Mugalim"',
    'exp.dec.desc2': 'Entwicklung des Projekts "Stellenangebote"',
    'exp.dec.desc3': 'Entwicklung des Projekts "Wettbewerbe"',
    'exp.dec.desc4': 'Entwicklung des Projekts "Prüfungen"',
    'exp.dec.desc5': 'Entwicklung von Benutzeroberflächen für Bildungsinformationssysteme',

    // Experience - Freelance
    'exp.freelance.company': 'Freiberuflich',
    'exp.freelance.role': 'Front-End Entwickler',
    'exp.freelance.period': 'November 2023 - Mai 2025',
    'exp.freelance.location': 'Bischkek, Kirgisistan',
    'exp.freelance.desc1': 'Freiberufliche Webentwicklungsprojekte',

    // Experience - IT-RUN
    'exp.itrun.company': 'IT-RUN Academy',
    'exp.itrun.role': 'Front-End Mentor',
    'exp.itrun.period': 'Juni 2021 - Januar 2025',
    'exp.itrun.location': 'Bischkek, Kirgisistan',
    'exp.itrun.desc1': 'Durchführung von Front-End Entwicklungskursen',
    'exp.itrun.desc2': 'Front-End Mentor für Kinder (30+ Schüler)',
    'exp.itrun.desc3': 'Mentorassistent (100+ Schüler)',
    'exp.itrun.desc4': 'Erfassung des Lernfortschritts und der Anwesenheit der Schüler',

    // Experience - Future
    'exp.future.company': 'Future',
    'exp.future.role': 'Frontend Entwickler',
    'exp.future.period': 'August 2022 - April 2023',
    'exp.future.location': 'Bischkek, Kirgisistan',
    'exp.future.desc1': 'Webseiten-Entwicklung',
    'exp.future.desc2': 'Arbeit mit SEO-Optimierung',

    // Experience - HST
    'exp.hst.company': 'HST Technologies',
    'exp.hst.role': 'IT-Spezialist',
    'exp.hst.period': 'Dezember 2018 - Januar 2020',
    'exp.hst.location': 'Naryn, Kirgisistan',
    'exp.hst.desc1': 'Computerreparatur',
    'exp.hst.desc2': 'Überprüfung und Verwaltung von über 500 Geräten',
    'exp.hst.desc3': 'Flashen von Grafikkarten, Einrichten von Mainboards und BIOS',
    'exp.hst.desc4': 'Verwaltung und Überwachung von HIVE OS',

    // Education
    'edu.university': 'Staatliche Universität Naryn',
    'edu.degree': 'Bachelor - Gesundheitsinformatik und Biomedizinische Technik',
    'edu.period': 'September 2018 - Juni 2022',

    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.viewProject': 'Projekt ansehen',
    'portfolio.ort.title': 'ORT Registrierung',
    'portfolio.ort.desc': 'Registrierungssystem für die Allgemeine Republikanische Prüfung',
    'portfolio.mugalim.title': 'AIS Mugalim',
    'portfolio.mugalim.desc': 'Bildungsinformationssystem für Lehrer',
    'portfolio.vacancies.title': 'Stellenportal',
    'portfolio.vacancies.desc': 'Stellenplattform für den Bildungsbereich',
    'portfolio.contests.title': 'Wettbewerbe',
    'portfolio.contests.desc': 'Wettbewerbsplattform für den Bildungsbereich',
    'portfolio.hyundai.title': 'Hyundai KG',
    'portfolio.hyundai.desc': 'Offizielle Hyundai-Händler-Webseite',

    // Footer
    'footer.contact': 'Kontakt',
    'footer.languages': 'Sprachen',
    'footer.kyrgyz': 'Kirgisisch - Muttersprache',
    'footer.russian': 'Russisch - Fließend beruflich',
    'footer.german': 'Deutsch - Grundkenntnisse',
    'footer.copyright': '2026 Akdil Kubanychbekov. Alle Rechte vorbehalten.',

    // Theme
    'theme.toggle': 'Thema wechseln',
  },

  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',

    // Home
    'home.name': 'Akdil Kubanychbekov',
    'home.greeting': 'Hello, I\'m',
    'home.title': 'Middle Front-End Engineer',
    'home.info':
      'Middle Front-End Engineer at the "Department of Digital Education" in OJSC "Tunduk". Passionate about creating modern digital solutions for educational institutions.',
    'home.location': 'Bishkek, Kyrgyzstan',
    'home.downloadCv': 'Download CV',

    // Skills
    'skills.title': 'Skills',

    // Experience
    'experience.title': 'Experience',
    'experience.education': 'Education',

    // Experience - Tunduk
    'exp.tunduk.company': '"Tunduk" OJSC',
    'exp.tunduk.role': 'Middle Front-End Engineer',
    'exp.tunduk.period': 'August 2025 - Present',
    'exp.tunduk.location': 'Bishkek, Kyrgyzstan',
    'exp.tunduk.desc1': 'Creation and optimization of modern digital solutions for improving educational institutions',
    'exp.tunduk.desc2': 'Development of user interfaces for educational information systems',
    'exp.tunduk.desc3': 'Working with the database',
    'exp.tunduk.desc4': 'API Development',
    'exp.tunduk.desc5': 'Code refactoring',

    // Experience - DEC
    'exp.dec.company': 'Digital Education Center (MON KR)',
    'exp.dec.role': 'Front-End Engineer',
    'exp.dec.period': 'December 2023 - August 2025',
    'exp.dec.location': 'Bishkek, Kyrgyzstan',
    'exp.dec.desc1': 'Development of the "AIS Mugalim" project',
    'exp.dec.desc2': 'Development of the "Vacancies" project',
    'exp.dec.desc3': 'Development of the "Contests" project',
    'exp.dec.desc4': 'Development of the "Testing" project',
    'exp.dec.desc5': 'Development of user interfaces for educational information systems',

    // Experience - Freelance
    'exp.freelance.company': 'Freelance',
    'exp.freelance.role': 'Front-End Developer',
    'exp.freelance.period': 'November 2023 - May 2025',
    'exp.freelance.location': 'Bishkek, Kyrgyzstan',
    'exp.freelance.desc1': 'Freelance web development projects',

    // Experience - IT-RUN
    'exp.itrun.company': 'IT-RUN Academy',
    'exp.itrun.role': 'Front-End Mentor',
    'exp.itrun.period': 'June 2021 - January 2025',
    'exp.itrun.location': 'Bishkek, Kyrgyzstan',
    'exp.itrun.desc1': 'Conducting classes on Front-End development',
    'exp.itrun.desc2': 'Front-End Mentor for Kids (30+ students)',
    'exp.itrun.desc3': 'Mentor Assistant (100+ students)',
    'exp.itrun.desc4': 'Accounting for student progress and attendance',

    // Experience - Future
    'exp.future.company': 'Future',
    'exp.future.role': 'Frontend Developer',
    'exp.future.period': 'August 2022 - April 2023',
    'exp.future.location': 'Bishkek, Kyrgyzstan',
    'exp.future.desc1': 'Website development',
    'exp.future.desc2': 'Working with SEO optimization',

    // Experience - HST
    'exp.hst.company': 'HST Technologies',
    'exp.hst.role': 'IT Specialist',
    'exp.hst.period': 'December 2018 - January 2020',
    'exp.hst.location': 'Naryn, Kyrgyzstan',
    'exp.hst.desc1': 'Computer Repair',
    'exp.hst.desc2': 'Check and manage over 500 devices',
    'exp.hst.desc3': 'Flashing video cards, setting up motherboards and BIOS',
    'exp.hst.desc4': 'Management and monitoring of the HIVE OS',

    // Education
    'edu.university': 'Naryn State University',
    'edu.degree': 'Bachelor of Science - Health Informatics and Biomedical Engineering',
    'edu.period': 'September 2018 - June 2022',

    // Portfolio
    'portfolio.title': 'Portfolio',
    'portfolio.viewProject': 'View Project',
    'portfolio.ort.title': 'ORT Registration',
    'portfolio.ort.desc': 'General Republican Testing registration system',
    'portfolio.mugalim.title': 'AIS Mugalim',
    'portfolio.mugalim.desc': 'Educational information system for teachers',
    'portfolio.vacancies.title': 'Vacancies Portal',
    'portfolio.vacancies.desc': 'Job vacancies platform for educational sector',
    'portfolio.contests.title': 'Contests',
    'portfolio.contests.desc': 'Competition platform for educational sector',
    'portfolio.hyundai.title': 'Hyundai KG',
    'portfolio.hyundai.desc': 'Official Hyundai dealership website',

    // Footer
    'footer.contact': 'Contact',
    'footer.languages': 'Languages',
    'footer.kyrgyz': 'Kyrgyz - Native',
    'footer.russian': 'Russian - Full Professional',
    'footer.german': 'German - Elementary',
    'footer.copyright': '2026 Akdil Kubanychbekov. All rights reserved.',

    // Theme
    'theme.toggle': 'Toggle theme',
  },
};

export default translations;

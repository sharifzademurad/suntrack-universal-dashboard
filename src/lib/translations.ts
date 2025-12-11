export type Language = 'en' | 'az' | 'ru';

export const translations = {
  en: {
    // Navbar
    nav: {
      home: 'Home',
      howItWorks: 'How It Works',
      dashboard: 'Dashboard',
      about: 'About',
      login: 'Login',
      signUp: 'Sign Up',
    },
    // Hero
    hero: {
      title: 'Universal Solar Dashboard',
      subtitle: 'One Platform. Every Inverter. Complete Control.',
      description: 'SunTrack connects any solar inverter brand into one intelligent AI-powered monitoring dashboard.',
      joinWaitlist: 'Join Waitlist',
      learnMore: 'Learn More',
    },
    // Features
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need to maximize your solar investment',
      realTimeMonitoring: {
        title: 'Real-time Monitoring',
        description: 'Track your solar production live with instant updates and detailed analytics.',
      },
      aiForecast: {
        title: 'AI Forecasting',
        description: 'Predict future energy production with advanced machine learning algorithms.',
      },
      efficiency: {
        title: 'Efficiency Insights',
        description: 'Identify performance issues and optimize your system for maximum output.',
      },
      costSavings: {
        title: 'Cost Savings Analysis',
        description: 'Calculate your savings and ROI with detailed financial reports.',
      },
      universalIntegration: {
        title: 'Universal Integration',
        description: 'Connect any inverter brand — SMA, Fronius, Huawei, SolarEdge, and more.',
      },
    },
    // Waitlist Form
    waitlist: {
      title: 'Join the Waitlist',
      subtitle: 'Be the first to experience the future of solar monitoring',
      name: 'Full Name',
      email: 'Email Address',
      message: 'Message or Feedback (optional)',
      submit: 'Join Waitlist',
      success: 'Thank you! You have been added to our waitlist.',
      namePlaceholder: 'Enter your name',
      emailPlaceholder: 'you@example.com',
      messagePlaceholder: 'Share your thoughts or feedback...',
    },
    // How It Works
    howItWorks: {
      title: 'How SunTrack Works',
      subtitle: 'Three simple steps to unified solar monitoring',
      step1: {
        title: 'Connect Your Inverter',
        description: 'Link your solar inverter brand to SunTrack. We support all major manufacturers including SMA, Fronius, Huawei, SolarEdge, and many more.',
      },
      step2: {
        title: 'Gather Performance Data',
        description: 'SunTrack automatically collects real-time data from your solar system, including power output, energy generation, and system health.',
      },
      step3: {
        title: 'AI-Powered Insights',
        description: 'Our advanced AI analyzes your data and displays actionable insights on your personalized dashboard, helping you optimize efficiency.',
      },
    },
    // Dashboard
    dashboard: {
      title: 'Dashboard Preview',
      subtitle: 'Experience the power of unified solar monitoring',
      currentPower: 'Current Power Output',
      todayEnergy: "Today's Energy Generated",
      aiForecast: 'AI 7-Day Forecast',
      monthlySavings: 'Monthly Savings',
      panelHealth: 'Panel Health Status',
      alerts: 'System Alerts',
      noAlerts: 'No active alerts',
      allPanelsOperational: 'All panels operational',
      forecastNote: 'Based on weather & historical data',
    },
    // About
    about: {
      title: 'About SunTrack',
      subtitle: 'Unifying solar monitoring for a sustainable future',
      description: 'SunTrack is a SaaS platform designed to unify solar monitoring. Instead of using different inverter apps, SunTrack provides one universal dashboard with AI-powered insights. Our mission is to help homeowners and solar owners understand their energy production, improve efficiency, and optimize savings.',
      mission: {
        title: 'Our Mission',
        description: 'To democratize solar energy monitoring by providing a universal, intelligent platform that empowers everyone to maximize their solar investment.',
      },
      whyExists: {
        title: 'Why SunTrack Exists',
        description: 'The solar industry is fragmented. Every inverter brand has its own app, creating confusion for users who want a simple way to monitor their systems. SunTrack bridges this gap.',
      },
      problem: {
        title: 'The Problem We Solve',
        description: 'Multiple apps, inconsistent data, no unified analytics. SunTrack eliminates these pain points by aggregating all your solar data into one beautiful, intelligent dashboard.',
      },
      whoFor: {
        title: 'Who It\'s For',
        description: 'Homeowners, building managers, solar installers, and anyone who wants complete visibility into their solar energy production.',
      },
    },
    // Auth
    auth: {
      login: 'Login',
      signUp: 'Sign Up',
      email: 'Email',
      password: 'Password',
      name: 'Full Name',
      loginButton: 'Sign In',
      signUpButton: 'Create Account',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      welcomeBack: 'Welcome back',
      createAccount: 'Create your account',
      loginSubtitle: 'Sign in to access your solar dashboard',
      signUpSubtitle: 'Start monitoring your solar production today',
      signUpSuccess: 'Account created successfully! Welcome to SunTrack.',
    },
    // Footer
    footer: {
      description: 'Universal solar monitoring for everyone.',
      rights: 'All rights reserved.',
    },
  },
  az: {
    // Navbar
    nav: {
      home: 'Ana Səhifə',
      howItWorks: 'Necə İşləyir',
      dashboard: 'İdarə Paneli',
      about: 'Haqqımızda',
      login: 'Giriş',
      signUp: 'Qeydiyyat',
    },
    // Hero
    hero: {
      title: 'Universal Günəş Paneli',
      subtitle: 'Bir Platforma. Hər İnverter. Tam Nəzarət.',
      description: 'SunTrack istənilən günəş inverter markasını bir ağıllı süni intellekt idarə panelinə birləşdirir.',
      joinWaitlist: 'Gözləmə Siyahısına Qoşul',
      learnMore: 'Daha Çox',
    },
    // Features
    features: {
      title: 'Güclü Xüsusiyyətlər',
      subtitle: 'Günəş enerjisi investisiyanızı maksimuma çatdırmaq üçün lazım olan hər şey',
      realTimeMonitoring: {
        title: 'Real Vaxt Monitorinqi',
        description: 'Anlıq yeniləmələr və ətraflı analitika ilə günəş istehsalınızı canlı izləyin.',
      },
      aiForecast: {
        title: 'Süni İntellekt Proqnozu',
        description: 'Qabaqcıl maşın öyrənmə alqoritmləri ilə gələcək enerji istehsalını proqnozlaşdırın.',
      },
      efficiency: {
        title: 'Səmərəlilik Təhlilləri',
        description: 'Performans problemlərini müəyyən edin və sisteminizi maksimum çıxış üçün optimallaşdırın.',
      },
      costSavings: {
        title: 'Xərc Qənaəti Analizi',
        description: 'Ətraflı maliyyə hesabatları ilə qənaətlərinizi və ROI-ni hesablayın.',
      },
      universalIntegration: {
        title: 'Universal İnteqrasiya',
        description: 'İstənilən inverter markasını birləşdirin — SMA, Fronius, Huawei, SolarEdge və daha çox.',
      },
    },
    // Waitlist Form
    waitlist: {
      title: 'Gözləmə Siyahısına Qoşulun',
      subtitle: 'Günəş monitorinqinin gələcəyini ilk təcrübə edən olun',
      name: 'Ad və Soyad',
      email: 'E-poçt Ünvanı',
      message: 'Mesaj və ya Rəy (isteğe bağlı)',
      submit: 'Qoşul',
      success: 'Təşəkkürlər! Siz gözləmə siyahımıza əlavə edildiniz.',
      namePlaceholder: 'Adınızı daxil edin',
      emailPlaceholder: 'sizin@email.com',
      messagePlaceholder: 'Fikirlərinizi və ya rəylərinizi paylaşın...',
    },
    // How It Works
    howItWorks: {
      title: 'SunTrack Necə İşləyir',
      subtitle: 'Vahid günəş monitorinqi üçün üç sadə addım',
      step1: {
        title: 'İnverterinizi Bağlayın',
        description: 'Günəş inverter markanızı SunTrack-a bağlayın. SMA, Fronius, Huawei, SolarEdge və daha bir çox əsas istehsalçını dəstəkləyirik.',
      },
      step2: {
        title: 'Performans Məlumatlarını Toplayın',
        description: 'SunTrack avtomatik olaraq günəş sisteminizdən güc çıxışı, enerji istehsalı və sistem sağlamlığı daxil olmaqla real vaxt məlumatlarını toplayır.',
      },
      step3: {
        title: 'Süni İntellekt Təhlilləri',
        description: 'Qabaqcıl süni intellektimiz məlumatlarınızı təhlil edir və səmərəliliyi optimallaşdırmağa kömək edən fəaliyyətə keçə bilən təhlillər göstərir.',
      },
    },
    // Dashboard
    dashboard: {
      title: 'İdarə Paneli Önizləməsi',
      subtitle: 'Vahid günəş monitorinqinin gücünü təcrübə edin',
      currentPower: 'Cari Güc Çıxışı',
      todayEnergy: 'Bugünkü Enerji İstehsalı',
      aiForecast: '7 Günlük Süni İntellekt Proqnozu',
      monthlySavings: 'Aylıq Qənaət',
      panelHealth: 'Panel Sağlamlıq Vəziyyəti',
      alerts: 'Sistem Xəbərdarlıqları',
      noAlerts: 'Aktiv xəbərdarlıq yoxdur',
      allPanelsOperational: 'Bütün panellər işləyir',
      forecastNote: 'Hava və tarixi məlumatlara əsasən',
    },
    // About
    about: {
      title: 'SunTrack Haqqında',
      subtitle: 'Davamlı gələcək üçün günəş monitorinqini birləşdiririk',
      description: 'SunTrack günəş monitorinqini birləşdirmək üçün nəzərdə tutulmuş SaaS platformasıdır. Fərqli inverter tətbiqlərindən istifadə etmək əvəzinə, SunTrack süni intellekt dəstəkli təhlillərlə bir universal idarə paneli təqdim edir. Missiyamız ev sahiblərinə və günəş sahiblərinə enerji istehsalını anlamağa, səmərəliliyi artırmağa və qənaəti optimallaşdırmağa kömək etməkdir.',
      mission: {
        title: 'Missiyamız',
        description: 'Hər kəsə günəş investisiyasını maksimuma çatdırmaq imkanı verən universal, ağıllı platforma təqdim edərək günəş enerjisi monitorinqini demokratikləşdirmək.',
      },
      whyExists: {
        title: 'SunTrack Niyə Mövcuddur',
        description: 'Günəş sənayesi parçalanmışdır. Hər inverter markasının öz tətbiqi var və bu, sistemlərini sadə şəkildə izləmək istəyən istifadəçilər üçün çaşqınlıq yaradır. SunTrack bu boşluğu aradan qaldırır.',
      },
      problem: {
        title: 'Həll Etdiyimiz Problem',
        description: 'Çoxlu tətbiqlər, uyğunsuz məlumatlar, vahid analitika yoxdur. SunTrack bütün günəş məlumatlarınızı bir gözəl, ağıllı idarə panelinə birləşdirərək bu ağrı nöqtələrini aradan qaldırır.',
      },
      whoFor: {
        title: 'Kimlər Üçündür',
        description: 'Ev sahibləri, bina menecerləri, günəş quraşdırıcıları və günəş enerjisi istehsalına tam görünürlük istəyən hər kəs.',
      },
    },
    // Auth
    auth: {
      login: 'Giriş',
      signUp: 'Qeydiyyat',
      email: 'E-poçt',
      password: 'Şifrə',
      name: 'Ad və Soyad',
      loginButton: 'Daxil Ol',
      signUpButton: 'Hesab Yarat',
      noAccount: 'Hesabınız yoxdur?',
      hasAccount: 'Artıq hesabınız var?',
      welcomeBack: 'Yenidən Xoş Gəldiniz',
      createAccount: 'Hesabınızı yaradın',
      loginSubtitle: 'Günəş idarə panelinə daxil olmaq üçün giriş edin',
      signUpSubtitle: 'Bu gün günəş istehsalınızı izləməyə başlayın',
      signUpSuccess: 'Hesab uğurla yaradıldı! SunTrack-a xoş gəldiniz.',
    },
    // Footer
    footer: {
      description: 'Hər kəs üçün universal günəş monitorinqi.',
      rights: 'Bütün hüquqlar qorunur.',
    },
  },
  ru: {
    // Navbar
    nav: {
      home: 'Главная',
      howItWorks: 'Как это работает',
      dashboard: 'Панель управления',
      about: 'О нас',
      login: 'Вход',
      signUp: 'Регистрация',
    },
    // Hero
    hero: {
      title: 'Универсальная Солнечная Панель',
      subtitle: 'Одна платформа. Любой инвертор. Полный контроль.',
      description: 'SunTrack объединяет любой бренд солнечных инверторов в одну интеллектуальную панель мониторинга с ИИ.',
      joinWaitlist: 'Присоединиться к списку ожидания',
      learnMore: 'Узнать больше',
    },
    // Features
    features: {
      title: 'Мощные Функции',
      subtitle: 'Всё необходимое для максимизации ваших инвестиций в солнечную энергию',
      realTimeMonitoring: {
        title: 'Мониторинг в реальном времени',
        description: 'Отслеживайте производство солнечной энергии в реальном времени с мгновенными обновлениями и детальной аналитикой.',
      },
      aiForecast: {
        title: 'Прогнозирование ИИ',
        description: 'Прогнозируйте будущее производство энергии с помощью передовых алгоритмов машинного обучения.',
      },
      efficiency: {
        title: 'Анализ эффективности',
        description: 'Выявляйте проблемы производительности и оптимизируйте систему для максимальной отдачи.',
      },
      costSavings: {
        title: 'Анализ экономии',
        description: 'Рассчитывайте экономию и ROI с помощью детальных финансовых отчётов.',
      },
      universalIntegration: {
        title: 'Универсальная интеграция',
        description: 'Подключите любой бренд инверторов — SMA, Fronius, Huawei, SolarEdge и другие.',
      },
    },
    // Waitlist Form
    waitlist: {
      title: 'Присоединиться к списку ожидания',
      subtitle: 'Будьте первыми, кто испытает будущее солнечного мониторинга',
      name: 'Полное имя',
      email: 'Адрес электронной почты',
      message: 'Сообщение или отзыв (необязательно)',
      submit: 'Присоединиться',
      success: 'Спасибо! Вы добавлены в наш список ожидания.',
      namePlaceholder: 'Введите ваше имя',
      emailPlaceholder: 'вы@пример.com',
      messagePlaceholder: 'Поделитесь своими мыслями или отзывом...',
    },
    // How It Works
    howItWorks: {
      title: 'Как работает SunTrack',
      subtitle: 'Три простых шага к единому солнечному мониторингу',
      step1: {
        title: 'Подключите ваш инвертор',
        description: 'Свяжите ваш солнечный инвертор с SunTrack. Мы поддерживаем всех основных производителей, включая SMA, Fronius, Huawei, SolarEdge и многих других.',
      },
      step2: {
        title: 'Сбор данных о производительности',
        description: 'SunTrack автоматически собирает данные в реальном времени с вашей солнечной системы, включая выходную мощность, генерацию энергии и состояние системы.',
      },
      step3: {
        title: 'Аналитика на базе ИИ',
        description: 'Наш продвинутый ИИ анализирует ваши данные и отображает практические рекомендации на персонализированной панели управления.',
      },
    },
    // Dashboard
    dashboard: {
      title: 'Предпросмотр панели управления',
      subtitle: 'Испытайте мощь единого солнечного мониторинга',
      currentPower: 'Текущая выходная мощность',
      todayEnergy: 'Сгенерировано энергии сегодня',
      aiForecast: '7-дневный прогноз ИИ',
      monthlySavings: 'Ежемесячная экономия',
      panelHealth: 'Состояние панелей',
      alerts: 'Системные оповещения',
      noAlerts: 'Активных оповещений нет',
      allPanelsOperational: 'Все панели работают',
      forecastNote: 'На основе погоды и исторических данных',
    },
    // About
    about: {
      title: 'О SunTrack',
      subtitle: 'Объединяем солнечный мониторинг для устойчивого будущего',
      description: 'SunTrack — это SaaS-платформа, созданная для объединения солнечного мониторинга. Вместо использования разных приложений инверторов, SunTrack предоставляет одну универсальную панель управления с аналитикой на базе ИИ. Наша миссия — помочь владельцам домов и солнечных систем понять производство энергии, повысить эффективность и оптимизировать экономию.',
      mission: {
        title: 'Наша миссия',
        description: 'Демократизировать мониторинг солнечной энергии, предоставляя универсальную интеллектуальную платформу, которая позволяет каждому максимизировать свои солнечные инвестиции.',
      },
      whyExists: {
        title: 'Почему SunTrack существует',
        description: 'Солнечная индустрия фрагментирована. У каждого бренда инверторов своё приложение, что создаёт путаницу для пользователей, которые хотят просто мониторить свои системы. SunTrack устраняет этот разрыв.',
      },
      problem: {
        title: 'Проблема, которую мы решаем',
        description: 'Множество приложений, несогласованные данные, отсутствие единой аналитики. SunTrack устраняет эти проблемы, объединяя все ваши солнечные данные в одну красивую интеллектуальную панель.',
      },
      whoFor: {
        title: 'Для кого это',
        description: 'Владельцы домов, управляющие зданиями, установщики солнечных систем и все, кто хочет полной видимости своего производства солнечной энергии.',
      },
    },
    // Auth
    auth: {
      login: 'Вход',
      signUp: 'Регистрация',
      email: 'Электронная почта',
      password: 'Пароль',
      name: 'Полное имя',
      loginButton: 'Войти',
      signUpButton: 'Создать аккаунт',
      noAccount: 'Нет аккаунта?',
      hasAccount: 'Уже есть аккаунт?',
      welcomeBack: 'С возвращением',
      createAccount: 'Создайте аккаунт',
      loginSubtitle: 'Войдите для доступа к вашей солнечной панели',
      signUpSubtitle: 'Начните мониторинг солнечной энергии сегодня',
      signUpSuccess: 'Аккаунт успешно создан! Добро пожаловать в SunTrack.',
    },
    // Footer
    footer: {
      description: 'Универсальный солнечный мониторинг для всех.',
      rights: 'Все права защищены.',
    },
  },
};

export type Translations = typeof translations.en;

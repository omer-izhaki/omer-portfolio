export type Locale = 'en' | 'he';

export const dictionaries = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.resume': 'Resume',

    // Hero
    'hero.greeting': 'Hi, my name is',
    'hero.name': 'Omer Itzhaki',
    'hero.tagline': 'Computer Science & Cybersecurity student. Building AI systems, securing networks, leading teams.',
    'hero.location': 'Netanya, Israel',
    'hero.openToWork': 'Open to work',
    'hero.openToWorkDetail': 'Junior / Student roles in High-Tech, DevOps, Automation, and Product Management. Also open to business opportunities.',
    'hero.eduLine': 'Currently completing a BSc in Computer Science with Cybersecurity specialization at the Open University of Israel (GPA 85). Reservist IDF IT team lead. Long-term plan: MBA.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.projects': 'View projects',
    'hero.photoAlt': 'Omer Itzhaki',

    // About
    'about.title': 'About Me',
    'about.p1': "I'm a Computer Science student specializing in Cybersecurity at the Open University of Israel, with 78 credit points completed at a GPA of 85. My background bridges software engineering, AI development, and real-world IT leadership — shaped by years managing critical military network infrastructure.",
    'about.p2': "I've led 5-person IT teams in high-pressure environments, managed a 5.5M NIS infrastructure budget, and built AI-driven trading systems from scratch. My goal is to take this combination of technical depth and leadership into high-tech, and eventually bridge it with strategic business management through an MBA.",
    'about.stackTitle': 'Technologies I work with:',

    // Experience
    'experience.title': 'Experience',
    'experience.role1.title': 'Head of IT Team (Reservist)',
    'experience.role1.org': 'Israel Defense Forces',
    'experience.role1.period': 'Nov 2024 – Feb 2026',
    'experience.role1.b1': 'Led IT department of five soldiers in a new IDF unit.',
    'experience.role1.b2': 'Designed and executed full communications equipment relocation plan for new base.',
    'experience.role2.title': 'Head of Network Management Team',
    'experience.role2.org': 'Israel Defense Forces',
    'experience.role2.period': 'Apr 2022 – Oct 2024',
    'experience.role2.b1': "Led 5-soldier IT team managing base-wide communication networks, telecom infrastructure, and defense systems.",
    'experience.role2.b2': "Provided dedicated IT support for the General's office.",
    'experience.role3.title': 'Youth Movement Mentor',
    'experience.role3.org': 'Maccabi Tzair Youth Movement',
    'experience.role3.period': '3 years',
    'experience.role3.b1': 'Mentored and led youth groups, building leadership and communication skills.',

    // Projects
    'projects.title': 'Projects',
    'projects.ome.title': 'OmeTheTrader',
    'projects.ome.desc': 'An algorithmic trading bot engineered around FTMO prop-firm risk and profit parameters. Features a full backtesting engine, MetaTrader 5 integration, and a live deployment on Google Cloud Platform. Built across three iterations — each version tightened drawdown controls, added execution-latency safeguards, and refined the strategy-selection layer.',
    'projects.ome.chips': 'Python · MetaTrader 5 · GCP · LSTM · Alpaca API · Telegram Bot',
    'projects.caliq.title': 'Caliq',
    'projects.caliq.badge': 'Coming Soon',
    'projects.caliq.desc': 'A locally-run, AI-driven nutrition and calorie tracking app for mobile. Built with React Native and on-device inference so meal logging stays private and fast. Planned upgrade path includes integrating Gemma 4 for richer food understanding and dietary reasoning.',
    'projects.caliq.chips': 'React Native · On-device AI · Gemma (planned) · TypeScript',
    'projects.base.title': 'IDF Base IT Infrastructure',
    'projects.base.desc': 'Led end-to-end IT setup for a new military base: procurement strategy, equipment selection, and rollout of the full communications stack. Managed a 5.5M NIS telecommunications budget from planning through commissioning.',
    'projects.base.chips': 'Project Management · Networks · Procurement · Leadership',
    'projects.private': 'Private — available on request',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.tagline': 'Whether you have a role, a project, or just want to connect — my inbox is open.',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.phone': 'Phone',

    // Footer
    'footer.built': 'Built by Omer Itzhaki',
  },
  he: {
    // Nav
    'nav.about': 'אודות',
    'nav.experience': 'ניסיון',
    'nav.projects': 'פרויקטים',
    'nav.contact': 'צור קשר',
    'nav.resume': 'קורות חיים',

    // Hero
    'hero.greeting': 'שלום, שמי',
    'hero.name': 'עומר יצחקי',
    'hero.tagline': 'סטודנט למדעי המחשב וסייבר. בונה מערכות AI, מאבטח רשתות, מוביל צוותים.',
    'hero.location': 'נתניה, ישראל',
    'hero.openToWork': 'פתוח להצעות עבודה',
    'hero.openToWorkDetail': "תפקידי ג׳וניור / סטודנט בהייטק, DevOps, אוטומציה וניהול מוצר. כמו כן פתוח להזדמנויות עסקיות.",
    'hero.eduLine': 'לומד לתואר ראשון במדעי המחשב עם התמחות בסייבר באוניברסיטה הפתוחה (ממוצע 85). קצין IT מילואים. תוכנית עתידית: MBA.',
    'hero.cta.contact': 'צרו קשר',
    'hero.cta.projects': 'הפרויקטים שלי',
    'hero.photoAlt': 'עומר יצחקי',

    // About
    'about.title': 'אודותי',
    'about.p1': 'אני סטודנט למדעי המחשב עם התמחות בסייבר באוניברסיטה הפתוחה, עם 78 נקודות זכות וממוצע 85. הרקע שלי משלב הנדסת תוכנה, פיתוח AI, ומנהיגות IT מהשטח — שעוצבה במהלך שנים של ניהול תשתיות תקשורת קריטיות בצבא.',
    'about.p2': 'הובלתי צוותי IT של 5 אנשים בסביבות לחץ, ניהלתי תקציב תשתיות של 5.5 מיליון שקל, ובניתי מערכות מסחר מבוססות AI מאפס. המטרה שלי היא לשלב את העומק הטכני הזה עם מנהיגות בהייטק, ובעתיד לגשר על כך עם ניהול עסקי אסטרטגי דרך MBA.',
    'about.stackTitle': 'טכנולוגיות שאני עובד איתן:',

    // Experience
    'experience.title': 'ניסיון',
    'experience.role1.title': 'ראש מחלקת IT (מילואים)',
    'experience.role1.org': 'צבא הגנה לישראל',
    'experience.role1.period': "נוב׳ 2024 – פבר׳ 2026",
    'experience.role1.b1': 'הוביל מחלקת IT של חמישה חיילים ביחידה חדשה.',
    'experience.role1.b2': 'תכנן וביצע תוכנית העתקה מלאה של ציוד תקשורת לבסיס חדש.',
    'experience.role2.title': 'ראש צוות ניהול רשתות',
    'experience.role2.org': 'צבא הגנה לישראל',
    'experience.role2.period': "אפר׳ 2022 – אוק׳ 2024",
    'experience.role2.b1': 'הוביל צוות IT של 5 חיילים לניהול ואבטחת רשתות תקשורת ברחבי הבסיס, תשתיות טלקומוניקציה ומערכות ביטחוניות.',
    'experience.role2.b2': 'סיפק תמיכת IT ייעודית למשרד המפקד.',
    'experience.role3.title': 'מדריך תנועת נוער',
    'experience.role3.org': 'מכבי צעיר',
    'experience.role3.period': '3 שנים',
    'experience.role3.b1': 'הדרכה והובלת קבוצות נוער, פיתוח מיומנויות מנהיגות ותקשורת.',

    // Projects
    'projects.title': 'פרויקטים',
    'projects.ome.title': 'OmeTheTrader',
    'projects.ome.desc': 'בוט מסחר אלגוריתמי שתוכנן סביב פרמטרי הסיכון והרווח של חברת FTMO. כולל מנוע backtesting מלא, אינטגרציה עם MetaTrader 5, ופריסה חיה על Google Cloud Platform. נבנה בשלושה דורות — כל גרסה הדקה את בקרות הירידה, הוסיפה הגנות מפני השהיית ביצוע, ושיכללה את שכבת בחירת האסטרטגיה.',
    'projects.ome.chips': 'Python · MetaTrader 5 · GCP · LSTM · Alpaca API · Telegram Bot',
    'projects.caliq.title': 'Caliq',
    'projects.caliq.badge': 'בקרוב',
    'projects.caliq.desc': 'אפליקציה מובילה למעקב תזונה וקלוריות מבוסס AI, מקומי על המכשיר. נבנתה עם React Native עם הסקה על המכשיר כך שרישום הארוחות נשאר פרטי ומהיר. נתיב השדרוג המתוכנן כולל אינטגרציה של Gemma 4 להבנת מזון ועצות תזונה מתקדמות.',
    'projects.caliq.chips': 'React Native · On-device AI · Gemma (מתוכנן) · TypeScript',
    'projects.base.title': 'תשתית IT לבסיס IDF',
    'projects.base.desc': 'הוביל הקמת IT מקצה לקצה לבסיס צבאי חדש: אסטרטגיית רכש, בחירת ציוד ופריסה של מחסנית התקשורת המלאה. ניהל תקציב טלקומוניקציה של 5.5 מיליון שקל מהתכנון ועד הפעלה.',
    'projects.base.chips': 'ניהול פרויקטים · רשתות · רכש · מנהיגות',
    'projects.private': 'פרטי — זמין על פי בקשה',

    // Contact
    'contact.title': 'צור קשר',
    'contact.tagline': 'בין אם יש לך תפקיד, פרויקט, או סתם רוצה להתחבר — תיבת הדואר שלי פתוחה.',
    'contact.email': 'אימייל',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.phone': 'טלפון',

    // Footer
    'footer.built': 'נבנה על ידי עומר יצחקי',
  },
} as const;

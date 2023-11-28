// Массив с вопросами. Не Зашифрован :)

let allQuestions = [
    // Легкая сложность (100)
    {
        type: 0,
        price: 100,
        text: 'Что такое алгоритм?',
        image: false,
        answers: ['Последовательность действий для решения задачи', 'Программа для обработки данных', 'Устройство компьютера', 'Язык программирования'],
        correctAnswer: [0],
        answered: null,
    },
    {
        type: 0,
        price: 100,
        text: 'Какой язык программирования является объектно-ориентированным?',
        image: false,
        answers: ['C', 'Python', 'HTML', 'Assembly'],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 1,
        price: 100,
        text: 'Какие из перечисленных понятий относятся к базам данных?',
        image: false,
        answers: ['Таблица', 'Цикл', 'Запрос', 'Класс', 'Отношение', 'Массив'],
        correctAnswer: [0, 2, 4],
        answered: null,
    },

    // Умеренная сложность (150)
    {
        type: 0,
        price: 150,
        text: 'Что из перечисленного является основным принципом ООП?',
        image: false,
        answers: ['Рекурсия', 'Инкапсуляция', 'Трансляция', 'Сортировка'],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 0,
        price: 150,
        text: 'Какой протокол используется для безопасной передачи данных в Интернете?',
        image: false,
        answers: ['HTTP', 'SSL', 'FTP', 'SSH'],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 1,
        price: 150,
        text: 'Выберите основные компоненты компьютерной сети:',
        image: false,
        answers: ['Маршрутизатор', 'Компилятор', 'Сервер', 'Сетевая карта', 'Операционная система', 'Кабель'],
        correctAnswer: [0, 2, 3, 5],
        answered: null,
    },

    // Средняя сложность (200)
    {
        type: 0,
        price: 200,
        text: 'Как называется процесс поиска и устранения ошибок в программном коде?',
        image: false,
        answers: ['Компиляция', 'Дебаггинг', 'Рефакторинг', 'Декомпиляция'],
        correctAnswer: [1],
        answered: null,
    },
    {
        type: 0,
        price: 200,
        text: 'Что такое SQL?',
        image: false,
        answers: ['Язык программирования', 'Язык разметки', 'Язык запросов к базам данных', 'Система управления базами данных'],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 1,
        price: 200,
        text: 'Какие языки программирования являются высокоуровневыми?',
        image: false,
        answers: ['C', 'Python', 'Java', 'Assembly', 'JavaScript', 'C++'],
        correctAnswer: [1, 2, 4, 5],
        answered: null,
    },

    // Высокая сложность (250)
    {
        type: 0,
        price: 250,
        text: 'Какая парадигма программирования основана на функциях и избегает изменяемых данных?',
        image: false,
        answers: ['Объектно-ориентированное программирование', 'Процедурное программирование', 'Функциональное программирование', 'Логическое программирование'],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 2,
        price: 250,
        text: 'Вставьте пропущенные слова:',
        textDd: "Блокчейн - это |, использующая | для обеспечения безопасности транзакций.",
        answers: [["технология", "структура данных", "алгоритм"],
                  ["распределенный реестр", "шифрование", "консенсус алгоритм"]],
        correctAnswer: [0, 1],
        answered: null,
    },
    {
        type: 2,
        price: 250,
        text: 'Выберите верные утверждения:',
        textDd: "Big Data относится к | данных. Криптография используется для | данных.",
        answers: [["обработке больших объемов", "хранению структурированных", "анализу небольших объемов"],
                  ["защиты", "сжатия", "удаления"]],
        correctAnswer: [0, 0],
        answered: null,
    },

    // Очень высокая сложность (300)
    {
        type: 0,
        price: 300,
        text: 'Что такое машинное обучение?',
        image: false,
        answers: ['Изучение компьютерных систем', 'Автоматическая обработка данных', 'Обучение алгоритмов на основе данных', 'Разработка программного обеспечения'],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 2,
        price: 300,
        text: 'Вставьте пропущенные слова:',
        textDd: "Искусственный интеллект и | относятся к области |.",
        answers: [["машинное обучение", "виртуальная реальность", "квантовые вычисления"],
                  ["информатики", "физики", "математики"]],
        correctAnswer: [0, 0],
        answered: null,
    },
    {
        type: 2,
        price: 300,
        text: 'Укажите, какие из нижеуказанных утверждений верны:',
        textDd: "Git - это система |. Docker используется для |.",
        answers: [["управления версиями", "автоматического тестирования", "сетевой безопасности"],
                  ["контейнеризации приложений", "создания пользовательских интерфейсов", "управления базами данных"]],
        correctAnswer: [0, 0],
        answered: null,
    }
];

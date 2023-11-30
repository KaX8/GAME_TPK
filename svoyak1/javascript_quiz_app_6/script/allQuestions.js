// Массив с вопросами. Не Зашифрован :)

let allQuestions = [
    // Цена 100
    {
        type: 0,
        price: 100,
        text: 'Какой инструмент используется для поиска информации в интернете?',
        image: false,
        answers: ['Браузер', 'Текстовый редактор', 'Антивирус', 'Калькулятор'],
        correctAnswer: [0],
        answered: null,
    },
    {
        type: 1,
        price: 100,
        text: 'Какие из следующих устройств являются устройствами ввода?',
        image: false,
        answers: ['Монитор', 'Клавиатура', 'Принтер', 'Мышь', 'Жесткий диск'],
        correctAnswer: [1, 3],
        answered: null,
    },
    {
        type: 2,
        price: 100,
        text: 'Заполните пропуски:',
        textDd: "Для сохранения файла используется клавиша |. Чтобы открыть новое окно браузера, нажимают |.",
        answers: [['Ctrl+S', 'Alt+F4', 'Shift+Del'], ['Ctrl+N', 'Ctrl+T', 'Ctrl+Shift+T']],
        correctAnswer: [0, 1],
        answered: null,
    },
    // Цена 150
    {
        type: 0,
        price: 150,
        text: 'Какая программа нужна для чтения файлов в формате PDF?',
        image: false,
        answers: ['Word', 'Excel', 'Adobe Reader', 'PowerPoint'],
        correctAnswer: [2],
        answered: null,
    },
    {
        type: 1,
        price: 150,
        text: 'Выберите расширения текстовых файлов:',
        image: false,
        answers: ['Документ Word (.docx)', 'Изображение JPEG (.jpeg)', 'Текстовый файл (.txt)', 'Аудиофайл MP3 (.mp3)'],
        correctAnswer: [0,2],
        answered: null,
    },
    {
        type: 4,
        price: 150,
        text: 'Разделите программы на категории: "Графические редакторы" и "Текстовые редакторы".',
        tables: ['Графические редакторы', 'Текстовые редакторы'],
        answers: ['Photoshop', 'Paint', 'Word', 'Notepad', 'Illustrator'],
        correctAnswer: [[0, 1, 4], [2, 3]],
        answered: null,
    },
    // Цена 200
    {
        type: 1,
        price: 200,
        text: 'Какие из перечисленных устройств являются устройствами вывода?',
        image: false,
        answers: ['Сканер', 'Принтер', 'Клавиатура', 'Монитор', 'Мышь'],
        correctAnswer: [1, 3],
        answered: null,
    },

    {
        type: 2,
        price: 200,
        text: 'Заполните пропуски:',
        textDd: "Операционная система | управляет ресурсами компьютера. Файл с расширением | обычно является изображением.",
        answers: [['Windows', 'Linux', 'Android'], ['.jpg', '.docx', '.mp3']],
        correctAnswer: [0, 0],
        answered: null,
    },
    {
        type: 0,
        price: 200,
        text: 'Переведите 8 из десятичной системы в двоичную систему счисления',
        image: false, // предположим, что здесь есть изображение внутренностей компьютера
        answers: ['1000', '1111', '1001', '0101', '0001'],
        correctAnswer: [0],
        answered: null,
    },
    // Цена 250
    {
        type: 0,
        price: 250,
        text: 'Какое устройство необходимо для соединения нескольких компьютеров в сеть?',
        image: false,
        answers: ['Модем', 'Принтер', 'Маршрутизатор', 'Монитор'],
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
        type: 4,
        price: 250,
        text: 'Разделите программы на категории: "Операционные системы" и "Приложения".',
        tables: ['Операционные системы', 'Приложения'],
        answers: ['Windows', 'Linux', 'Photoshop', 'Word', 'Excel'],
        correctAnswer: [[0, 1], [2, 3, 4]],
        answered: null,
    },
    // Цена 300
    {
        type: 1,
        price: 300,
        text: 'Какие из перечисленных являются языками программирования?',
        image: false,
        answers: ['HTML', 'Python', 'Java', 'CSS', 'JavaScript'],
        correctAnswer: [1, 2, 4],
        answered: null,
    },
    {
        type: 1,
        price: 300,
        text: 'Что можно исключить в сборке компьютера?',
        answers: ['Материнская плата', 'Процессор', 'Жесткий диск', 'Оперативная память', 'Видеокарта'],
        correctAnswer: [2,4],
        answered: null,
    },
    {
        type: 2,
        price: 300,
        text: 'Заполните пропуски:',
        textDd: "Язык | используется для стилизации веб-страниц. Протокол | используется для передачи веб-страниц.",
        answers: [['HTML', 'CSS', 'Python'], ['HTTP', 'FTP', 'TCP']],
        correctAnswer: [1, 0],
        answered: null,
    }
    // Дополняй оставшиеся вопросы аналогичным образом, чередуя типы и повышая сложность.
];


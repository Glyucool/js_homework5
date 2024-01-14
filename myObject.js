// Об'єкт, що містить послуги та їх вартість
var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

// Додаємо нову послугу
services['Розбити скло'] = "200 грн";

// Додаємо метод price(), який обчислює і повертає загальну вартість наданих послуг
services.price = function () {
    var total = 0;

    // Проходимося по всіх властивостях об'єкта
    for (var service in this) {
        // Перевіряємо, чи не є властивість функцією (методом)
        if (typeof this[service] !== 'function') {
            // Отримуємо числовий розмір послуги та додаємо до загальної вартості
            total += parseFloat(this[service]);
        }
    }

    // Повертаємо загальну вартість
    return total;
};

// Додаємо метод minPrice(), який повертає мінімальну вартість серед послуг
services.minPrice = function () {
    var min = Infinity;

    // Проходимося по всіх властивостях об'єкта
    for (var service in this) {
        // Перевіряємо, чи не є властивість функцією (методом)
        if (typeof this[service] !== 'function') {
            // Отримуємо числовий розмір послуги та порівнюємо з поточним мінімумом
            min = Math.min(min, parseFloat(this[service]));
        }
    }

    // Повертаємо мінімальну вартість
    return min;
};

// Додаємо метод maxPrice(), який повертає максимальну вартість серед послуг
services.maxPrice = function () {
    var max = -Infinity;

    // Проходимося по всіх властивостях об'єкта
    for (var service in this) {
        // Перевіряємо, чи не є властивість функцією (методом)
        if (typeof this[service] !== 'function') {
            // Отримуємо числовий розмір послуги та порівнюємо з поточним максимумом
            max = Math.max(max, parseFloat(this[service]));
        }
    }

    // Повертаємо максимальну вартість
    return max;
};

// Перевірка роботи методів
console.log("Загальна вартість послуг:", services.price() + " грн");
console.log("Мінімальна вартість послуг:", services.minPrice() + " грн");
console.log("Максимальна вартість послуг:", services.maxPrice() + " грн");
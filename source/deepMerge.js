/**
 * Объединяет два объекта рекурсинво
 * @param {Object} source - источник
 * @param {Object} target - целевой объект
 * 
 * @example
 * // returns { a: 1, b: { x: 2, y: 3 }, c: 4 }
 * deepMerge({ a: 1, b: { x: 2 } }, { b: { y: 3 }, c: 4 });
 * 
 * @returns {Object}
 */
const deepMerge = (source, target) => {
    const result = {...source}; // Делаем шардирование

    for (const key in target) {
        if (
            Object.prototype.hasOwnProperty.call(target, key) &&
            source[key] &&
            typeof source[key] === 'object' &&
            !Array.isArray(source[key]) &&
            typeof target[key] === 'object' &&
            !Array.isArray(target[key])
        ) {
            result[key] = deepMerge(source[key], target[key]);
        } else {
            result[key] = target[key];
        }
    }

    return result;
};
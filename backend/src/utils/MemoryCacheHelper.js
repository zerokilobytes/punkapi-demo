var cache = require('memory-cache');

class MemoryCacheHelper {
    static save(key, data) {
        cache.put(key, data);
    }
    static read(key) {
        return cache.get(key)
    }
}

module.exports = MemoryCacheHelper;
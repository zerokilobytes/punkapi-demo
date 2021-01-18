var cache = require('memory-cache');

/**
 * IMemoryCacheHelper class
 */
class MemoryCacheHelper {
    
    /**
     * Saves the data
     * @public
     * @param key
     * @param data
     */
    static save(key, data) {
        cache.put(key, data);
    }

    /**
     * Gets the data by key
     * @public
     * @param key
     */
    static read(key) {
        return cache.get(key)
    }
}

module.exports = MemoryCacheHelper;
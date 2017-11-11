const zufall = {
    getRandomArrayItem: function (array) {
        return array[Math.floor(Math.random() * array.length)];
    },
    getRandomNumber:    function (min, max) {
        return Math.random() * (max - min) + min;
    }
};

module.exports = zufall;

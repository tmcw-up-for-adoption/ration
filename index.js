function ration(list, duration, cb) {
    if (!list.length) return;
    var per = duration / (list.length - 1), i = 0;
    function dole() {
        cb(list[i++]);
        if (i < list.length) setTimeout(dole, per);
    }
    dole();
}

if (typeof module !== 'undefined') module.exports = ration;

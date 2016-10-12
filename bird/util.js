var util = {

    // copy继承
    extend: function (o1, o2) {
        for (var key in o2) {
            o1[key] = o2[key];
        }
    },

    // 把角度转换为弧度
    angleToHu: function (angle) {
        return Math.PI / 180 * angle;
    }
};
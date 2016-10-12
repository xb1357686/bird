(function (w) {

    // 大地类
    function Land(x, y) {

        if (!Land.isInit) {
            throw '请先初始化！';
        }

        this.x = x;
        this.y = y;
        this.speed = -1;
    }

    // 类的初始化方法
    Land.init = function (ctx, cvs, img) {

        if (ctx && cvs && img) {
            Land.isInit = true;
        }

        Land.ctx = ctx;
        Land.cvs = cvs;
        Land.img = img;
        Land.imgWidth = img.width;
        Land.imgHeight = img.height;
    };

    // 给Land的原型扩充方法
    util.extend(Land.prototype, {

      
        draw: function () {
            Land.ctx.drawImage(Land.img, this.x, this.y);
        },

        // 更新大地下一帧绘制所需的数据
        update: function () {
            this.x += this.speed;

            // 当大地走出画布，向右拼接
           
            if (this.x <= -Land.imgWidth) {

                // 当大地走出画布，因为一个共有4个大地，
               
                this.x += Land.imgWidth * 4;
            }
        }
    });

 
    w.Land = Land;

}(window));
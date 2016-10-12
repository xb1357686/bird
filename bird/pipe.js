
(function (w) {

   
    function Pipe(x) {

  
        if (!Pipe.isInit) {
            throw '请先初始化！';
        }

        this.x = x;
        this.space = 100; // 上下管道间的距离
        this._computedY(); // 初始化上下管道的y轴坐标
        this.speed = -1;
        this.speedPlus = -0.00000001;
    }

   
    Pipe.init = function (ctx, cvs, imgDown, imgUp) {

        if (ctx && cvs && imgDown && imgUp) {
            Pipe.isInit = true;
        }

        Pipe.ctx = ctx;
        Pipe.cvs = cvs;
        Pipe.imgDown = imgDown;
        Pipe.imgUp = imgUp;
        Pipe.imgWidth = imgUp.width;
        Pipe.imgHeight = imgUp.height;
    };

    // 给Pipe的原型扩充方法
    Pipe.prototype = {
        constructor: Pipe,

        // 绘制管道
        draw: function () {
            Pipe.ctx.drawImage(Pipe.imgDown, this.x, this.yDown);
            Pipe.ctx.drawImage(Pipe.imgUp, this.x, this.yUp);
            this._strokePath();
        },

        // 依据管道的坐标和宽高，画路径
        _strokePath: function () {
            // Pipe.ctx.strokeStyle = 'blue';
            Pipe.ctx.rect(this.x, this.yDown, Pipe.imgWidth, Pipe.imgHeight);
            Pipe.ctx.rect(this.x, this.yUp, Pipe.imgWidth, Pipe.imgHeight);
            // Pipe.ctx.stroke();
        },

        // 随机生成上管道高度，然后计算出上下管道的y轴坐标
        _computedY: function () {
            // 随机生成上管道的可视高度，为100到300之间
            this.viewHeight = Math.random() * 200 + 100;
            // 上面管道的y轴坐标算法：上管道的可视高 - 管道的总高度
            this.yDown = this.viewHeight - Pipe.imgHeight;
            // 上面管道的y轴坐标算法：上管道的可视高 + 上下管道的间隔
            this.yUp = this.viewHeight + this.space;
        },

        // 更新绘制管道下一帧所需的数据
        update: function () {
            this.x += this.speed;
            this.speed += this.speedPlus;

            // 当管道走出画布，重新生成管道高度，并向右拼接
            if (this.x <= -Pipe.imgWidth) {
                this._computedY();

                this.x += Pipe.imgWidth * 3 * 6;
            }
        }
    };

    // 把管道类暴漏到全局
    w.Pipe = Pipe;

}(window));
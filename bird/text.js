(function (w) {

    function Text(options) {
        this.ctx = options.ctx;
        this.cvs =  options.cvs;
        this.text =  options.text;
        this.x =  options.x;
        this.y =  options.y;
        this.font =  options.font;
        this.color =  options.color;
        this.align =  options.align;
        this.baseLine =  options.baseLine;
    }

    Text.prototype = {
        constructor: Text,

        // 根据文本实例的属性绘制文本
        draw: function () {

            // 为了接下里的状态修改会影响其他地方的渲染，所以先把当前状态保存下来
            this.ctx.save();

            this.ctx.font = this.font;
            this.ctx.fillStyle = this.color;
            this.ctx.textAlign = this.align;
            this.ctx.textBaseline = this.baseLine;
            this.ctx.fillText(this.text, this.x, this.y);

            // 文字绘制完毕，恢复之前的状态。
            this.ctx.restore();
        }
    };

    w.Text = Text;
}(window));

// 用来获取图像资源的
(function (w) {

    // 把所有的图像资源地址存起来
    var imgPathObj = {
        'bird': './imgs/birds.png',
        'land': './imgs/land.png',
        'pipeDown': './imgs/pipeDown.png',
        'pipeUp': './imgs/pipeUp.png',
        'sky': './imgs/sky.png'
    };

    // 用来存储图片对象
    var imgObj = {},
        key, img, total = 0,
        callback;

    
    for (key in imgPathObj) {
        img = new Image();
        img.src = imgPathObj[key];
        img.addEventListener('load', function () {
            total++;
            // 如果所有的图片加载完毕，
            // 调用使用者传入的回调，
            if (total >= 5) {
                callback(imgObj);
            }
        });
        // 把新创建的图片对象存起来，方便日后使用
        imgObj[key] = img;
    }

    w.getImgs = function (main) {
        callback = main;
    }
}(window));
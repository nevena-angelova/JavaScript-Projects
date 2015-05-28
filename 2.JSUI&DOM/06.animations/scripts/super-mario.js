﻿window.onload = function () {

    alert('Press left or right arrow to walk.');

    var fieldWidth = 800,
    fieldHeight = 500,
    brickWidth = 10,
    brickHeight = 10;

    // mario

    var stage = new Kinetic.Stage({
        container: 'container',
        width: fieldWidth,
        height: fieldHeight,
    });

    var layer = new Kinetic.Layer();

    var image = new Image();

    image.onload = function () {
        var mario = new Kinetic.Sprite({
            x: 0,
            y: fieldHeight - brickHeight - 35,
            image: image,
            animation: 'idle',
            animations: {
                idle: [
                    209, 0, 20, 35
                ],
                walk: [
                    0, 0, 17, 35,
                    22, 0, 18, 35,
                    45, 0, 22, 35,
                    74, 0, 18, 35,
                    98, 0, 17, 35,
                    122, 0, 20, 35,
                    150, 0, 23, 35,
                    181, 0, 20, 35
                ]
            },
            frameRate: 8,
            frameIndex: 0
        });

        layer.add(mario);

        stage.add(layer);

        mario.start();

        function onKeyPressDown(evt) {

            // left arrow pressed
            if (evt.keyCode == 37) {
                if (mario.attrs.x >= 30) {
                    mario.setX(mario.attrs.x -= 10);
                    mario.scaleX(-1);
                }
            }

            // right arrow pressed
            if (evt.keyCode == 39) {
                if (mario.attrs.x <= fieldWidth - 30) {
                    mario.setX(mario.attrs.x += 10);
                    mario.scaleX(1);
                }
            }

            mario.animation('walk');
        }

        function onKeyPressUp() {
            mario.animation('idle');
        }

        window.addEventListener('keydown', onKeyPressDown);
        window.addEventListener('keyup', onKeyPressUp);
    };

    image.src = 'img/mario-walk.png';

    // background

    var paper = Raphael('container', fieldWidth, fieldHeight);

    for (var i = 0; i < fieldWidth; i += brickWidth) {
        paper.rect(i, fieldHeight - brickHeight, brickWidth, brickHeight, 2)
            .attr({
                fill: '#aa5600',
                stroke: '#5a1505'
            });
    }

    paper.path('m 262.48557,162.4807 c -0.80154,0 -1.58245,0.086 -2.33585,0.2471 -2.38128,-5.8565 -8.12525,-9.9874 -14.83685,-9.9874 -0.24926,0 -0.49685,0.01 -0.7434,0.019 -2.64492,-5.2021 -8.04417,-8.7684 -14.27978,-8.7684 -7.05131,0 -13.0339,4.5596 -15.17114,10.8896 -8.11607,0.7805 -14.46255,7.6172 -14.46255,15.9377 0,8.4158 6.4932,15.3104 14.74245,15.9587 3.01047,3.4227 7.41915,5.5854 12.33552,5.5854 4.41724,0 8.42411,-1.7469 11.37622,-4.5834 2.0941,1.2836 4.55687,2.0247 7.19324,2.0247 4.76507,0 8.96514,-2.4181 11.44104,-6.0936 1.43886,0.6777 3.04527,1.0583 4.74131,1.0583 6.15432,0 11.14363,-4.9891 11.14363,-11.1437 0,-6.1545 -4.98952,-11.1438 -11.14384,-11.1438 z')
        .attr({
            fill: '#00c9fc',
            stroke: 'none'
        });

    paper.path('m 160.80536,96.885629 c -0.80154,0 -2.56572,0.51373 -3.31912,0.66753 -2.47069,-6.51028 -7.03026,-10.83123 -13.74187,-10.83123 -0.24926,0 -1.74855,0.21571 -1.9951,0.22654 -1.3432,-4.139 -7.00109,-10.88958 -13.23669,-10.88958 -7.05131,0 -13.0339,4.36096 -15.17114,10.41524 -8.11608,0.74653 -13.482403,7.28515 -13.482403,15.243261 0,8.04917 6.619903,11.5592 14.868953,12.17922 3.01047,3.27369 6.3125,6.19746 11.22887,6.19746 4.41723,0 8.35325,-2.74162 11.30536,-5.45469 2.0941,1.22773 5.041,2.5949 7.67738,2.5949 4.76506,0 8.17213,-3.20659 10.64824,-6.72203 1.43886,0.64815 4.59271,2.29083 6.27332,2.06367 6.10827,-0.82551 6.85125,-5.36258 6.85125,-7.75907 0,-2.55593 -1.75272,-7.931221 -7.90705,-7.931221 z')
    .attr({
        fill: '#daf5fd',
        stroke: 'none'
    });

    paper.path('m 576.21374,119.91321 -25.87804,-17.64205 22.31426,21.97701 -23.74004,-20.42855 19.7133,24.33723 -21.3035,-22.95813 16.86446,26.39139 -18.59906,-25.199 13.8035,28.11366 -15.6607,-27.123 10.56898,29.48238 -12.52542,-28.70588 7.20154,30.48036 -9.23264,-29.9278 3.74356,31.09502 -5.82374,-30.77334 0.23848,31.31864 -2.34158,-31.2319 -3.26962,31.14842 1.17,-31.29768 -6.73656,30.58648 4.66688,-30.9699 -10.1188,29.6399 8.10504,-30.25264 -13.37378,28.3206 11.4413,-29.15494 -16.4606,26.64512 14.6337,-27.6906 -19.34042,24.63458 17.64204,-25.87805 -21.977,22.31427 20.42854,-23.74005 -24.33722,19.71331 22.95812,-21.30351 -26.39138,16.86447 25.199,-18.59907 -28.11366,13.80351 27.123,-15.660713 -29.48238,10.568993 28.70588,-12.525433 -30.48036,7.201543 29.9278,-9.232643 -31.09502,3.74356 30.77334,-5.82374 -31.31864,0.23848 31.2319,-2.34158 -31.14842,-3.26962 31.2977,1.17 -30.5865,-6.73656 30.9699,4.66688 -29.6399,-10.1188 30.25264,8.10506 -28.3206,-13.3738 29.15496,11.4413 -26.64514,-16.4606 27.6906,14.6337 -24.63458,-19.34042 25.87804,17.64204 -22.31426,-21.977 23.74004,20.42854 -19.7133,-24.33722 21.3035,22.95812 -16.86444,-26.39138 18.59904,25.199 -13.8035,-28.11366 15.6607,27.123 -10.56898,-29.48238 12.52542,28.70588 -7.20154,-30.48036 9.23264,29.9278 -3.74356,-31.09502 5.82374,30.77334 -0.23848,-31.31864 2.34158,31.2319 3.26962,-31.14842 -1.17,31.2977 6.73656,-30.5865 -4.66688,30.9699 10.11882,-29.6399 -8.10506,30.25264 13.37378,-28.3206 -11.4413,29.15496 16.4606,-26.64514 -14.6337,27.6906 19.34042,-24.63458 -17.64204,25.87804 21.977,-22.31426 -20.42854,23.74004 24.33722,-19.7133 -22.95812,21.3035 26.39138,-16.86444 -25.199,18.59904 28.11366,-13.8035 -27.123,15.6607 29.48238,-10.56898 -28.70588,12.52544 30.48036,-7.20156 -29.9278,9.23264 31.09502,-3.74356 -30.77334,5.82374 31.31864,-0.23848 -31.2319,2.3416 31.14842,3.2696 -31.2977,-1.17 30.5865,6.73656 -30.9699,-4.66688 29.6399,10.118823 -30.25264,-8.105063 28.3206,13.373793 -29.15496,-11.441313 26.64514,16.460613 -27.6906,-14.63371 24.63458,19.34043 z')
    .attr({
        fill: '#ffeb00',
        stroke: 'none'
    });
}
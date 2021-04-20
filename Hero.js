function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 20;
        // console.log('ok: ' + this.left);
    }
    this.moveLeft = function () {
        this.left -= 20;
    }
    this.moveDown = function () {
        this.top += 20
    }
    this.moveUp = function () {
        this.top -= 20
    }
}

console.log("")
let hero = new Hero('money.png', 20, 30, 200);

function start() {

    if (hero.left <= (window.innerWidth - hero.size) / 2 &&
        hero.top === 20) {
        hero.moveRight();

    } else if (hero.left === (window.innerWidth - hero.size) / 2 + 10 &&
        hero.top <= Math.floor(window.innerHeight - hero.size/2)) {
        hero.moveDown();
    } else if (hero.left > 0)
        {
        hero.moveLeft()

    } else if (hero.left === -10 && hero.top>=0){
        hero.moveUp()
    }


    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 25)
}

start();
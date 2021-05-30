function dicegame() {
    let r1 = 6 * Math.random();
    r1 = Math.ceil(r1);
    if (r1 == 0) {
        r1 = 1;
    }
    let p1 = document.getElementById("p1");
    if (r1 == 1) {
        p1.innerHTML = `<img src="/images/dice1.png" alt="">`;
    }
    else if (r1 == 2) {
        p1.innerHTML = `<img src="/images/dice2.png" alt="">`;
    }
    else if (r1 == 3) {
        p1.innerHTML = `<img src="/images/dice3.png" alt="">`;
    }
    else if (r1 == 4) {
        p1.innerHTML = `<img src="/images/dice4.png" alt="">`;
    }
    else if (r1 == 5) {
        p1.innerHTML = `<img src="/images/dice5.png" alt="">`;
    }
    else if (r1 == 6) {
        p1.innerHTML = `<img src="/images/dice6.png" alt="">`;
    }
    let r2 = 6 * Math.random();
    r2 = Math.ceil(r2);
    if (r2 == 0) {
        r2 = 1;
    }
    let p2 = document.getElementById("p2");
    if (r2 == 1) {
        p2.innerHTML = `<img src="/images/dice1.png" alt="">`;
    }
    else if (r2 == 2) {
        p2.innerHTML = `<img src="/images/dice2.png" alt="">`;
    }
    else if (r2 == 3) {
        p2.innerHTML = `<img src="/images/dice3.png" alt="">`;
    }
    else if (r2 == 4) {
        p2.innerHTML = `<img src="/images/dice4.png" alt="">`;
    }
    else if (r2 == 5) {
        p2.innerHTML = `<img src="/images/dice5.png" alt="">`;
    }
    else if (r2 == 6) {
        p2.innerHTML = `<img src="/images/dice6.png" alt="">`;
    }
    console.log(r1, " ", r2);
    let player1 = document.getElementById("player_name1");
    let player2 = document.getElementById("player_name2");

    let win = document.getElementById("winner");
    if (r1 > r2) {
        win.innerHTML = "<h1>PLAYER 1 WON</h1>";
        player1.style.display = 'block';
        player2.style.display = 'block';
    }
    else if (r2 > r1) {
        win.innerHTML = "<h1>PLAYER 2 WON</h1>";
        player.style.display = 'block';
        player2.style.display = 'block';
    }
    else {
        win.innerHTML = "<h1>DRAW</h1>";
        player.style.display = 'block';
        player2.style.display = 'block';
    }
}
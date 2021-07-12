    starting = [undefined, 'Hello,,,', 'Welcome', 'to', 'my', 'website'];
    var text = document.getElementById("intro-text");
    let int = 0;

    function changeTxt() {
        if (int < starting.length - 1) {
            int++;
            text.innerText = starting[int];
        }
    }


    setTimeout(() => {
        setInterval(changeTxt, 400);
    }, 800);



    var slider = document.querySelectorAll(".container > div");
    var nav = document.querySelectorAll(".nav > div");
    let counter = 0;
    arr = ['active', 'index-active'];



    document.body.addEventListener('keydown', key);

    function key(event) {
        if (event.keyCode == 37 || event.keyCode == 38) {
            clearInterval(interval);
            left();
        }
        if (event.keyCode == 39 || event.keyCode == 40) {
            clearInterval(interval);
            right();
        }
    }


    function right() {
        if (counter < slider.length - 1) {
            counter++;
            for (let i = 0; i < slider.length; i++) {
                if (counter == i) {
                    slider[counter].classList.add(arr[0]);
                    nav[counter].classList.add(arr[1]);

                } else {
                    slider[i].classList.remove(arr[0]);
                    nav[i].classList.remove(arr[1]);

                }
            }
        }
    }


    const interval = setInterval(right, 5000);

    function left() {
        if (counter > 1) {
            counter--;
            for (let i = 0; i < slider.length; i++) {
                if (counter == i) {
                    slider[counter].classList.add(arr[0]);
                    nav[counter].classList.add(arr[1]);
                } else {
                    slider[i].classList.remove(arr[0]);
                    nav[i].classList.remove(arr[1]);
                }
            }
        }
    }
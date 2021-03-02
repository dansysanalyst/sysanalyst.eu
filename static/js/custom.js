const sayHello = document.getElementById("sayhello");

const ToggleEmail = () => {
    if (sayHello.href.includes("#")) {
        sayHello.href = "mailto:" + atob(sayHello.dataset.hello_there).replace("&#127829;", "@");
        return;
    }

    sayHello.href = "#";
}

["mouseover", "blur"].forEach(evt => sayHello.addEventListener(evt, ToggleEmail, false));

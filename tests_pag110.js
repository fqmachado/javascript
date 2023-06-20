
    var clunkCounter = 10;
    // thingamajig(50);
    console.log(clunkCounter);
    alert(clunkCounter)

    let botao = document.getElementById("btnBotao") 
botao.addEventListener("click",thingamajig(1))

function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    }
    else if (size == 1) {
        display("thunk");
    }
    else {
        while (size > 1) {
            facky = facky + size;
            size = size - 1;
        }
        clunk(facky);      
    }
}

function display(output) {
    console.log(output)
    clunkCounter = 10
}

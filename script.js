function mudarFlex(flexFlow, width, height, margin, itemWidth) {
    const container = document.querySelector('.container1');
    const caixas = [document.querySelector('#cx11'), document.querySelector('#cx12'), document.querySelector('#cx13')];

    container.style.flexFlow = flexFlow;
    container.style.width = width;
    container.style.height = height;
    caixas.forEach(caixa => {
        caixa.style.margin = margin;
        caixa.style.width = itemWidth;
    });
}

function flexRow() {
    mudarFlex('row nowrap', '200px', '50px', '0px 10px');
}

function flexRowreverse() {
    mudarFlex('row-reverse nowrap', '200px', '50px', '0px 10px');
}

function flexColumn() {
    mudarFlex('column nowrap', '50px', '200px', '10px 0px', '30px');
}

function flexColumnreverse() {
    mudarFlex('column-reverse nowrap', '50px', '200px', '10px 0px', '30px');
}

function mudarWrap(flexFlow, width, height) {
    const container2 = document.querySelector('.container2');

    container2.style.flexFlow = flexFlow;
    container2.style.width = width;
    container2.style.height = height;
} 

function noWrap() {
    mudarWrap('row nowrap', '100px', '50px');
}

function wrap() {
    mudarWrap('row wrap', '100px', '100px');
}

function resetar() {
    mudarWrap('row nowrap', '200px', '50px');
}
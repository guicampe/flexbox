function mudarFlex(flexFlow, width, height, margin, itemWidth) {
    const container = document.querySelector('.container1');
    const caixas = [document.querySelector('#cx1'), document.querySelector('#cx2'), document.querySelector('#cx3')];

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
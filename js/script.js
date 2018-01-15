window.onresize = function() {
    makeSVG();
};

function makeSVG() {
    let svgns = "http://www.w3.org/2000/svg";
    let classArray = document.getElementsByClassName('content__vak');
    let svgRemove = document.getElementsByTagName('svg');
    while (svgRemove[0]) svgRemove[0].parentNode.removeChild(svgRemove[0]);
    for(let i = 0; i < classArray.length; i++) {
        let svgElement = document.createElementNS(svgns, 'svg');
        svgElement.setAttribute('height', parseFloat(classArray[i].offsetHeight));
        svgElement.setAttribute('width',  parseFloat(classArray[i].offsetWidth));
        let react = document.createElementNS(svgns, 'rect');
        react.setAttributeNS(null, 'x', 0);
        react.setAttributeNS(null, 'y', 0);
        react.setAttributeNS(null, 'height', '50');
        react.setAttributeNS(null, 'width', '50');
        react.setAttribute('height', parseFloat(classArray[i].offsetHeight));
        react.setAttribute('width',  parseFloat(classArray[i].offsetWidth));
        react.setAttributeNS(null, 'fill', 'transparent');
        react.setAttributeNS(null, 'stroke', 'transparent');
        
        svgElement.appendChild(react);
        
        classArray[i].appendChild(svgElement);
    
        classArray[i].addEventListener('mouseover', () =>  {
            react.setAttributeNS(null, 'stroke', '#'+Math.round(0xffffff * Math.random()).toString(16));
        });
        classArray[i].addEventListener('mouseout', () =>  {
            react.setAttributeNS(null, 'stroke', 'transparent');
        });
    }
}

makeSVG();
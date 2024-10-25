/**
 * @param {'td'|'th'} a 
 * @param {string} b 
 * @param {HTMLTableRowElement} c 
 * @returns {HTMLTableCellElement}
 */
function createTableCell(a,b,c){
    const element = document.createElement(a);
    element.innerHTML = b;
    c.appendChild(element);
}

function createHTMLELementWithParentId(tag,id,parentId){
    let parent = document.getElementById(parentId);
    return createHTMLElement(tag,id,parent);
}

function renderTable(){
    
    
}
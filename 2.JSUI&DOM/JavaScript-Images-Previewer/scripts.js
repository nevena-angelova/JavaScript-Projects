function createImagesPreviewer(selector, items) {

    var container = document.querySelectorAll(selector)[0];
    container.style.width = '600px';
    container.style.padding = '0 10px';

    //left side
    var leftDiv = document.createElement('div'),
        h1 = document.createElement('h1'),
        h1TextNode = document.createTextNode(items[0].title),
        mainImg = document.createElement('img');

    h1.appendChild(h1TextNode);
    h1.style.textAlign = 'center';
    mainImg.src = items[0].url;
    mainImg.style.width = '100%';
    leftDiv.style.overflow = 'auto';

    leftDiv.appendChild(h1);
    leftDiv.appendChild(mainImg);

    //the right side
    var rightDiv = document.createElement('div'),
        ul = document.createElement('ul'),
        li,
        h2,
        textNode,
        img,
        documentFragment = document.createDocumentFragment();

    rightDiv.style.textAlign = 'center';
    rightDiv.style.width = '120px';
    rightDiv.style.margin = '0 10px';
    rightDiv.style.cssFloat = 'right';
    rightDiv.style.height = '395px';
    rightDiv.style.overflow = 'auto';
    ul.style.padding = '0';
    ul.style.listStyleType = 'none';

    var input = document.createElement('input'),
        inputTitle = document.createElement('h3'),
        inputTitleText = document.createTextNode('Filter');

    input.type = 'text';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
    input.addEventListener('blur', onBlankShowImages);
    input.addEventListener('keypress', onHideImages);

    inputTitle.appendChild(inputTitleText);
    inputTitle.style.margin = '5px 0';

    rightDiv.appendChild(inputTitle);
    rightDiv.appendChild(input);

    li = document.createElement('li');
    h2 = document.createElement('h2');
    h2.style.fontSize = '16px';
    h2.style.margin = '5px 0';
    img = document.createElement('img');
    img.style.width = '100%';

    for (var i = 0, len = items.length; i < len; i++) {
        liClone = li.cloneNode(true);
        liClone.addEventListener('click', onImageClick);
        h2Clone = h2.cloneNode(true);
        textNode = document.createTextNode(items[i].title);
        h2Clone.appendChild(textNode);
        imgClone = img.cloneNode(true);
        imgClone.src = items[i].url;
        liClone.appendChild(h2Clone);
        liClone.appendChild(imgClone);
        documentFragment.appendChild(liClone);
    }

    ul.appendChild(documentFragment);
    rightDiv.appendChild(ul);

    container.appendChild(rightDiv);
    container.appendChild(leftDiv);

    function onImageClick() {
        mainImg.src = this.getElementsByTagName('img')[0].src;
        h1.innerHTML = this.getElementsByTagName('h2')[0].innerHTML;
    }

    function onHideImages() {
        var inputStr = this.value,
            titles = rightDiv.getElementsByTagName('h2'),
            len = titles.length;

        for (var i = 0; i < len; i++) {
            if (titles[i].innerHTML.indexOf(inputStr) == -1) {
                titles[i].parentNode.style.display = 'none';
            }
        }
    }

    function onBlankShowImages() {
        if (this.value == '') {
            var listItems = rightDiv.getElementsByTagName('li'),
                lisLen = listItems.length

            for (var i = 0; i < lisLen; i++) {
                if (listItems[i].style.display == 'none') {
                    listItems[i].style.display = '';
                }
            }
        }
    }
}
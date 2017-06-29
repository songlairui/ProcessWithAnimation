;
[].filter.call(document.querySelectorAll('.text'), v => !v.children.length && v.textContent)
  .forEach(el => {
    let string = el.textContent
    el.textContent = ''
    let oFrag = document.createDocumentFragment()

    for (let i = 0; i < string.length; i++) {
      let span = document.createElement('span')
      span.textContent = string[i]
      oFrag.appendChild(span)
    }
    el.appendChild(oFrag)
    // el.style.border = 'thin solid red'
  });
/*
 * @Author: ailiang
 * @Date: 2021-03-10 10:28:29
 * @LastEditors: ailiang
 * @LastEditTime: 2021-03-10 10:50:39
 */
export function createElement(type, attibute, ...children) {
  let element
  if(typeof type === 'string')
    element = new ElementWrapper(type)
  else 
    element = new type
  for(let name in attibute) {
    element.setAttribute(name, attibute[name])
  }
  for(let child of children) {
    if(typeof child === 'string') {
      child = new TextWrapper(child)
    }
    child.mountTo(element)
  }
  return element
}

export class Component {
  constructor() {
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }
  appendChild(child) {
    this.root.appendChild(child)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class ElementWrapper extends Component{
  constructor(type) {
    this.root = document.createElement(type)
  }

}
class TextWrapper extends Component {
  constructor(type) {
    this.root = document.createTextNode(type)
  }
}
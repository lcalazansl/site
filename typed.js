import Typed from "typed.js"

connect() ;{
  new Typed(this.element, {
    strings: ['City bike', 'Amsterdam', 'Road bike', 'Utrecht', 'BMX', 'Rotterdam', 'Cargo bike', 'MTB', 'Fixie'],
    loop: true,
    attr: 'placeholder',
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 500,
    startDelay: 100,
    bindInputFocusEvents: true,
  })
}
console.log('hellow from typed')

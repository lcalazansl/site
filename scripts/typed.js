import Typed from "typed.js"

connect() ;{
  new Typed(this.element, {
    strings: ['Full-stack Web Developer',
              'JavaScript Developer',
              'Ruby on Rail Developer',
              ],
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

const find = (selector, where = document) => where.querySelector(selector)

const random = (max) => (Math.random() * (max + 1) ) | 0

const create = (tag) => document.createElement(tag)
// Находим главный элемент
const $root = find('#root')
// Находим счетчик
const $counter = find('#counter')
// Находим таймер
const $timer = find('#timer')
// Создаем конструктор куба
const Cube = () => {
  // Создаем дом элемент куба

  const $element = create('div')
  // Добавляем класс
  $element.classList.add('cube')
  // Удаление элемента
  $element.addEventListener('click', () => $element.parentNode.removeChild($element))
  //Выставляем позицию по x
  $element.style.left = `${random(95)}%`
  // Выставляем позицию по y
  $element.style.top = `${random(95)}%`
  // добавлением куб в корневой элемент
  $root.appendChild($element)
  // Добавляем анимация при инициализации
  $element.classList.add('init')
  // Возвращаем созданый куб
  return $element
}

function start_timer() {
  // Начальное время
  let seconds = 0, minutes = 0
  // Запуск таймера
  setInterval(() => {

    $timer.innerText = `${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`

    if (seconds === 59) {

      seconds = 0

      minutes++

    } else seconds++

  }, 1000)

}

function render_counter(value) {
  $counter.innerText = `Кубов на поле: ${value}`
}

function start_game() {

  let cubes = 0

  start_timer()

  const timer = setInterval(() => {

    cubes++

    if(cubes > 9) {

      clearInterval(timer)

      alert('Вы проиграли')

    }

    render_counter(cubes)

    const $cube = Cube()

    $cube.addEventListener('click', () => {

      cubes--

      render_counter(cubes)

    })
  },1000)

}

start_game()

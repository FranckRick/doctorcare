window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurretSection(home)
  activateMenuAtCurretSection(services)
  activateMenuAtCurretSection(about)
  activateMenuAtCurretSection(contact)
}

function activateMenuAtCurretSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a secao pasou a linha
  //quais dados vou prescisar?

  //o topo da seçao
  const sectionTop = section.offsetTop

  //a altura da seçao
  const sectionHeight = section.offsetHeight

  // o topo da seçao chegou ou ultrapassou da linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //Verificar ss e a base esta a baixo da linha alvo
  //quais dados vou prescisar

  //a seçao termina onde
  const sectionEndsAt = sectionTop + sectionHeight

  //o Final da selçao passou da linha Alvo
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //limite da seçao
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats,
#services
#services header,
#services .cards,
#about,
#about heander,
#about .content
`)

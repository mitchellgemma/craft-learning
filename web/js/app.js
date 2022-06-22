//========DOM ELEMENTS======================================================================================
const buttons = document.querySelectorAll('.btn-group')
const oddBoxes = document.querySelectorAll('.odd')
const evenBoxes = document.querySelectorAll('.even')
const even = document.querySelectorAll('.show-even')
const odd = document.querySelectorAll('.show-odd')
const all = document.querySelectorAll('.show-all')
const homeAway = document.querySelectorAll('.nav-links')
const cards = document.querySelectorAll('.card')
const btns = document.querySelectorAll('.but')


// elements to add event listeners to
const arrayButtons = [...buttons[0].children]
const navArray = [...homeAway[0].children]


//========FUNCTIONS======================================================================================

// Click function to be added to the boxes buttons to decide which action to take
const clickButton = (e) => {
  console.log(e.target)
  // if the target does not have an id, find the element with 'checked' id and remove it
  if (!e.target.class) {

    document.querySelector('.checked').classList.remove('checked')
    // give the new element the class 'checked
    e.target.classList = 'checked'
  }

}
// Simple function to flip the colors of the nav bar links
const nav = (e) => {

}

//========EVENT LISTENERS===================================================================================
arrayButtons.forEach((btn) => {
  btn.addEventListener('click', clickButton)
})
navArray.forEach((link) => {
  link.addEventListener('click', nav)
})


//==============================================================================

btns.forEach((button) => {
    button.addEventListener('mouseover', () => {
        gsap.to(button, {
            backgroundColor:"rgb(72, 69, 83)",
            duration: .1
          })
        })
      })
      
btns.forEach((button) => {
    button.addEventListener('mouseout', () => {
        gsap.to(button, {
            backgroundColor:"#646072",
            duration: .1
          })
        })
      })

  // =======================================================================================
  // event listeners for boxes
    // work on .play() and .reverse() after it is all working

cards.forEach((card) => {
  // defining this inside of the function limits it to only elements within that element
  const title = card.querySelector(".card-title")
  const subtext = card.querySelector("h4")
  const cardButton = card.querySelector(".card-btn")
  const cardHover =
  gsap.timeline({paused: true})
  .to(card, {y: -15, duration: .05, boxShadow: '0px 2px 18px 0px rgba(11, 11, 11, 0.56)'})
  .to(title, {color: 'black', duration: .05})
  .from(subtext, {opacity: 0, ease: Power4.easeOut, duration: .5}, ">")
  .to(cardButton, {opacity: 1, ease: Power4.easeOut, duration: .01}, ">")

  card.addEventListener('mouseover', () => {
    cardHover.play()
  })
  card.addEventListener('mouseleave', () => {
    cardHover.reverse()
  })
})

  // =======================================================================================
  // SCROLL TRIGGER

// Not completely finished -- other scrollTrigger is causing the hover animation to not work

gsap.registerPlugin(ScrollTrigger);

// Only plays once but works with all animations
  ScrollTrigger.batch(cards, {
    start: "top 95%",

    onEnter: card => gsap.to(card, {autoAlpha: 1, stagger: 0.1}),
  });



// ScrollTrigger.batch(cards, {
//   // interval: .5,
//   // start: "top, 85%",
//   onEnter: card => gsap.to(card,
//     {
//       opacity: 1,
//       stagger: .2,
//       duration: .2,
//       overwrite: true,
//     }),
//     onLeave: card => gsap.to(card, {
//       opacity: 0,
//       stagger: .2,
//       duration: .1,
//       overwrite: true,
//     }),
//     onEnterBack: card => gsap.to(card, {
//       opacity: 1,
//       stagger: .2,
//       duration: .2,
//       overwrite: true,
//     }),
//     onLeaveBack: card => gsap.to(card, {
//       opacity: 0,
//       stagger: .2,
//       duration: .2,
//       overwrite: true,
//     })
// })
//========DOM ELEMENTS======================================================================================
const buttons = document.querySelectorAll('.btn-group')
const buts = document.querySelectorAll('.but')
const oddBoxes = document.querySelectorAll('.odd')
const evenBoxes = document.querySelectorAll('.even')
const even = document.querySelectorAll('.show-even')
const odd = document.querySelectorAll('.show-odd')
const all = document.querySelectorAll('.show-all')
const homeAway = document.querySelectorAll('.nav-links')

// elements to add event listeners to
const arrayButtons = Array.from(buttons[0].children)
const navArray = Array.from(homeAway[0].children)

showEven = even[0]
showOdd = odd[0]
showAll = all[0]


//========FUNCTIONS======================================================================================

// Click function to be added to the boxes buttons to decide which action to take
const clickButton = (e) => {
  // if the target does not have an id, find the element with 'checked' id and remove it
  if (!e.target.id) {
    document.getElementById('checked').removeAttribute('id')
    // give the new element the id 'checked
    e.target.id = 'checked'
  }
  // if user clicks on show even button, displays will be changed accordingly
  // for (let i = 0; i < oddBoxes.length; i++) {
  //   if (e.target.className == 'show-even') {
  //     oddBoxes[i].style.display = 'none'
  //     evenBoxes[i].style.display = 'flex'
  //   }
  //   // for show-odd button, even boxes will be hidden
  //   else if (e.target.className == 'show-odd') {
  //     evenBoxes[i].style.display = 'none'
  //     oddBoxes[i].style.display = 'flex'

  //     // when show all is clicked, all displays will be changed back to normal
  //   } else if (e.target.className == 'show-all') {
  //     evenBoxes[i].style.display = 'flex'
  //     oddBoxes[i].style.display = 'flex'
  //   }
  // }
}
// Simple function to flip the colors of the nav bar links
const nav = (e) => {
  // if home is clicked make home beige and away white
  if (e.target.id == 'home') {
    home.style.color = 'rgb(253, 236, 202)'
    away.style.color = 'white'
    // if away is clicked make home white and away beige
  } else if ((e.target.id = 'away')) {
    home.style.color = 'white'
    away.style.color = 'rgb(253, 236, 202)'
  }
}

//========EVENT LISTENERS===================================================================================
arrayButtons.forEach((btn) => {
  btn.addEventListener('click', clickButton)
})
navArray.forEach((link) => {
  link.addEventListener('click', nav)
})


//==============================================================================
// This is grouping all of the buttons together - not sure why

// buts.forEach((button) => {
//     button.addEventListener('mouseover', () => {
//          console.log(button)
//         gsap.to("button", {
//             backgroundColor:"green",
//             duration: .1
//           })
//         })
//       })
      
// buts.forEach((button) => {
//     button.addEventListener('mouseout', () => {
//         gsap.to("button", {
//             backgroundColor:"red",
//             duration: .1
//           })
//         })
//       })

//==============================================================================
// Event listeners for the hover effect on buttons - using a for each does not make the buttons work independently

  showEven.addEventListener('mouseover', () => {
    gsap.to(".show-even", {
      backgroundColor:"rgb(72, 69, 83)",
      duration: .1
    })
  })

  showEven.addEventListener('mouseout', () => {
    gsap.to(".show-even", {
      backgroundColor:"#646072",
      duration: .1
    })
  })

  showOdd.addEventListener('mouseover', () => {
    gsap.to(".show-odd", {
      backgroundColor:"rgb(72, 69, 83)",
      duration: .1
    })
  })

  showOdd.addEventListener('mouseout', () => {
    gsap.to(".show-odd", {
      backgroundColor:"#646072",
      duration: .1
    })
  })

  showAll.addEventListener('mouseover', () => {
    gsap.to(".show-all", {
      backgroundColor:"rgb(72, 69, 83)",
      duration: .1
    })
  })

  showAll.addEventListener('mouseout', () => {
    gsap.to(".show-all", {
      backgroundColor:"rgb(253, 236, 202)",
      duration: .1
    })
  })
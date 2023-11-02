let profileMenuEnabled = false

window.addEventListener('load', () => {
  const profileMenuBtn = document.getElementById("profile-menu-btn")
  const profileMenu = document.getElementById("profile-menu")
  
  profileMenuBtn.addEventListener('click', () => {
    profileMenuEnabled = !profileMenuEnabled
    
    if (profileMenuEnabled) {
      profileMenuBtn.innerHTML = "[V]"
      profileMenu.style.display = "block"
    }
    else {
      profileMenuBtn.innerHTML = "[>]"
      profileMenu.style.display = "none"

    }
  })
})
# Project 0: tamagotchi

Tamagotchi Life is an in-browser game based on the 1996 hit handheld game! I've taken many inspirations from the original handheld game, including an original **GameBoy** theme, and Tamagotchi sprites, based on the time period. Tamagotchi Life features many of the same functionality that the base game had, such as feeding your pet, playing with them, and making sure they get their rest! If you're patient, and take good care of your pet....they may even **transform** into something greater!

--- 

### Image placeholder

---

### Technologies used:

* HTML
* CSS 
* CSS flexbox
* JavaScript
* jQuery

---

### Wireframe placeholder

Here is a drawing of the "Landing page" for my site. I decided to go with a hand-drawn approach for my wireframe, as I figured it would be much quicker for me to translate my ideas onto paper. It features a title bouncing into view, followed by a fade-in of my "mission statement" and a bar to enter your Tamagotchi's name. Click to start the game!

### Wireframe placeholder pt. 2

Above is a drawing of the main game screen. I utilized css flexbox heavily here, using multiple flex containers to position my elements corrrectly. The Tamagotchi should move left and right across the screen, and on the right side, there are interactable buttons for the user. On the bottom of the screen, and on the top, stats are displayed. 

---

## User Stories 

* On the loading of the page, the user will see the title "bounce" onto the page, followed by the "mission statement" and Tamagotchi name-bar fading-in to the screen. 
* Once the intro is on the screen, the user is prompted to provide a name for their Tamagotchi. If one is not provided, the name will simply be "Tamagotchi". To continue, press **Start!**
* Upon clicking the **Start!** button, the page will slide down to the bottom half of the page, showing the main game-screen.
* The User Interface shows a game controller based on the original GameBoy, with buttons for **Feeding**, **Playing**, and **Sleeping**. 
* The Interface also features the game screen, upon which the Tamagotchi sprite will slowly move across the screen, over 30 seconds (repeating). 
* Also included on the top of the screen is the Tamagotchi's name, and their age. Over time, the Tamagotchi's age will slowly increase. After a pre-determined amount of time, the Tamagotchi may transform into a different sprite.
* On the bottom of the game screen, there is a bar displaying the Tamagotchi's hunger, boredom, and sleepiness. These values will start at 0, and slowly go up to 10. Upon reaching a value of 10, the Tamagotchi will "die". 
* The way to combat this is by interacting with your Tamagotchi through the buttons on the right side of the screen. The **Feed** button will reduce hunger by 1. The **Play** button will reduce boredom by 1. Finally, the **Sleep** button will reduce sleepiness by 1.
* When interacting with your Tamagotchi, certain animations will appear, such as hearts, or "zZZ's", which will hint the user what affect their actions had on their Tamagotchi.
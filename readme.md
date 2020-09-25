![tamagotchi sprite](/images/adult-sprite-0.png)
# Project 0: tamagotchi

Tamagotchi Life is an in-browser game based on the 1996 hit handheld game! I've taken many inspirations from the original handheld game, including an original **GameBoy** theme, and Tamagotchi sprites, based on the time period. Tamagotchi Life features much of the same functionality that the base game had, such as feeding your pet, playing with them, and making sure they get their rest! If you're patient, and take good care of your pet....they may even **transform** into something greater!

--- 

![landing page](/wireframe-images/Tamagotchi-landing.png)

---

### Technologies used:

* HTML
* CSS 
* CSS flexbox
* JavaScript
* jQuery

---

### Wireframe

![landing page wire frame](/wireframe-images/20200923_103611.jpg)

Here is a drawing of the "Landing page" for my site. I decided to go with a hand-drawn approach for my wireframe, as I figured it would be much quicker and easier for me to translate my ideas onto paper. It features a title bouncing into view, followed by a fade-in of my "mission statement" and a bar to enter your Tamagotchi's name. Click to start the game!

![game screen wireframe](/wireframe-images/20200923_103605.jpg)

Above is a drawing of the main game screen. I utilized css flexbox heavily here, using multiple flex containers to position my elements correctly. The Tamagotchi should move left and right across the screen, and on the right side, there are interactable buttons for the user. On the bottom of the screen, and on the top, stats are displayed. 

---

## User Stories 

![game screen](/wireframe-images/Tamagotchi-gameplay.png)

* On the loading of the page, the user will see the title "bounce" onto the page, followed by the "mission statement" and Tamagotchi name-bar fading-in to the screen. 
* Once the intro is on the screen, the user is prompted to provide a name for their Tamagotchi. If one is not provided, the name will simply be "Tamagotchi". To continue, press **Start!**
* Upon clicking the **Start!** button, the page will slide down to the bottom half of the page, showing the main game-screen.
* The User Interface shows a game controller based on the original GameBoy, with buttons for **Feeding**, **Playing**, and **Sleeping**. 
* The Interface also features the game screen, upon which the Tamagotchi sprite will slowly move across the screen, over 25 seconds (repeating). 
* Also included on the top of the screen is the Tamagotchi's name, and their age. Over time, the Tamagotchi's age will slowly increase. After their age reaches 2, the Tamagotchi may transform into a different sprite.
* On the bottom of the game screen, there is a bar displaying the Tamagotchi's hunger, boredom, and sleepiness. These values will start at 0, and slowly go up to 10. Upon reaching a value of 10, the Tamagotchi will "die". 
* The way to combat this is by interacting with your Tamagotchi through the buttons on the right side of the screen. The **Feed** button will reduce hunger by 1, and a heart will appear on the game screen. The **Play** button will reduce boredom by 1, and the Tamagotchi will bounce up and down.(This will also tire your Tamagotchi out, and increase Sleepiness by 1.) Finally, the **Sleep** button will reduce sleepiness by 1. When the Tamagotchi is asleep, it's sprite will change look asleep, and a "zzz" icon will appear near the sprite.
* When your Tamagotchi dies, a "confirm" window will appear on the screen, asking you if you want to play again. If you accept, the page will reload. Otherwise, the sprite will dissappear and the game will stop.

## Final thoughts
* I took what I think some may consider an odd approach with my project. I initially started out doing the styling of my page, by creating the UI and creating my sprites. I did this because I felt that it would give me a better idea of what I needed my Tamagotchi to do, and how I would track it's progress by having something that would be easier to understand. 
    
* After the intial styling, I spent a majority of my time working on my JavaScript. I made a very large use of jQuery as well. 

* As for any unsolved problems, I had difficulty trying to figure out how to make any additonal pets for the user to choose from. I think I could spend more time learning about Object-oriented programming to improve upon this. Overall very fun project, I felt like I learned so much!
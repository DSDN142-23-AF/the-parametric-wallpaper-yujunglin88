# Creative Coding Project Documentation
Your Name: Jeff Lin   
Project Name: Sausage World!

# Assignment 
My intention coming in to this project is to have my beloved puppy as the star of the show for my tileling set, due to this limitation, I know instead of a more traditional geometric tileling sense it is going to play around more a center object, which is the sausage dog (*his name is Brook*)!

This limits the composition of my tileling to have to play around the center object, with the background and fillers making up the tileling aspect of the wallpaper, making it appear more coherant and complete, instead of just a simple image of sausage dog repeating.

# Response 
As I come from a computer science background, I have a pretty solid understnading of code and sturcting, so this part of the project is not much of an issue for me. On the contrary side, my design and creative side is not really at the same level, through this assignmnent I would like to gain a better understanding of colour pallet, design process, and most importantly, have a final piece that I am happy with and have a relatively good standard from the artistic point of view.

# Precedent images
As we have a naughty sausage dog and my wife absolutely adores him, I thought it would be really cute to make him the center piece of this design project. 

As she's into Disney/Cartoon like styles, in piticular more round edges than sharpe edges, and perfers lightish pink colour schemes, I thought it would be appropriate to have a cartoon styled sausage dog illisutration with more round/softer outlines, with a colour scheme around lighter colours. Oh and as our sausage dog is browned colour, that would be the colour we go with for the puppy himself.

Below are some of the initial ideas on roughly how it's going to look like, plus-minus some details depending on how the coding part goes.

![img](imgs\Precedent01.jpeg) 
![img](imgs\Precedent02.png) 
![img](imgs\Precedent03.png)

# Colour pallet
![img](imgs\palette_bg.png)  
![img](imgs\palette_dog.png)
I've decided to have a pinkish colour scheme for the background whiles the dog should have a red/brown colour, initial colour picks as shown above. There will also be places where I decided to implement ramdomised variable colours, in which I set the lower and upper boundds repectively in the two pallets later in code. This serves as a way of introducing interesting twists in colours whist maintaining a certain amount of control over it.

# Design development
* Date: 17/11/2023    
    [<img src="imgs\dev_01.png" width="300"/>](imgs\dev_01.png)    
    Started experimenting with p5 sketches and its functions, I thought it would be useful to first visualise the gride space on which I will be drawing and experiment my designs on, as this would help with placing shapes a lot easier.

* Date: 18/11/2023    
    [<img src="imgs\dev_02.png" width="300"/>](imgs\dev_02.png)    
    Translated origin to center of cell for easier anchoring + placed all anchor points for body parts, using these as guides to start drawing the body

* Date: 19/11/2023    
    [<img src="imgs\dev_03.png" width="300"/>](imgs\dev_03.png)    
    First MVP drafted, removed all anchors and commented out grids as I feel like I can focus more on the design components now.

* Date: 22/11/2023    
    ![img](imgs\dev_04.png)     
    First view of the tileling effect for my design, it lookes promising forr the effects I wanted to go for, will be adding more backdrops and filler for the main show (my puppy)

* Date: 24/11/2023    
    ![img](imgs\dev_05.png)   
    Adding in coloured cockie backdrops, starting to expand on the composition

* Date: 27/11/2023    
    ![img](imgs\dev_06.png)   
    Adding in "chains" to start linking up tiles, making the composition no so isolating

* Date: 27/11/2023    
    ![img](imgs\dev_07.png)   
    Adding in paws as alternative element for tileling, I quite like this effect as it stands

# Experiments (colour, composition, techniques)
* Date: 19/11/2023     
    [<img src="imgs\exp_01.png" width="450"/>](imgs\exp_01.png)    
    With the first design I went with just the plaint red sausage colour, as this is my puppies colour! This first version has no added components, shadles, etc. 

* Date: 23/11/2023    
    [<img src="imgs\exp_06.png" width="300"/>](imgs\exp_06.png)
    [<img src="imgs\exp_07.png" width="300"/>](imgs\exp_07.png)
    [<img src="imgs\exp_08.png" width="300"/>](imgs\exp_08.png)
    [<img src="imgs\exp_09.png" width="300"/>](imgs\exp_09.png)   
    I was playing around with translation, and realised with the way the wallpaper module is setted up, as is does not properly encapsulate each call the the `my_symbol()` function properly, you can abuse the translation metric stacks to do funky things like this, where the reversed tile is not properly offsetting and stiching together properly, instead, as demonstrated by the grids on the last image, it is being effected by my tralsation of moving the origin to the middle of the tile, thus offseting the new image of the reversed image.    
    Although I decided to convert this mechanic to a controllable `const push_pop:bool` which I can later choses to use this or not, it is worth noting that I acknoledge the same visual effects can be achieved easily with tileling design, it is just an intersting idea to play around with without having to alter the original design.     
    The realisation of this feature also allows me to have the idea of developing the later colour modes, as this is an indicator that the `my_symbol()` funciton call was not an install call but rather a static call, hence the trailing effects of variables. with this I decided to use a global counter which, in theory, carries across each call stack and therefore allowing such call action.
 
* Date: 23/11/2023    
    [<img src="imgs\exp_02.png" width="300"/>](imgs\exp_02.png)
    [<img src="imgs\exp_03.png" width="300"/>](imgs\exp_03.png)
    [<img src="imgs\exp_04.png" width="300"/>](imgs\exp_04.png)
    [<img src="imgs\exp_05.png" width="300"/>](imgs\exp_05.png)   
    Adding in colour variation modes, with the original being Mono, and the rest are: 'SHADOW', 'BLACK_WHITE', 'DUO', and 'RAINBOW' respectively. This is to test which kind of composition and/or colour scheme hits more to my liking.

* Date: 27/11/2023    
    [<img src="imgs\exp_10.png" width="300"/>](imgs\exp_10.png)
    [<img src="imgs\exp_11.png" width="300"/>](imgs\exp_11.png)   
    With the sugesstion of Phoebe, I tried out the idea of having bariable length body so I can have a super looooooooooooong sausage dog, I think this is also a really interesting idea to explore as one of the compositions, as it brings some really unique aesthetic to the wallpaper.

* Date: 01/12/2023    
    [<img src="..\out\Wallpaper1.png" width="300"/>](..\out\Wallpaper1.png")
    [<img src="..\out\Wallpaper2.png" width="300"/>](..\out\Wallpaper2.png")
    [<img src="..\out\Wallpaper3.png" width="300"/>](..\out\Wallpaper3.png")
    [<img src="..\out\Wallpaper4.png" width="300"/>](..\out\Wallpaper4.png")
    [<img src="..\out\Wallpaper5.png" width="300"/>](..\out\Wallpaper5.png")
    [<img src="..\out\Wallpaper6.png" width="300"/>](..\out\Wallpaper6.png")
    [<img src="..\out\Wallpaper7.png" width="300"/>](..\out\Wallpaper7.png")
    [<img src="..\out\Wallpaper8.png" width="300"/>](..\out\Wallpaper8.png")
    [<img src="..\out\Wallpaper9.png" width="300"/>](..\out\Wallpaper9.png")   
    With the above exploration and setup, now I can easily try and test out variations of different themes and composition, and these are what I think to be the most interesting and unique 9 outputs. 

# Reflection:
Overall, I found this project to be super interesting and it allowed me to explore the ideas of design with code, and I'm also really happy with the results I was able to achieve. Though if I was able to redo this project again I may place more emphasis on interesting designs for the background tileling, and/or have better motifs that can interlock between the puppy in the foreground and the fillers in the background.

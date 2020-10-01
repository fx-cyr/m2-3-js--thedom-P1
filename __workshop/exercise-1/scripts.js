// Header //
let main = document.querySelector('main');
let css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'styles.css';
document.head.appendChild(css);

// Elements //
let h1 = document.createElement('h1');
let paragrapheOne = document.createElement('p');
let h2 = document.createElement('h2')
let ratings = document.createElement('p')
let visual = document.createElement('img')
let paragrapheTwo = document.createElement('p')
let paragrapheThree = document.createElement('p')
let link = document.createElement('a')


// Elements' content //
h1.innerText = 'The best How I Met Your Mother episode (according to fans)'
paragrapheOne.innerText = 'As impossible as it seems to name 1 of the 209 legendary episodes as the "best", the fans have spoken and the highest rated episode is...wait for it...'
h2.innerText = 'The Slap Bet (Season 2, Episode 9)'
ratings.innerText = 'IMBD Ratings: 9.5'
visual.src = '/Users/fx/Documents/code/JS/m2-3-js--thedom-P1/__workshop/exercise-1/images/robin-sparkles.jpg'
paragrapheTwo.innerText = 'In this episode, Ted is learning a few secrets about Robin, namely that she has an unexplained aversion to the mall. Robin refuses to tell Ted and the others why she won’t go to the mall, so the gang forms their own theories. Marshall believes it’s because she got married in a mall and is still married. Barney believes it has something to do with Robin having performed in a porn video. The two of them make a slap bet with each other: whoever is right gets to slap the other across the face as hard as he can. Lily is named the Slap Bet Commissioner, as long as she promises to be unbiased'
paragrapheThree.innerText = 'In the end, Robin’s big secret was revealed she was a Canadian, teen pop sensation named Robin Sparkles. "Lets Go To The Mall". The slap bet takes a few turns throughout the episode, but ends with Marshall having the rihht to slap Barney 5 times- available for all of eternity (horrible call Barney).' 
link.innerText = 'Source'
link.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/"



// Appending elements //
main.appendChild(h1)
main.appendChild(paragrapheOne)
main.appendChild(h2)
main.appendChild(ratings)
main.appendChild(visual)
main.appendChild(paragrapheTwo)
main.appendChild(paragrapheThree)
main.appendChild(link)


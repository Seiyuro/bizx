This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## To install.

### npm install

##To Run.

### `npm start`

##Author Notes:

Hello, this is a test Project that I did. You would find comments along of all the code, but just like a FYI... I used React for this project, I created this containers, most of them are staless container since I not reall using the state so, didnt bother in create a class component, the only component that is a class Component is the Body one, since one of the requirements was and I quote:

"-- The footer should have neither fixed nor absolute positioning. We want it so that the footer would get pushed off screen if there were more page content."

So the footer is neither fixed or relative position, and its going to "grown" if there is more content, so to test that I created a small state to manipulated the amount of images that we want to render, feel free to add more to test it.

In general I used css modules, I could used sass and maybe its a little bit overkilled for this small app, but in general that is how I like to work, some projects I have used Sass but since there is not much nesting for the project I guess should be okay with only css.

I separeted all the elements into 3 Basic Main containers "HeadContainer, BodyContainer and FooterContainer".

## The Head Container.

The HeadContainer have 3 sub containers one for the Title, one for the logo in the middle and one for the Home Button. The are just super basic staless component only the middleContainer have an image that Im using like a placeholder image.
All the Stuffs are made with CSS Flex-box is doing all the magic by itself Im just using it. (FYI I think looks okay in responsive as well)

## The Body Container

This component its the only that have the state and I just added to test how everything looks when I add more items, I create a container for the images and Im passing like a prop to that container the number of images that we want to render. Im using flex-box again to handle the alignment of the images, since this one didnt have messures I just took some sizes that I though would be okay!

## The Footer Container

This is also a super simple component that only have the footer, used again flex box to align everything.

Thanks!

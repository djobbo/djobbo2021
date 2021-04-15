# Hi there 👋, i'm Djobbo!

## 🎸 Who Am I?

I'm a 21yo self taught fullstack web developer.

I started programming at 11yo by making [Minecraft](https://minecraft.net) mods,
and server plugins.

I then developed small games using [Unity](https://unity.com) and C# and used to
post all that stuff on twitter as [@Ludopod](https://twitter.com/ludopod).

I started web development when I was in high school, building small websites
using HTML, CSS and JavaScript. I then discovered JS frameworks and fell into
the rabbit hole.

I also dabbled with some lower level languages like C/C++ & assembly but I'm not
fluent at all, but it's fun from time to time.

## 📚 What I'm currently studying

I've been learning the inner workings of cryptocurrencies, blockchains &
solidity for the past few weeks. Gonna try and launch an app built on
[Ethereum](https://ethereum.org/) soon™.

## 💻 The tech I know and love

**Languages**  
![HTML](https://img.shields.io/badge/HTML--E34F26?style=flat-square&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS--1572B6?style=flat-square&logo=CSS3&logoColor=white)
![Sass](https://img.shields.io/badge/Sass--CC6699?style=flat-square&logo=Sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript--F7DF1E?style=flat-square&logo=JavaScript&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript--007ACC?style=flat-square&logo=TypeScript&logoColor=white)
![Python](https://img.shields.io/badge/Python--3776AB?style=flat-square&logo=python&logoColor=white)
![C#](https://img.shields.io/badge/c%23--239120?style=flat-square&logo=c-sharp&logoColor=white)
![Liquid](https://img.shields.io/badge/Liquid--7AB55C?style=flat-square&logo=shopify&logoColor=white)
![Solidity](https://img.shields.io/badge/Solidity--363636?style=flat-square&logo=solidity&logoColor=white)

**Frameworks and Libraries**

![NodeJS](https://img.shields.io/badge/Node.js--339933?style=flat-square&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React--61DAFB?style=flat-square&logo=react&logoColor=white)
![NextJS](https://img.shields.io/badge/Next.js--000000?style=flat-square&logo=next.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue--4FC08D?style=flat-square&logo=vue.js&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte--FF3E00?style=flat-square&logo=svelte&logoColor=white)
![Express](https://img.shields.io/badge/Express--000000?style=flat-square&logo=express&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled_Components--DB7093?style=flat-square&logo=styled-components&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion--0055FF?style=flat-square&logo=framer&logoColor=white)

**Softwares**

![Visual Studio Code](https://img.shields.io/badge/VS_Code--007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)
![Vim](https://img.shields.io/badge/Vim--019733?style=flat-square&logo=vim&logoColor=white)
![Photoshop](https://img.shields.io/badge/Photoshop--31A8FF?style=flat-square&logo=adobe-photoshop&logoColor=white)
![Illustrator](https://img.shields.io/badge/Illustrator--FF9A00?style=flat-square&logo=adobe-illustrator&logoColor=white)
![Xd](https://img.shields.io/badge/Xd--FF26BE?style=flat-square&logo=adobe-xd&logoColor=white)
![Unity](https://img.shields.io/badge/Unity--000000?style=flat-square&logo=unity&logoColor=white)

**Other**

![Git](https://img.shields.io/badge/Git--F05032?style=flat-square&logo=git&logoColor=white)
![Github](https://img.shields.io/badge/Github--181717?style=flat-square&logo=github&logoColor=white)
![Markdown](https://img.shields.io/badge/Markdown--000000?style=flat-square&logo=markdown&logoColor=white)

## 👨‍💻 What I'm working on

### 📈 Corehalla

A statistics and rankings website for the game
[Brawlhalla](https://brawlhalla.com).

#### V1

[![Corehalla Current Version](https://img.shields.io/badge/Visit-Corehalla_V1-blue?style=flat)](http://corehalla.com)

Current version is closed source and was written using the following stack:

**Frontend**: HTML, CSS, Javascript, JQuery  
**Backend**: NodeJS, Express, EJS

#### V2 aka **Corehalla Neue**

New version is still in active development. It is fully open source, under the
MIT license.

[![CorehallaNeue Stable Version](https://img.shields.io/badge/Visit-Corehalla_Neue_Stable-blue?style=flat)](https://neue.corehalla.com)
[![CorehallaNeue UnStable Version](https://img.shields.io/badge/Visit-Corehalla_Neue_Unstable/Nightly-blue?style=flat)](https://corehalla-neue.vercel.app/)

![CorehallaNeue Preview](assets/imgs/CorehallaNeue_Preview.jpg)

Technologies used are the following:

**Frontent**: React, NextJS, SASS/SCSS, Framer Motion  
**Backend**: NodeJS, NextJS Serverless Functions, Firebase Auth, Firestore

[![CorehallaNeue Repo Link](https://img.shields.io/badge/Visit_Repository-AlfieGoldson/CorehallaNeue-orange?style=flat&logo=github)](https://github.com/AlfieGoldson/CorehallaNeue)

### 🎩 Mokap.js

A simple mocking api to quickly create complex data structures in javascript and
typescript.

```ts
import { mock, map, bool, str, num, arr } from 'mokapjs';

const projectGenerator = map({
    // Generates random boolean
    isOpenSource: bool

    // Generates random string using Regex
	name: str(/[A-Z][a-z]{4,10}_[0-9]*/),

    // Generate Number between 0 and 20
	stars: num(0, 20),

    // Chooses between the two options
	author: choice('Alfie', 'Djobbo'),
});

// Generator will create an array of 10 projects when called
const projectsGenerator = arr(projectGenerator, 10);

const projects = mock(projectsGenerator);

// Possible Output
// projects: [
//     {
//         isOpenSource: true,
//         name: 'Mokapjs_03',
//         stars: 18,
//         author: 'Alfie'
//     }
//     ... // 9 More
// ]
```

[![Mokap Repo Link](https://img.shields.io/badge/Visit_Repository-AlfieGoldson/Mokap-orange?style=flat&logo=github)](https://github.com/AlfieGoldson/Mokap)

## 🕑 Past Projects

### Landshape

The largest project I ever made with [Unity](https://unity.com)/C#. It is a 3D
Low Poly Map and Tree Editor called Landshape.

![Landshape_Preview](assets/imgs/Landshape_Preview.jpg)

You can see watch the demo here:  
[Terrain Editor](https://www.youtube.com/watch?v=tz9Gzjl_mS0)  
[Tree Editor](https://www.youtube.com/watch?v=QwkU8khU_sM)

### 🛒 Nexaur

A shopify theme built using the liquid programming language.

[![Nexaur Repo Link](https://img.shields.io/badge/Visit_Repository-AlfieGoldson/Nexaur-orange?style=flat&logo=github)](https://github.com/AlfieGoldson/Nexaur)

## 📝 My Github Stats

[![AlfieGoldson's github stats](https://github-readme-stats.vercel.app/api?username=alfiegoldson&count_private=true&show_icons=true)](https://github.com/anuraghazra/github-readme-stats)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=alfiegoldson&layout=compact)

# Portfolio Website

This is a customizable portfolio website written using [Next.js](https://nextjs.org/) and [TailwindCSS](https://tailwindcss.com/).

## Getting Started
Prerequisites: You need to have **NodeJS** installed.

First clone the repo to your computer.
```bash
git clone https://github.com/Tbobbe/portfolio.git
```

Install all dependencies:
```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Congratulations! You are now running a portfolio website!

## Customize to make it your own
To customize the page into your own portfolio you need to do **two** things: Get your images and edit the *content.json* file.

### Images
To use your images just put them into the `public/images/` directory. 
**Important:** Some images need to be in a specific format, like 1:1, otherwise the page might look really weird.

### content.json
To change the content of the page you need to edit the `content.json` file which is located in the `src/` directory. The first three fields to fill in are the `name`, `background`, and `logo` fields.

`name`: Your name

`background`: The name of the image that will be used for the background. Use the one provided or your own which you put into `public/images/`. If your portfolio site gets too tall, you might need a taller background than the one provided (I have not created an infinite background yet).

`logo`: Your personal 1:1 logotype/icon which you put into `public/images/`.

Now you can add stuff to your site! There are currently 6 types of content you can add:
- Intro
- About
- Education
- Experiences
- Languages

You can use them all or only some of them if you want. Education, Experience, and Languages allow for multiple entries.
The easiest way to experience this is to simply take a look at the `content.json` file and experiment!

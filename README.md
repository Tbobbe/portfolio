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

The above command will start the development server which recompiles every time changes have been made to the source files. This is great if you want to do changes and see the effect immediately. **Alternatively**, you can build an optimized version of the project and start the normal server.

Build the project:
```bash
npm run build
```

Start the server:
```bash
npm run start
```

When you have started either the development server or built the project and started the normal server, open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Congratulations! You are now running a portfolio website!

## Customize to make it your own
To customize the page into your own portfolio you need to do **two** things: Get your images and edit the *content.json* file.

### Images
To use your images just put them into the `public/images/` directory. To set the **background**, name it `background.png` and put it in the `public/images/` directory.

**Important:** Some images need to be in a specific format, like 1:1, otherwise the page might look really weird.

### content.json
To change the content of the page you need to edit the `content.json` file which is located in the `src/` directory. The first two fields to fill in are the `name` and `logo` fields.

`name`: Your name

`logo`: Your personal 1:1 logotype/icon which you put into `public/images/`.

Now you can add stuff to your site! There are currently 6 types of content you can add:
- Intro
- About
- Education
- Experiences
- Languages

You can use them all or only some of them if you want. Education, Experience, and Languages allow for multiple entries.
The easiest way to experience this is to simply take a look at the `content.json` file and experiment!

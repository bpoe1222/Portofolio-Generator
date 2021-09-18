const generatePage = (name, github) => {
    return `
    <!DOCTYPE HTML>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
    <div style="display:flex; justify-content:center;">
        <h1>${name}</h1>
    </div>
    <hr style="color:red;">
        <div style="display:flex; justify-content:center;">
        <h2><a href="https://github.com/${github}">Github</a></h2>
        </div>
    </body>
    </html>
    `;
};

module.exports = generatePage;
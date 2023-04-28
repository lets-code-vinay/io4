// https://jsonplaceholder.typicode.com/posts

const api = `https://jsonplaceholder.typicode.com/posts`;

// 1. Fetch  --> Fetch
// 2. Axios --> ReactJS

let result = [];
fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
  res.json().then((result) => {
    const mainDiv = document.getElementById("post");
    let div = document.createElement("div");

    for (let i = 0; i <= result.length; i++) {
      div = `<h3>${result[i].title}</h3>
<p>${result[i].body}</p>

`;

      mainDiv.append(div);
    }
  })
);

/**
 * body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
id: 22
title: "dolor sint quo a velit explicabo quia nam"
userId: 3
 */

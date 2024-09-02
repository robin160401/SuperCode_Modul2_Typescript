// // Aufgabe 2 & 3

// const body = document.querySelector("body") as HTMLBodyElement;
// type Idk = {
//     author: string,
//     download_url: string
// }

// fetch("https://picsum.photos/v2/list")
//     .then(response => {
//         if (!response.ok){
//             console.log("Error");
//         }
//         return response.json();
//     })
//     .then((posts: Idk[]) => {
//         console.log(posts);
//         posts.forEach((element: Idk) => {
//             const figure = document.createElement("figure");
//             const img = document.createElement("img");
//             const figcaption = document.createElement("figcaption");

//             img.src = element.download_url;
//             figcaption.textContent = element.author;

//             body.appendChild(figure);
//             figure.appendChild(img);
//             figure.appendChild(figcaption);
//         })
//     })

// Aufgabe 4

type Comment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((response) => {
        if (!response.ok){
            console.log("Error")
        }
        return response.json();
    })
    .then((comments: Comment[]) => {
        comments.forEach((comment: Comment) => {
            console.log(comment.email);
        })
    })

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
            if (!response.ok){
            console.log("Error")
        }
        return response.json();
    })
    .then((posts: Post[]) => {
        let highestId = 0;
        let shortestTitleLength = 400;
        let shortestTitle = "";
        let longestBody = "";
        let longestBodyLength = 0;
        posts.forEach((post: Post) => {
            if (post.id > highestId){
                highestId = post.id;
            }
            if (post.title.length < shortestTitleLength){
                shortestTitleLength = post.title.length;
                shortestTitle = post.title;
            }
            if (post.body.length > longestBodyLength){
                longestBodyLength = post.body.length;
                longestBody = post.body;
            }
        })
        console.log(highestId);
        console.log(shortestTitle);
        console.log(longestBody);
    })

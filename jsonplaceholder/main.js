var posts = []

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            posts = data
            document.getElementById('spinner').innerHTML = ""
            mapPosts()
        })
}

function mapPosts() {
    var postsCards = ""

    for (let index = 0; index < posts.length; index++) {
        postsCards +=
            "<div class='card my-2'>" +
            "<div class='card-body'>" +
            "<h5 class='card-title text-primary'>" + posts[index].title + "</h5>" +
            "<p class='card-text'>" + posts[index].body + "</p> " +
            "</div>" +
            "</div>"
    }

    document.getElementById("postsArea").innerHTML = postsCards

}
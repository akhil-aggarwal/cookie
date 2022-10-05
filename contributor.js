var GITHUB_CONTRIBUTORS = "https://api.github.com/repos/akhil-aggarwal/cookie/contributors";

async function getContributors() {
    fetch(GITHUB_CONTRIBUTORS)
        .then((res) => res.json())
        .then((data) => console.log(data[0]))
    var res = await fetch(GITHUB_CONTRIBUTORS)
    var data = await res.json();

    data.forEach((contributor) => {
        document.getElementById("contributors_list").innerHTML += '<div class="card" style="width: 15rem;border-radius:15px;box-shadow:0px 0px 10px 1px;"><img src=' + contributor.avatar_url + 'class= "card-img-top" style="margin:0px !important;padding:0px !important;border-radius:15px;"><div class="card-body"><a href="' + contributor.html_url + '" target="blank"><h5 class="card-title" style="text-align:center;">' + contributor.login +'</h5></a></div></div >'
    });
}
getContributors();
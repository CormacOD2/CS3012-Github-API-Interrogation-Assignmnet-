const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".profile-name");
const usernameContainer = document.querySelector(".profile-username");
const publicReposContainer = document.querySelector(".profile-repos");
const urlContainer = document.querySelector(".profile-url");
const followersContainer = document.querySelector(".profile-followers");
const followingContainer = document.querySelector(".profile-following");
const emailContainer = document.querySelector(".profile-email");
const locationContainer = document.querySelector(".profile-location");

const client_id = "ENTER CLIENT ID HERE";
const client_secret = "ENTER CLIENT SECRET HERE";

var lang = [];
var numLang = [];

const UserFetch = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id
    =${client_id}&client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data }
};

const RepoFetch = async (user) => {
  const api_repo_call = await fetch(`https://api.github.com/users/${user}/repos`);
  const repo_data = await api_repo_call.json();
  return{repo_data}
};

const Repo = async(name)=>{
  const api_repo = await fetch(`https://api.github.com/repos/${name}/languages`);
  const temp = await api_repo.json();
  return{temp}
};

const showData = () => {

  UserFetch(inputValue.value).then((results) => {

    nameContainer.innerHTML = `Name: <span class="main-profile-value">${results.data.name}</span>`
    usernameContainer.innerHTML = `Username: <span class="main-profile-value">${results.data.login}</span>`
    publicReposContainer.innerHTML = `Public Repos: <span class="main-profile-value">${results.data.public_repos}</span>`
    urlContainer.innerHTML = `Github URL: <span class="main-profile-value">${results.data.html_url}</span>`
    followersContainer.innerHTML = `Followers: <span class="main-profile-value">${results.data.followers}</span>`
    followingContainer.innerHTML = `Following: <span class="main-profile-value">${results.data.following}</span>`
    emailContainer.innerHTML = `Email: <span class="main-profile-value">${results.data.email}</span>`
    locationContainer.innerHTML = `Location: <span class="main-profile-value">${results.data.location}</span>`

  })

  RepoFetch(inputValue.value).then((results) => {
    var i;
    for(i=0;i<results.repo_data.length;i++){
      Repo(results.repo_data[i].full_name).then((res) => {
        for (var key in res.temp) {
          var value = res.temp[key];
          var isInArray = lang.includes(key);
          if(isInArray){
            var j;
            for(j=0;j<lang.length;j++){
              if(lang[i]==key){
                numLang[i] = numLang[i] + value;
                isInArray = false;
              }
            }
          }else{
            lang.push(key);
            numLang.push(value);
          }
        }
      });
    }
      console.log(lang);
      console.log(numLang);
  })
}

searchButton.addEventListener("click", () => {
  showData();
})

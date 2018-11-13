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

const UserFetch = async (user) => {
  const api_call = await fetch(`https://api.github.com/users/${user}?client_id
    =${client_id}&client_secret=${client_secret}`);

  const data = await api_call.json();
  return { data }
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
}

searchButton.addEventListener("click", () => {
  showData();
})

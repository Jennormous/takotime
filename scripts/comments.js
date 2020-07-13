/*
Pushes a new comment object to an array of comments
Clears all comments from the page
Re-renders to the page all comments from the comment array
Clears the input fields after submitting a new comment */

/*
attempted to use an object constructor 

function newComment(name, date, commentText) {
  this.username = name;
  this.newdate = date;
  this.commentinput = commentText;

  //avatar image
}

let comments = [
  new newComment("Michael Lyons", "10/10/2019", "WHOA SO CRAZY! Love them"),
  new newComment("Gary Wong", "10/08/2019", "They are the bees knees"),
  new newComment(
    "Theodore Duncan",
    "10/07/2019",
    "My mind was blasted! How can someone be so damn good?!"
  )
];

*/

let avatars = [
  "./assets/avatar/Mohan-muruge.jpg",
  "./assets/avatar/weirdface.jpg",
  "./assets/avatar/kimson.jpg",
  "./assets/avatar/dog.jpg"
];

let comments = [
  {
    name: "Carole Baskin",
    date: "10-10-2019",
    comment: "Hey cool cats and kittens! Tako is such a cool cat...for a dog. "
  },
  {
    name: "Jennefer B",
    date: "10-08-2019",
    comment:
      "Being Tako's dog mom has been a rewarding experience! Even though he pooped on my bed when I brushed his teeth one time, I still love him."
  },
  {
    name: "ShibaFanGirl2001",
    date: "10-07-2019",
    comment:
      "OMGOSH I LOVE SHIBA INUS! They are like, the cutest dog on the planet. I wish I had 50 of them. I would love them forever and ever, and ever. Tako is the best of them all though. Love you TAKO <3"
  }
];

// new date
function currentDate() {
  let today = new Date();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  let yyyy = today.getFullYear();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return mm + "-" + dd + "-" + yyyy;
}
let today = currentDate();

//assign random avatar from assets folder

function addAvatar(avatars) {
  let random = Math.floor(Math.random() * avatars.length);
  return avatars[random];
}

// Location of comment div

let postedComments = document.querySelector(".comment-section__all-comments");

// function to create container for posted comments
// make a function that creates the elements and appends .innerText from data. EG h3.innerText = data.KEY

function createComment(data, section) {
  let commentContainer = document.createElement("div");
  let infoContainer = document.createElement("div");
  //contains name and date
  let header = document.createElement("div");

  let avatarImage = document.createElement("img");
  avatarImage.src =
    data.name === "Carole Baskin"
      ? "./assets/avatar/carolebaskin2.jpg"
      : addAvatar(avatars);

  let userName = document.createElement("h4");
  userName.innerText = data.name;

  let date = document.createElement("h4");
  date.innerText = data.date;

  let commentText = document.createElement("p");
  commentText.innerText = data.comment;

  //class names

  commentContainer.className = "main-container";
  infoContainer.className = "main-container__info";

  header.className = "main-container__header";
  avatarImage.className = "main-container__img";
  userName.className = "main-container__username";
  date.className = "main-container__date";
  commentText.className = "main-container__textbox";

  //append

  postedComments.appendChild(commentContainer);
  commentContainer.appendChild(avatarImage);

  infoContainer.appendChild(header);
  header.appendChild(userName);
  header.appendChild(date);
  infoContainer.appendChild(commentText);

  commentContainer.appendChild(infoContainer);
}

// create a function that will loop through the object snd call the creeate comment fucntion + pushes it to the front of the array

function fillComment(array) {
  for (let i = 0; i < array.length; i++) {
    createComment(comments[i], postedComments);
  }
}

//create a fucntion that clears all the comments and then prints them again with the new one

function deleteComments() {
  let container = postedComments.getElementsByClassName("main-container");

  for (let i = container.length; i > 0; i--) {
    postedComments.removeChild(container[i - 1]);
  }
}

// addEvent listener

let displayComment = document.querySelector(".comment-section__form");

// addEvent listener

displayComment.addEventListener("submit", (event) => {
  event.preventDefault();

  deleteComments();

  let comment = {};
  comment.name = event.target.username.value;
  comment.date = today;
  comment.comment = event.target.commenttext.value;

  comments.unshift(comment);

  fillComment(comments);

  document.querySelector(".comment-section__form").reset();
});

// array, location of div
fillComment(comments);

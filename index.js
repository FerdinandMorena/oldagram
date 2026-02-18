const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const feedEl = document.getElementById("feed");

function getPost(post) {
  return `
    <section>
      <div class="user-info">
        <img
          src="${post.avatar}"
          class="avatar-img"
          alt="${post.name} avatar"
        />
        <div class="user-info-text">
          <h2>${post.name}</h2>
          <p>${post.location}</p>
        </div>
      </div>
      <img
        src= "${post.post}"
        class="post-img"
        alt="${post.name}'s post"
      />
      <div class="actions">
        <img src="images/icon-heart.png" class="action-icon" alt="heart icon" />
        <img
          src="images/icon-comment.png"
          class="action-icon"
          alt="comment icon"
        />
        <img src="images/icon-dm.png" class="action-icon" alt="share icon" />
      </div>
      <p class="likes">${post.likes} Likes</p>
      <p class="comment">
        <span>"${post.username}"</span> ${post.comment}
      </p>
    </section>
    `;
}

function renderFeed() {
  feedEl.innerHTML = posts.map(getPost).join("");
}

renderFeed();

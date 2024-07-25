
let liked = false;

function likePhoto() {
  if (!liked) {
    document.getElementById("likesCount").textContent =
      parseInt(document.getElementById("likesCount").textContent) + 1;
    liked = true;
    document.getElementById("likeBtn").textContent = "UnLike";
  } else {
    document.getElementById("likesCount").textContent =
      parseInt(document.getElementById("likesCount").textContent) - 1;
    liked = false;
    document.getElementById("likeBtn").textContent = "Like";
  }
}

async function getRandomPhoto() {
    const apiKey = "KrEcBshPPrm1vuQ4a7ZtO5Ec9uKv_6xubuU-P_WpifE";
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${apiKey}`
    );
    const data = await response.json();
    document.getElementById("photo").src = data.urls.regular;
    document.getElementById("photographer").textContent = `Photo by ${data.user.name}`;
  } catch (error) {
    console.error("Error fetching photo: ", error);
  }
}

let likes = 0;
let hasLiked = false;

document.getElementById('likeBtn').addEventListener('click', function() {
    if (!hasLiked){
        likes++;
        document.getElementById('likesCount').textContent = likes;
        hasLiked = true;
    } else {
        likes--;
        document.getElementById('likesCount').textContent = likes;
        hasLiked = false;
    }
});

getRandomPhoto();

// сохранение истории лайков
const saveLikesToLocalStorage = async (id, likesCount) => {
    await localStorage.setItem('likes_' + id, likesCount);
};


// сохранение истории просмотров

const saveToHistory = async (url) => {
    let history = await getHistoryFromLocalStorage();
    history.push(url);
    await localStorage.setItem('history', JSON.stringify(history));
};

// получение просмотренных фото из localStorage
 const getHistoryFromLocalStorage = async () => {
    return JSON.parse(localStorage.getItem('history')) || [];
 };


 // получение количества лайков
const getLikesFromLocalStorage = async (id) => {
    return localStorage.getItem('likes_' + id);
}
console.log(localStorage);
// let likes = 0;
// let hasLiked = false;
const totalImageCount = 100;
let imageNum = 0;

const incrementImageNum = () => {
  imageNum = (imageNum + 1) % 100;
};

const decrementImageNum = () => {
  imageNum = (imageNum - 1 + totalImageCount) % 100;
};

const getImageUrl = () => `image/artwork/ariawase/Item${imageNum}.png`;

const updateImageUrl = () => {
  masterImage.src = getImageUrl();
};

const masterImage = document.querySelector("#MasterImage");

document.querySelector("#forwordButton").addEventListener("click", function () {
  incrementImageNum();
  updateImageUrl();
});

document.querySelector("#backButton").addEventListener("click", function () {
  decrementImageNum();
  updateImageUrl();
});

/* Explanations at junerockwell.com */
let canvas, context;
let mainImage = null;
let star_img = null;
let previewImage = null;
let isDraggable = false;

let currentX = 0;
let currentY = 0;

const init = () => {
  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");

  mainImage = new Image();
  star_img = new Image();

  mainImage.onload = function () {
    // context.drawImage(mainImage, 0, 0, 100, 200);
    const imageSize = calculateAspectRatioFit(mainImage.width, mainImage.height, window.innerWidth - 50, window.innerHeight / 2);

    currentX = imageSize.width - 120;
    currentY = imageSize.height - 60;
    _Go();
  };
  star_img.src = 'data:image/png;base64,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';
  mainImage.src = previewImage;
};

function _Go() {
  _MouseEvents();

  setInterval(function () {
    _ResetCanvas();
    _DrawImage();
  }, 1000 / 30);
}

function _ResetCanvas() {
  context.fillStyle = '#fff';
  context.fillRect(0, 0, canvas.width, canvas.height);
}

function _MouseEvents() {
  canvas.onmousedown = function (e) {
    let mouseX = e.pageX - this.offsetLeft;
    let mouseY = e.pageY - this.offsetTop;

    if (mouseX >= (currentX - star_img.width / 2) &&
      mouseX <= (currentX + star_img.width / 2) &&
      mouseY >= (currentY - star_img.height / 2) &&
      mouseY <= (currentY + star_img.height / 2)) {
      isDraggable = true;
    }
  };
  canvas.ontouchstart = function (e) {
    let mouseX = e.touches[0].pageX - this.offsetLeft;
    let mouseY = e.touches[0].pageY - this.offsetTop;

    if (mouseX >= (currentX - star_img.width / 2) &&
      mouseX <= (currentX + star_img.width / 2) &&
      mouseY >= (currentY - star_img.height / 2) &&
      mouseY <= (currentY + star_img.height / 2)) {
      isDraggable = true;
    }
  };
  canvas.onmousemove = function (e) {
    if (isDraggable) {
      currentX = e.pageX - this.offsetLeft;
      currentY = e.pageY - this.offsetTop;
    }
  };
  canvas.ontouchmove = function (e) {
    if (isDraggable) {
      currentX = e.touches[0].pageX - this.offsetLeft;
      currentY = e.touches[0].pageY - this.offsetTop;
    }
  };
  canvas.onmouseup = function (e) {
    isDraggable = false;
  };
  canvas.ontouchend = function (e) {
    // isDraggable = false;
  };
  canvas.onmouseout = function (e) {
    isDraggable = false;
  };
  canvas.ontouchcancel = function (e) {
    // isDraggable = false;
  };
}

function _DrawImage() {

  const imageSize = calculateAspectRatioFit(mainImage.width, mainImage.height, window.innerWidth - 50, window.innerHeight / 2);

  // canvas.width = mainImage.width;
  // canvas.height = mainImage.height;

  canvas.width = imageSize.width;
  canvas.height = imageSize.height;

  let loadedImageWidth = mainImage.width;
  let loadedImageHeight = mainImage.height;
  // get the scale
  // it is the min of the 2 ratios
  let scale_factor = Math.min(canvas.width / mainImage.width, canvas.height / mainImage.height);

  // Lets get the new width and height based on the scale factor
  let newWidth = mainImage.width * scale_factor;
  let newHeight = mainImage.height * scale_factor;

  // get the top left position of the image
  // in order to center the image within the canvas
  let x = (canvas.width / 2) - (newWidth / 2);
  let y = (canvas.height / 2) - (newHeight / 2);

  context.drawImage(mainImage, 0, y, newWidth, newHeight);

  // context.drawImage(mainImage, 0, 0, mainImage.width, mainImage.height);

  context.drawImage(
    star_img,
    currentX - (star_img.width / 2),
    currentY - (star_img.height / 2)
  );
  // context.drawImage(star_img, currentX-(star_img.width/2), currentY-(star_img.height/2));
}

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
  let ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
  return {width: srcWidth * ratio, height: srcHeight * ratio};
}

document.getElementById('readUrl').addEventListener('change', function () {
  const image = this.files[0];
  if (image) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
      previewImage = e.target.result;
      init();
    };
  }
});

document.getElementById('downloadAvatar').addEventListener('click', () => {
  const dataURL = canvas.toDataURL("image/png", 1.0);
  downloadImage(dataURL, 'avatar.png');
});

function downloadImage(data, filename = 'avatar.png') {
  const a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}
const video = document.getElementById("webcam");
const canvas = document.getElementById("output");
const ctx = canvas.getContext("2d");

async function init() {
  // 1) Start webcam
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  // 2) Wait until the video knows its real size
  await new Promise((resolve) => {
    video.onloadedmetadata = () => resolve();
  });

  await video.play();

  // 3) Match canvas size to actual video pixels
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  console.log("video:", video.videoWidth, video.videoHeight);
  console.log("canvas:", canvas.width, canvas.height);

  // 4) (optional) prove overlay by drawing something on canvas
  ctx.strokeStyle = "red";
  ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, 200, 200);
}

init();

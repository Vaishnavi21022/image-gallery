var FullImageGrid=document.getElementById('fullImageGrid');
var FullImage=document.getElementById('FullImage');
var closeimg= document.getElementById("closeimg")

function displayFullImg(src){
  FullImageGrid.style.display =' flex';
  FullImage.src=src;
}

document.getElementById('closeIcon').addEventListener('click', function () {
  FullImageGrid.style.display = 'none';
})

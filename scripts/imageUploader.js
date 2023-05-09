function fileValue(value) {
  let path = value.value;
  let extenstion = path.split('.').pop();
  if(extenstion == "jpg" || extenstion == "jpeg" || extenstion == "png"){
    document.getElementById("uploader-wrapper").classList.toggle('hidden');
    // document.getElementById("canvas-wrapper").classList.toggle('hidden');
    document.getElementById("generator-wrapper").classList.toggle('hidden');
    // document.getElementById("prepareAvatar").classList.toggle('hidden');
    document.getElementById('image-preview').src = window.URL.createObjectURL(value.files[0]);
    let filename = path.replace(/^.*[\\\/]/, '').split('.').slice(0, -1).join('.');
    document.getElementById("filename").innerHTML = filename;
  }else{
    alert("File not supported. Kindly Upload the Image of below given extension ")
  }
}
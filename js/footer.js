var count = 0;
function dropdown() {
  if (count % 2 == 0) {
      document.getElementById("dropdown_img").style.transform="rotate(180deg)"
    document.getElementById("info").style.display = "inline-block";
    count++;
  } else {
    document.getElementById("dropdown_img").style.transform="rotate(360deg)"
    document.getElementById("info").style.display = "none";
    count=0;
  }
}

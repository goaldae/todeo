import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommnetNumber");
const comment = document.getElementById("jsComment");

const increaseNumber = () => {
  if (parseInt(commentNumber.innerHTML, 10) === 0) {
    comment.innerHTML = "  comment";
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
  } else {
    comment.innerHTML = "  comments";
    commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
  }
};

const addComment = (comment) => {
  //화면에 보이게끔만 하는 기능
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  console.log(videoId);
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: {
      comment,
    },
  });
  console.log(response);
  addComment(comment);
};

const handleAddComment = (event) => {
  event.preventDefault(); //req할때 페이지 리로딩 방지
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleAddComment);
}

if (addCommentForm) {
  init();
}

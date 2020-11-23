import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("addText").value;
  document.getElementById("addText").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "listRow";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完成リストに追加
  document.getElementById("imcompleteList").appendChild(div);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());

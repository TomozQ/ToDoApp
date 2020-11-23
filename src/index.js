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

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完成リストに追加
  document.getElementById("imcompleteList").appendChild(div);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());

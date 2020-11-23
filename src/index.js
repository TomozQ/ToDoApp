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
    //押された完了ボタンの親タグ（div）を未完了リストから削除
    deleteFromimcompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //button（戻す）生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("completeList").appendChild(addTarget);
  });

  //button(削除)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromimcompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完成リストに追加
  document.getElementById("imcompleteList").appendChild(div);
};

//未完了リストから指定の要素を削除する関数
const deleteFromimcompleteList = (target) => {
  document.getElementById("imcompleteList").removeChild(target);
};

document
  .getElementById("addButton")
  .addEventListener("click", () => onClickAdd());

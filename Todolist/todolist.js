const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
         //HTML에 li 추가 , HTML의 listcontainer 안에 생성 
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // list 뒤에 X 표시 넣기
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    //list를 클릭한 경우
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    //span을 클릭한 경우 , list 삭제
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//새로운 데이터가 추가될 때 마다 호출
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
//페이지 새로고침 후에도 데이터 그대로 저장
function showTask()
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
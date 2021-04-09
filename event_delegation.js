// 1. 처음 짠 코드
var inputs = document.querySelectorAll("input");
inputs.forEach(function(input) {
  input.addEventListener("click", function(event) {
    alert("clicked");
  });
});

// 3. event delegation (이벤트 위임)으로 다시 짠 코드
var itemList = document.querySelector(".itemList");
itemList.addEventListener("click", function(event) {
  alert("clicked");
});

// 2. 새 리스트 아이템을 추가하는 코드
var itemList = document.querySelector(".itemList");

var li = document.createElement("li");
var input = document.createElement("input");
var label = document.createElement("label");
var labelText = document.createTextNode(" 이벤트 위임 학습");

/*
  화면의 모든 input 박스에 일일이 이벤트 리스너를 추가하는 대신 상위 요소인 ul태그(.itemlist)에
  eventListener를 달아놓고 하위에서 발생한 클릭 이벤트를 감지한다. 
  이 부분이 event bubbling  
*/

input.setAttribute("type", "checkbox");
input.setAttribute("id", "item3");
input.setAttribute("for", "item3");
label.appendChild(labelText);
li.appendChild(input);
li.appendChild(label);
itemList.appendChild(li);

/*
  새로 추가된 리스트 아이템에는 클릭 이벤트 리스너가 동작하지 않는다.
  input 박스에 클릭 이벤트 리스너를  추가하는 시점에서 리스트 아이템은 2개다. 
  따라서, 새롭게 추가된 리스트 아이템에는 클릭 이벤트 리스너가 등록되지 않는다.
  이렇게 되면, 매번 새롭게 추가된 리스트 아이템까지 클릭 이벤트 리스너를 일일이 달아줘야 할까?

  리스트 아이템이 많아지면 많아 질 수록 이벤트 리스너를 다는 작업 자체가 매우 번거롭다.
  이럴때 사용하는 방법이 Event Delegation(이벤트 위임)
 */

/* 
  위의 코드는 현재 input 박스의 이벤트만 다루는 것이 아니라 label 태그의 이벤트도 감지한다. 
  event 객체를 이용하여 input박스의 이벤트만 감지할 수 있도록 구현해보자. 
*/
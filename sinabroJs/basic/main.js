// // // document.body.innerHTML = "<h1>hello wordls</h1>";

// // const h1 = document.createElement("h1");
// // h1.innerText = "Hello";
// // h1.style.color = "red";
// // document.body.appendChild(h1); //맨뒤
// // document.body.prependChild(h1); //맨앞
// // document.body.insertBefore(p, h1); // h1앞에 p
// // const h = document.querySelector("h1"); //c만약 쿼리셀렉트all 하면 노드리스트 반환
// // h1.classList.add("title");
// // h1.classList.remove("title");

// // //만약 노드가 제공하는 api
// // //노드리스트는 배열이 아니다 배열에 있는 함수를 사용할수 없음 그래서 배열로 바꾸고 사용 ex) Array.from()

// // document.querySelector("#app").innerHTML = `
// // <button type="button" class="hello1">hello1</button>
// // <button type="button" class="hello2">hello2</button>
// // <button type="button" class="hello3">hello3</button>

// // <div>
// // <input class="name" type="text" placeholder="hi"/>
// // </div>;

// // <div>
// //   <button class="btn" type="button">
// //     <span>hi</span>
// //   </button>
// // </div>`;

// // document.querySelector("button").addEventListener("click", (e) => {
// //   const input = document.querySelector(".name");
// //   console.log(input);
// //   console.log("click");
// // });

// // document.querySelector(".name").addEventListener("change", (e) => {
// //   console.log(e.target.value);
// // });

// // document.querySelector(".btn").addEventListener("clikc", (e) => {
// //   console.log(e);
// // }); //버튼을 클릭했는데 스팬이 나옴 만약 버튼위에 div가 있다고 가정하면 그걸 클릭이벤트 발생하면 이벤트 타겟이 뭐가 나오냐? 타겟은 스팬이고 버블링에 의해 버튼과 div둘다 이벤트 실행

// // //이벤트 버블링 : 타겟에 있는 이벤트리스너를 실행시키고 부모에 있는 리스터도 실행시켜줌 만약  e.stopPropagation()을 하면 더이상 버블링이 안된다
// // //change는 실시간 트리거가 아니라 글자가 다 입력된후 변경 만약 한글자 마다 보고싶으면 input

// // //이벤트  : 타켓은 : 어떤 엘리먼트인지 알려줌

// // document.querySelector(".name").addEventListener("keyUp", (e) => {
// //   console.log(e);
// // }); //어떤키가 눌렸는데 알수있다 사용예시는 단축키를 이용할때 사용가능하다 간단하게 body아래에 리스너를 만들어서 단축키가 눌렸을때 어떤 액션을 한다

// document.querySelector("#app").innerHTML = `
// <input />
// <button>click</button>`;

// document.querySelector("button").addEventListener("click", () => {
//   const currentValue = document.querySelector("input").value;
//   document.querySelector("input").value = currentValue + "*";
// });

// // let count = 0;
// // setInterval(() => {
// //   count += 1;
// //   document.querySelector("#app").innerHTML = `
// //   <input />
// // <button>click</button>
// // <p>count : ${count}</p>`;
// // }, 5000); //입력하는데 만약 시간이 되면 입력이 없어짐 왜냐하면 엘리먼트가 새로 만들어져서 스테이트가 없어짐 리액트는 이걸 카운트 부분만 업데이트 해준다

document.querySelector("#app").innerHTML = `
<button class="btn-card type ="button">add card</button>
<div class="cards></div>`;

let cardCount = 0;

document.querySelector(".btn-card").addEventListener("click", () => {
  cardCounter += 1;
  const card = documnet.createElement("div");
  card.className = "card";
  card.innerHtml = `
  <p>${cardCount}
  </p>
  <button type="button" class ="btn-hello" data-number="${cardCount}">hi</button>`;

  const myCardNum = cardCounter; //클로저 문제 해결
  card.querySelector(".btn-hello").addEventListener("click", () => {
    console.log("hi" + myCardNum); //만약 엘리먼트를 다섯번 생성후 버튼 이벤트 실행하면 그 버튼번호가 나오는게 아니라 총 엘리먼트 갯수가 나온다 클로져 문제 해결을 위해선
  }); //vs
  document.querySelector(".cards").appendChild(card);
});

card.querySelector(".cards").addEventListener("click", (e) => {
  console.log(e.target.getAttribute("data-number"));
  if (e.target.matches(".btn-hello")) {
    console.log("btnclick", e.target.parentElement.children[0].innerText);
  } else {
    console.log("no btn");
  }
});

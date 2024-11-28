// HTML 요소 선택
let title = document.getElementById('title');
console.log(title);

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트', items[0]);
console.log('벤치프레스', items[1]);
console.log('데드리프트', items[2]);

let liList = document.getElementsByTagName('li');a
console.log(liList);

let h2 = document.querySelector('#title');
console.log('h2', h2);

let item = document.querySelector('.item');
console.log('query item', item);

let itemAll = document.querySelectorAll('.item');
console.log('query item all', itemAll);
console.log('query item 1', itemAll[0]);
console.log('query item 2', itemAll[1]);
console.log('query item 3', itemAll[2]);

// HTML 요소 속성 조작
title.textContent = '헬스 3대 운동';

// HTML 요소 스타일 수정
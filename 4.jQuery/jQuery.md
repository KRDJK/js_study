
## HTML 템플릿 유저 정의

1. VSCode 좌측 하단 톱니바퀴 클릭
2. 사용자 코드 조각 선택
3. html 검색 후 html.json 파일 열어서 주석 아래쪽 마지막 중괄호
    안 쪽에 아래 코드 복붙
```
    "korea html form" : {
      "scope": "html",
      "prefix": "!!",
      "body": [
         "<!DOCTYPE html>",
         "<html lang=\"ko\">",
         "<head>",
            "<meta charset=\"UTF-8\">",
            "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">",
            "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
            "<!-- RESET CSS -->",
            "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css\">",

            "<!-- jQuery cdn -->",
             "<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js\"></script>",

            "<title>$1</title>",
         "</head>",
         "<body>",
         "$2",
         "</body>",
         "</html>"
      ],
      "description": "html 자동완성 (한글페이지용)"
   }
```

==============================================
22.05.17 오후
# jQuery 문법으로 요소를 취득했으면 jQuery 문법으로 이벤트나 다른 어떤거든 이어나가야한다.. 흠..

제이쿼리는 자체적으로 defer 기능이 있다!!!!!!!!!!!!!!

# $(() => {});

# 바닐라 js로 가져왔으면 그대로 바닐라 문법..


# $('css선택자') => 이런 문법을 선택기라고 한다고?

!!! 유용한 점!!!
겹치는 애들은 다 배열로 가져오지만 바닐라 js에서처럼 그걸 찐배열로 바꿔서 반복문 돌릴 필요 없이 다이렉트로 일괄 적용할 수 있다!!

array라고 나오지 않으면 찐배열이 아님!!
============================

부모 노드 탐색

# 기준요소.parent();
## 기준요소의 바로 상위 부모 요소 하나만 잡힘.

# 기준요소.parents();
## 기준요소의 직속 부모뿐만 아니라 모든 조상 탐색.
### 바로 위의 직속 부모부터 순서대로 배열로 담김. 어디까지??  html까지!!

# .parentsUntil('태그 이름 또는 css 선택자');
## ('태그 이름 또는 css선택자') 까지의 자식들에게만 (미만 개념!!)


========================

후손 노드 탐색

# $('기준요소').children();
## 기준 요소의 모든 자식노드 탐색


# $('기준요소').children('.li2');
## 기준 요소의 자식노드 중 클래스 li2를 가진 요소 탐색.


직속 후손이 아닌 더 하위에 속한 노드 탐색
# $('기준요소').find('찾고자하는 후손 요소');

=======================


형제 노드 탐색

# $('h1').siblings(); ==>> h1을 기준으로 '본인을 제외한' 모든 형제들을 다 찾고자 할 때!!!


# $('h1').siblings('p'); ==>> h1을 기준으로 '본인을 제외한' 모든 형제들 중에서 p태그들만 찾을 때!!


# $('h1').next(); ==>> 다음 형제 하나만 가져올 때!!


# $('h1').nextAll(); ==>> 다음 형제들을 전부 가져올 때!!


# $('span').nextUntil('p'); // span의 다음 형제들 중에서 p 미만까지!!


# 이전 형제 한개: prev();, 모두: prevAll();, ~미만: prevUntil();



======================
필터링

# $('li').first().css('color', 'red');
## 모든 li들 중에 첫째에게만 css를 입혀라

# $('.fruits').children().last().css('background', 'orange');
## .furuits의 모든 자식 중 마지막 놈에게 css를 입혀라.


eq(index) : index는 0번부터 시작 
//차이점!!! :nth-child는 1번부터 시작이지만 얘는 0번.
# $('li').eq(1).css('font-style', 'italic');
## li 중 2번째 놈에게 css 입혀라.


filter(선택자) : 선택자에 해당하는 요소들
# $('li').filter('.red').css('font-size', '1.5em');


not(선택자) : 선택자에 해당하지 않는 요소들
# $('li').not('.red').css('border', '1px solid blue');



=====================
요소 추가

innerHTML 방식
# $ul.append('<li>item6</li>'); 


js 가상 dom 방식
# const $newLi = document.createElement('li');
# $newLi.textContent = ('item7');
끼워넣기만 다름.
# $ul.append($newLi);


맨 첫 위치에 자식요소 추가
# 부모요소.prepend('<li>item0</li>');


이전, 다음 형제 위치에 추가
# 기준요소.after('<li>next item</li>');
# 기준요소.before('<li>prev item</li>');


append, prepend, after, before: 여러 개 동시 추가 가능!!!

가상 dom을 활용하는 방식으로 하자!
# 그러면 마지막에 추가하기 전까지는 바닐라 방식으로 클래스, 속성들을 부여해야 할듯??


=====================

요소 제거

자식 요소 전부 제거
# 부모.empty();


특정 자식 요소 제거
# 부모.children().first().remove();
# $('li').last().remove();
ㄴ li들 다 모여라, 그 중에서 마지막 놈! 너 지워져.


전체 제거(자식 전부 제거랑은 다름)
# $('li').remove(); 
ㄴ li들 전체! 지워져라


li중 클래스 item이 들어간 요소 전체 삭제
# $('li').remove('.item'); // $('li.item').remove(); 같은 코드다



=========================

클래스 추가, 제거

클래스 추가
# $('h1').addClass('red');
여러 요소에 클래스 일괄 추가
# $('h1, p').addClass('big');

하나의 요소에 클래스 n개 일괄 추가
# $('p').addClass('circle center ...');



클래스 제거
# $('p').removeClass('big');

하나의 요소에 클래스 n개 일괄 제거
# $('p').removeClass('circle center ...');



클래스 토글 (있으면 제거, 없으면 추가)
# $('h1').toggleClass('red');


클래스 존재 여부 확인(논리값으로 반환)
# $('기준요소').hasClass('circle');
## 기준요소에 circle이란 클래스가 있냐??


인라인 스타일 조작
// $('h1').css('font-style', 'italic');
// $('h1').css('font-weight', 'nomal');
// $('h1').css('border', '2px dashed orange');


활용도 높음! )) 객체의 형태로 css 한번에 조작 가능.
```
$('h1').css({
'font-style': 'italic',
'font-weight': 'normal',
'border': '2px dashed orange'
});
```


css 속성 값 얻기
# const fontStyle = $('h1').css('font-style');
이러면 fontStyle에 italic이 반환됨.(기존에 폰트 스타일을 이탈릭으로 설정해놔서!)


텍스트 수정
# $('p').text(fontStyle);
이러면 p의 텍스트가 italic으로 수정됨.


텍스트 반환
# $('p').text();
이러면 p의 텍스트가 반환됨.


========================

속성 추가, 제거

속성 값 얻기
# $('#account').attr('id'); 
## id="account"인 요소의 속성 중 id 속성값을 가져와라


속성 값 변경
# $('#account').attr('type', 'email');
## id="account"인 요소의 속성 중 type 속성 값을 email로 바꿔라.


속성 값 추가
# $('#account').attr('title', '이메일을 입력해~');
## 기존에 없는 속성을 주면 됨.


속성 값 제거
# $('#account').removeAttr('title');


value 속성값 얻기
# $('#account').val();
응용
# $('p').text($('#account').val());


// html() : innerHTML
// text() : textContent, innerText
// val() : value


========================

이벤트 
(click, hide, change, keyup, show ... 매우 다양)

$('.box').mouseenter(function(e) {
    // this : 나 자신(self)
    // $('.box').css('border', '2px dashed blue');
    $(this).css('border', '2px dashed blue');
});

this는 '.box'를 말함.
근데 this를 쓰려면 화살표 함수일 때는 쓸 수 없음.


$('.box').mouseenter(function(e) {
    // this : 나 자신(self)
    // $('.box').css('border', '2px dashed blue');
    $(this).css('border', '2px dashed blue');
});


// 이벤트 타입 여러개 부여 
    $('.box').on({
        click: function(e) {
            $(this).css('transform', 'rotate(45deg)');
        },
        dblclick: function(e) {
            $(this).hide();
        },
        mouseleave: function(e) {
            $(this).css('border-radius', '50%');
        },
    });
});

======================================


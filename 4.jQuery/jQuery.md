
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


# 바닐라 js로 가져왔으면 그대로 바닐라 문법..


# $('css선택자') => 이런 문법을 선택기라고 한다고?


부모 노드 탐색
# .parentsUntil('태그 이름 또는 css 선택자');
## ('태그 이름 또는 css선택자') 까지의 자식들에게만 (미만 개념!!)


후손 노드 탐색
# $('기준요소').find('찾고자하는 후손 요소');


형제 노드 탐색
# $('h1').siblings(); ==>> h1의 모든 형제들을 다 찾고자 할 때!!!

# $('h1').siblings('p'); ==>> h1의 모든 형제들 중에서 p태그들만 찾을 때!!

# $('h1').next(); ==>> 다음 형제 하나만 가져올 때!!

# $('h1').nextAll(); ==>> 다음 형제들을 전부 가져올 때!!

# $('span').nextUntil('p'); // span의 다음 형제들 중에서 p 미만까지!!

# 이전 형제 한개: prev();, 모두: prevAll();, ~미만: prevUntil();


=========================================

필터링

# $('li').first().css('color', 'red');
## 모든 li들 중에 첫째에게만 css를 입혀라

# $('.fruits').children().last().css('background', 'orange');
## .furuits의 모든 자식(li) 중 마지막 놈에게 css를 입혀라.


eq(index) : index는 0번부터 시작 //차이점!!! :nth-child는 1번부터 시작이지만 얘는 0번.
# $('li').eq(1).css('font-style', 'italic');
## li 중 2번째 놈에게 css 입혀라.


filter(선택자) : 선택자에 해당하는 요소들
# $('li').filter('.red').css('font-size', '1.5em');

not(선택자) : 선택자에 해당하지 않는 요소들
# $('li').not('.red').css('border', '1px solid blue');




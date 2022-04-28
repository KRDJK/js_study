
// 객체의 중첩구조
// 예시: 웹사이트 게시판 데이터
var board = {
    totalCount: 2578, // 게시판의 총 게시물 수
    admin: 'abc1234', // 관리자 아이디
    page: 258, // 페이지 수 (한 페이지 당 게시글 10개가 보인다고 가정.)
    currentPage: 3, // 현재 위치한 페이지
    prev: false, // 이전 버튼 활성화 여부
    next: true, // 다음 버튼 활성화 여부
    articleList: [ // 게시물 목록들
        {
            bno: 792, // 글번호
            title: '제 3회 빅데이터 분석...', // 글 제목
            viewCount: 62836, // 조회수
            regDate: '2021, 10. 22', // 등록일
            content: '어쩌고 저쩌고...', // 글 내용
            writer: '관리자', // 등록회원이름
            recommand: 10, // 추천수
        },
        {
            bno: 791, // 글번호
            title: '제출 서류 및 일정', // 글 제목
            viewCount: 114186, // 조회수
            regDate: '2021, 10. 13', // 등록일
            content: '어쩌고 저쩌고123...', // 글 내용
            writer: '관리자', // 등록회원이름
            recommand: 21, // 추천수
        },
        {
            bno: 790, // 글번호
            title: '고사장 추가 안내', // 글 제목
            viewCount: 3691, // 조회수
            regDate: '2021, 10. 13', // 등록일
            content: '어쩌고 저쩌고456...', // 글 내용
            writer: '관리자', // 등록회원이름
            recommand: 2, // 추천수
        }    // 원래 객체 10개가 있어야 함. 게시물이 한 페이지에 10개가 들어가니까!! 근데 너무 많으니 3개만 했다.
    ], // 게시물 목록(배열)
};


// 이전버튼 활성화 여부 값을 얻어내보자.
console.log(board.prev);

// 게시물 목록 안의 게시물 개수
console.log(board.articleList.length);

// 2번째 게시물의 전체정보
console.log(board.articleList[1]);

// 1번째 게시물의 글제목
console.log(board.articleList[0].title);

// 모든 게시물의 조회수를 전부 출력.
for (var article of board.articleList) { // 3개의 객체들이 article에 담김.
    console.log(article.viewCount); // 그 객체 속 조회수를 추출해서 출력.
} // 중요!!!!
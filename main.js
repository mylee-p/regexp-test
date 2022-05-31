const str = `
010-1234-5678
fhffk123@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://local.com
동해물과 백수산이 마르고 닳도록
` 


console.log(
  str.match(/\w/g)
  )
  //영어 대소문자, 숫자, _ 를 검색.

  console.log(
    str.match(/\b/g)
    )
  //기본적인 63개 문자와 일치하지 않는 것.
  //소문자 t 앞쪽이 하나의 경계이고 @앞, 뒤로 경계, .앞, 뒤로 경계
  //com다음에도 경계를 하는 것이다.

  console.log(
    str.match(/\bf\w{1,}\b/g)
    )
  //63개의 문자가 한 개 이상인 것과 일치하는 것을 검색할 것이고
  //이것은 63개의 문자가 아닌 경계에서 시작을 해서 f라는 알파벳 단어로
  //시작하고 그 외에 63개 문자가 한 개 이상오는 연속 일치를 시킨 다음에
  //마지막에 63개의 문자가 아닌 경계에서 끝나는 일치내용을 전부 검색해라.
  //즉, 소문자 f로 시작하는 모든 영단어들을 찾는 내용.
  //출력내용 : ['fhffk123', 'frozen', 'fox']

  console.log(
    str.match(/\d/g)
    )
  //모든 숫자에 일치
  //['0', '1', '0', '1', '2', '3', '4', '5', 
  //'6', '7', '8', '1', '2', '3', '7', '0', 
  //'3', '5', '6', '0']

  console.log(
    str.match(/\d{1,}/g)
    )
  //숫자가 연속적으로 한 개 이상 일치하는 부분을 찾아라
  //['010', '1234', '5678', '123', '7035', '60']

  console.log(
    str.match(/\s/g)
    )
  //공백 문자 찾기
  //줄바꿈, 띄어쓰기 모두 출력 됨

  const h = `  the hello  world   !
  
  `
  console.log(
  h.match(/\s/g)
    )
  //문자 사이의 공백과 줄바꿈 부분이 모두 출력 됨.

  console.log(
    h.replace(/\s/g, '')
      )
  //공백 문자들이 전부다 ''비어있는 문자데이터로 들어가기 때문에 
  //사실 상 삭제되는 것을 볼 수 있다.
  //출력내용 : thehelloworld!
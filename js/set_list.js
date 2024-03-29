// 이미지를 꺼내서 보여줍니다.
const setImage = document.getElementsByClassName("set")

// 버튼 요소를 가져옵니다.
const myButton = document.getElementById('myButton');

// 이미지를 표시할 부모 컨테이너를 가져온다.
const imageContainer = document.querySelector('.setImage');

// 버튼 클릭 시 이벤트를 추가합니다.
myButton.addEventListener('click', function () {
    alert('버튼이 클릭되었습니다.');
    // localStorage에서 'st' 항목을 가져와서 파싱한다.
     const save = JSON.parse(localStorage.getItem('st'));
     console.log(save);

    // 이미지 컨테이너 내부를 비운다.
    // 이는 이전에 추가된 이미지가 있다면 제거하기 위함이다.
    imageContainer.innerHTML = '';

    //배열에 저장된 각 이미지 URL에 대해 반복한다.
    for(let i = 0; i < save.length; i++){
   
        // 새 이미지 요소를 생성한다.
        const img = document.createElement('img');
        img.src = save[i]; // 이미지 요소의 src 속성에 배열에서 가져온 이미지 URL을 설정한다.
        img.style.width = '100px' //필요에 따라 이미지 크기 (넓이)를 설정할 수 있다.
        img.style.height = '100px' //필요에 따라 이미지 크기 (높이)를 설정 할 수 있다.
        
        // 생성된 이미지 요소를 이미지 컨테이너에 추가해준다.
        imageContainer.appendChild(img);

        //이전에 민준이가 짜준 코드
        // localStorage에서 이미지 주소를 가져옵니다.
        // console.log(save[i]);
        // if (setImage[0]) { // HTMLCollection에서 첫 번째 요소가 존재하는지 확인합니다.
        //     setImage[0].src = save[i]; // 첫 번째 이미지의 src 속성을 설정합니다.
        // }
    }
});
// HTML에서 class가 "info"인 모든 요소를 가져온다.
const displayInfo = document.getElementsByClassName("info"); // HTMLCollection 반환
//HTML에서 id가 "myButton"이라는 요소를 가져온다.
const myButton = document.getElementById('myButton');

//"myButton"에 클릭 이벤트 리스너를 추가한다.
myButton.addEventListener('click', function () {

    //로컬 스토리지에서 'st'라는 키에 해당되는 값을 가져오고 값이 없다면 빈배열에 null (0) 값을 담아준다.
    const save_test = JSON.parse(localStorage.getItem('st')) || [] ;
    
    //save_test.length 값을 디버깅
    console.log(save_test.length);
    
    if (save_test.length > 0) { // 저장된 차량 정보 배열이 비어있지 않은지 확인0
        
        //저장된 차량 정보의 대한 배열을 순회하며 각각의 차량 정보를 화면에 표현한다.
        for (let i = 0; i < save_test.length; i++){
            const carInfo = save_test[i]; // 현재 저장된 차량의 정보를 가져온다.
            const carDiv = document.createElement('div'); //새로운 div 요소를 생성한다.
            carDiv.classList.add('car-div'); // 클래스를 추가하여 스타일을 적용한다.
            console.log(i) //i값 디버깅
            
            //차량의 정보를 화면에 표시한다.
            carDiv.innerHTML = `
            <img src="${carInfo.imageUrl}" alt="차량 이미지" style="width: 300px; height: 250px;">
            <p>ID: ${carInfo.id}</p>
            <p>고객명: ${carInfo.customer}</p>
            <p>차종: ${carInfo.carType}</p>
            <p>메시지: ${carInfo.message}</p>`;
            
            // 첫 번째 요소를 사용하거나, 필요에 따라 다른 로직을 적용
            const displayArea = displayInfo[0]; 
            
            // 지정된 displayArea에 차량 정보 추가한다.
            displayArea.appendChild(carDiv); 
        };
        //차량 정보를 화면에 표시한 뒤 'st' 라는 키에 해당되는 데이터를 제거한다.
        localStorage.removeItem('st');
    } else {
        //저장된 차량 정보 배열이 비어있을 경우 사용자에게 알림
        alert('저장된 차량 정보가 없습니다.'); 
    }
});
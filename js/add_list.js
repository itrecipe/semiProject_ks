const displayInfo = document.getElementsByClassName("info"); // HTMLCollection 반환
const myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
    const save_test = JSON.parse(localStorage.getItem('st')) ; // 로컬 스토리지에서 차량 정보 배열을 가져옵니다.
    
    console.log(save_test.length);
    const displayArea = displayInfo[0]; // 첫 번째 요소를 사용하거나, 필요에 따라 다른 로직을 적용

    if (save_test.length > 0) { // 저장된 차량 정보 배열이 비어있지 않은지 확인
        
        for (let i = 0; i < save_test.length; i++){ // forEach를 사용하여 배열을 순회
            const carInfo = save_test[i]; // Access the current carInfo object in the loop
            const carDiv = document.createElement('div');
            carDiv.classList.add('car-div'); // 클래스를 통한 스타일 적용
            console.log(i)
            carDiv.innerHTML = `
                <img src="${carInfo.imageUrl}" alt="차량 이미지" style="width: 300px; height: 250px;">
                <p>ID: ${carInfo.id}</p>
                <p>고객명: ${carInfo.customer}</p>
                <p>차종: ${carInfo.carType}</p>
                <p>메시지: ${carInfo.message}</p>`;
            
            displayArea.appendChild(carDiv); // 지정된 displayArea에 차량 정보 추가


        };

        localStorage.removeItem('st'); // 정보 표시 후 "st" 키에 해당하는 데이터를 제거
    } else {

        alert('저장된 차량 정보가 없습니다.'); // 저장된 차량 정보 배열이 비어있을 경우 사용자에게 알림
    }
});
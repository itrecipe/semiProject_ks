//HTML에서 요소들을 JS 변수로 참조하기 위해 querySelector 메서드를 사용하여 각 요소 선택
const inputId = document.querySelector('#inputId'); // ID 입력 요소
const inputPassword = document.querySelector('#inputPassword'); // Password 입력 요소
const inputCustomer = document.querySelector('#inputCustomer'); // Customer 입력 요소
const inputMessage = document.querySelector('#msg'); // Message 입력 요소
const inputCartype = document.querySelector('#carType'); // Car type 선택 요소
const carlist = document.querySelector('#car-list'); // Car list를 표시할 요소
const addButton = document.querySelector('#add-button'); // 추가 버튼
const image = document.querySelector('#image-register'); // 이미지 업로드 요소

//변수 초기화: inputId, inputPassword, inputCustomer, inputMessage, inputCartype, carlist, addButton, image: 
//각각의 변수는 HTML 요소를 JavaScript로 참조하기 위해 사용된다.
//JavaScript에서는 querySelector 메서드를 사용하여 HTML의 요소를 선택한다. 
//예를 들어, document.querySelector('#inputId')는 id가 "inputId"인 HTML 요소를 선택한다.

// keyCount 변수를 초기화하여 각 차량의 고유한 키 값을 추적합니다.
let keyCount = 0;

//차량의 정보를 저장할 배열
let carsArray = [];

// 이미지 업로드 및 미리보기 기능을 구현
const imageup = (file) => {
    const imageContainer = document.querySelector('.image'); //이미지를 표시해줄 컨테이너
    // 기존에 표시된 이미지를 제거
    imageContainer.innerHTML = '';
    // 새 이미지 요소 생성
    const image = document.createElement('img');
    image.src = URL.createObjectURL(file);
    image.style.width = '308px';
    image.style.height = '300px';
    // 이미지 컨테이너에 이미지 추가
    imageContainer.appendChild(image);
};

// 파일 입력 요소에 change 이벤트 리스너 추가
const fileInput = document.querySelector('#image-register');
fileInput.addEventListener('change', (event) => {
    // 파일이 선택되었을 때 이미지를 업로드
    const file = event.target.files[0];
    if (file) {
        imageup(file);
    }
});

//차량 정보를 추가하는 함수
const addCar = () => {

    // 새로운 차량 항목을 생성합니다.
    const item = document.createElement('div');

    // CSS 클래스를 추가하여 스타일을 적용합니다.
    item.classList.add('car-item');
    
    // 차량 정보 요소들을 생성합니다.
    const inputIdText = document.createElement('div');
    const inputPasswordText = document.createElement('div'); 
    const inputCustomerText = document.createElement('div');
    const inputMessageText = document.createElement('div');
    const inputCartypeText = document.createElement('div');
    const imageInput = document.createElement('img');

    // 차량의 고유한 키 값을 설정합니다.
    const key = keyCount;
    keyCount += 1;

    inputIdText.textContent = `ID: ${inputId.value}`;
    inputPasswordText.textContent = ` PW: ${inputPassword.value}`; 
    inputCustomerText.textContent = ` Customer name: ${inputCustomer.value}`;
    inputCartypeText.textContent = ` Car type: ${inputCartype.value}`;
    inputMessageText.textContent = ` Message: ${inputMessage.value}`;

    /* 생성된 요소들을 차량 항목에 추가합니다.
       createElement를 이용하여 appendChild로
       요소들을 상속 받는다.
    */
    item.appendChild(imageInput);
    item.appendChild(inputIdText);
    item.appendChild(inputPasswordText); 
    item.appendChild(inputCustomerText); 
    item.appendChild(inputMessageText); 
    item.appendChild(inputCartypeText);
    carlist.appendChild(item);

    // 이미지의 크기를 설정합니다.
    imageInput.style.width = '200px'; 
    imageInput.style.height = 'auto'; 
    
    /* 이미지 파일이 선택되었는지 확인하고, 선택된 경우 이미지를 표시합니다.
       차량 정보와 이미지 URL을 저장할 배열 초기화 */
    if(image.files.length > 0) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imageInput.src = imageUrl; // 이미지 미리보기 설정
        
        //차량 정보에 대한 객체를 생성한다.
        const carInfo = {
            id: inputId.value,
            customer: inputCustomer.value,
            carType: inputCartype.value,
            message: inputMessage.value,
            imageUrl: imageUrl, // 이미지 URL 사용
            key: keyCount++
        };
    
        //차량 정보에 대한 객체 값을 carsArray라는 배열(변수)에 삽입 한다.
        carsArray.push(carInfo);
        console.log(carsArray); //carsArray 값이 제대로 들어오는지 디버깅
    
        localStorage.setItem('st', JSON.stringify(carsArray)); // 차량 정보를 localStorage에 저장
        console.log(JSON.parse(localStorage.getItem('st')));
    }

}
// 추가 버튼을 클릭 때 addCar 함수를 호출합니다.
addButton.addEventListener('click', addCar);
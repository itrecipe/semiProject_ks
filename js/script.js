//변수 초기화: inputId, inputPassword, inputCustomer, inputMessage, inputCartype, carlist, addButton, image: 
//각각의 변수는 HTML 요소를 JavaScript로 참조하기 위해 사용된다.
//JavaScript에서는 querySelector 메서드를 사용하여 HTML의 요소를 선택한다. 
//예를 들어, document.querySelector('#inputId')는 id가 "inputId"인 HTML 요소를 선택한다.

//HTML에서 요소들을 JS 변수로 참조하기 위해 querySelector 메서드를 사용하여 각 요소 선택
const inputId = document.querySelector('#inputId'); // ID 입력 요소
const inputPassword = document.querySelector('#inputPassword'); // Password 입력 요소
const inputCustomer = document.querySelector('#inputCustomer'); // Customer 입력 요소
const inputMessage = document.querySelector('#msg'); // Message 입력 요소
const inputCartype = document.querySelector('#carType'); // Car type 선택 요소
const carlist = document.querySelector('#car-list'); // Car list를 표시할 요소
const addButton = document.querySelector('#add-button'); // 추가 버튼
const image = document.querySelector('#image-register'); // 이미지 업로드 요소

// keyCount 변수를 초기화하여 각 차량의 고유한 키 값을 추적합니다.
let keyCount = 0;

// 이미지 값을 담을 배열생성
let array = [];

const addCar = () => {

    // 새로운 차량 항목을 생성합니다.
    const item = document.createElement('div');

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

    // 생성된 요소들을 차량 항목에 추가합니다.
    item.appendChild(imageInput);
    item.appendChild(inputIdText);
    item.appendChild(inputPasswordText);
    item.appendChild(inputCustomerText);
    item.appendChild(inputMessageText);
    item.appendChild(inputCartypeText);
    carlist.appendChild(item);

    // CSS 클래스를 추가하여 스타일을 적용합니다.
    item.classList.add('car-item');

    //input에 입력한 값을 value 속성에 담아 inputText 요소에 뿌려주기
    // 사용자가 입력한 'ID' 값을 가져와서 'inputIdText' 요소의 텍스트 내용으로 설정합니다.
    inputIdText.textContent = `ID: ${inputId.value}`;
    // 사용자가 입력한 '비밀번호' 값을 가져와서 'inputPasswordText' 요소의 텍스트 내용으로 설정합니다.
    inputPasswordText.textContent = ` PW: ${inputPassword.value}`;
    // 사용자가 입력한 '고객 이름'을 가져와서 'inputCustomerText' 요소의 텍스트 내용으로 설정합니다.
    inputCustomerText.textContent = ` Customer name: ${inputCustomer.value}`;
    // 사용자가 입력한 '차량 종류'를 가져와서 'inputCartypeText' 요소의 텍스트 내용으로 설정합니다.
    inputCartypeText.textContent = ` Car type: ${inputCartype.value}`;
    // 사용자가 입력한 '메시지'를 가져와서 'inputMessageText' 요소의 텍스트 내용으로 설정합니다.
    inputMessageText.textContent = ` Message: ${inputMessage.value}`;

    // 이미지의 크기를 설정합니다.
    imageInput.style.width = '200px';
    imageInput.style.height = 'auto';

    // 이미지 등록하기
    if (image.files.length > 0) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imageInput.src = imageUrl;
        array = [...array,imageUrl]
        console.log(image.files[0].name)
        localStorage.st = JSON.stringify(array)
    }

    console.log(JSON.parse(localStorage.st))
}

addButton.addEventListener('click', addCar);


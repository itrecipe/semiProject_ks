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

const imageup = (file) => {
    const imageContainer = document.querySelector('.image');
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

    inputIdText.textContent = `ID: ${inputId.value}`; 
    inputPasswordText.textContent = ` PW: ${inputPassword.value}`; 
    inputCustomerText.textContent = ` Customer name: ${inputCustomer.value}`;
    inputCartypeText.textContent = ` Car type: ${inputCartype.value}`;
    inputMessageText.textContent = ` Message: ${inputMessage.value}`;

    // 이미지의 크기를 설정합니다.
    imageInput.style.width = '200px'; 
    imageInput.style.height = 'auto'; 
    
    // 이미지를 받을 배열을 생성
    let array = [];

    // 이미지 파일이 선택되었는지 확인하고, 선택된 경우 이미지를 표시합니다.
    if(image.files.length > 0) {
        const imageUrl = URL.createObjectURL(image.files[0]);
        imageInput.src = imageUrl;
        // array = imageUrl
        array = [...array,imageUrl]
        console.log(array);
        console.log(image.files[0].name)    
        localStorage.st = JSON.stringify(array)// array 배열에 있는 값을 add_list에게 넘겨주고 있다
    }

    console.log(JSON.parse(localStorage.st))    
};

// 추가 버튼을 클릭 때 addCar 함수를 호출합니다.
addButton.addEventListener('click', addCar);

function registerCarInfo(imageUrl, id, customerName, carType) {
    //로컬 스토리지에서 기존 차량 정보 배열을 불러온다.
    const carInfos = JSON.parse(localStorage.getItem('st')) || [];

        // 새 차량 정보 객체를 생성합니다.
        const newCarInfo = {
            imageUrl: imageUrl,
            id: id,
            customerName: customerName,
            carType: carType
        };
        
        // 배열에 새 차량 정보를 추가합니다.
        carInfos.push(newCarInfo);
        
        // 수정된 배열을 로컬 스토리지에 다시 저장합니다.
        localStorage.setItem('st', JSON.stringify(carInfos));
        console.log(newCarInfo);
    }


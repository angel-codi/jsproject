const detailsElements = document.querySelectorAll("details");
const navbar = document.querySelector('.navbar');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn')

// detailsElements.forEach(function(element) { // details의 토글을 open하였을 때 텍스트를 입력할 수 있는 창이 나오고 확인을 누르면 페이지를 새로고침하기 전까지 반영구적으로 저장
//     element.addEventListener("toggle", function(event){
//         if (event.target.open) {
//             const textArea = document.createElement("textarea");
//             element.appendChild(textArea);

//             const confirmButton = document.createElement("button");
//             confirmButton.textContent = "확인";
//             confirmButton.onclick = function() {
//                 textArea.setAttribute("disabled", true);
//                 confirmButton.style.display = "none";
//             };
//             element.appendChild(confirmButton);
//         } else {
//             element.querySelectorAll("textarea, button").forEach((el) => el.remove());
//         }
//     });
// });

window.addEventListener('resize', function() { // 화면에 표출되는 너비가 768px 미만일 때 navbar가 사라지고 sidebar를 표출함
    if (window.innerWidth < 768) {
        navbar.style.display = 'none';
        sidebar.classList.add('show-sidebar');
        sidebar.style.height = '100%';
        var detailsElements = document.querySelectorAll('details');
            detailsElements.forEach(function(element) {
            element.style.display = 'none';
        });
    } else {
        navbar.style.display = 'flex';
        sidebar.classList.remove('show-sidebar');
        var detailsElements = document.querySelectorAll('details');
            detailsElements.forEach(function(element) {
            element.style.display = 'block';
        });
        // 추가적인 스타일을 적용하려면 여기에 추가하세요
    }
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
});

document.addEventListener('keydown', function(event) { // sidebar가 활성화되었을때 키보드의 esc버튼을 누르면 sidebar를 닫음
    if (event.key === 'Escape') {
        sidebar.classList.remove('show-sidebar');
    }
});

const aboutMe = document.querySelector('a');

let allowMouseOver = true;

aboutMe.addEventListener('mouseover', function() {
    if (allowMouseOver) {
        sidebar.classList.add('show-sidebar');
        sidebar.style.width = '100%';
        sidebar.style.height = '100%';
        allowMouseOver = false;

        setTimeout(function() {
            allowMouseOver = true;
        }, 1500); // mouseover이벤트가 1500밀리초마다 인식하도록 하여 closeBtn을 수행한 뒤에 바로 이벤트가 발생되는 것을 방지
    }
});

document.addEventListener('click', function(event) {
    const isClickInside = sidebar.contains(event.target);
    if (!isClickInside) {
        sidebar.classList.remove('show-sidebar');
    }
});










// JavaScript Document
function initViewMoreRedirect() {
    if (window.__bmiViewMoreBound) return;
    window.__bmiViewMoreBound = true;

    document.addEventListener('click', function (event) {
        const button = event.target.closest('.view-more-btn');
        if (!button) return;

        event.preventDefault();
        event.stopPropagation();
        window.location.href = 'dangky.html';
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initViewMoreRedirect);
} else {
    initViewMoreRedirect();
}

function calculateBMI() {
    const heightCm = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultBox = document.getElementById('result');
    document.getElementById("placeholder").style.display = "none";

    const viewMoreButton = document.getElementById('viewMoreButton');
    const dietViewMoreButton = document.getElementById('dietViewMoreButton');
    if (viewMoreButton) viewMoreButton.classList.add('hidden');
    if (dietViewMoreButton) dietViewMoreButton.classList.add('hidden');

    // Kiểm tra tính hợp lệ của dữ liệu nhập vào
    if (!heightCm || !weight || heightCm <= 0 || weight <= 0) {
        alert("Vui lòng nhập chiều cao và cân nặng hợp lệ!");
        return;
    }

    // Đổi chiều cao từ cm sang mét để tính toán
    const heightM = heightCm / 100;
    // Công thức tính BMI = Cân nặng / (Chiều cao * Chiều cao)
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    document.getElementById('bmi-num').innerText = bmi;
    
    let status = "";
    let color = "";
    let diet = "";
    let exercise = "";

    // Phân loại BMI theo chuẩn dành cho người châu Á (IDI&WPRO)
    if (bmi < 18.5) {
        status = "Gầy (Thiếu cân)";
        color = "var(--primary-color)";
        diet = "Bổ sung thêm các thực phẩm giàu calo, protein (thịt, cá, trứng, sữa) và các loại hạt. Chia làm nhiều bữa nhỏ trong ngày (5-6 bữa) để dễ hấp thu.";
        exercise = "Tập các bài tập kháng lực như nâng tạ, squats để kích thích cơ bắp phát triển. Hạn chế các bài tập cardio tiêu hao quá nhiều calo như chạy bộ đường dài.";
    } else if (bmi >= 18.5 && bmi < 23) {
        status = "Bình thường (Cân đối)";
        color = "var(--success-color)";
        diet = "Duy trì chế độ ăn cân bằng, đầy đủ chất xơ từ rau củ, vitamin từ trái cây, protein vừa đủ và hạn chế đồ ăn nhanh, nhiều dầu mỡ.";
        exercise = "Duy trì tập thể dục ít nhất 30 phút mỗi ngày, 5 ngày một tuần. Kết hợp giữa cardio (chạy bộ, đạp xe, bơi) và tập cơ (gym, yoga) để giữ cơ thể săn chắc.";
    } else if (bmi >= 23 && bmi < 25) {
        status = "Thừa cân";
        color = "var(--warning-color)";
        diet = "Cắt giảm nhẹ lượng tinh bột xấu (cơm trắng, bánh mì) và đường. Tăng cường ăn rau xanh, uống nước lọc trước bữa ăn để giảm cảm giác thèm ăn.";
        exercise = "Tăng cường các bài tập Cardio, HIIT hoặc nhảy dây để đốt cháy calo. Tập thêm các bài cơ bụng, mông đùi để hạn chế tích tụ mỡ thừa.";
    } else {
        status = "Béo phì";
        color = "var(--danger-color)";
        diet = "Cắt giảm lượng calo nạp vào nghiêm ngặt. Tránh tuyệt đối nước ngọt, đồ chiên rán, đồ ngọt. Tập trung ăn nhiều rau, ức gà, các loại cá và uống đủ nước.";
        exercise = "Bắt đầu bằng các bài tập nhẹ nhàng tránh áp lực lên xương khớp như đi bộ nhanh, đạp xe nhẹ hoặc bơi lội. Khi cơ thể quen dần, hãy nâng dần cường độ tập luyện.";
    }

    // Cập nhật giao diện kết quả
    const statusSpan = document.getElementById('bmi-text');
    statusSpan.innerText = status;
    statusSpan.style.color = color;
    resultBox.style.borderLeftColor = color;
    
    document.getElementById('diet-advice').innerText = diet;
    document.getElementById('exercise-advice').innerText = exercise;

    if (dietViewMoreButton) {
        dietViewMoreButton.dataset.target = 'thucdon.html';
        dietViewMoreButton.classList.remove('hidden');
    }

    const categoryMap = {
        underweight: 'bulking',
        normal: 'simple',
        overweight: 'weightloss',
        obese: 'weightloss'
    };

    const categoryKey = categoryMap[status.toLowerCase().includes('gầy') ? 'underweight' :
        status.toLowerCase().includes('cân đối') ? 'normal' :
        status.toLowerCase().includes('thừa cân') ? 'overweight' :
        status.toLowerCase().includes('béo phì') ? 'obese' : 'simple'];

    if (viewMoreButton && categoryKey) {
        viewMoreButton.dataset.target = `tapluyen.html?category=${categoryKey}`;
        viewMoreButton.classList.remove('hidden');
    }

    // Hiển thị khung kết quả
    resultBox.style.display = 'block';
}

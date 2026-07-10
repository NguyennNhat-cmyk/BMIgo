const exerciseCategories = {
    simple: {
        title: 'Các bài tập đơn giản tại nhà',
        description: 'Bài tập nhẹ nhàng, sử dụng sức của cơ thể, phù hợp cho người mới bắt đầu và các buổi rèn luyện cơ bản.',
        exercises: [
            {
                name: 'Jumping Jacks',
                image: 'hinhanh/1.png',
                rep: '3 hiệp x 20 lần'
            },
            {
                name: 'Bodyweight Squats',
                image: 'hinhanh/2.png',
                rep: '3 hiệp x 15 lần'
            },
            {
                name: 'Plank',
                image: 'hinhanh/3.png',
                rep: '3 hiệp x 30 giây'
            },
            {
                name: 'Glute Bridge',
                image: 'hinhanh/4.png',
                rep: '3 hiệp x 15 lần'
            }
        ]
    },
    advanced: {
        title: 'Các bài tập nâng cao',
        description: 'Bài tập nâng cao giúp tăng sức mạnh, độ bền và cải thiện khả năng vận động tổng thể.',
        exercises: [
            {
                name: 'Burpees',
                image: 'hinhanh/5.png',
                rep: '4 hiệp x 12 lần'
            },
            {
                name: 'Walking Lunges',
                image: 'hinhanh/6.png',
                rep: '4 hiệp x 16 lần'
            },
            {
                name: 'Pike Push-ups',
                image: 'hinhanh/7.png',
                rep: '4 hiệp x 10 lần'
            },
            {
                name: 'Mountain Climbers',
                image: 'hinhanh/8.png',
                rep: '4 hiệp x 30 giây'
            }
        ]
    },
    weightloss: {
        title: 'Các bài tập nếu bạn muốn giảm cân',
        description: 'Bài tập tập trung đốt mỡ, tăng nhịp tim và giúp bạn giảm cân hiệu quả khi duy trì đều đặn.',
        exercises: [
            {
                name: 'HIIT Jumping Jacks',
                image: 'hinhanh/1.png',
                rep: '4 hiệp x 30 giây'
            },
            {
                name: 'High Knees',
                image: 'hinhanh/9.png',
                rep: '4 hiệp x 25 lần'
            },
            {
                name: 'Squat Jumps',
                image: 'hinhanh/10.png',
                rep: '4 hiệp x 15 lần'
            },
            {
                name: 'Shadow Boxing',
                image: 'hinhanh/11.png',
                rep: '4 hiệp x 40 giây'
            }
        ]
    },
    bulking: {
        title: 'Các bài tập nếu bạn muốn tăng cơ',
        description: 'Bài tập kháng lực và trọng lượng cơ thể phù hợp để xây dựng cơ bắp và tăng sức mạnh.',
        exercises: [
            {
                name: 'Push-ups',
                image: 'hinhanh/12.png',
                rep: '4 hiệp x 12 lần'
            },
            {
                name: 'Bulgarian Split Squats',
                image: 'hinhanh/13.png',
                rep: '4 hiệp x 10 lần mỗi chân'
            },
            {
                name: 'Dumbbell Rows',
                image: 'hinhanh/14.png',
                rep: '4 hiệp x 12 lần'
            },
            {
                name: 'Plank to Push-up',
                image: 'hinhanh/15.png',
                rep: '4 hiệp x 10 lần'
            }
        ]
    }
};

function setPopupContent(categoryKey) {
    const category = exerciseCategories[categoryKey];
    if (!category) {
        return;
    }

    const titleElement = document.getElementById('popupTitle');
    const descriptionElement = document.getElementById('popupDescription');
    const exercisesContainer = document.getElementById('popupExercises');

    titleElement.textContent = category.title;
    descriptionElement.textContent = category.description;
    exercisesContainer.innerHTML = category.exercises.map(exercise => {
        return `
            <div class="exercise-item">
                <img class="exercise-thumb" src="${exercise.image}" alt="${exercise.name}">
                <div class="exercise-detail">
                    <h4>${exercise.name}</h4>
                    <p>${exercise.rep}</p>
                </div>
            </div>
        `;
    }).join('');
}

function togglePopup(show, categoryKey) {
    const overlay = document.getElementById('exercisePopup');
    const pageWrapper = document.querySelector('.page-wrapper');

    if (show) {
        setPopupContent(categoryKey);
        overlay.classList.remove('hidden');
        pageWrapper.classList.add('popup-open');
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.add('hidden');
        pageWrapper.classList.remove('popup-open');
        document.body.style.overflow = '';
    }
}

function openExercisePopup(categoryKey) {
    if (!exerciseCategories[categoryKey]) {
        return;
    }
    togglePopup(true, categoryKey);
}

function closeExercisePopup() {
    togglePopup(false);
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.category-button').forEach(button => {
        button.addEventListener('click', () => {
            openExercisePopup(button.dataset.category);
        });
    });

    document.getElementById('popupClose').addEventListener('click', closeExercisePopup);

    document.getElementById('exercisePopup').addEventListener('click', function (event) {
        if (event.target === this) {
            closeExercisePopup();
        }
    });

    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    if (category) {
        openExercisePopup(category);
    }
});

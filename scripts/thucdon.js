const recipeCategories = {
    goodBody: {
        title: 'Các món ngon tốt cho cơ thể và dễ làm',
        description: 'Các món ăn nhẹ nhàng, dễ thực hiện và cân bằng giữa hương vị với dinh dưỡng.',
        dishes: [
            {
                id: 'salad-ga',
                name: 'Salad gà rau củ',
                subtitle: 'Salad giàu protein và vitamin.',
                image: 'hinhanh/salad-ga.jpg',
                info: 'Ức gà nướng, rau sống, cà chua và dầu ô liu.',
                ingredients: 'Ức gà, xà lách, cà chua bi, dưa leo, cà rốt, dầu ô liu, chanh, mật ong, tiêu.',
                preparation: 'Nướng ức gà rồi xé nhỏ. Rửa sạch và cắt rau củ. Trộn đều với sốt dầu ô liu và chanh.',
                cooking: 'Nướng ức gà trong 25 phút ở 180°C đến khi vàng.',
                time: 'Thời gian: 35 phút',
                recipe: 'Trộn ức gà nướng xé, cà chua bi, dưa leo, cà rốt và xà lách. Tăng hương vị bằng dầu ô liu nguyên chất, chanh, mật ong và chút tiêu đen.',
                macros: ['Protein: 28g', 'Carbs: 14g', 'Fat: 13g']
            },
            {
                id: 'smoothie-chuoi',
                name: 'Smoothie chuối hạnh nhân',
                subtitle: 'Giải pháp nhanh gọn cho bữa sáng.',
                image: 'hinhanh/smoothie-chuoi.jpg',
                info: 'Sinh tố giàu năng lượng với chuối và sữa hạt.',
                ingredients: 'Chuối, sữa hạnh nhân, yến mạch, hạt chia, mật ong, đá.',
                preparation: 'Bóc vỏ chuối và cho tất cả nguyên liệu vào máy xay. Xay đến khi mịn.',
                cooking: 'Không cần nấu, chỉ xay đá và nguyên liệu.',
                time: 'Thời gian: 10 phút',
                recipe: 'Xay chuối chín, sữa hạnh nhân không đường, yến mạch nguyên cám, hạt chia và một chút mật ong. Thêm đá và xay đến khi mịn mềm.',
                macros: ['Protein: 11g', 'Carbs: 38g', 'Fat: 9g']
            },
            {
                id: 'pho-cuon-ga',
                name: 'Phở cuốn gà xanh',
                subtitle: 'Món cuộn tươi mát, ít dầu mỡ.',
                image: 'hinhanh/pho-cuon-ga.jpg',
                info: 'Gà luộc, rau sống và bánh phở trong một cuộn gọn nhẹ.',
                ingredients: 'Ức gà, bánh phở, xà lách, rau thơm, giá, chanh, tỏi, ớt.',
                preparation: 'Luộc gà, xé nhỏ. Rửa rau sạch. Cuộn đều trên bánh phở.',
                cooking: 'Luộc gà và trụng bánh phở trong 5 phút.',
                time: 'Thời gian: 25 phút',
                recipe: 'Cuộn ức gà luộc xé, rau thơm, xà lách và giá vào bánh phở mỏng. Chấm với nước mắm chua ngọt nhẹ, tỏi, ớt và chanh.',
                macros: ['Protein: 24g', 'Carbs: 22g', 'Fat: 7g']
            },
            {
                id: 'bun-ga-suong',
                name: 'Bún gà sụn',
                subtitle: 'Món ăn cân bằng giữa đạm và rau xanh.',
                image: 'hinhanh/bun-ga-suong.jpg',
                info: 'Bún tươi, sụn gà giòn và rau sống tươi mát.',
                ingredients: 'Sụn gà, bún tươi,măng tươi hoặc măng khô, xà lách, hành lá, giá, hành phi, chanh.',
                preparation: 'Nấu nước dùng gà, chần bún và chuẩn bị rau. Trộn gà và sụn với nước dùng.',
                cooking: ' Xào măng riêng với nêm nếm vừa ăn, sau đó cho vào nồi nước dùng đun nhỏ lửa cho măng ngấm vị, Hầm sụn gà trong 30 phút để nước dùng ngọt.',
                time: 'Thời gian: 45 phút',
                recipe: 'Nấu sụn gà với nước dùng thanh, cho bún tươi, ức gà xé, rau sống và hành phi ít dầu. Rưới thêm nước dùng nóng và chanh.',
                macros: ['Protein: 26g', 'Carbs: 30g', 'Fat: 10g']
            },
            {
                id: 'canh-rau-thom',
                name: 'Canh rau thơm',
                subtitle: 'Canh nhẹ, nhiều vitamin và khoáng chất.',
                image: 'hinhanh/canh-rau-thom.jpg',
                info: 'Canh rau củ thanh mát, thích hợp bữa chính nhẹ.',
                ingredients: 'Rau cải, rau ngót, nấm rơm (thịt heo bằm hoặc tôm bằm), hành tím, hành ngò.',
                preparation: 'Rửa sạch rau củ và cắt miếng vừa ăn. Đun sôi nước và cho rau vào.',
                cooking: 'Đun sôi trong 10-15 phút đến khi rau chín mềm.',
                time: 'Thời gian: 20 phút',
                recipe: 'Luộc rau cải, rau ngót và cà rốt với nấm rơm. Nêm gia vị nhẹ và thêm chút hành ngò.',
                macros: ['Protein: 6g', 'Carbs: 10g', 'Fat: 2g']
            }
        ]
    },
    weightLoss: {
        title: 'Các món dành cho người cần giảm cân',
        description: 'Món ít calo, giàu chất xơ và protein để hỗ trợ quá trình giảm cân bền vững.',
        dishes: [
            {
                id: 'ca-hap-gung',
                name: 'Cá hấp gừng',
                subtitle: 'Món seafood thanh đạm và ít dầu.',
                image: 'hinhanh/ca-hap-gung.jpg',
                info: 'Cá hấp mềm, thơm gừng, ít calo và giàu protein.',
                ingredients: 'Cá fillet, gừng, hành lá, muối, tiêu, chanh.',
                preparation: 'Ướp cá với gừng, hành lá, muối và tiêu. Bọc cá bằng lá chuối nếu có.',
                cooking: 'Hấp cá trong 12-15 phút đến khi thịt chín đều.',
                time: 'Thời gian: 20 phút',
                recipe: 'Hấp cá fillet với lát gừng, hành lá và chút muối. Dùng kèm rau muống luộc và nước mắm chanh tỏi nhẹ.',
                macros: ['Protein: 30g', 'Carbs: 3g', 'Fat: 6g']
            },
            {
                id: 'yen-mach-hoa-qua',
                name: 'Yến mạch hoa quả',
                subtitle: 'Bữa sáng no lâu, ít calo.',
                image: 'hinhanh/yen-mach-hoa-qua.jpg',
                info: 'Yến mạch kết hợp trái cây tươi và hạt chia, tuyệt vời cho giảm cân.',
                ingredients: 'Yến mạch, sữa hạt, dâu tây, chuối, việt quất, hạt chia, hạnh nhân.',
                preparation: 'Ngâm yến mạch với sữa hạt qua đêm; thêm trái cây trước khi ăn.',
                cooking: 'Không cần nấu, chỉ ngâm và trộn.',
                time: 'Thời gian: 10 phút (hoa quả) + ngâm qua đêm',
                recipe: 'Ngâm yến mạch qua đêm với sữa hạt, thêm dâu tây, việt quất, chuối và hạt chia. Rắc thêm hạt hạnh nhân để tăng chất béo tốt.',
                macros: ['Protein: 13g', 'Carbs: 42g', 'Fat: 10g']
            },
            {
                id: 'ga-luoc-bong-cai',
                name: 'Gà luộc kèm bông cải',
                subtitle: 'Đơn giản, sạch và giàu đạm.',
                image: 'hinhanh/ga-luoc.jpg',
                info: 'Ức gà luộc ăn cùng bông cải xanh và sốt dầu ô liu.',
                ingredients: 'Ức gà, bông cải, dầu ô liu, chanh, muối, tiêu.',
                preparation: 'Luộc gà và bông cải, chờ nguội rồi thái miếng vừa ăn.',
                cooking: 'Luộc gà 20 phút, bông cải 5-7 phút.',
                time: 'Thời gian: 30 phút',
                recipe: 'Luộc ức gà và bông cải xanh, dùng với sốt chanh dầu olive và chút muối tiêu. Kết hợp thêm dưa leo và cà chua bi.',
                macros: ['Protein: 32g', 'Carbs: 10g', 'Fat: 7g']
            },
            {
                id: 'salad-dau-phu',
                name: 'Salad đậu phụ',
                subtitle: 'Nguồn đạm thực vật thanh nhẹ.',
                image: 'hinhanh/salad-dau-phu.jpg',
                info: 'Đậu phụ non, rau sống và sốt vừng chanh.',
                ingredients: 'Đậu phụ non, xà lách, cà chua, dưa leo, sốt vừng.',
                preparation: 'Áp chảo đậu phụ, trộn cùng rau sống và sốt vừng.',
                cooking: 'Áp chảo đậu phụ trong 3-4 phút mỗi mặt.',
                time: 'Thời gian: 20 phút',
                recipe: 'Trộn đậu phụ non áp chảo, rau xà lách, cà chua và rau mùi với nước sốt vừng chanh. Thêm hạt hướng dương để tăng giòn.',
                macros: ['Protein: 18g', 'Carbs: 14g', 'Fat: 12g']
            },
            {
                id: 'soup-cai-xanh',
                name: 'Soup cải xanh',
                subtitle: 'Canh soup nhẹ, nhiều chất xơ.',
                image: 'hinhanh/soup-cai-xanh.jpg',
                info: 'Soup cải xanh thơm nhẹ, dễ tiêu và ít năng lượng.',
                ingredients: 'Cải xanh, bông cải, hành tây, nước dùng gà, sữa tươi.',
                preparation: 'Xay cải xanh và nấm, đun với nước dùng rồi nêm nếm.',
                cooking: 'Đun 15 phút cho đến khi canh sánh mịn.',
                time: 'Thời gian: 25 phút',
                recipe: 'Xay nhuyễn cải xanh, bông cải và hành tây, nấu với nước dùng gà nhạt. Nêm muối tiêu và một ít sữa tươi không đường.',
                macros: ['Protein: 9g', 'Carbs: 12g', 'Fat: 5g']
            }
        ]
    },
    muscleGain: {
        title: 'Các món dành cho người muốn tăng cơ',
        description: 'Bữa ăn giàu protein và carbo để phục hồi cơ bắp sau luyện tập.',
        dishes: [
            {
                id: 'uc-ga-nuong',
                name: 'Ức gà nướng mật ong',
                subtitle: 'Thịt gà đậm đà, giàu đạm.',
                image: 'hinhanh/uc-ga-nuong.jpg',
                info: 'Ức gà nướng mật ong mềm ngon, giàu protein.',
                ingredients: 'Ức gà, mật ong, tỏi, nước tương ít muối, tiêu.',
                preparation: 'Ướp ức gà 30 phút rồi nướng đến khi chín vàng.',
                cooking: 'Nướng ở 180°C trong 25-30 phút.',
                time: 'Thời gian: 40 phút',
                recipe: 'Ướp ức gà với mật ong, tỏi băm, nước tương ít muối và tiêu trong 30 phút. Nướng ở 180°C cho đến khi chín mềm và lớp ngoài hơi caramel.',
                macros: ['Protein: 38g', 'Carbs: 18g', 'Fat: 10g']
            },
            {
                id: 'com-gao-lut-trung',
                name: 'Cơm gạo lứt trứng',
                subtitle: 'Bữa ăn cân bằng và giàu năng lượng.',
                image: 'hinhanh/com-gao-lut.jpg',
                info: 'Cơm gạo lứt kết hợp trứng và rau củ giàu carbs tốt.',
                ingredients: 'Gạo lứt, trứng, cà rốt, bắp non, hành lá, nước tương.',
                preparation: 'Nấu gạo lứt, xào rau củ và trứng, trộn chung.',
                cooking: 'Nấu cơm gạo lứt và xào trứng, rau trong 10 phút.',
                time: 'Thời gian: 40 phút',
                recipe: 'Nấu cơm gạo lứt, xào cùng cà rốt, bắp non và trứng. Thêm chút nước tương và hành lá để dậy mùi.',
                macros: ['Protein: 22g', 'Carbs: 48g', 'Fat: 13g']
            },
            {
                id: 'sinh-to-protein',
                name: 'Sinh tố protein',
                subtitle: 'Bổ sung dinh dưỡng sau tập.',
                image: 'hinhanh/sinh-to-protein.jpg',
                info: 'Sinh tố giàu đạm và carbs, giúp phục hồi cơ bắp.',
                ingredients: 'Bột protein, sữa tách béo, chuối, hạt chia, bơ đậu phộng.',
                preparation: 'Cho tất cả nguyên liệu vào máy xay và xay mịn.',
                cooking: 'Không cần nấu, chỉ xay.',
                time: 'Thời gian: 10 phút',
                recipe: 'Xay bột protein vị vani với sữa tách béo, chuối và hạt chia. Thêm một ít bơ đậu phộng để tăng chất béo tốt.',
                macros: ['Protein: 32g', 'Carbs: 26g', 'Fat: 13g']
            },
            {
                id: 'steak-bo',
                name: 'Steak bò áp chảo',
                subtitle: 'Protein cao, giàu sắt và kẽm.',
                image: 'hinhanh/steak-bo.jpg',
                info: 'Steak bò nạc chín vừa, ăn cùng khoai lang và rau cải.',
                ingredients: 'Thịt bò, khoai lang, cải bó xôi, tỏi, muối, tiêu.',
                preparation: 'Ướp bò với muối tiêu. Nướng khoai lang và chần cải.',
                cooking: 'Áp chảo bò 6-8 phút mỗi mặt.',
                time: 'Thời gian: 35 phút',
                recipe: 'Áp chảo miếng bò nạc vừa chín tới, nêm muối tiêu và tỏi. Dùng kèm khoai lang nướng và rau cải hấp.',
                macros: ['Protein: 42g', 'Carbs: 24g', 'Fat: 18g']
            },
            {
                id: 'canh-dau-xanh',
                name: 'Canh đậu xanh thịt băm',
                subtitle: 'Giàu dinh dưỡng và giúp phục hồi.',
                image: 'hinhanh/canh-dau-xanh.jpg',
                info: 'Canh đậu xanh ngọt thơm, có thịt băm (hoặc tôm băm) và rau củ.',
                ingredients: 'Đậu xanh, thịt bò băm, cà rốt, hành lá, nước dùng.',
                preparation: 'Ngâm đậu xanh, băm nhỏ thịt và thái rau củ.',
                cooking: 'Ninh đậu xanh và thịt trong 30 phút.',
                time: 'Thời gian: 45 phút',
                recipe: 'Nấu đậu xanh với thịt bò băm, cà rốt và hành lá. Nêm gia vị nhạt để giữ cân bằng dinh dưỡng.',
                macros: ['Protein: 27g', 'Carbs: 18g', 'Fat: 9g']
            }
        ]
    },
    weeklyHighlight: {
        title: 'Các món ăn nổi bật trong tuần',
        description: 'Những món ngon đặc sắc, bổ dưỡng và dễ làm trong tuần này.',
        dishes: [
            {
                id: 'bun-chay',
                name: 'Bún chay',
                subtitle: 'Món chay thanh đạm mà vẫn đầy đặn.',
                image: 'hinhanh/bun-chay.jpg',
                info: 'Bún chay thanh mát với nhiều loại rau và đậu hũ.',
                ingredients: 'Bún, nấm, đậu hũ, cà rốt, cải thảo, rau thơm, lạc rang.',
                preparation: 'Nấu nước dùng chay, chuẩn bị rau sống và bún.',
                cooking: 'Nấu nước dùng khoảng 20 phút cho ngọt.',
                time: 'Thời gian: 35 phút',
                recipe: 'Chuẩn bị nước dùng chay từ nấm, cà rốt và cải thảo, sau đó chan lên bún, rau sống và đậu hũ chiên giòn.',
                macros: ['Protein: 18g', 'Carbs: 38g', 'Fat: 12g']
            },
            {
                id: 'sup-bi-do',
                name: 'Súp bí đỏ',
                subtitle: 'Súp mịn ấm bụng, giàu vitamin.',
                image: 'hinhanh/sup-bi-do.jpg',
                info: 'Súp bí đỏ sánh mịn, ngon ấm bụng và giàu vitamin.',
                ingredients: 'Bí đỏ, khoai tây, hành tây, sữa tươi, hạt bí.',
                preparation: 'Nấu bí đỏ và khoai tây mềm, xay nhuyễn, thêm sữa.',
                cooking: 'Đun 20 phút đến khi bí chín mềm, sau đó xay.',
                time: 'Thời gian: 30 phút',
                recipe: 'Nấu bí đỏ với khoai tây, hành tây và sữa tươi, sau đó xay nhuyễn và nêm gia vị. Trang trí với hạt bí nướng.',
                macros: ['Protein: 9g', 'Carbs: 26g', 'Fat: 11g']
            },
            {
                id: 'sua-chua-trai-cay',
                name: 'Sữa chua trái cây',
                subtitle: 'Tráng miệng mát lạnh, giàu lợi khuẩn.',
                image: 'hinhanh/	sua-chua-trai-cay.jpg',
                info: 'Sữa chua không đường kết hợp trái cây tươi và hạt dinh dưỡng.',
                ingredients: 'Sữa chua không đường, chuối, dâu tây, việt quất, hạt óc chó.',
                preparation: 'Cắt trái cây và trộn cùng sữa chua. Thêm mật ong nếu thích.',
                cooking: 'Không cần nấu, chỉ chế biến lạnh.',
                time: 'Thời gian: 10 phút',
                recipe: 'Kết hợp sữa chua không đường với mọc trái cây tươi, hạt óc chó và một ít mật ong. Dùng lạnh để tăng cảm giác sảng khoái.',
                macros: ['Protein: 12g', 'Carbs: 24g', 'Fat: 10g']
            },
            {
                id: 'mi-quang-chay',
                name: 'Mì Quảng chay',
                subtitle: 'Phiên bản nhẹ nhàng của món đặc sản.',
                image: 'hinhanh/mi-quang-chay.jpg',
                info: 'Mì Quảng chay với nước dùng thanh và rau thơm.',
                ingredients: 'Mì Quảng, nấm, đậu hũ, lạc rang, rau sống, nước dùng chay.',
                preparation: 'Chuẩn bị nước dùng chay và xào đậu hũ. Bày mì và rau lên tô.',
                cooking: 'Nấu nước dùng khoảng 20 phút, xào đậu hũ 5 phút.',
                time: 'Thời gian: 30 phút',
                recipe: 'Chuẩn bị mì Quảng với nước dùng nấm, bún, rau sống, đậu hũ chiên và lạc rang. Nêm nhẹ để giữ vị thanh.',
                macros: ['Protein: 14g', 'Carbs: 44g', 'Fat: 13g']
            },
            {
                id: 'banh-mi-chay',
                name: 'Bánh mì chay hoa quả',
                subtitle: 'Bữa ăn sáng dễ làm và tươi mới.',
                image: 'hinhanh/banh-mi-chay.jpg',
                info: 'Bánh mì nguyên cám kẹp trái cây và bơ hạt.',
                ingredients: 'Bánh mì nguyên cám, bơ hạt, chuối, dâu tây, hạt chia, xà lách.',
                preparation: 'Bôi bơ hạt lên bánh mì, xếp trái cây và rau vào giữa.',
                cooking: 'Không cần nấu, chỉ cắt và xếp.',
                time: 'Thời gian: 10 phút',
                recipe: 'Kẹp bánh mì nguyên cám với bơ hạt, lát chuối, dâu tây và hạt chia. Thêm rau xà lách để cân bằng hương vị.',
                macros: ['Protein: 10g', 'Carbs: 36g', 'Fat: 14g']
            }
        ]
    }
};

const categoryOverlay = document.getElementById('categoryOverlay');
const dishOverlay = document.getElementById('dishOverlay');
const categoryTitle = document.getElementById('categoryTitle');
const categoryDescription = document.getElementById('categoryDescription');
const dishGrid = document.getElementById('dishGrid');
const dishTitle = document.getElementById('dishTitle');
const dishSubtitle = document.getElementById('dishSubtitle');
const dishImage = document.getElementById('dishImage');
const dishIngredients = document.getElementById('dishIngredients');
const dishPrep = document.getElementById('dishPrep');
const dishCooking = document.getElementById('dishCooking');
const dishTime = document.getElementById('dishTime');
const dishMacros = document.getElementById('dishMacros');
const closeCategoryOverlay = document.getElementById('closeCategoryOverlay');
const closeDishOverlay = document.getElementById('closeDishOverlay');

function createCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card) => {
        card.addEventListener('click', () => {
            const key = card.dataset.category;
            openCategoryOverlay(key);
        });
    });
}

function openCategoryOverlay(categoryKey) {
    const category = recipeCategories[categoryKey];
    if (!category) {
        return;
    }

    categoryTitle.textContent = category.title;
    categoryDescription.textContent = category.description;
    dishGrid.innerHTML = '';

    category.dishes.forEach((dish) => {
        const dishCard = document.createElement('article');
        dishCard.className = 'dish-card';
        dishCard.tabIndex = 0;
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}">
            <div class="dish-card-body">
                <h3 class="dish-card-title">${dish.name}</h3>
                <p class="dish-card-text">${dish.subtitle}</p>
                <p class="dish-card-text"><strong>Thông tin:</strong> ${dish.info}</p>
            </div>
        `;
        dishCard.addEventListener('click', () => openDishOverlay(categoryKey, dish.id));
        dishGrid.appendChild(dishCard);
    });

    document.body.classList.add('modal-active');
    categoryOverlay.classList.add('active');
}

function closeCategoryModal() {
    document.body.classList.remove('modal-active');
    categoryOverlay.classList.remove('active');
}

function openDishOverlay(categoryKey, dishId) {
    const category = recipeCategories[categoryKey];
    if (!category) {
        return;
    }
    const dish = category.dishes.find((item) => item.id === dishId);
    if (!dish) {
        return;
    }

    dishTitle.textContent = dish.name;
    dishSubtitle.textContent = dish.subtitle;
    dishImage.src = dish.image;
    dishImage.alt = dish.name;
    dishIngredients.textContent = dish.ingredients || '';
    dishPrep.textContent = dish.preparation || '';
    dishCooking.textContent = dish.cooking || '';
    dishTime.textContent = dish.time || '';
    dishMacros.innerHTML = dish.macros.map((value) => `<li>${value}</li>`).join('');

    dishOverlay.classList.add('active');
}

function closeDishModal() {
    dishOverlay.classList.remove('active');
}

closeCategoryOverlay.addEventListener('click', closeCategoryModal);
closeDishOverlay.addEventListener('click', closeDishModal);

categoryOverlay.addEventListener('click', (event) => {
    if (event.target === categoryOverlay) {
        closeCategoryModal();
    }
});

dishOverlay.addEventListener('click', (event) => {
    if (event.target === dishOverlay) {
        closeDishModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeDishModal();
        closeCategoryModal();
    }
});

window.addEventListener('DOMContentLoaded', createCategoryCards);

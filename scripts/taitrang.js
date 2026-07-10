function toggleChat() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.style.display = (chatWindow.style.display === 'none' || chatWindow.style.display === '') ? 'flex' : 'none';
            scrollToBottom();
        }

        function handleKeyPress(e) {
            if (e.key === 'Enter') sendMessage();
        }

        function sendMessage() {
            const input = document.getElementById('userInput');
            const text = input.value.trim();
            if (!text) return;

            appendMessage(text, 'user');
            input.value = '';

            setTimeout(() => { processBotResponse(text); }, 600);
        }

        function selectOption(optionText) {
            appendMessage(optionText, 'user');
            setTimeout(() => { processBotResponse(optionText); }, 500);
        }

        function appendMessage(text, sender) {
            const messagesContainer = document.getElementById('chatMessages');
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('msg', sender);
            msgDiv.innerHTML = text; 
            messagesContainer.appendChild(msgDiv);
            scrollToBottom();
        }

        function scrollToBottom() {
            const messagesContainer = document.getElementById('chatMessages');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        // HỆ THỐNG XỬ LÝ PHẢN HỒI THÔNG MINH
        function processBotResponse(userInput) {
            const lowerInput = userInput.toLowerCase();

            // 1. PHẢN HỒI KHI NGƯỜI DÙNG PHÀN NÀN (Mẹo không hiệu quả / Tập mãi không giảm...)
            if (
                lowerInput.includes('không hiệu quả') || 
                lowerInput.includes('ko hiệu quả') || 
                lowerInput.includes('không có tác dụng') || 
                lowerInput.includes('áp dụng mãi không') || 
                lowerInput.includes('tại sao sử dụng mẹo') || 
                lowerInput.includes('tập mãi không') || 
                lowerInput.includes('vẫn béo') || 
                lowerInput.includes('vẫn gầy')
            ) {
                const response = `❤️ Tôi rất tiếc khi nghe điều này và hiểu sự thất vọng của bạn. Cơ địa, trạng thái cơ bắp và tốc độ chuyển hóa của mỗi người hoàn toàn khác nhau. Một bài tập hay chế độ ăn đại trà đôi khi không thể kích hoạt cơ thể bạn hiệu quả.<br><br>
                Để tránh lãng phí thời gian cũng như hạn chế chấn thương, <b>tôi đề xuất bạn nên thảo luận trực tiếp với Đội ngũ HLV / Nhân viên y tế của chúng tôi</b> để được kiểm tra chuyên sâu và thiết kế lộ trình riêng.<br><br>
                👇 Bạn hãy bấm nút bên dưới để kết nối ngay nhé: <br>
                <a href="https://zalo.me/your-link" target="_blank" class="contact-btn">📞 Gặp Nhân Viên Tư Vấn (Miễn Phí)</a>`;
                
                appendMessage(response, "bot");
                showGeneralMenu();
                return;
            }

            // 2. MẸO TẬP LUYỆN
            if (lowerInput.includes('tập luyện') || lowerInput.includes('bài tập') || lowerInput.includes('thể dục') || lowerInput.includes('tập gym')) {
                const response = `🏋️ <b>Mẹo tập luyện tối ưu hóa vóc dáng:</b><br><br>
                🔥 <b>Nếu mục tiêu là Giảm mỡ:</b> Hãy kết hợp 70% các bài tập <i>Cardio/HIIT</i> (chạy bộ, nhảy dây, đạp xe) để đốt calo nhanh và 30% bài tập tạ để giữ cơ, tránh nhão da.<br><br>
                💪 <b>Nếu mục tiêu là Tăng cân/Tăng cơ:</b> Tập trung vào các bài tập <i>Kháng lực</i> (Squat, Push-up, tập tạ nâng dần khối lượng) kết hợp nghỉ ngơi 48 tiếng giữa các nhóm cơ để cơ bắp có thời gian phát triển.<br><br>
                ⏱️ <b>Thời gian lý tưởng:</b> Duy trì tối thiểu 3-4 buổi/tuần, mỗi buổi từ 45 - 60 phút. Đừng quên khởi động kỹ 5-10 phút trước khi tập!`;
                
                appendMessage(response, "bot");
                showGeneralMenu();
                return;
            }
// 4. XỬ LÝ CÁC TỪ KHÓA KHÁC
            // Thay đổi hành động khi nhắn chữ "bmi" hoặc "tính" -> Trả ra ô bấm chuyển trang
            if (lowerInput.includes('bmi') || lowerInput.includes('tính')) {
                const response = `📊 Để tính toán chỉ số BMI một cách chính xác nhất và xem biểu đồ phân tích, bạn vui lòng sử dụng công cụ chuyên sâu tại trang riêng của chúng tôi nhé.<br><br>
                👇 Hãy nhấn vào nút bên dưới để chuyển hướng:<br>
                <a href="duong-dan-trang-tinh-bmi-cua-ban.html" target="_blank" class="contact-btn"">📊 Đi Đến Trang Tính BMI</a>`;
                
                appendMessage(response, "bot");
                showGeneralMenu();
            } else if (lowerInput.includes('dinh dưỡng') || lowerInput.includes('ăn') || lowerInput.includes('giảm cân') || lowerInput.includes('tăng cân')) {
                appendMessage("🥗 <b>Mẹo dinh dưỡng cốt lõi:</b><br>1. Giảm cân: Hãy tạo thâm hụt calo (calo nạp < calo tiêu thụ). Ăn nhiều protein và rau xanh.<br>2. Tăng cân: Ăn dư thừa calo, chia nhỏ thành 5-6 bữa một ngày.<br>3. Hãy uống tối thiểu 2 lít nước mỗi ngày để hỗ trợ trao đổi chất.", "bot");
                showGeneralMenu();
			} else if (lowerInput.includes('mẹo') || lowerInput.includes('giảm cân') || lowerInput.includes('tăng cân')) {
                appendMessage("🥗 <b>Mẹo cốt lõi:</b><br>1. Kiểm soát calo nạp vào so với calo tiêu thụ.<br>2. Ngủ đủ giấc từ 7-8 tiếng để hormone cân bằng.<br>3. Uống đủ nước.<br><i>Nếu đã thử những điều này mà cân nặng không đổi, hãy cho tôi biết!</i>", "bot");
                showGeneralMenu();
            } else if (lowerInput.includes('chào') || lowerInput.includes('hi')) {
                appendMessage("Xin chào! Tôi có thể hỗ trợ gì về chỉ số cơ thể, mẹo dinh dưỡng hay bài tập tập luyện hôm nay?", "bot");
                showGeneralMenu();
            } else {
                appendMessage("Tôi chưa hiểu rõ câu hỏi này. Bạn vui lòng chọn các tính năng hỗ trợ có sẵn bên dưới nhé!", "bot");
                showGeneralMenu();
            }
        }

        // MENU GỢI Ý CHUNG XUẤT HIỆN Ở CUỐI
        function showGeneralMenu() {
            setTimeout(() => {
                // Sửa nút Tính BMI trong menu gợi ý thành mở trực tiếp link sang trang mới
                const menuHtml = `<div class="chat-options">
                    <a href="duong-dan-trang-tinh-bmi-cua-ban.html" target="_blank" class="opt-btn" style="display: inline-block; text-decoration: none; text-align: center;">📊 Tính BMI</a>
                    <button class="opt-btn" onclick="selectOption('Mẹo tập luyện')">🏋️ Mẹo tập luyện</button>
					<button class="opt-btn" onclick="selectOption('Mẹo kiểm soát cân nặng')">🥗 Mẹo kiểm soát cân nặng</button>
                    <button class="opt-btn" onclick="selectOption('Tại sao áp dụng không hiệu quả?')">❓Mẹo không hiệu quả?</button>
                </div>`;
                const messagesContainer = document.getElementById('chatMessages');
                
                const menuDiv = document.createElement('div');
                menuDiv.style.alignSelf = "flex-start";
                menuDiv.innerHTML = menuHtml;
                messagesContainer.appendChild(menuDiv);
                scrollToBottom();
            }, 1000);
        }
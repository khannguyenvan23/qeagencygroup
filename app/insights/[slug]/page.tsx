import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../SiteFooter";
import { SiteHeader } from "../../SiteHeader";
import { insights } from "../../data/site";
import { articleJsonLd, createMetadata } from "../../seo";

const funnelFirstArticle = {
  title: "Vì sao marketing nên bắt đầu từ phễu, không phải kênh?",
  excerpt:
    "Chọn kênh trước khi hiểu phễu giống như chọn phương tiện di chuyển trước khi biết mình đi đâu.",
  summary:
    "Kênh marketing chỉ là công cụ phân phối. Phễu marketing mới là bản đồ giúp doanh nghiệp hiểu khách hàng đang ở đâu trong hành trình mua, mất khách tại điểm nào và nên đầu tư nội dung, ngân sách, kênh phân phối ra sao.",
  sections: [
    {
      id: "kenh-la-cong-cu-pheu-la-chien-luoc",
      title: "Kênh là công cụ. Phễu là chiến lược.",
      body: [
        "Khi bắt đầu làm marketing, câu hỏi đầu tiên hầu hết mọi người đặt ra là: “Mình nên chạy kênh nào?” Facebook? TikTok? Zalo OA? Google Ads? Đây là câu hỏi tự nhiên, nhưng lại là câu hỏi sai thứ tự. Chọn kênh trước khi hiểu phễu giống như chọn phương tiện di chuyển trước khi biết mình đi đâu.",
        "Kênh marketing là nơi bạn tiếp cận khách hàng: mạng xã hội, công cụ tìm kiếm, email, video, bảng hiệu, truyền miệng. Phễu marketing là hành trình mà một người xa lạ đi qua để trở thành khách hàng trung thành, từ lúc chưa biết bạn là ai đến lúc họ mua hàng và giới thiệu người khác.",
        "Phễu thường có ba tầng cơ bản: tầng trên là nhận thức, nơi khách hàng tiềm năng lần đầu biết đến bạn; tầng giữa là cân nhắc, nơi họ tìm hiểu, so sánh và đặt câu hỏi; tầng dưới là quyết định, nơi họ mua hàng, ký hợp đồng hoặc liên hệ.",
        "Mỗi tầng phễu cần một loại nội dung và hành động khác nhau. Kênh chỉ là phương tiện để đưa nội dung đó đến đúng người, đúng lúc. Vậy mà hầu hết doanh nghiệp nhỏ, đặc biệt trong lĩnh vực nông nghiệp và thương mại truyền thống, lại làm ngược: chọn kênh trước, rồi mới loay hoay tìm nội dung để đổ vào.",
      ],
    },
    {
      id: "cai-bay-chon-kenh-truoc",
      title: "Cái bẫy chọn kênh trước",
      body: [
        "Một chủ doanh nghiệp quyết định làm TikTok vì thấy đối thủ đang đăng clip và có nhiều lượt xem. Họ thuê người quay, dựng video, đăng đều đặn. Nhưng sau ba tháng, lượt xem có, đơn hàng không tăng. Tại sao?",
        "Vì TikTok giỏi tạo nhận thức, tức tầng trên của phễu. Nhưng nếu không có bước tiếp theo, không có nơi để khách hàng tiềm năng tìm hiểu thêm, không có cách để họ liên hệ dễ dàng, không có lý do để họ tin tưởng và mua ngay, thì lưu lượng từ TikTok chỉ là khách qua đường, không phải khách vào nhà.",
        "Ngược lại, một doanh nghiệp hiểu phễu sẽ đặt câu hỏi khác: “Hiện tại mình đang mất khách ở đâu?” Nếu ít người biết đến thương hiệu, cần làm nội dung tầng trên. Nếu có người quan tâm nhưng không chốt, cần làm nội dung tầng giữa: giải thích rõ sản phẩm, minh bạch giá, nêu điểm khác biệt. Nếu đã mua nhưng không mua lại, cần chiến lược chăm sóc sau bán và xây dựng lòng trung thành.",
        "Câu trả lời cho mỗi điểm nghẽn đó sẽ quyết định bạn nên dùng kênh gì, chứ không phải ngược lại.",
      ],
    },
    {
      id: "pheu-giup-khong-lang-phi-ngan-sach",
      title: "Phễu giúp bạn không lãng phí ngân sách",
      body: [
        "Nguồn lực của doanh nghiệp vừa và nhỏ luôn có giới hạn. Không thể làm tất cả các kênh cùng lúc, không thể thử nghiệm mãi mà không có định hướng. Phễu giúp bạn phân bổ ngân sách đúng chỗ.",
        "Ví dụ, một doanh nghiệp kinh doanh lúa gạo ở miền Tây có lợi thế là giá tốt và chất lượng ổn định, nhưng ít ai biết đến ngoài khu vực. Vấn đề nằm ở tầng trên: nhận thức. Thay vì đổ tiền vào Google Ads nhắm đến người đã có ý định mua ở tầng dưới, việc đúng hơn là xây dựng nội dung kể chuyện thương hiệu, chia sẻ quy trình, nêu bật điểm khác biệt để tạo nhận thức và niềm tin trước.",
        "Khi phễu đã rõ, kênh phù hợp như Facebook, Zalo, blog hoặc YouTube ngắn sẽ tự nhiên hiện ra.",
      ],
    },
    {
      id: "pheu-la-ban-do-hanh-trinh-khach-hang",
      title: "Phễu không phải lý thuyết, nó là bản đồ hành trình khách hàng",
      body: [
        "Nhiều người nghe “phễu marketing” tưởng đây là khái niệm học thuật, chỉ dùng trong công ty lớn. Thực ra, phễu chính là cách bạn nhìn khách hàng như một con người đang đi một hành trình, chứ không phải một mục tiêu để bắn quảng cáo.",
        "Hành trình đó có thể ngắn, như mua nước giải khát nhìn thấy là lấy, hoặc rất dài, như mua máy sấy nông sản phải tìm hiểu nhiều tuần. Tùy hành trình đó dài hay ngắn, bạn cần thiết kế nội dung và điểm chạm khác nhau. Và mỗi điểm chạm đó mới là lúc bạn chọn kênh phù hợp.",
      ],
    },
    {
      id: "bat-dau-tu-dau",
      title: "Vậy nên bắt đầu từ đâu?",
      body: [
        "Trước khi nghĩ đến kênh, hãy trả lời ba câu hỏi.",
        "Một là khách hàng của mình là ai, và họ đang ở đâu trong hành trình mua hàng? Họ đã biết đến sản phẩm loại này chưa? Họ đang so sánh mình với ai? Điều gì khiến họ chưa mua?",
        "Hai là điểm nghẽn lớn nhất trong hành trình khách hàng hiện tại là gì? Ít người biết đến? Biết rồi nhưng không tin? Tin rồi nhưng chưa có lý do đủ mạnh để mua ngay?",
        "Ba là sau khi khách mua, mình có kế hoạch gì để họ quay lại và giới thiệu thêm? Phễu không kết thúc ở lần mua đầu tiên.",
        "Khi đã có câu trả lời, bạn sẽ biết mình cần nội dung gì, rồi mới cần kênh nào để phân phối nội dung đó. Thứ tự đó, phễu trước, kênh sau, là sự khác biệt giữa marketing có chiến lược và marketing chỉ để cho có.",
      ],
    },
    {
      id: "ket",
      title: "Kết",
      body: [
        "Kênh thay đổi theo từng năm. TikTok hôm nay bùng nổ, năm sau có thể nhạt dần. Thuật toán Facebook thay đổi liên tục. Nhưng hành trình tâm lý của khách hàng, từ không biết, đến biết, đến tin, đến mua, thì không thay đổi.",
        "Doanh nghiệp nào hiểu phễu sẽ thích nghi được với bất kỳ kênh nào. Doanh nghiệp nào chỉ chạy theo kênh sẽ mãi bị cuốn theo mà không biết mình đang đi về đâu.",
        "Bắt đầu từ phễu. Kênh chỉ là hệ quả.",
      ],
    },
  ],
  takeaways: [
    "Đừng bắt đầu bằng câu hỏi nên chạy kênh nào; hãy bắt đầu bằng khách hàng đang ở tầng nào của phễu.",
    "Mỗi tầng phễu cần nội dung, điểm chạm và hành động khác nhau.",
    "Kênh phù hợp chỉ xuất hiện rõ khi doanh nghiệp biết điểm nghẽn lớn nhất trong hành trình khách hàng.",
  ],
};

const landingPageArticle = {
  title: "Landing page chuyển đổi tốt cần đo những chỉ số nào?",
  excerpt:
    "Bạn đã kéo được người vào landing page, nhưng đơn hàng vẫn lác đác. Câu trả lời nằm trong dữ liệu, nhưng không phải chỉ số nào cũng quan trọng như nhau.",
  summary:
    "Theo dõi landing page không phải để làm đẹp báo cáo, mà để biết chính xác khách đang rơi ở đâu: vào trang rồi thoát, đọc nhưng không bấm CTA, bắt đầu điền form nhưng không hoàn thành, hay traffic đến từ nguồn không có ý định mua.",
  sections: [
    {
      id: "conversion-rate",
      title: "1. Tỷ lệ chuyển đổi (Conversion Rate - CVR)",
      body: [
        "Đây là chỉ số trung tâm của mọi landing page. Tỷ lệ chuyển đổi bằng số người thực hiện hành động mục tiêu, như mua hàng, điền form, nhắn tin hoặc đăng ký, chia cho tổng số người truy cập trang.",
        "Ví dụ: 500 người vào trang, 25 người để lại thông tin thì CVR là 5%.",
        "CVR bao nhiêu là tốt? Không có con số tuyệt đối, vì còn tùy ngành, tùy sản phẩm và tùy nguồn traffic. Nhưng thông thường, landing page bán hàng trực tiếp đạt 1-3% đã là ổn; landing page thu thập lead có thể đặt mục tiêu 5-15%; landing page sản phẩm nông nghiệp B2B hoặc giá trị cao dưới 3% vẫn có thể chấp nhận được nếu giá trị đơn hàng lớn.",
        "CVR thấp là dấu hiệu có gì đó đang cản khách hàng hành động: thông điệp chưa rõ, nút CTA chưa đủ thuyết phục, hoặc trang tải chậm.",
      ],
    },
    {
      id: "bounce-rate",
      title: "2. Tỷ lệ thoát (Bounce Rate)",
      body: [
        "Bounce rate là tỷ lệ người vào trang rồi thoát ra ngay mà không tương tác gì. Họ không cuộn, không bấm, không đọc, chỉ vào rồi đi.",
        "Bounce rate cao, trên 70-80%, thường cho thấy một trong hai vấn đề. Một là không khớp kỳ vọng: quảng cáo hứa một thứ, trang lại nói thứ khác. Hai là trang tải chậm hoặc hiển thị kém trên điện thoại, khiến khách chưa kịp đọc gì đã bỏ đi.",
        "Bounce rate cần đọc cùng với thời gian trên trang. Nếu bounce rate cao nhưng thời gian trung bình trên trang lại dài, ví dụ 3-4 phút, rất có thể khách đang đọc kỹ nhưng Google Analytics chỉ đếm một lần truy cập. Đó không hẳn là vấn đề. Ngược lại, bounce rate cao kèm thời gian dưới 10 giây là dấu hiệu trang cần xem lại ngay.",
      ],
    },
    {
      id: "time-on-page",
      title: "3. Thời gian trên trang (Time on Page)",
      body: [
        "Chỉ số này phản ánh mức độ thu hút của nội dung. Khách ở lại bao lâu trước khi rời đi hoặc hành động?",
        "Với landing page dạng ngắn, dưới 500 chữ, chủ yếu hình ảnh và CTA, thời gian lý tưởng thường từ 30 giây đến 2 phút. Với landing page dạng dài, có giải thích sản phẩm, câu chuyện thương hiệu hoặc FAQ, thời gian từ 2-5 phút cho thấy khách đang thực sự đọc và cân nhắc.",
        "Nếu thời gian trên trang quá ngắn so với độ dài nội dung, trang của bạn chưa đủ hấp dẫn để giữ người đọc.",
      ],
    },
    {
      id: "scroll-depth",
      title: "4. Độ cuộn trang (Scroll Depth)",
      body: [
        "Khách hàng có đọc đến phần CTA phía dưới không, hay họ chỉ nhìn phần đầu rồi thoát?",
        "Scroll depth đo tỷ lệ người cuộn đến 25%, 50%, 75% hoặc 100% chiều dài trang. Đây là chỉ số cực kỳ quan trọng với landing page dài.",
        "Nếu 80% khách dừng lại ở phần 50% đầu trang, nghĩa là phần dưới đang bị bỏ qua gần như hoàn toàn. Cần xem lại nội dung phần giữa có đủ hấp dẫn để kéo người đọc tiếp không, hoặc có nên đưa CTA lên cao hơn không.",
        "Công cụ như Hotjar hoặc Microsoft Clarity cho phép xem scroll heatmap, tức bản đồ nhiệt cho thấy khách dừng lại ở đâu nhiều nhất.",
      ],
    },
    {
      id: "cta-click-rate",
      title: "5. Tỷ lệ nhấp vào CTA (CTA Click-Through Rate)",
      body: [
        "CTA là nút hành động như “Liên hệ ngay”, “Nhận báo giá”, “Đặt hàng” hoặc “Nhắn tin Zalo”. Click-through rate của CTA bằng số lần nhấp chia cho số người thấy nút đó.",
        "Nếu CTA click rate thấp dù khách đang đọc trang, nghĩa là thông điệp trên nút chưa đủ thuyết phục, hoặc vị trí nút chưa tự nhiên trong hành trình đọc.",
        "Một vài điều cần kiểm tra: nút CTA có nổi bật về màu sắc không, ngôn ngữ trên nút có rõ ràng và cụ thể không, nút CTA có xuất hiện đủ vị trí không, đặc biệt sau mỗi khối nội dung quan trọng.",
        "Ví dụ, “Nhận báo giá miễn phí” thường rõ hơn nhiều so với chỉ viết “Gửi”.",
      ],
    },
    {
      id: "form-completion-rate",
      title: "6. Tỷ lệ hoàn thành form (Form Completion Rate)",
      body: [
        "Nếu landing page dùng form thu thập thông tin, cần theo dõi riêng: bao nhiêu người bắt đầu điền form và bao nhiêu người thực sự hoàn thành.",
        "Form completion rate thấp thường do form quá dài, yêu cầu thông tin nhạy cảm quá sớm, hoặc giao diện form trên điện thoại bị lỗi.",
        "Nguyên tắc đơn giản: chỉ hỏi những gì thực sự cần thiết ở bước đó. Với lần đầu tiên, tên và số điện thoại thường đã đủ.",
      ],
    },
    {
      id: "traffic-source-cvr",
      title: "7. Nguồn traffic và CVR theo từng nguồn",
      body: [
        "Không phải tất cả traffic đều như nhau. Người đến từ Facebook Ads, Google Search, Zalo hay giới thiệu bạn bè có mức độ tin tưởng và ý định mua khác nhau.",
        "Tách CVR theo từng nguồn traffic giúp bạn biết kênh nào đang mang về khách thực sự quan tâm, kênh nào chỉ mang về lượt xem vô nghĩa.",
        "Ví dụ, traffic từ Google tìm kiếm từ khóa có ý định mua cao như “mua lúa giá tốt Long An” thường chuyển đổi tốt hơn nhiều so với traffic từ một bài đăng Facebook tiếp cận rộng. Biết điều này, bạn sẽ phân bổ ngân sách đúng hơn.",
      ],
    },
    {
      id: "cost-per-conversion",
      title: "8. Chi phí mỗi chuyển đổi (Cost Per Conversion)",
      body: [
        "Cuối cùng, mọi chỉ số đều phải quy về bài toán kinh tế: tốn bao nhiêu tiền để có một khách hàng hoặc một lead?",
        "Cost per conversion bằng tổng chi phí quảng cáo chia cho số lượng chuyển đổi. Đây là chỉ số quyết định landing page có đáng tiếp tục đầu tư hay không.",
        "CVR 3% nghe có vẻ thấp, nhưng nếu mỗi chuyển đổi mang về đơn hàng 50 triệu đồng thì vẫn rất hiệu quả. Ngược lại, CVR 10% nhưng chi phí mỗi lead quá cao so với giá trị sản phẩm thì cần xem lại toàn bộ chiến lược.",
      ],
    },
    {
      id: "ket",
      title: "Kết",
      body: [
        "Theo dõi landing page không phải để nhìn cho đẹp báo cáo, mà để biết chính xác mình đang mất khách ở đâu và sửa đúng chỗ.",
        "Hãy bắt đầu với bốn chỉ số nền tảng: CVR, Bounce Rate, Scroll Depth và Cost per Conversion. Khi đã nắm vững bốn chỉ số này, các chỉ số còn lại sẽ tự nhiên có ý nghĩa hơn.",
        "Dữ liệu không thay thế được trực giác, nhưng dữ liệu giúp trực giác đúng hơn rất nhiều.",
      ],
    },
  ],
  takeaways: [
    "CVR cho biết landing page có tạo được hành động mục tiêu hay không.",
    "Bounce Rate, Time on Page và Scroll Depth giúp tìm nơi khách đang rơi khỏi trang.",
    "Cost per Conversion mới là chỉ số cuối cùng quyết định landing page có đáng tiếp tục đầu tư.",
  ],
};

const paidAdsRoiArticle = {
  title: "Tối ưu ROI quảng cáo: khi nào nên scale ngân sách?",
  excerpt:
    "Chạy quảng cáo có lãi là một chuyện. Biết khi nào nên tăng ngân sách để lãi nhiều hơn lại là chuyện khác hoàn toàn.",
  summary:
    "Scale ngân sách không nên dựa vào cảm giác. Trước khi tăng tiền quảng cáo, doanh nghiệp cần hiểu ROI thực, kiểm tra độ ổn định của chiến dịch, ngưỡng CPA/CPL có lãi và khả năng chuyển đổi của landing page.",
  sections: [
    {
      id: "hieu-roi-thuc-su",
      title: "Trước khi scale: hiểu ROI thực sự của mình",
      body: [
        "ROI trong quảng cáo thường bị đọc sai. Nhiều người nhìn vào ROAS, tức doanh thu chia cho chi phí quảng cáo, rồi kết luận chiến dịch đang tốt. Nhưng ROAS 3x không có nghĩa là bạn đang có lãi nếu biên lợi nhuận sản phẩm chỉ 20%, còn chi phí vận hành, nhân sự và hoàn hàng chưa được tính vào.",
        "ROI thực bằng lợi nhuận gộp từ đơn hàng quảng cáo mang về, trừ chi phí quảng cáo, rồi chia cho chi phí quảng cáo.",
        "Ví dụ: chi 10 triệu quảng cáo, thu về 40 triệu doanh thu, biên lợi nhuận gộp 30% thì lợi nhuận gộp là 12 triệu. ROI = (12 - 10) / 10 = 20%. Tức là cứ 10 đồng bỏ ra, lãi thêm 2 đồng, chưa kể chi phí vận hành khác.",
        "Bạn cần biết con số này trước khi nghĩ đến việc scale. Nếu ROI thực đang âm hoặc gần bằng 0, tăng ngân sách chỉ là tăng tốc độ thua lỗ.",
      ],
    },
    {
      id: "chien-dich-on-dinh",
      title: "Dấu hiệu 1: chiến dịch đã ổn định ít nhất 7-14 ngày",
      body: [
        "Quảng cáo Facebook, Google hay TikTok đều có giai đoạn học, khi thuật toán đang thử nghiệm để tìm ra tệp người dùng phản hồi tốt nhất. Trong giai đoạn này, kết quả thường không ổn định: hôm nay tốt, ngày mai tệ, ngày kia tốt lại.",
        "Nếu scale ngân sách trong giai đoạn học, bạn đang đổ tiền vào một chiến dịch chưa tìm được điểm cân bằng. Thuật toán có thể phải học lại với ngân sách mới, vừa tốn kém vừa rủi ro.",
        "Dấu hiệu chiến dịch đã qua giai đoạn học gồm: số lượt chuyển đổi mỗi ngày tương đối đều, không dao động quá 30-40%; chi phí mỗi chuyển đổi ổn định qua ít nhất 5-7 ngày liên tiếp; tệp khán giả không còn bị chồng chéo hoặc thu hẹp bất thường.",
        "Khi thấy ba điều này, đó là tín hiệu đầu tiên cho phép nghĩ đến scale.",
      ],
    },
    {
      id: "cpa-cpl-co-lai",
      title: "Dấu hiệu 2: CPL hoặc CPA đang nằm trong ngưỡng có lãi",
      body: [
        "Chi phí mỗi lead (CPL) hoặc chi phí mỗi đơn hàng (CPA) là chỉ số quan trọng nhất để quyết định scale.",
        "Cách tính ngưỡng tối đa có thể chấp nhận: ngưỡng CPA tối đa bằng giá trị đơn hàng trung bình nhân với biên lợi nhuận gộp, rồi trừ chi phí vận hành mỗi đơn.",
        "Ví dụ: đơn hàng trung bình 2 triệu, biên lợi nhuận gộp 35%, chi phí đóng gói và giao hàng 150.000đ. Ngưỡng CPA tối đa = 2.000.000 x 35% - 150.000 = 550.000đ.",
        "Nếu CPA hiện tại đang ở 300.000-400.000đ và ổn định, bạn đang có biên an toàn để scale. Nếu CPA đang chạm 500.000đ và có xu hướng tăng, scale lúc này rất rủi ro, vì tăng ngân sách thường kéo CPA lên cao hơn do cạnh tranh đấu thầu tăng.",
      ],
    },
    {
      id: "landing-page-on-dinh",
      title: "Dấu hiệu 3: tỷ lệ chuyển đổi của landing page đang ổn định",
      body: [
        "Đây là điều nhiều người bỏ qua. Scale ngân sách nghĩa là kéo thêm nhiều người vào landing page. Nhưng nếu landing page đang chuyển đổi kém, thêm traffic chỉ làm tốn thêm tiền.",
        "Trước khi scale, hãy kiểm tra CVR của trang đang ở mức bao nhiêu, có điểm nghẽn nào rõ ràng không, tỷ lệ thoát có cao không, scroll depth có thấp không, CTA có ít click không.",
        "Nếu CVR đang yếu, việc cần làm trước tiên là tối ưu landing page, không phải tăng ngân sách quảng cáo.",
        "Tăng CVR từ 2% lên 4% có hiệu quả tương đương việc nhân đôi ngân sách quảng cáo, nhưng không tốn thêm một đồng chi phí media.",
      ],
    },
    {
      id: "cach-scale-dung",
      title: "Cách scale đúng: tăng từng bước, không nhảy cóc",
      body: [
        "Giả sử bạn đã xác nhận đủ ba điều kiện trên. Bây giờ scale như thế nào?",
        "Nguyên tắc 20% mỗi lần: không tăng ngân sách đột ngột 2x hay 3x. Mỗi lần tăng không quá 20% so với ngân sách hiện tại, chờ 3-5 ngày để xem thuật toán thích nghi, rồi mới đánh giá tiếp.",
        "Tăng đột ngột có thể kích hoạt lại giai đoạn học của thuật toán, làm CPL tăng vọt trong thời gian ngắn. Điều này dễ khiến bạn tưởng chiến dịch đang xấu đi, trong khi thực ra chỉ cần thêm thời gian ổn định.",
        "Ngoài ra, hãy scale theo chiều ngang thay vì chỉ tăng ngân sách. Thay vì đổ thêm tiền vào một nhóm quảng cáo duy nhất, hãy nhân rộng những gì đang hoạt động tốt: duplicate ad set sang tệp đối tượng tương tự, thử creative mới, mở rộng sang vị trí quảng cáo mới như từ Facebook sang Instagram, từ feed sang reels.",
        "Cách này phân tán rủi ro và giúp hệ thống học hiệu quả hơn.",
      ],
    },
    {
      id: "khi-khong-nen-scale",
      title: "Khi nào không nên scale, dù đang có lãi",
      body: [
        "Có những tình huống ngay cả khi ROI dương, bạn cũng không nên vội scale.",
        "Một là kho hàng hoặc năng lực xử lý đơn chưa sẵn sàng. Tăng đơn hàng đột ngột mà không chuẩn bị logistics, nhân sự hoặc nguyên liệu có thể dẫn đến giao hàng chậm, khách phàn nàn và đánh giá xấu. Chi phí thu hồi uy tín đắt hơn nhiều lợi nhuận scale mang lại.",
        "Hai là chiến dịch đang chạy tốt nhờ một yếu tố ngắn hạn: khuyến mãi đang chạy, sản phẩm đang viral hoặc đối thủ vừa tạm dừng quảng cáo. Đây không phải tín hiệu bền vững. Scale trong giai đoạn này rồi rút ngân sách khi yếu tố đó hết sẽ làm chiến dịch bị gián đoạn, khó khôi phục mức hiệu quả cũ.",
        "Ba là chưa có dữ liệu đủ lớn để kết luận. Nếu chiến dịch mới chạy được 3 ngày và có 5 đơn hàng, đó chưa phải dữ liệu đủ để quyết định. Cần ít nhất 30-50 sự kiện chuyển đổi để có kết luận đáng tin cậy hơn.",
      ],
    },
    {
      id: "vong-lap-toi-uu",
      title: "Vòng lặp tối ưu trước khi scale",
      body: [
        "Một chiến dịch sẵn sàng để scale thường đã đi qua vòng lặp: chạy thử nghiệm nhỏ, đo lường, tối ưu landing page và creative, ổn định, scale từng bước, đo lại, rồi lặp lại.",
        "Không có chiến dịch nào đáng scale ngay từ lần đầu. Và cũng không có chiến dịch nào có thể scale mãi mà không cần tối ưu lại theo chu kỳ, vì tệp khán giả sẽ bão hòa, creative sẽ mất hiệu quả và thị trường sẽ thay đổi.",
      ],
    },
    {
      id: "ket",
      title: "Kết",
      body: [
        "Scale ngân sách quảng cáo không phải quyết định cảm tính kiểu “thấy đang tốt thì tăng thêm”. Đó là quyết định dựa trên ba điều kiện rõ ràng: chiến dịch đã ổn định, CPA đang trong ngưỡng có lãi, và landing page đang chuyển đổi tốt.",
        "Thiếu một trong ba, scale chỉ là đốt tiền nhanh hơn.",
        "Tối ưu trước. Scale sau. Đo lường liên tục.",
      ],
    },
  ],
  takeaways: [
    "Đọc ROI thực, không chỉ nhìn ROAS.",
    "Chỉ scale khi chiến dịch ổn định, CPA/CPL còn biên lợi nhuận và landing page chuyển đổi tốt.",
    "Scale từng bước, ưu tiên tăng 20% mỗi lần và đo lại trước khi tiếp tục.",
  ],
};

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) return {};
  const article =
    slug === "funnel-first-marketing"
      ? funnelFirstArticle
      : slug === "landing-page-conversion"
        ? landingPageArticle
        : slug === "paid-ads-roi"
          ? paidAdsRoiArticle
        : post;

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    type: "article",
  });
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = insights.find((item) => item.slug === slug);
  if (!post) notFound();

  const article =
    slug === "funnel-first-marketing"
      ? funnelFirstArticle
      : slug === "landing-page-conversion"
        ? landingPageArticle
        : slug === "paid-ads-roi"
          ? paidAdsRoiArticle
        : post;
  const relatedPosts = insights.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleSchema = articleJsonLd({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${post.slug}`,
    image: post.image,
    datePublished: post.dateIso,
    author: post.author,
  });

  return (
    <main className="article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <article>
        <header className="article-hero">
          <div className="article-hero-copy">
            <Link className="article-back-link" href="/insights">
              ← Quay lại Kiến thức
            </Link>
            <p className="eyebrow">{post.category}</p>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <div className="article-meta">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
              <span>{post.author}</span>
            </div>
          </div>
          <div className="article-cover">
            <img src={post.image} alt={article.title} />
          </div>
        </header>

        <section className="article-body-wrap">
          <aside className="article-toc" aria-label="Mục lục bài viết">
            <span>Mục lục</span>
            <nav>
              {article.sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="article-content">
            <section className="article-summary">
              <h2>Tóm tắt nhanh</h2>
              <p>{article.summary}</p>
            </section>

            {article.sections.map((section) => (
              <section className="article-section" id={section.id} key={section.id}>
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="article-takeaways">
              <h2>Điểm cần nhớ</h2>
              <ul>
                {article.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>
      </article>

      <section className="article-related-section" aria-label="Bài viết liên quan">
        <div className="article-related-heading">
          <p className="eyebrow">Bài viết liên quan</p>
          <h2>Đọc tiếp để hoàn thiện hệ thống tăng trưởng.</h2>
        </div>
        <div className="article-related-grid">
          {relatedPosts.map((item) => (
            <Link className="article-related-card" href={`/insights/${item.slug}`} key={item.slug}>
              <div>
                <img src={item.image} alt={item.title} />
              </div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="article-final-cta">
        <div>
          <p className="eyebrow">Cần áp dụng vào doanh nghiệp?</p>
          <h2>QEAgency có thể giúp bạn biến insight thành phễu tăng trưởng thực tế.</h2>
        </div>
        <Link className="primary-button" href="/contact">
          Trao đổi với QEAgency
        </Link>
      </section>

      <SiteFooter />
    </main>
  );
}

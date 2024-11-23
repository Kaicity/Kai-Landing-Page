import {
  BlogCardImageOne,
  BlogCardImageTwo,
  TestimonialCardOne,
} from "../assets";
import BlogCard from "../components/BlogCard";
import BlogWrapper from "../components/BlogWrapper";
import Community from "../components/Community";
import Home from "../components/Home";
import NewLetter from "../components/NewLetter";
import Sale from "../components/Sale";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialCard from "../components/TestimonialCard";
import ProcessGrid from "../components/ProcessCard";
import { excavators } from "../data";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const nagivate = useNavigate();

  return (
    <div>
      <Home />
      <Community />
      <StatisticsSection />
      <BlogCard
        path={"/products"}
        imageUrl={BlogCardImageOne}
        title={
          <>
            DẪN ĐẦU CÔNG NGHỆ MÁY XÚC{" "}
            <span className="text-brandPrimary font-semibold">
              CHẤT LƯỢNG CAO
            </span>{" "}
          </>
        }
        content={
          <>
            {" "}
            Sản phẩm của chúng tôi được thiết kế để đáp ứng các nhu cầu khắt khe
            nhất trong ngành xây dựng. Với sự hỗ trợ của công nghệ tiên tiến,
            máy xúc của chúng tôi đảm bảo hiệu suất vượt trội và độ bền cao,
            giúp tối ưu hóa công việc của bạn.
          </>
        }
        showBtn={true}
        btnContent="Xem sản phẩm"
      />

      <Sale />
      <BlogCard
        imageUrl={BlogCardImageTwo}
        title="Máy Xúc Cải Tiến Công Nghệ Đột Phá"
        content={
          <>
            Máy xúc của chúng tôi được trang bị công nghệ mới nhất, mang lại
            hiệu suất làm việc vượt trội và tiết kiệm năng lượng. Với thiết kế
            tối ưu, máy xúc không chỉ giúp tăng năng suất công việc mà còn đảm
            bảo độ bền vượt trội trong mọi điều kiện làm việc khắc nghiệt. Chúng
            tôi cam kết cung cấp những sản phẩm chất lượng cao, đáp ứng mọi yêu
            cầu trong ngành xây dựng và khai thác. Sở hữu cấu hình mạnh mẽ và
            đáp ứng được rất nhiều mô hình công việc khác nhau.
            <br /> <br />
            Chất đi với lượng, hiện nay tại Việt Nam nổi lên các dòng máy xúc
            lật đến từ Trung Quốc với lợi thế giá rẻ nhưng cũng rất nhiều khách
            hàng đã tin tưởng và lựa chọn máy xúc lật của thương hiệu LiuGong về
            độ uy tín và chất lượng bền bỉ.
          </>
        }
        showBtn={false}
      ></BlogCard>

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16">
        <div>
          <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
            Các Loại Máy Xúc / Máy Đào{" "}
            <span className="text-brandPrimary">Thông Dụng</span>
          </h2>
        </div>

        <div>
          <p className="text-sm text-neutralGrey mb-8 leading-7">
            Máy xúc là một thiết bị không thể thiếu trong ngành xây dựng và khai
            thác khoáng sản. Để đảm bảo hiệu quả công việc và độ bền cao, việc
            lựa chọn máy xúc chất lượng là rất quan trọng. Dưới đây là một số
            điểm nổi bật của các máy xúc chất lượng cao: Hiệu Suất Vượt Trội:
            Máy xúc chất lượng cao thường được trang bị động cơ mạnh mẽ, giúp
            tăng cường hiệu suất làm việc và tiết kiệm nhiên liệu. Độ Bền Cao:
            Các máy xúc này được chế tạo từ các vật liệu bền bỉ, chịu được điều
            kiện làm việc khắc nghiệt, giúp kéo dài tuổi thọ của máy. Công Nghệ
            Hiện Đại: Máy xúc hiện đại thường tích hợp các công nghệ tiên tiến
            như hệ thống điều khiển tự động.
          </p>
        </div>

        <div className="space-y-6">
          {excavators.map((excavator, index) => (
            <div key={index} className="flex items-start">
              <div>
                <h3 className="text-xl font-semibold text-brandPrimary mb-1">
                  {excavator.name}
                </h3>
                <div className="md:w-11/12 flex flex-col md:flex-row md:justify-between items-start gap-8">
                  <div>
                    <img
                      src={excavator.image}
                      alt={""}
                      className="lg:w-80 md:w-40 w-full object-cover py-2"
                    />
                  </div>
                  <div className="md:w-4/5 mx-auto">
                    <p className="text-sm text-neutralGrey leading-relaxed">
                      {excavator.description}
                    </p>
                    <div className="py-2">
                      <button
                        onClick={() => nagivate("/products")}
                        className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4"
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProcessGrid />
      <BlogWrapper />
      <TestimonialCard imageSrc={TestimonialCardOne} />
      <NewLetter />
    </div>
  );
}

export default HomePage;

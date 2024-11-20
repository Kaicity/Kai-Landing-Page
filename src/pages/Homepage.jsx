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
function HomePage() {
    return (
        <div>
            <Home/>
            <Community/>    
            <BlogCard
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
            <StatisticsSection/>
            <Sale/>
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
                        <br/> <br/>
                        Chất đi với lượng, hiện nay tại Việt Nam nổi lên các dòng máy xúc
                        lật đến từ Trung Quốc với lợi thế giá rẻ nhưng cũng rất nhiều khách
                        hàng đã tin tưởng và lựa chọn máy xúc lật của thương hiệu LiuGong về
                        độ uy tín và chất lượng bền bỉ.
                    </>
                }
                showBtn={false}
            ></BlogCard>
            <BlogWrapper/>
            <ProcessGrid/>
            <TestimonialCard imageSrc={TestimonialCardOne}/>

            <NewLetter/>

        </div>
    );
}

export default HomePage;

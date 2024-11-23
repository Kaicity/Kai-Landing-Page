import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner_1.png";
import banner2 from "../assets/banner_2.png";
import banner3 from "../assets/banner_3.png";
import banner4 from "../assets/banner_4.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 w-full mx-auto min-h-full h-screen">
        <Carousel
          className="w-full mx-auto "
          indicators={false}
          leftControl={
            <a
              className="bg-neutral-300 text-white p-2 rounded-full hover:bg-brandPrimary transition-all duration-300"
              aria-label="Previous"
            >
              ❮
            </a>
          }
          rightControl={
            <a
              className="bg-neutral-300 text-white p-2 rounded-full hover:bg-brandPrimary transition-all duration-300"
              aria-label="Next"
            >
              ❯
            </a>
          }
        >
          {/* Slide 1 */}
          <div className="my-28 md:my-8 py-12 flex flex-col items-center md:flex-row-reverse md:justify-evenly gap-12">
            <div>
              <img src={banner3} alt="Máy xúc đào đa năng" className="w-full" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug">
                Máy Xúc Đào Đa Năng{" "}
                <span className="text-brandPrimary">Hiệu Suất Cao</span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Giải pháp tối ưu cho các công trình xây dựng hiện đại.
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4">
                Tìm hiểu thêm
              </button>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="my-28 md:my-8 py-12 flex flex-col items-center md:flex-row-reverse md:justify-evenly gap-12">
            <div>
              <img
                src={banner1}
                alt="Máy xúc lật chuyên dụng"
                className="w-full"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug">
                Máy Xúc Lật <br />
                <span className="text-brandPrimary">Chuyên Dụng</span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Đáp ứng mọi nhu cầu di chuyển và nâng hạ vật liệu.
              </p>
              <button className="px-7 py-2 border border-brandPrimary text-brandPrimary rounded transition-all duration-300">
                Xem chi tiết
              </button>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="my-28 md:my-8 py-12 flex flex-col items-center md:flex-row-reverse md:justify-evenly gap-12">
            <div>
              <img src={banner4} alt="Máy xúc mini" className="w-full" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug">
                Máy Xúc Mini <br />
                <span className="text-brandPrimary">Tiện Lợi & Hiệu Quả</span>
              </h1>
              <p className="text-neutralDGrey text-base mb-8">
                Lựa chọn hoàn hảo cho các công trình nhỏ và hẹp.
              </p>
              <button className="px-7 py-2 border border-brandPrimary text-brandPrimary rounded transition-all duration-300">
                Khám phá ngay
              </button>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="my-28 md:my-8 py-12 flex flex-col items-center md:flex-row md:justify-evenly gap-12">
            <div>
              <img src={banner2} alt="Máy xúc bánh xích" className="w-full" />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-neutralDGrey leading-snug">
                Máy Xúc Bánh Xích <br />
                <span className="text-brandPrimary">Chuyên Nghiệp</span>
              </h1>
              <p className="text-neutralDGrey text-base mb-4">
                Độ bền vượt trội, phù hợp với mọi điều kiện khắc nghiệt.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

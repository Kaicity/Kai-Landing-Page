import React from "react";
import {
    Apps,
    Coding,
    Immersive,
    Ipsum,
    Sosos,
    Startup,
    TestimonialCardOne,
} from "../assets";
import {motion} from "framer-motion";
import {fadeInFramer} from "../helper/fadeInFramer.js";

function TestimonialCard() {
    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16" id="company">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div className="md:w-1/3" variants={fadeInFramer("up", 0)} initial="hidden"
                            whileInView="show" viewport={{once: true, amount: 0.5}}>
                    <img src={TestimonialCardOne} alt=""/>
                </motion.div>

                <motion.div className="md:w-2/3 mx-auto" variants={fadeInFramer("up", 0.4)} initial="hidden"
                            whileInView="show" viewport={{once: true, amount: 0.5}}>
                    <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
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
                    <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                        Nguyễn Minh Thông
                    </h5>
                    <p className="text-base text-neutralGrey mb-8">
                        Mở bán nhiều chi nhánh khác nhau
                    </p>
                    <div className="">
                        <div className="flex items-center gap-8 flex-wrap">
                            <img className="cursor-pointer" src={Apps} alt=""/>
                            <img className="cursor-pointer" src={Startup} alt=""/>
                            <img className="cursor-pointer" src={Ipsum} alt=""/>
                            <img className="cursor-pointer" src={Coding} alt=""/>
                            <img className="cursor-pointer" src={Immersive} alt=""/>
                            <img className="cursor-pointer" src={Sosos} alt=""/>
                            <div>
                                <a
                                    href="/"
                                    className="font-bold text-brandPrimary hover:text-neutral-700"
                                >
                                    Tất cả nhà tài trợ
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default TestimonialCard;

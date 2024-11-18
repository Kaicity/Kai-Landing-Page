import React from "react";
import {motion} from "framer-motion";
import {fadeInFramer} from "../helper/fadeInFramer.js";

function BlogWrapper() {
    const blogs = [
        {
            id: 1,
            title: "Động cơ Cummins trên xe lu Dynapac",
            url: "https://www.banmayxaydung.com/image/cache/catalog/tin-tuc/news/dong-co-cummins-tren-xe-lu-dynapac-900x600.webp",
        },
        {
            id: 2,
            title: "Tìm hiểu về xe cẩu - phương tiện vận chuyển cần thiết",
            url: "https://www.banmayxaydung.com/image/cache/catalog/tin-tuc/news/tim-hieu-ve-xe-cau-900x600.webp",
        },
        {
            id: 3,
            title: "Máy đào bánh lốp trong xây dựng",
            url: "https://www.banmayxaydung.com/image/cache/catalog/tin-tuc/news/he-thong-lai-xe-lu-dynapac-3-900x600.webp",
        },
    ];

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
            <motion.div className="text-center md:w-1/2 mx-auto" variants={fadeInFramer("up", 0.2)} initial="hidden"
                        whileInView="show" viewport={{once: true, amount: 0.5}}>
                <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
                    Tin tức về máy xúc công trường
                </h2>
                <p className="text-neutralGrey text-sm md:w-3/4 mb-8 mx-auto">
                    Máy xúc là một trong những thiết bị không thể thiếu trong ngành xây
                    dựng hiện đại. Với khả năng đào, xúc và di chuyển đất đá, máy xúc giúp
                    tăng cường hiệu quả công việc và giảm bớt sức lao động của con người.
                    Các dòng máy xúc hiện đại ngày nay.
                </p>
            </motion.div>

            {/* Blogs */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
                {blogs.map((blog) => (
                    <motion.div key={blog.id} className="mx-auto relative mb-12 cursor-pointer"
                                variants={fadeInFramer("up", 0.2)} initial="hidden"
                                whileInView="show" viewport={{once: true, amount: 0.5}}>
                        <img
                            src={blog.url}
                            alt=""
                            className="hover:scale-95 transition-all duration-300"
                        />
                        <div
                            className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
                            <h3 className="mb-3 text-neutralGrey font-semibold">
                                {blog.title}
                            </h3>
                            <div className="flex items-center justify-center gap-8">
                                <a
                                    href=""
                                    className="font-bold text-brandPrimary hover:text-neutral-700"
                                >
                                    Đọc thêm
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default BlogWrapper;

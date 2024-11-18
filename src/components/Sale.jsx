import React from "react";
import Image from "./Image";
import {motion} from "framer-motion";
import {SaleImageOne, SaleImageTwo, SaleImageThree} from "../assets";
import {fadeInFramer} from "../helper/fadeInFramer.js";

function Sale() {

    return (
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto py-16" id="sale">
            <motion.h2
                className="text-4xl font-semibold text-neutralDGrey mb-2 text-center"
                variants={fadeInFramer("up", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.5}}
            >
                Máy Xúc Công Trình
            </motion.h2>
            <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
                {/* Hình ảnh đầu tiên */}
                <motion.div
                    className="w-full md:w-2/3 lg:w-1/2 h-[684px] overflow-hidden"
                    variants={fadeInFramer("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.5}}
                >
                    <Image className="h-full w-full object-cover rounded-lg" imgSrc={SaleImageOne}/>
                </motion.div>

                {/* Hai hình ảnh còn lại */}
                <motion.div
                    className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 lg:gap-10"
                    variants={fadeInFramer("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.5}}
                >
                    <div className="h-[322px] w-full overflow-hidden">
                        <Image className="h-full w-full object-cover rounded-lg" imgSrc={SaleImageTwo}/>
                    </div>
                    <div className="h-[322px] w-full overflow-hidden">
                        <Image className="h-full w-full object-cover rounded-lg" imgSrc={SaleImageThree}/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Sale;

import anhtha from "../assets/video/taolao.mp4";
import {motion} from "framer-motion";
import {fadeInFramer} from "../helper/fadeInFramer.js";

function Video() {
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="video">
      <motion.div
        className="text-center md:w-1/2 mx-auto"
        variants={fadeInFramer("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.5}}
      >
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
          Tin tức về máy xúc công trường
        </h2>
        <p className="text-neutralGrey text-sm md:w-3/4 mb-8 mx-auto">
          Máy xúc là một trong những thiết bị không thể thiếu trong ngành xây
          dựng hiện đại.
        </p>
      </motion.div>

      <div className="w-full h-[40rem] bg-white  rounded-lg overflow-hidden">
        <video className="w-full h-full object-contain" autoPlay muted controls>
          <source src={anhtha} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;

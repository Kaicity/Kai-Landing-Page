import { useEffect } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Breadcrumbs from "../components/breadcrumb";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Breadcrumbs />
      <div className="px-2 lg:px-14 flex items-center justify-center mb-12">
        <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Form Section */}
          <div className="px-4 lg:px-16">
            {/* Contact Info Section */}
            <div className="col-span-2 mb-10">
              <h1 className="text-3xl font-semibold text-neutralDGrey mb-2">
                Thongular
              </h1>
              <p className="text-neutralGrey text-sm mb-2 flex items-center">
                <MapPinIcon className="w-5 h-5 text-brandPrimary mr-2" />
                Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
              </p>
              <p className="text-neutralGrey text-sm mb-2 flex items-center">
                <PhoneIcon className="w-5 h-5 text-brandPrimary mr-2" />
                Số điện thoại: +84 123 456 789
              </p>
              <p className="text-neutralGrey text-sm mb-2 flex items-center">
                <EnvelopeIcon className="w-5 h-5 text-brandPrimary mr-2" />
                Email: contact@tencongty.com
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 text-neutralDGrey">
              Liên hệ chúng tôi
            </h2>
            <form>
              <div className="mb-4">
                <input
                  id="name"
                  type="text"
                  placeholder="Nhập họ tên của bạn"
                  className="bg-gray-50 p-3 w-full border border-gray-300 rounded focus:outline-none text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="bg-gray-50 p-3 w-full border border-gray-300 rounded focus:outline-none  text-sm"
                />
              </div>
              <div className="mb-4">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại của bạn"
                  className="bg-gray-50 p-3 w-full border border-gray-300 rounded focus:outline-none text-sm"
                />
              </div>
              <div className="mb-4">
                <textarea
                  id="message"
                  placeholder="Nhập nội dung liên hệ của bạn"
                  onResize={false}
                  className="bg-gray-50 p-3 w-full border border-gray-300 rounded h-32 focus:outline-none text-sm resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brandPrimary text-white p-2 rounded hover:bg-gray-500 transition"
              >
                Gửi
              </button>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="rounded overflow-hidden shadow-md">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31355.759382941134!2d106.67803105129691!3d10.77527517902712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f38f9ed887b%3A0x14aded5703768989!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1732347136490!5m2!1sen!2s"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

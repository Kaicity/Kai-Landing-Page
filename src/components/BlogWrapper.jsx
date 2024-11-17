import React from "react";

function BlogWrapper() {
  const blogs = [
    {
      id: 1,
      title: "Hội nghị xe máy xúc",
      url: "https://th.bing.com/th/id/R.336dc905b195998224f9806f68cd8bd4?rik=hbfGU6zfFVKIeg&riu=http%3a%2f%2fwww.yoma.co.uk%2fwp-content%2fuploads%2f2014%2f07%2fshutterstock_301366778.jpg&ehk=IljNIcv6dM96AfP4zm3qw4vFKQ6WbgwqQScPi4XgAAA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      title: "Hội nghị xe máy xúc",
      url: "https://th.bing.com/th/id/R.336dc905b195998224f9806f68cd8bd4?rik=hbfGU6zfFVKIeg&riu=http%3a%2f%2fwww.yoma.co.uk%2fwp-content%2fuploads%2f2014%2f07%2fshutterstock_301366778.jpg&ehk=IljNIcv6dM96AfP4zm3qw4vFKQ6WbgwqQScPi4XgAAA%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: 3,
      title: "Hội nghị xe máy xúc",
      url: "https://th.bing.com/th/id/R.336dc905b195998224f9806f68cd8bd4?rik=hbfGU6zfFVKIeg&riu=http%3a%2f%2fwww.yoma.co.uk%2fwp-content%2fuploads%2f2014%2f07%2fshutterstock_301366778.jpg&ehk=IljNIcv6dM96AfP4zm3qw4vFKQ6WbgwqQScPi4XgAAA%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12" id="blog">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
          Tin tức về máy xúc công trường
        </h2>
        <p className="text-neutralGrey text-sm md:w-3/4 mb-8 mx-auto">
          Máy xúc là một trong những thiết bị không thể thiếu trong ngành xây
          dựng hiện đại. Với khả năng đào, xúc và di chuyển đất đá, máy xúc giúp
          tăng cường hiệu quả công việc và giảm bớt sức lao động của con người.
          Các dòng máy xúc hiện đại ngày nay.
        </p>
      </div>

      {/* Blogs */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.url}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogWrapper;

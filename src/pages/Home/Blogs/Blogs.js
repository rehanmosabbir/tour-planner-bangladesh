import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">Blogs</h1>
      <hr className="w-25 m-auto mb-5" />

      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src=" https://i.ibb.co/5rGXQss/Tourist-Places-And-Picnic-Spots-In-Gazipur-1140x530.png"
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 pt-1">
          <h4 className="mb-3">
            30+ Attractive Tourist Places And Picnic Spots In Gazipur (1 Day
            Tour)
          </h4>
          <hr />
          <p>
            Gazipur district is rich in history and heritage. It is full of
            archeological sites and places of interest.
          </p>
          <p>
            Notable among the places of interest and heritage of Gazipur
            district adjoining the capital Dhaka are: Bhawal Rajbari, Baldhar
            Zamindar Bari, Ancient Capital Indrakpur, Boliadi Zamindar Bari,
            Kashimpur Zamindar Bari etc.
          </p>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12 pt-1 order-md-first order-last">
          <h4 className="mb-3">Top 10 Attractive Places At Khulna City!</h4>
          <hr />
          <p>
            Khulna district in the southwestern part of Bangladesh is the third
            largest district in Bangladesh. This unprecedented fusion of
            industrial trade, nature and folk culture has taken place in this
            district. There are shrimp industries and shipbuilding industries in
            Khulna district which is rich in a significant number of river
            varieties including Rupsha, Bhairab, Chitra, Pashur and Kapotaksh.
          </p>
        </div>
        <div className="col-md-6 col-sm-12 order-md-last order-first">
          <img
            className="img-fluid"
            src="https://i.ibb.co/k3xC9GM/khulna-tourist-spot-attractions-1140x411.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6 col-sm-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/ZHB1KTy/Prantik-Lake-Bandarban-1000x530.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-sm-12 pt-1">
          <h4 className="mb-3">Prantik Lake Bandarban – A To Z Travel Guide</h4>
          <hr />
          <p>
            There is an impeccably beautiful lake called Prantik Lake in
            Bandarban. The total area of the lake is only 25 to 30 acres out of
            68 acres. The lake is larger in size than Boga Lake. The area of
            Boga Lake is 15 acres. Surrounded by mountains and forests, this
            beautiful lake is full of various species of plants. In 2013, the
            government declared Prantik lake a tourist reserve. There are many
            species of wild animals including monkeys and birds in the forest on
            the banks of the lake which is born naturally. There are Dahuk,
            different species of aquatic plants in the pond.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// https://i.ibb.co/k3xC9GM/khulna-tourist-spot-attractions-1140x411.jpg
// https://i.ibb.co/ZHB1KTy/Prantik-Lake-Bandarban-1000x530.jpg
// https://i.ibb.co/5rGXQss/Tourist-Places-And-Picnic-Spots-In-Gazipur-1140x530.png

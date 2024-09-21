import "../assets/css/Units.css";
function Units() {
  return (
    <>
      <div className="wrapper">
        <section id="home">
          <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161" />
          <div className="kolom">
            <p className="deskripsi">Belajar Programming #dirumahaja</p>
            <h2>Tetap Sehat, Tetap Semangat</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Nesciunt, nobis.
            </p>
            <p>
              <a href="" className="tbl-pink">
                Pelajari Lebih Lanjut
              </a>
            </p>
          </div>
        </section>

        <section id="courses">
          <div className="kolom">
            <p className="deskripsi">You Will Need This</p>
            <h2>Online Courses</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              <a href="" className="tbl-biru">
                Pelajari Lebih Lanjut
              </a>
            </p>
          </div>
          <img src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161" />
        </section>

        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              <p className="deskripsi">Our Top Tutors</p>
              <h2>Tutors</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                optio!
              </p>
            </div>

            <div className="tutor-list">
              <div className="kartu-tutor">
                <img src="https://dfu1k3y1rami2.cloudfront.net/wp-content/uploads/2014/07/26195109/2020_cb.jpg" />
                <p>Jason Lee Scott</p>
              </div>
              <div className="kartu-tutor">
                <img src="https://images.ctfassets.net/1wryd5vd9xez/4DxzhQY7WFsbtTkoYntq23/a4a04701649e92a929010a6a860b66bf/https___cdn-images-1.medium.com_max_2000_1_Y6l_FDhxOI1AhjL56dHh8g.jpeg" />
                <p>John Doe</p>
              </div>
              <div className="kartu-tutor">
                <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3021752-inline-i-1-why-square-designed-its-new-offices-to-work-like-a-city.jpg" />
                <p>Michael Dell</p>
              </div>
              <div className="kartu-tutor">
                <img src="https://blogs-images.forbes.com/jackkelly/files/2019/06/Jack-Kelly_avatar_1559658819-400x400.jpg" />
                <p>Bruce Wills</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partners">
          <div className="tengah">
            <div className="kolom">
              <p className="deskripsi">Our Top Partners</p>
              <h2>Partners</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
                magni tempore expedita sequi. Similique rerum doloremque impedit
                saepe atque maxime.
              </p>
            </div>

            <div className="partner-list">
              <div className="kartu-partner">
                <img src="https://www.designevo.com/res/templates/thumb_small/black-wheat-and-mortarboard.png" />
              </div>
              <div className="kartu-partner">
                <img src="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-63.jpg" />
              </div>
              <div className="kartu-partner">
                <img src="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-62.jpg" />
              </div>
              <div className="kartu-partner">
                <img src="https://www.designevo.com/res/templates/thumb_small/encircled-branches-and-book.png" />
              </div>
              <div className="kartu-partner">
                <img src="https://image.freepik.com/free-vector/campus-collage-university-education-logo-design-template_7492-64.jpg" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Units;
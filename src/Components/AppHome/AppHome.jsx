// import React from "react";
// import firstscreen from "../../assets/img/firstscreen.jpg";
// import secondscreen from "../../assets/img/secondscreen.jpg";
// import thirdscreen from "../../assets/img/thirdscreen.jpg";
// import fourthscreen from "../../assets/img/fourthscreen.jpg";
// import fifthscreen from "../../assets/img/fifth.jpg";
// import Slider from "react-slick";

// const AboutApp = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         speed: 2500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };
//     return (
//         <div>
//             <div>
//                 <h1>
//                     Ứng dụng tiện lợi dành cho <br /> người yêu điện ảnh
//                 </h1>
//                 <p>
//                     Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm{" "}
//                     <br /> rạp và đổi quà hấp dẫn.
//                 </p>
//                 <button>
//                     APP MIỄN PHÍ - TẢI VỀ NGAY!
//                 </button>
//                 <p>
//                     TIX có hai phiên bản <u>IOS</u>&<u>Android</u>
//                 </p>
//             </div>
//             <div>
//                 <Slider>
//                     <div>
//                         <img

//                             src={firstscreen}
//                             alt="film screen"
//                         />
//                     </div>
//                     <div>
//                         <img

//                             src={secondscreen}
//                             alt="film screen"
//                         />
//                     </div>
//                     <div>
//                         <img

//                             src={thirdscreen}
//                             alt="film screen"
//                         />
//                     </div>
//                     <div>
//                         <img

//                             src={fourthscreen}
//                             alt="film screen"
//                         />
//                     </div>
//                     <div>
//                         <img

//                             src={fifthscreen}
//                             alt="film screen"
//                         />
//                     </div>
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default AboutApp;

import { Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { useStyles } from "./style";
import bannerSlider1 from "../../assets/AppHome/banner-slider-1.jpg";
import bannerSlider2 from "../../assets/AppHome/banner-slider-2.jpg";
import bannerSlider3 from "../../assets/AppHome/banner-slider-3.jpg";
import bannerSlider4 from "../../assets/AppHome/banner-slider-4.jpg";
import bannerSlider5 from "../../assets/AppHome/banner-slider-5.jpg";
import bannerSlider6 from "../../assets/AppHome/banner-slider-6.jpg";

const data = [
  bannerSlider1,
  bannerSlider2,
  bannerSlider3,
  bannerSlider4,
  bannerSlider5,
  bannerSlider6,
];

function AppHome() {
  const classes = useStyles();

  const renderPhone = () => {
    return data.map((item, index) => {
      return (
        <div key={index} className={classes.rightItem}>
          <img
            style={{
              display: "block",
              width: "100%",
              border: 0,
              verticalAlign: "middle",
              overflow: "hidden",
            }}
            src={item}
            alt="slider"
          ></img>
        </div>
      );
    });
  };

  return (
    <div className={classes.root} id="ungDung">
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid className={classes.left} container item xs={12} md={6}>
            <Typography className={classes.textLarge} display="block">
              Ứng dụng tiện lợi dành cho
            </Typography>
            <Typography className={classes.textLarge} display="block">
              người yêu điện ảnh
            </Typography>

            <Typography className={classes.textSmall} display="block">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </Typography>

            <Button
              className={classes.textButton}
              target="_blank"
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              variant="contained"
              color="primary"
            >
              App miễn phí - Tải về ngay!
            </Button>
            <Typography className={classes.textUnder} display="block">
              TIX có hai phiên bản
              <a
                className={classes.textApp}
                rel="noreferrer"
                target="_blank"
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              >
                IOS
              </a>
              &
              <a
                className={classes.textApp}
                rel="noreferrer"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </Typography>
          </Grid>
          <Grid className={classes.right} item xs={12} md={6}>
            {/* <img className={classes.imgPhone} alt="phone"></img> */}
            <Carousel
              className={classes.carousel}
              animation="fade"
              indicators={false}
              navButtonsAlwaysInvisible={true}
              autoPlay={true}
              timeout={200}
            >
              {renderPhone()}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AppHome;

import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import styles from "./CustomSlider.module.scss"

export default function CustomSlider({ title, subTitle, children }) {
  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <span
        className={styles.Prev + " " + className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </span>
    )
  }

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props
    return (
      <span
        className={styles.Next + " " + className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3.5"
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <div className={styles.Slider}>
      <div className="flex items-end justify-between">
        <div>
          <h6 className="font-medium uppercase tracking-[1.12px] text-secondary">
            {subTitle}
          </h6>
          <h1 className="mt-3 font-medium tracking-[-0.04em] text-secondary">
            {title}
          </h1>
        </div>
      </div>

      <div className="mt-[70px] md:mt-[60px] w-full">
        <Slider {...settings}>
          {children.map((slide, i) => (
            <div key={i} className="overflow-hidden rounded-lg">
              {slide}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

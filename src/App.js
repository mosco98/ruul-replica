import attachmentDetachmentSvg from "./assets/images/attachment-detachment.svg";
import complianceSvg from "./assets/images/compliance.svg";
import growAndThriveSectionSvg from "./assets/images/grow-and-thrive-section.svg";
import invoicingSvg from "./assets/images/invoicing.svg";
import ruulLong from "./assets/images/ruul-long.svg";
import standardizationSvg from "./assets/images/standardization.svg";
import { Accordion, AccordionItem } from "./components/Accordion";
import { Button } from "./components/Button";
import { CustomSlider } from "./components/CustomSlider";
import { Hero } from "./components/Hero";
import Layout from "./components/Layout";
import { Tab, TabPanel, Tabs } from "./components/Tabs";

export default function App() {
  return (
    <Layout>
      <Hero />

      <section className="bg-white pb-32 pt-64">
        <div className="container grid grid-cols-1 gap-0 md:grid-cols-11 md:gap-16">
          <div className="col-span-5 hidden md:block">
            <img src={ruulLong} alt="ruul-long" />
          </div>
          <div className="col-span-1 md:col-span-6">
            <h6 className="font-medium uppercase tracking-[1.12px]">
              AGENCY OF RECORD
            </h6>
            <h1 className="mt-3 font-medium tracking-[-0.04em]">
              A new connection protocol for work
            </h1>

            <h4 className="mt-6 tracking-[-0.04em]">
              Say goodbye to the old and outdated payroll system. Modern work
              demands a new employment protocol between talents and businesses.
              Ruul pioneers this revolutionary transformation.
            </h4>

            <div className="mt-10 flex items-center gap-x-4 rounded-lg border border-primary bg-[#feefca] p-5">
              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#feefca]"
                >
                  <path
                    d="M6.00016 14C6.00016 14.3334 6.26683 14.6667 6.66683 14.6667H9.3335C9.7335 14.6667 10.0002 14.3334 10.0002 14V13.3334H6.00016V14ZM8.00016 1.33337C5.40016 1.33337 3.3335 3.40004 3.3335 6.00004C3.3335 7.60004 4.1335 9.00004 5.3335 9.80004V11.3334C5.3335 11.6667 5.60016 12 6.00016 12H10.0002C10.4002 12 10.6668 11.6667 10.6668 11.3334V9.80004C11.8668 8.93337 12.6668 7.53337 12.6668 6.00004C12.6668 3.40004 10.6002 1.33337 8.00016 1.33337Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <p>
                Agency of Record (AOR) service enables off-payroll talents and
                organizations to work together in a streamlined and compliant
                manner, simplifying cross-border work relations for both
                parties.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-0 gap-y-10 md:grid-cols-2 md:gap-x-4">
              <div className="flex gap-x-4">
                <span className="protocol-icons">
                  <img loading="lazy" src={invoicingSvg} alt="" />
                </span>

                <div>
                  <h4 className="tracking-[ -0.04em] font-medium">
                    Streamlined compliance
                  </h4>

                  <h5 className="tracking-[ -0.01em] mt-1">
                    Remain compliant with local regulations with zero paperwork.
                  </h5>
                </div>
              </div>

              <div className="flex gap-x-4">
                <span className="protocol-icons">
                  <img loading="lazy" src={complianceSvg} alt="" />
                </span>

                <div>
                  <h4 className="tracking-[ -0.04em] font-medium">
                    Financial enhancement
                  </h4>

                  <h5 className="tracking-[ -0.01em] mt-1">
                    Ease off your payroll burden with a lighter connection
                    protocol.
                  </h5>
                </div>
              </div>

              <div className="flex gap-x-4">
                <span className="protocol-icons">
                  <img loading="lazy" src={attachmentDetachmentSvg} alt="" />
                </span>

                <div>
                  <h4 className="tracking-[ -0.04em] font-medium">
                    Easy attachment & detachment
                  </h4>

                  <h5 className="tracking-[ -0.01em] mt-1">
                    The agile connection protocol for engaging with your
                    workforce.
                  </h5>
                </div>
              </div>

              <div className="flex gap-x-4">
                <span className="protocol-icons">
                  <img loading="lazy" src={standardizationSvg} alt="" />
                </span>

                <div>
                  <h4 className="tracking-[ -0.04em] font-medium">
                    Cross-border standardization
                  </h4>

                  <h5 className="tracking-[ -0.01em] mt-1">
                    International work arrangements simplified for global
                    businesses.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-32">
        <div className="container">
          <h6 className="font-medium uppercase tracking-[1.12px] text-secondary">
            THE NEW WAY OF WORK
          </h6>
          <div className="mt-3 grid grid-cols-1 gap-16 text-secondary md:grid-cols-11">
            <div className="col-span-1 md:col-span-6">
              <h1 className="mt-3 font-medium tracking-[-0.04em]">
                Tailored for the new economy
              </h1>
            </div>

            <div className="col-span-1 self-end md:col-span-5">
              <h4 className="tracking-[-0.04em]">
                Ruul's technology caters to the unique needs of modern talents
                and businesses. Our mission is empowering agility, autonomy, and
                compliance for staying ahead in a fast-evolving economy.
              </h4>
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-lg bg-white px-10 pb-10 pt-[60px]">
              <span className="shadow-4px mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-white p-4">
                <svg
                  width={62}
                  height={62}
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_12_14)">
                    <path
                      d="M40.8059 27.1248L55.617 23.153C55.3587 22.3241 55.0466 21.5169 54.7021 20.7203L40.1386 24.6276L52.883 17.2759C52.4202 16.5439 51.925 15.8335 51.3976 15.1554L38.8469 22.3887L48.8788 12.3568C48.2545 11.754 47.6087 11.1943 46.9198 10.6561L37.017 20.5589L43.9059 8.62171C43.1632 8.19116 42.3882 7.79289 41.6025 7.43768L34.7781 19.2672L38.2764 6.2106C37.4476 5.96303 36.608 5.76928 35.7684 5.60782L32.2917 18.6106V5.1988C31.8611 5.17727 31.4306 5.1665 31 5.1665C30.5695 5.1665 30.1389 5.17727 29.7084 5.1988V18.6106L26.2316 5.61859C25.3813 5.78005 24.5417 5.9738 23.7236 6.22136L27.2219 19.278L20.3868 7.44845C19.6011 7.80366 18.8368 8.20192 18.0834 8.63248L24.9722 20.5696L15.0695 10.6669C14.3913 11.205 13.7347 11.7648 13.1104 12.3675L23.1424 22.3995L10.6024 15.1554C10.075 15.8335 9.56911 16.5439 9.11703 17.2759L26.1778 27.1248H5.45731C5.32814 27.9859 5.24203 28.8471 5.19897 29.7082H56.8011C56.758 28.8471 56.6719 27.9859 56.5427 27.1248H40.8059Z"
                      fill="#082E2B"
                    />
                    <path
                      d="M5.45731 34.8748H21.1941L6.383 38.8467C6.64134 39.6755 6.95349 40.4828 7.29793 41.2794L21.8615 37.3721L9.11703 44.7238C9.57988 45.4557 10.075 46.1662 10.6024 46.8443L23.1531 39.6109L13.1212 49.6429C13.7455 50.2457 14.3913 50.8054 15.0802 51.3436L24.983 41.4408L18.0941 53.378C18.8368 53.8085 19.6118 54.2068 20.3976 54.562L27.2219 42.7325L23.7236 55.7891C24.5524 56.0366 25.392 56.2304 26.2316 56.3919L29.7084 43.3891V56.8009C30.1389 56.8224 30.5695 56.8332 31 56.8332C31.4306 56.8332 31.8611 56.8224 32.2917 56.8009V43.3891L35.7684 56.3811C36.6188 56.2196 37.4584 56.0259 38.2764 55.7783L34.7781 42.7217L41.6025 54.5512C42.3882 54.196 43.1525 53.7978 43.9059 53.3672L37.017 41.43L46.9198 51.3328C47.5979 50.7946 48.2545 50.2349 48.8788 49.6321L38.8469 39.6109L51.3868 46.855C51.9143 46.1769 52.4202 45.4665 52.8722 44.7346L35.8222 34.8748H56.5427C56.6719 34.0137 56.758 33.1526 56.8011 32.2915H5.19897C5.24203 33.1526 5.32814 34.0137 5.45731 34.8748Z"
                      fill="#082E2B"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_14">
                      <rect width={62} height={62} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <h2 className="mt-10 text-center font-medium tracking-[-0.04em]">
                For Talents
              </h2>

              <h6 className="mt-1 text-center font-medium uppercase tracking-[-0.08em]">
                in 120 countries
              </h6>

              <div className="mt-[42px] rounded-lg border border-primary p-5 text-center">
                <h5 className="tracking-[-0.04em]">
                  Empower your independent career with financial autonomy. Work
                  with any business worldwide, effortlessly and compliantly.
                </h5>
              </div>

              <div className="mx-auto mt-10 grid max-w-fit grid-cols-2 justify-items-start gap-x-8 gap-y-5">
                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Global Invoicing
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Payment Collection
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Borderless Banking
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Tax Assistance
                  </p>
                </span>
              </div>

              <Button
                text={"Explore Talent Solutions"}
                className={"mt-10 w-full py-4"}
                variant={"fill"}
                icon={
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />

              <p className="mt-5 text-center">
                <span className="font-medium">50k+</span> talents use Ruul
              </p>
            </div>

            <div className="rounded-lg bg-[#fec1ae] px-10 pb-10 pt-[60px]">
              <span className="shadow-4px mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-white p-4">
                <svg
                  width={55}
                  height={55}
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_12_6)">
                    <path
                      d="M12.6615 36.6668H0V27.7866H18.0469C23.1076 27.7866 27.2135 31.8925 27.2135 36.9533V55.0002H18.3333V42.3387L5.67188 55.0002H0V49.3283L12.6615 36.6668Z"
                      fill="#013E39"
                    />
                    <path
                      d="M36.6667 42.3387V55.0002H27.7865V36.9533C27.7865 31.8925 31.8924 27.7866 36.9532 27.7866H55V36.6668H42.3386L55 49.3283V55.0002H49.3282L36.6667 42.3387Z"
                      fill="#013E39"
                    />
                    <path
                      d="M42.3386 18.3333H55V27.2135H36.9532C31.8924 27.2135 27.7865 23.1076 27.7865 18.0469V0H36.6667V12.6615L49.3282 0H55V5.67188L42.3386 18.3333Z"
                      fill="#013E39"
                    />
                    <path
                      d="M18.3333 12.6615V0H27.2135V18.0469C27.2135 23.1076 23.1076 27.2135 18.0469 27.2135H0V18.3333H12.6615L0 5.67188V0H5.67188L18.3333 12.6615Z"
                      fill="#013E39"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_12_6">
                      <rect width={55} height={55} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>

              <h2 className="mt-10 text-center font-medium tracking-[-0.04em]">
                For Businesses
              </h2>

              <h6 className="mt-1 text-center font-medium uppercase tracking-[-0.08em]">
                in 120 countries
              </h6>

              <div className="mt-[42px] rounded-lg border border-primary p-5 text-center">
                <h5 className="tracking-[-0.04em]">
                  Stay agile by working with talents all around the world.
                  Streamline your talent operations with an easy attachment and
                  detachment protocol.
                </h5>
              </div>

              <div className="mx-auto mt-10 grid max-w-fit grid-cols-2 justify-items-start gap-y-5">
                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Agency of Record
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Multi-currency Payments
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Global Payroll
                  </p>
                </span>

                <span className="flex items-center justify-center gap-x-2">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="#cafdc6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                      rx={10}
                      fill="#013e39"
                    />
                    <path
                      d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                      fill="#cafdc6"
                    />
                  </svg>

                  <p className="font-medium tracking-[-0.01em]">
                    Talent Management
                  </p>
                </span>
              </div>

              <Button
                text={"Explore Business Solutions"}
                className={"mt-10 w-full py-4"}
                variant={"fill"}
                icon={
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                      fill="currentColor"
                    />
                  </svg>
                }
              />

              <p className="mt-5 text-center">
                <span className="font-medium">10k+</span> businesses use Ruul
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#feeeca] py-32">
        <div className="container">
          <h6 className="font-medium uppercase tracking-[1.12px]">
            WORK SOLUTIONS FOR TODAY
          </h6>
          <div className="mt-3 grid grid-cols-1 gap-16 md:grid-cols-11">
            <div className="col-span-1 md:col-span-6">
              <h1 className="mt-3 font-medium tracking-[-0.04em]">
                Remedies for the new work landscape
              </h1>
            </div>

            <div className="col-span-1 self-end md:col-span-5">
              <h4 className="tracking-[-0.04em]">
                Discover our smart worktech solutions and products designed to
                future-proof your work, and meet today's needs with ease.
              </h4>
            </div>
          </div>

          <div className="mt-24">
            <Tabs defaultIndex={1}>
              <div className="relative mx-auto flex w-full items-center rounded-[44px] border border-primary bg-white p-1 md:w-fit">
                <Tab title={"For Talents"} index={1} />
                <Tab title={"For Businesses"} index={2} />

                <svg
                  className="absolute left-full top-1 ml-2"
                  width={64}
                  height={64}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5601 22.8548C22.4563 21.7123 24.226 20.7663 25.7312 19.9829C28.7518 18.4126 30.6968 17.4757 30.5612 17.0544C30.4255 16.6332 28.2092 16.8918 24.8769 17.9969C22.9035 18.6534 20.9836 19.461 19.1334 20.4126C18.0835 20.955 17.0071 21.5535 15.9154 22.2393C15.3659 22.5718 14.8376 22.932 14.2786 23.3029C13.6057 23.7483 12.9983 24.2876 12.4742 24.9054C12.1329 25.3211 11.884 25.8075 11.7444 26.3317C11.6557 26.6949 11.632 27.0722 11.6744 27.4457C11.6104 27.5746 11.5963 27.7238 11.6347 27.8641C11.6731 28.0044 11.7613 28.1259 11.8821 28.2048C12.2047 28.9224 12.6853 29.5564 13.2865 30.0574C14.275 30.8836 15.1161 31.5505 15.9923 32.252C17.7059 33.6099 19.2822 34.8049 20.6615 35.7642C23.369 37.7005 25.1996 38.7364 25.5022 38.4198C25.8048 38.1033 24.5355 36.4731 22.2213 34.1183C21.0642 32.9409 19.6493 31.584 18.0497 30.0926C17.9727 30.0337 17.9002 29.9689 17.8329 29.8989C19.4193 30.2352 21.3913 30.6243 23.8424 31.1038C27.311 31.802 31.5807 32.7241 35.9167 34.0332C40.2121 35.2868 44.3793 36.971 48.3564 39.0607C51.5357 40.7238 54.5397 42.7176 57.3194 45.0096C59.4221 46.7588 60.6449 47.9601 60.8613 47.7908C61.0776 47.6216 60.2742 46.1098 58.4413 43.9501C55.9647 41.1421 53.1018 38.7122 49.9436 36.7376C45.9557 34.2315 41.6975 32.2073 37.2568 30.7068C33.1947 29.3182 29.0493 28.2063 24.8482 27.3787C20.5901 26.5227 17.7562 26.1301 15.8366 25.957C16.3774 25.5338 17.0789 25.078 17.6818 24.6683C18.6778 24.0042 19.654 23.3821 20.6142 22.8125"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <div className="mt-[72px]">
                <TabPanel index={1}>
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={59}
                          height={59}
                          viewBox="0 0 59 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5105 53.3994L21.5105 5.60791C21.9177 5.46963 22.3248 5.34671 22.7397 5.23148L22.7397 53.7759C22.3248 53.6606 21.9177 53.53 21.5105 53.3994Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.5938 51.1411L16.5937 7.85908C16.9932 7.62093 17.4081 7.39046 17.8229 7.17535L17.8229 51.8325C17.4081 51.6097 16.9932 51.3793 16.5938 51.1411Z"
                            fill="#013E39"
                          />
                          <path
                            d="M23.9688 54.0831L23.9687 4.91647C24.3759 4.82429 24.7831 4.74746 25.1979 4.67064L25.1979 54.3213C24.7831 54.2521 24.3759 54.1753 23.9688 54.0831Z"
                            fill="#013E39"
                          />
                          <path
                            d="M41.177 51.8247L41.177 7.16754C41.5918 7.38265 42.0067 7.61312 42.4062 7.85127L42.4062 51.1333C42.0067 51.3791 41.5918 51.6096 41.177 51.8247Z"
                            fill="#013E39"
                          />
                          <path
                            d="M43.6355 50.3574L43.6355 8.6349C44.058 8.91914 44.4652 9.21875 44.8647 9.53372L44.8647 49.4663C44.4652 49.7736 44.058 50.0732 43.6355 50.3574Z"
                            fill="#013E39"
                          />
                          <path
                            d="M14.1355 49.4663L14.1355 9.53372C14.535 9.22643 14.9421 8.92683 15.3647 8.6349L15.3647 50.3574C14.9421 50.0732 14.535 49.7736 14.1355 49.4663Z"
                            fill="#013E39"
                          />
                          <path
                            d="M36.2605 53.7759L36.2605 5.22379C36.6753 5.33903 37.0825 5.46194 37.4897 5.60023L37.4897 53.3918C37.0825 53.53 36.6753 53.6606 36.2605 53.7759Z"
                            fill="#013E39"
                          />
                          <path
                            d="M11.677 47.3152L11.677 11.6924C12.0688 11.2929 12.4836 10.9165 12.9062 10.5477L12.9062 48.4521C12.4836 48.0834 12.0688 47.707 11.677 47.3152Z"
                            fill="#013E39"
                          />
                          <path
                            d="M19.052 52.4317L19.052 6.57611C19.4592 6.39174 19.8663 6.21504 20.2812 6.05371L20.2812 52.9541C19.8663 52.7851 19.4592 52.6161 19.052 52.4317Z"
                            fill="#013E39"
                          />
                          <path
                            d="M26.427 54.5059L26.427 4.49414C26.8342 4.44805 27.2413 4.40195 27.6562 4.37891L27.6562 54.6211C27.2413 54.5904 26.8342 54.552 26.427 54.5059Z"
                            fill="#013E39"
                          />
                          <path
                            d="M31.3438 54.6211L31.3437 4.37891C31.7586 4.40964 32.1658 4.44805 32.5729 4.49414L32.5729 54.5059C32.1658 54.552 31.7586 54.5904 31.3438 54.6211Z"
                            fill="#013E39"
                          />
                          <path
                            d="M29.5001 54.6978C29.2927 54.6978 29.0929 54.6901 28.8855 54.6824L28.8855 4.31728C29.0929 4.3096 29.2927 4.30192 29.5001 4.30192C29.7075 4.30192 29.9072 4.3096 30.1147 4.31728L30.1147 54.6824C29.9072 54.6901 29.7075 54.6978 29.5001 54.6978Z"
                            fill="#013E39"
                          />
                          <path
                            d="M33.802 54.3213L33.802 4.67064C34.2168 4.73978 34.624 4.82429 35.0312 4.91647L35.0312 54.0831C34.624 54.1753 34.2168 54.2521 33.802 54.3213Z"
                            fill="#013E39"
                          />
                          <path
                            d="M38.7188 52.9463L38.7187 6.0459C39.1336 6.20723 39.5408 6.38392 39.9479 6.56829L39.9479 52.4239C39.5408 52.6159 39.1336 52.785 38.7188 52.9463Z"
                            fill="#013E39"
                          />
                          <path
                            d="M53.4688 21.7256C55.1051 26.7805 55.1051 32.2273 53.4688 37.2822V21.7256Z"
                            fill="#013E39"
                          />
                          <path
                            d="M9.21875 44.4494L9.21875 14.5499C9.61055 14.0198 10.0177 13.5128 10.4479 13.0211L10.4479 45.9858C10.0177 45.4865 9.61055 44.9795 9.21875 44.4494Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.552 45.9785L48.552 13.0138C48.9822 13.5055 49.3894 14.0202 49.7812 14.5426L49.7812 44.4421C49.3894 44.9798 48.9822 45.4868 48.552 45.9785Z"
                            fill="#013E39"
                          />
                          <path
                            d="M4.302 29.5001C4.302 26.8574 4.71685 24.2377 5.53117 21.7256L5.53117 37.2822C4.71685 34.7624 4.302 32.1428 4.302 29.5001Z"
                            fill="#013E39"
                          />
                          <path
                            d="M51.0105 42.6294V16.3713C51.4561 17.1011 51.8709 17.8617 52.2397 18.6299V40.3631C51.8709 41.139 51.4561 41.8919 51.0105 42.6294Z"
                            fill="#013E39"
                          />
                          <path
                            d="M46.0938 48.4521L46.0937 10.5477C46.5163 10.9165 46.9311 11.2929 47.3229 11.6924L47.3229 47.3152C46.9311 47.707 46.5163 48.0834 46.0938 48.4521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M6.7605 40.3631L6.7605 18.6299C7.12925 17.854 7.54409 17.1011 7.98966 16.3713L7.98966 42.6294C7.54409 41.8919 7.12925 41.139 6.7605 40.3631Z"
                            fill="#013E39"
                          />
                          <path
                            d="M29.5001 46.7085C19.9971 46.7085 12.2917 39.0032 12.2917 29.5002C12.2917 19.9972 19.9971 12.2918 29.5001 12.2918C39.0031 12.2918 46.7084 19.9972 46.7084 29.5002C46.7084 39.0032 39.0031 46.7085 29.5001 46.7085ZM29.5001 22.7397C25.7665 22.7397 22.7397 25.7666 22.7397 29.5002C22.7397 33.2338 25.7665 36.2606 29.5001 36.2606C33.2337 36.2606 36.2605 33.2338 36.2605 29.5002C36.2605 25.7666 33.2337 22.7397 29.5001 22.7397Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Global Invoicing
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Invoice your clients across 120 countries compliantly
                        and get paid without having to set up a legal entity.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Free account setup
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Multi-currency invoicing
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Secure payments
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Get paid faster
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Global Invoicing"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab1grid2.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab1grid3.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={49}
                          height={49}
                          viewBox="0 0 49 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5001 32.1769C28.74 32.1769 32.1772 28.7398 32.1772 24.4998C32.1772 20.2599 28.74 16.8228 24.5001 16.8228C20.2601 16.8228 16.823 20.2599 16.823 24.4998C16.823 28.7398 20.2601 32.1769 24.5001 32.1769Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 24.4998C40.5521 28.7397 37.1148 32.1769 32.875 32.1769V16.8228C37.1148 16.8228 40.5521 20.26 40.5521 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.9271 24.4998C48.9271 28.7397 45.4898 32.1769 41.25 32.1769V16.8228C45.4898 16.8228 48.9271 20.26 48.9271 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 24.4998C8.448 20.26 11.8852 16.8228 16.1251 16.8228V32.1769C11.8852 32.1769 8.448 28.7397 8.448 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M0.072998 24.4998C0.072998 20.26 3.51024 16.8228 7.75008 16.8228V32.1769C3.51024 32.1769 0.072998 28.7397 0.072998 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 8.44775C28.7399 8.44775 32.1772 11.885 32.1772 16.1248H16.823C16.823 11.885 20.2602 8.44775 24.5001 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 0.0727539C28.7399 0.0727539 32.1772 3.50999 32.1772 7.74984H16.823C16.823 3.50999 20.2602 0.0727539 24.5001 0.0727539Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 40.5521C20.2602 40.5521 16.823 37.1148 16.823 32.875H32.1772C32.1772 37.1148 28.7399 40.5521 24.5001 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 48.9271C20.2602 48.9271 16.823 45.4898 16.823 41.25H32.1772C32.1772 45.4898 28.7399 48.9271 24.5001 48.9271Z"
                            fill="#013E39"
                          />
                          <path
                            d="M32.875 40.5521V32.875H40.5521C40.5521 37.1148 37.1148 40.5521 32.875 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 16.1248H32.875V8.44775C37.1148 8.44775 40.5521 11.885 40.5521 16.1248Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.1251 8.44775V16.1248H8.448C8.448 11.885 11.8852 8.44775 16.1251 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 32.875H16.1251V40.5521C11.8852 40.5521 8.448 37.1148 8.448 32.875Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Payment Collection
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Ensure a seamless, business-friendly checkout for your
                        clients and accelerate your payment process.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Secure payment processing
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Flexible pay-out options
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            140+ currencies
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Get paid within 1 business day
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Payment Collection"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={43}
                          height={43}
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6_7334)">
                            <path
                              d="M13.5876 41.4902L13.5876 1.50961C15.7522 0.6547 18.0441 0.145393 20.3723 0.0180664L20.3723 42.9635C18.0441 42.8544 15.7522 42.3632 13.5876 41.4902Z"
                              fill="#013E39"
                            />
                            <path
                              d="M7.93053 38.1794L7.93053 4.83805C9.31293 3.7103 10.8409 2.76445 12.4597 2.00049L12.4597 41.017C10.8227 40.253 9.31293 39.3072 7.93053 38.1794Z"
                              fill="#013E39"
                            />
                            <path
                              d="M21.5 43L21.5 0C33.3777 0 43 9.62225 43 21.5C43 33.3778 33.3777 43 21.5 43Z"
                              fill="#013E39"
                            />
                            <path
                              d="M3.40154 33.0864L3.40154 9.91295C4.36559 8.42141 5.49333 7.03901 6.80298 5.82031L6.80298 37.179C5.49333 35.9603 4.3474 34.5961 3.40154 33.0864Z"
                              fill="#013E39"
                            />
                            <path
                              d="M-0.000127077 21.4996C-0.000127077 18.1709 0.763831 14.8786 2.25537 11.8955L2.25537 31.1036C0.763831 28.1206 -0.000127077 24.8282 -0.000127077 21.4996Z"
                              fill="#013E39"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_7334">
                              <rect width={43} height={43} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Banking{" "}
                        <span className="text-[24px]">(Coming Soon)</span>
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Integrated banking with zero friction. Create a
                        borderless account — save, spend and track easily, from
                        one place.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Available in 120 countries
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Compliance-integrated
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Virtual and physical cards
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            No setup fee
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Banking"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab1grid6.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab1grid7.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={49}
                          height={49}
                          viewBox="0 0 49 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5001 32.1769C28.74 32.1769 32.1772 28.7398 32.1772 24.4998C32.1772 20.2599 28.74 16.8228 24.5001 16.8228C20.2601 16.8228 16.823 20.2599 16.823 24.4998C16.823 28.7398 20.2601 32.1769 24.5001 32.1769Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 24.4998C40.5521 28.7397 37.1148 32.1769 32.875 32.1769V16.8228C37.1148 16.8228 40.5521 20.26 40.5521 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.9271 24.4998C48.9271 28.7397 45.4898 32.1769 41.25 32.1769V16.8228C45.4898 16.8228 48.9271 20.26 48.9271 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 24.4998C8.448 20.26 11.8852 16.8228 16.1251 16.8228V32.1769C11.8852 32.1769 8.448 28.7397 8.448 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M0.072998 24.4998C0.072998 20.26 3.51024 16.8228 7.75008 16.8228V32.1769C3.51024 32.1769 0.072998 28.7397 0.072998 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 8.44775C28.7399 8.44775 32.1772 11.885 32.1772 16.1248H16.823C16.823 11.885 20.2602 8.44775 24.5001 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 0.0727539C28.7399 0.0727539 32.1772 3.50999 32.1772 7.74984H16.823C16.823 3.50999 20.2602 0.0727539 24.5001 0.0727539Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 40.5521C20.2602 40.5521 16.823 37.1148 16.823 32.875H32.1772C32.1772 37.1148 28.7399 40.5521 24.5001 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 48.9271C20.2602 48.9271 16.823 45.4898 16.823 41.25H32.1772C32.1772 45.4898 28.7399 48.9271 24.5001 48.9271Z"
                            fill="#013E39"
                          />
                          <path
                            d="M32.875 40.5521V32.875H40.5521C40.5521 37.1148 37.1148 40.5521 32.875 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 16.1248H32.875V8.44775C37.1148 8.44775 40.5521 11.885 40.5521 16.1248Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.1251 8.44775V16.1248H8.448C8.448 11.885 11.8852 8.44775 16.1251 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 32.875H16.1251V40.5521C11.8852 40.5521 8.448 37.1148 8.448 32.875Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Tax Assistance
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Streamline your self-employed tax filing with
                        professional guidance, ensuring accuracy and optimizing
                        earnings.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Precise calculation & filing
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            100% online process
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Earning maximization
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Personalized consultation
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Tax Assistance"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </TabPanel>
                <TabPanel index={2}>
                  <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={59}
                          height={59}
                          viewBox="0 0 59 59"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.5105 53.3994L21.5105 5.60791C21.9177 5.46963 22.3248 5.34671 22.7397 5.23148L22.7397 53.7759C22.3248 53.6606 21.9177 53.53 21.5105 53.3994Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.5938 51.1411L16.5937 7.85908C16.9932 7.62093 17.4081 7.39046 17.8229 7.17535L17.8229 51.8325C17.4081 51.6097 16.9932 51.3793 16.5938 51.1411Z"
                            fill="#013E39"
                          />
                          <path
                            d="M23.9688 54.0831L23.9687 4.91647C24.3759 4.82429 24.7831 4.74746 25.1979 4.67064L25.1979 54.3213C24.7831 54.2521 24.3759 54.1753 23.9688 54.0831Z"
                            fill="#013E39"
                          />
                          <path
                            d="M41.177 51.8247L41.177 7.16754C41.5918 7.38265 42.0067 7.61312 42.4062 7.85127L42.4062 51.1333C42.0067 51.3791 41.5918 51.6096 41.177 51.8247Z"
                            fill="#013E39"
                          />
                          <path
                            d="M43.6355 50.3574L43.6355 8.6349C44.058 8.91914 44.4652 9.21875 44.8647 9.53372L44.8647 49.4663C44.4652 49.7736 44.058 50.0732 43.6355 50.3574Z"
                            fill="#013E39"
                          />
                          <path
                            d="M14.1355 49.4663L14.1355 9.53372C14.535 9.22643 14.9421 8.92683 15.3647 8.6349L15.3647 50.3574C14.9421 50.0732 14.535 49.7736 14.1355 49.4663Z"
                            fill="#013E39"
                          />
                          <path
                            d="M36.2605 53.7759L36.2605 5.22379C36.6753 5.33903 37.0825 5.46194 37.4897 5.60023L37.4897 53.3918C37.0825 53.53 36.6753 53.6606 36.2605 53.7759Z"
                            fill="#013E39"
                          />
                          <path
                            d="M11.677 47.3152L11.677 11.6924C12.0688 11.2929 12.4836 10.9165 12.9062 10.5477L12.9062 48.4521C12.4836 48.0834 12.0688 47.707 11.677 47.3152Z"
                            fill="#013E39"
                          />
                          <path
                            d="M19.052 52.4317L19.052 6.57611C19.4592 6.39174 19.8663 6.21504 20.2812 6.05371L20.2812 52.9541C19.8663 52.7851 19.4592 52.6161 19.052 52.4317Z"
                            fill="#013E39"
                          />
                          <path
                            d="M26.427 54.5059L26.427 4.49414C26.8342 4.44805 27.2413 4.40195 27.6562 4.37891L27.6562 54.6211C27.2413 54.5904 26.8342 54.552 26.427 54.5059Z"
                            fill="#013E39"
                          />
                          <path
                            d="M31.3438 54.6211L31.3437 4.37891C31.7586 4.40964 32.1658 4.44805 32.5729 4.49414L32.5729 54.5059C32.1658 54.552 31.7586 54.5904 31.3438 54.6211Z"
                            fill="#013E39"
                          />
                          <path
                            d="M29.5001 54.6978C29.2927 54.6978 29.0929 54.6901 28.8855 54.6824L28.8855 4.31728C29.0929 4.3096 29.2927 4.30192 29.5001 4.30192C29.7075 4.30192 29.9072 4.3096 30.1147 4.31728L30.1147 54.6824C29.9072 54.6901 29.7075 54.6978 29.5001 54.6978Z"
                            fill="#013E39"
                          />
                          <path
                            d="M33.802 54.3213L33.802 4.67064C34.2168 4.73978 34.624 4.82429 35.0312 4.91647L35.0312 54.0831C34.624 54.1753 34.2168 54.2521 33.802 54.3213Z"
                            fill="#013E39"
                          />
                          <path
                            d="M38.7188 52.9463L38.7187 6.0459C39.1336 6.20723 39.5408 6.38392 39.9479 6.56829L39.9479 52.4239C39.5408 52.6159 39.1336 52.785 38.7188 52.9463Z"
                            fill="#013E39"
                          />
                          <path
                            d="M53.4688 21.7256C55.1051 26.7805 55.1051 32.2273 53.4688 37.2822V21.7256Z"
                            fill="#013E39"
                          />
                          <path
                            d="M9.21875 44.4494L9.21875 14.5499C9.61055 14.0198 10.0177 13.5128 10.4479 13.0211L10.4479 45.9858C10.0177 45.4865 9.61055 44.9795 9.21875 44.4494Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.552 45.9785L48.552 13.0138C48.9822 13.5055 49.3894 14.0202 49.7812 14.5426L49.7812 44.4421C49.3894 44.9798 48.9822 45.4868 48.552 45.9785Z"
                            fill="#013E39"
                          />
                          <path
                            d="M4.302 29.5001C4.302 26.8574 4.71685 24.2377 5.53117 21.7256L5.53117 37.2822C4.71685 34.7624 4.302 32.1428 4.302 29.5001Z"
                            fill="#013E39"
                          />
                          <path
                            d="M51.0105 42.6294V16.3713C51.4561 17.1011 51.8709 17.8617 52.2397 18.6299V40.3631C51.8709 41.139 51.4561 41.8919 51.0105 42.6294Z"
                            fill="#013E39"
                          />
                          <path
                            d="M46.0938 48.4521L46.0937 10.5477C46.5163 10.9165 46.9311 11.2929 47.3229 11.6924L47.3229 47.3152C46.9311 47.707 46.5163 48.0834 46.0938 48.4521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M6.7605 40.3631L6.7605 18.6299C7.12925 17.854 7.54409 17.1011 7.98966 16.3713L7.98966 42.6294C7.54409 41.8919 7.12925 41.139 6.7605 40.3631Z"
                            fill="#013E39"
                          />
                          <path
                            d="M29.5001 46.7085C19.9971 46.7085 12.2917 39.0032 12.2917 29.5002C12.2917 19.9972 19.9971 12.2918 29.5001 12.2918C39.0031 12.2918 46.7084 19.9972 46.7084 29.5002C46.7084 39.0032 39.0031 46.7085 29.5001 46.7085ZM29.5001 22.7397C25.7665 22.7397 22.7397 25.7666 22.7397 29.5002C22.7397 33.2338 25.7665 36.2606 29.5001 36.2606C33.2337 36.2606 36.2605 33.2338 36.2605 29.5002C36.2605 25.7666 33.2337 22.7397 29.5001 22.7397Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Agency of Record
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Work with off-payroll talents compliantly, regardless of
                        their location. Save resources by working in a B2B
                        arrangement.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            B2B invoicing
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Simplified compliance
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Cross-border standardization
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Flexible & cost-efficient
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore AOR"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab2grid2.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab2grid3.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={43}
                          height={43}
                          viewBox="0 0 43 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_6_7334)">
                            <path
                              d="M13.5876 41.4902L13.5876 1.50961C15.7522 0.6547 18.0441 0.145393 20.3723 0.0180664L20.3723 42.9635C18.0441 42.8544 15.7522 42.3632 13.5876 41.4902Z"
                              fill="#013E39"
                            />
                            <path
                              d="M7.93053 38.1794L7.93053 4.83805C9.31293 3.7103 10.8409 2.76445 12.4597 2.00049L12.4597 41.017C10.8227 40.253 9.31293 39.3072 7.93053 38.1794Z"
                              fill="#013E39"
                            />
                            <path
                              d="M21.5 43L21.5 0C33.3777 0 43 9.62225 43 21.5C43 33.3778 33.3777 43 21.5 43Z"
                              fill="#013E39"
                            />
                            <path
                              d="M3.40154 33.0864L3.40154 9.91295C4.36559 8.42141 5.49333 7.03901 6.80298 5.82031L6.80298 37.179C5.49333 35.9603 4.3474 34.5961 3.40154 33.0864Z"
                              fill="#013E39"
                            />
                            <path
                              d="M-0.000127077 21.4996C-0.000127077 18.1709 0.763831 14.8786 2.25537 11.8955L2.25537 31.1036C0.763831 28.1206 -0.000127077 24.8282 -0.000127077 21.4996Z"
                              fill="#013E39"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_6_7334">
                              <rect width={43} height={43} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Payments
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Pay via credit card or bank transfer in any currency.
                        Manage payments to your talents on a single platform.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Mass pay-out
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Compliant
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            140+ currency options
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Seamless & secure
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Payments"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={49}
                          height={49}
                          viewBox="0 0 49 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5001 32.1769C28.74 32.1769 32.1772 28.7398 32.1772 24.4998C32.1772 20.2599 28.74 16.8228 24.5001 16.8228C20.2601 16.8228 16.823 20.2599 16.823 24.4998C16.823 28.7398 20.2601 32.1769 24.5001 32.1769Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 24.4998C40.5521 28.7397 37.1148 32.1769 32.875 32.1769V16.8228C37.1148 16.8228 40.5521 20.26 40.5521 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.9271 24.4998C48.9271 28.7397 45.4898 32.1769 41.25 32.1769V16.8228C45.4898 16.8228 48.9271 20.26 48.9271 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 24.4998C8.448 20.26 11.8852 16.8228 16.1251 16.8228V32.1769C11.8852 32.1769 8.448 28.7397 8.448 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M0.072998 24.4998C0.072998 20.26 3.51024 16.8228 7.75008 16.8228V32.1769C3.51024 32.1769 0.072998 28.7397 0.072998 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 8.44775C28.7399 8.44775 32.1772 11.885 32.1772 16.1248H16.823C16.823 11.885 20.2602 8.44775 24.5001 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 0.0727539C28.7399 0.0727539 32.1772 3.50999 32.1772 7.74984H16.823C16.823 3.50999 20.2602 0.0727539 24.5001 0.0727539Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 40.5521C20.2602 40.5521 16.823 37.1148 16.823 32.875H32.1772C32.1772 37.1148 28.7399 40.5521 24.5001 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 48.9271C20.2602 48.9271 16.823 45.4898 16.823 41.25H32.1772C32.1772 45.4898 28.7399 48.9271 24.5001 48.9271Z"
                            fill="#013E39"
                          />
                          <path
                            d="M32.875 40.5521V32.875H40.5521C40.5521 37.1148 37.1148 40.5521 32.875 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 16.1248H32.875V8.44775C37.1148 8.44775 40.5521 11.885 40.5521 16.1248Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.1251 8.44775V16.1248H8.448C8.448 11.885 11.8852 8.44775 16.1251 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 32.875H16.1251V40.5521C11.8852 40.5521 8.448 37.1148 8.448 32.875Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Talent Management
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Leverage Ruul's integrated solutions to manage
                        onboarding and payments of your global talents on a
                        single platform.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Fast onboarding
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Background checks
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Global payments
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Regulatory compliance
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore Talent Management"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab2grid6.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="hidden rounded-lg border border-primary bg-[url('./assets/images/tab2grid7.svg')] bg-cover bg-center bg-no-repeat p-8 md:block" />
                    <div className="rounded-lg border border-primary bg-white p-10">
                      <span className="shadow-4px flex h-[72px] w-[72px] items-center justify-center rounded-lg border border-primary bg-secondary p-4">
                        <svg
                          width={49}
                          height={49}
                          viewBox="0 0 49 49"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24.5001 32.1769C28.74 32.1769 32.1772 28.7398 32.1772 24.4998C32.1772 20.2599 28.74 16.8228 24.5001 16.8228C20.2601 16.8228 16.823 20.2599 16.823 24.4998C16.823 28.7398 20.2601 32.1769 24.5001 32.1769Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 24.4998C40.5521 28.7397 37.1148 32.1769 32.875 32.1769V16.8228C37.1148 16.8228 40.5521 20.26 40.5521 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M48.9271 24.4998C48.9271 28.7397 45.4898 32.1769 41.25 32.1769V16.8228C45.4898 16.8228 48.9271 20.26 48.9271 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 24.4998C8.448 20.26 11.8852 16.8228 16.1251 16.8228V32.1769C11.8852 32.1769 8.448 28.7397 8.448 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M0.072998 24.4998C0.072998 20.26 3.51024 16.8228 7.75008 16.8228V32.1769C3.51024 32.1769 0.072998 28.7397 0.072998 24.4998Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 8.44775C28.7399 8.44775 32.1772 11.885 32.1772 16.1248H16.823C16.823 11.885 20.2602 8.44775 24.5001 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 0.0727539C28.7399 0.0727539 32.1772 3.50999 32.1772 7.74984H16.823C16.823 3.50999 20.2602 0.0727539 24.5001 0.0727539Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 40.5521C20.2602 40.5521 16.823 37.1148 16.823 32.875H32.1772C32.1772 37.1148 28.7399 40.5521 24.5001 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M24.5001 48.9271C20.2602 48.9271 16.823 45.4898 16.823 41.25H32.1772C32.1772 45.4898 28.7399 48.9271 24.5001 48.9271Z"
                            fill="#013E39"
                          />
                          <path
                            d="M32.875 40.5521V32.875H40.5521C40.5521 37.1148 37.1148 40.5521 32.875 40.5521Z"
                            fill="#013E39"
                          />
                          <path
                            d="M40.5521 16.1248H32.875V8.44775C37.1148 8.44775 40.5521 11.885 40.5521 16.1248Z"
                            fill="#013E39"
                          />
                          <path
                            d="M16.1251 8.44775V16.1248H8.448C8.448 11.885 11.8852 8.44775 16.1251 8.44775Z"
                            fill="#013E39"
                          />
                          <path
                            d="M8.448 32.875H16.1251V40.5521C11.8852 40.5521 8.448 37.1148 8.448 32.875Z"
                            fill="#013E39"
                          />
                        </svg>
                      </span>

                      <h2 className="mt-10 font-medium tracking-[-0.04em]">
                        Employer of Record
                      </h2>

                      <h5 className="mt-5 font-medium tracking-[-0.04em]">
                        Hire remote employees globally without a local entity
                        and manage your workforce from a centralized platform.
                      </h5>

                      <div className="mt-10 grid grid-cols-2 justify-items-start gap-5">
                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Payroll processing
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            HR management
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            Multi-currency support
                          </p>
                        </span>

                        <span className="flex items-center justify-center gap-x-2">
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="#cafdc6"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x={2}
                              y={2}
                              width={20}
                              height={20}
                              rx={10}
                              fill="#013e39"
                            />
                            <path
                              d="M10.9003 14.118L17.3999 8L18.4004 8.94102L10.9003 16L6.40039 11.7647L7.40021 10.8237L10.9003 14.118Z"
                              fill="#cafdc6"
                            />
                          </svg>

                          <p className="font-medium tracking-[-0.01em]">
                            140 countries
                          </p>
                        </span>
                      </div>

                      <Button
                        text={"Explore EOR"}
                        className={"mt-10 w-full py-4"}
                        variant={"fill"}
                        icon={
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 11V8L16 12L12 16V13H8V11H12ZM12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2ZM12 20C16.42 20 20 16.42 20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20Z"
                              fill="currentColor"
                            />
                          </svg>
                        }
                      />
                    </div>
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="border-t border-primary bg-white py-32">
        <div className="container grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <div className="max-w-full md:max-w-[85%]">
              <h6 className="font-medium uppercase tracking-[1.12px]">
                HERE TO HELP
              </h6>

              <h1 className="mt-3 font-medium tracking-[-0.04em]">
                Common questions
              </h1>

              <h4 className="mt-6 max-w-full md:max-w-[90%]">
                Find the answers to frequently asked questions here.
              </h4>

              <div className="mt-12">
                <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                  <div className="flex items-center gap-x-2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                        />
                      </svg>
                    </span>

                    <p className="font-medium">Need further support?</p>
                  </div>

                  <Button
                    className={"mt-4 w-full md:mt-0 md:w-auto"}
                    text="Get Support"
                    variant="fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 mt-6 md:col-span-3 md:mt-0">
            <Accordion>
              <AccordionItem
                title="What does Ruul do?"
                content={`Ruul enables talents and organizations to work in compliance
                  through custom work solutions and all-in-one services for
                  remote work ranging from hiring/job finding to universally
                  recognized invoices, legal agreements, cross-currency
                  payments, global employment and compliance.`}
                index={1}
              />

              <AccordionItem
                title={`What is the difference of Ruul from payment providers?`}
                content={`Ruul is much more than a payment provider that you can just transfer money with. By using Ruul’s invoicing and payment features, you can make payouts for invoices that are generated on the system either by you or the solo talents you work with. To put it simpler terms, you buy the digital services provided by talents from Ruul, receive the corresponding invoice and pay for your purchase on one platform. For global employee payments, you can use our payroll solution which is integrated with a whole experience of global hiring and talent management solutions.`}
                index={2}
              />

              <AccordionItem
                title={`I am not able to find an answer to my question. What should I do?`}
                content={`You can contact our customer team through live chat anytime to get answers to all of your questions.`}
                index={3}
              />

              <AccordionItem
                title={`Do I need to be incorporated in order to use Ruul’s invoicing service?`}
                content={`No. On the contrary, Ruul is built for unincorporated freelancers to save them from the financial and mental burden of incorporation.`}
                index={4}
              />

              <AccordionItem
                title={`What are the advantages of Ruul over incorporation?`}
                content={`Establishing a company comes with financial burden, red tape and geographical limitations that challenge one’s autonomy. Using Ruul, solo talents avoid all costs of incorporation, rule out bureaucracy, save time and still stand free.`}
                index={5}
              />
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-primary py-32">
        <div className="container">
          <CustomSlider subTitle={"USER STORIES"} title={"Why they love Ruul"}>
            <div className="grid grid-cols-1 content-stretch gap-[48px] md:grid-cols-2">
              <div className="user-stories-card">
                <h5 className="tracking-[0.01em]">
                  Invoicing and payments are the most challenging parts of
                  working with freelancers. Thanks to Ruul, we are able to solve
                  these problems with their great products.
                </h5>

                <div>
                  <p className="font-medium">Tolga Turan</p>
                  <h5>
                    <em>Debite</em>
                  </h5>
                </div>
              </div>

              <div className="user-stories-card">
                <h5 className="tracking-[0.01em]">
                  I would like to express my sincere gratitude to the entire
                  team at Ruul for providing us with outstanding service. Your
                  dedication to meeting our needs was truly impressive.
                </h5>

                <div>
                  <p className="font-medium">Cristina J.</p>
                  <h5>
                    <em>io42</em>
                  </h5>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 content-stretch gap-[48px] md:grid-cols-2">
              <div className="user-stories-card">
                <h5 className="tracking-[0.01em]">
                  This is a very convenient way of paying freelancers, it was
                  easy and uncomplicated. Great service and support! I
                  definitely recommend it!
                </h5>

                <div>
                  <p className="font-medium">Fabio Minuzzi</p>
                  <h5>
                    <em>The Gate Music</em>
                  </h5>
                </div>
              </div>

              <div className="user-stories-card">
                <h5 className="tracking-[0.01em]">
                  Ruul enabled me to have easy access to the contractor invoices
                  and handle payments efficiently. I’m also very happy with the
                  way my inquiries were addressed.
                </h5>

                <div>
                  <p className="font-medium">Joanna Dworniczak</p>
                  <h5>
                    <em>kyu Collective</em>
                  </h5>
                </div>
              </div>
            </div>
          </CustomSlider>
        </div>
      </section>

      <section className="bg-secondary py-32">
        <div className="container">
          <div className="mx-auto w-full max-w-[650px] text-center">
            <h6 className="font-medium uppercase tracking-[1.12px]">
              GET STARTED NOW
            </h6>

            <h1 className="mt-3 font-medium tracking-[-0.04em]">
              Grow and thrive without borders
            </h1>

            <h4 className="mt-6">
              Join 50k+ talents and 10k+ businesses from 120 countries to
              discover how effortless global work can be with Ruul's smart
              worktech solutions.
            </h4>

            <div className="mt-10 flex items-center justify-center space-x-6">
              <Button
                className={"py-4"}
                text={`I'm a Talent`}
                variant={"fill"}
              />
              <Button
                className={"py-4"}
                text={`I'm a Business`}
                variant={"outline"}
              />
            </div>

            <div className="mt-[72px] flex items-center justify-center space-x-2">
              <span>Excellent 4.7 out of 5</span>
              <svg
                role="img"
                aria-labelledby="trustpilotLogo-2u3dxlpqgqu"
                viewBox="0 0 126 31"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[80px]"
              >
                <title id="trustpilotLogo-2u3dxlpqgqu">Trustpilot</title>
                <path
                  className="tp-logo__text"
                  d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z"
                  fill="#191919"
                />
                <path
                  className="tp-logo__star"
                  fill="#00B67A"
                  d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
                />
                <path
                  className="tp-logo__star-notch"
                  fill="#005128"
                  d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
                />
              </svg>
            </div>
          </div>

          <div className="mt-[65px] overflow-hidden rounded-lg border border-primary">
            <img
              className="h-full w-full object-cover"
              src={growAndThriveSectionSvg}
              alt="section-img"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-primary bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-2 items-center justify-items-stretch gap-[64px]">
            <div>
              <h1 className="font-medium tracking-[-0.04em]">
                Explore and spread: Ruul Blog
              </h1>

              <h4 className="mt-10">
                Ruul Blog serves as a knowledge center for current trends in
                contemporary work culture, freelancing, digital nomad
                lifestyles, and beyond.
              </h4>
            </div>
            <div>
              <div className="ml-auto w-full max-w-[420px]">
                <form className="flex items-center gap-x-3 rounded-lg border border-primary p-1">
                  <input
                    type="email"
                    required={true}
                    placeholder="Enter your email"
                    className="min-h-[48px] flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-primary"
                  />
                  <Button text={"Subscribe"} variant="fill" />
                </form>

                <h6 className="mt-5">
                  Join our newsletter to keep an eye on the latest developments
                  in the modern work culture.
                </h6>
              </div>
            </div>
          </div>

          <div className="mt-[60px] flex items-end justify-between rounded-lg border border-primary bg-[url('./assets/images/blog-section-bg.jpg')] bg-cover bg-center p-8">
            <div className="max-w-[420px] rounded-lg border border-primary bg-white p-8">
              <h3 className="font-medium leading-[1.4] tracking-[-0.03em]">
                Talent Talks #4: Meet photographer & cinematographer Vasilis
                Barahanos
              </h3>

              <div className="mt-16 flex items-center gap-x-2">
                <span className="block h-12 w-12 overflow-hidden rounded-full border border-primary bg-secondary">
                  <img
                    className="h-full w-full object-cover"
                    src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads02&accessoriesType=Round&hairColor=Platinum&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Gray01&eyeType=Default&eyebrowType=Angry&mouthType=Eating&skinColor=Black"
                    alt=""
                  />
                </span>

                <div>
                  <p className="font-medium">Oganigwe Akaraka</p>
                  <span className="text-xs">April 23, 1996.</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-x-3 pb-8">
              <Button text={"Read More"} variant={"fill"} />
              <Button text={"Discover blog"} variant={"outline"} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

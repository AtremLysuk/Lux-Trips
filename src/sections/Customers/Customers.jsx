import { Swiper, SwiperSlide } from 'swiper/react';
import { useForm } from 'react-hook-form';
import CustomersCard from '@/components/CustomersCard/CustomersCard';
import { Navigation, Pagination } from 'swiper/modules';

const Customers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const customersCards = [
    {
      id: 1,
      imgUrl: '/images/customers/author-1.png',
      text: '“Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”',
      author: 'Eduard Hand',
      coauthor: 'Müller-Egerer',
    },
    {
      id: 2,
      imgUrl: '/images/customers/author-2.png',
      text: '“We want to visit Manali from long time. Abhishek from ideal tour give us the best quote for Manali tour. He was very supportive and approachable at any time. He made our trip hassle-free. Thanks for your great help Abhishek...Ideal Tour..!!!”',
      author: 'Marie Kähler',
      coauthor: 'Lekkerland',
    },
    {
      id: 3,
      imgUrl: '/images/customers/author-1.png',
      text: '“Well organized trip, All arranged well by Arooz. Special thanks to Aijaz Bhai for the service and support given to us, all explained well and take us to all places as per our wish. It was a wonderful experience .... Thank you team”',
      author: 'Eduard Hand',
      coauthor: 'Müller-Egerer',
    },
    {
      id: 4,
      imgUrl: '/images/customers/author-2.png',
      text: '“We want to visit Manali from long time. Abhishek from ideal tour give us the best quote for Manali tour. He was very supportive and approachable at any time. He made our trip hassle-free. Thanks for your great help Abhishek...Ideal Tour..!!!”',
      author: 'Marie Kähler',
      coauthor: 'Lekkerland',
    },
  ];

  return (
    <section className="customers">
      <div className="customers__container container">
        <div className="customers__title-wrapper">
          <h2 className="customers__title h2">Customers reviews</h2>
          <svg
            width="112"
            height="212"
            viewBox="0 0 112 212"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.9971 191.388C39.4362 160.046 27.8503 138.255 10.8613 105.885L33.6807 62.832L33.6816 62.8301L55.999 20.3818L78.498 62.832L78.499 62.8311L101.133 105.884L55.9971 191.388Z"
              stroke="white"
            />
            <path
              d="M55.999 210.699C35.6441 172.25 21.4309 145.569 0.564454 105.885L28.5537 53.1768L28.5547 53.1748L56.001 1.07031L83.6709 53.1758L111.433 105.883L55.999 210.699Z"
              stroke="white"
            />
          </svg>
        </div>

        <div className="customers__slider">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerGroup={1}
            slidesPerView={2}
            loop={true}
            navigation={{
              nextEl: '.customers__slider-next',
            }}
            pagination={{
              clickable: true,
              el: '.customers__slider-pagination',
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              900: {
                slidesPerView: 2,
              },
            }}
          >
            {customersCards.map((el) => (
              <SwiperSlide key={el.id}>
                <CustomersCard el={el} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="customers__slider-pagination"></div>
          <div className="customers__slider-next">
            <svg
              width="107"
              height="107"
              viewBox="0 0 107 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="53.0332"
                width="75"
                height="75"
                transform="rotate(-45 0 53.0332)"
                fill="#79655E"
              />
              <path
                d="M39.5332 52.5332H67.5332M67.5332 52.5332L59.3665 45.5332M67.5332 52.5332L59.3665 59.5332"
                stroke="white"
              />
            </svg>
          </div>
        </div>
        <div className="customers__contact">
          <h2 className="customers__contact-title h2">Contact</h2>
          <form
            className="customers__contact-form customers-form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="customers-form__name"
              {...register('name', {
                required: 'Это поле обязательно.',
                message: 'Минимальное колличество символов: 3.',
              })}
              type="text"
              id="name"
              placeholder="Mikhail"
              aria-label="Name Input"
            />
            {errors?.name && <p className="error">{errors.name.message}</p>}
            <input
              className="customers-form__phone"
              {...register('phone', {
                required: 'Это поле обязательно.',
                minLength: {
                  value: '3',
                  message: 'Минимальное колличество символов: 3.',
                },
                pattern: {
                  value: /^[\d() +-]+$/,
                  message: 'Поле должно содержать только цифры и знак "+".',
                },
              })}
              type="text"
              placeholder="+(888)-88-88-88"
              aria-label="Phone Input"
              minLength={5}
            />
            {errors?.phone && <p className="error">{errors.phone.message}</p>}
            <button type="submit" className="customers-form__btn">
              Call me back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Customers;

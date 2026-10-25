import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { EMAIL_PATTERN } from '@/constants/validation';
import '@/scss/blocks/_subscribe.scss';

const Subscribe = ({ className }) => {
  // Уникальные id для этого экземпляра блока: если Subscribe окажется
  // на странице дважды, id не повторятся и связи label/aria не перепутаются
  const id = useId();
  const titleId = `${id}-title`;
  const emailId = `${id}-email`;
  const errorId = `${id}-error`;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // Первая проверка — только при отправке, дальше ошибка обновляется на лету
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  // Email, на который подписались. Пока null — плашки нет, форма видна
  const [subscribedEmail, setSubscribedEmail] = useState(null);

  // Сюда попадаем, только если email прошёл проверку.
  // Отправки на сервер пока нет — показываем результат
  const onSubmit = ({ email }) => {
    setSubscribedEmail(email);
    reset();
  };

  return (
    <div className={classNames('subscribe', className && `subscribe--${className}`)}>
      <div className="subscribe__container container">
        <div className="subscribe__inner">
          <h2 className="subscribe__title h2" id={titleId}>
            Get weekly inspiration and expert advice
          </h2>

          <div className="subscribe__text">
            <p>Sign up for our Weekly Newsletter</p>
          </div>

          {/* Форма и плашка лежат в одной ячейке сетки друг на друге:
              блок всегда высотой с форму и не дёргается при смене.
              aria-live: скринридер сам прочитает плашку, когда она появится */}
          <div className="subscribe__body" aria-live="polite">
            {/* После подписки форма не удаляется, а прячется и держит высоту.
                inert — недоступна с клавиатуры и для скринридеров, пока скрыта */}
            <form
              className={classNames('subscribe__form', subscribedEmail && 'is-hidden')}
              aria-labelledby={titleId}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              inert={subscribedEmail ? true : undefined}
            >
              {/* Обёртка — точка отсчёта для текста ошибки под полем */}
              <div className="subscribe__field">
                {/* Подпись — только для скринридеров, поле — видно всем */}
                <label className="visually-hidden" htmlFor={emailId}>
                  Email Address
                </label>
                <input
                  {...register('email', {
                    required: 'Enter your email',
                    pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email' },
                  })}
                  className="subscribe__form-input"
                  type="email"
                  placeholder="example@gmail.com"
                  id={emailId}
                  autoComplete="email"
                  aria-invalid={errors.email ? 'true' : 'false'}
                  // Связываем поле с текстом ошибки: скринридер прочитает его при фокусе
                  aria-describedby={errors.email ? errorId : undefined}
                />
                {errors.email && (
                  <p className="subscribe__form-error" id={errorId}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button className="subscribe__form-button" type="submit">
                Subscribe
              </button>
            </form>

            {subscribedEmail && (
              <p className="subscribe__success">
                Thank you for subscribing! Our next newsletter will arrive at{' '}
                <strong>{subscribedEmail}</strong>.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
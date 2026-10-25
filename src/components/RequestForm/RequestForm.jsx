import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

// Максимум гостей в одной заявке
const MAX_GUESTS = 20;

// Символы, которые type="number" разрешает, но для количества гостей не нужны
const BLOCKED_NUMBER_KEYS = ['-', '+', 'e', 'E', '.', ','];

// Сегодняшняя дата в формате YYYY-MM-DD, как её отдаёт <input type="date">.
// Сдвигаем на часовой пояс, иначе toISOString() вернёт дату по UTC,
// и после полуночи по Киеву «сегодня» окажется вчерашним днём
const getToday = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().split('T')[0];
};

// 2026-10-25 → 25.10.2026 для показа в попапе.
// timeZone: 'UTC' — потому что new Date('2026-10-25') создаёт полночь по UTC,
// и в часовых поясах «западнее» дата показалась бы на день раньше
const formatDate = (value) =>
  new Date(value).toLocaleDateString('en-GB', { timeZone: 'UTC' }).replaceAll('/', '.');

const RequestForm = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
    watch,
  } = useForm({
    // Первая проверка — только при отправке формы
    mode: 'onSubmit',
    // После отправки ошибки обновляются на лету, пока пользователь исправляет поля
    reValidateMode: 'onChange',
  });

  const lenis = useLenis();
  const dialogRef = useRef(null);
  // Данные последней успешной заявки — показываем их в попапе
  const [submittedData, setSubmittedData] = useState(null);

  const today = getToday();

  const fields = [
    {
      label: 'dateFrom',
      name: 'dateFrom',
      type: 'date',
      id: 'date',
      rules: {
        required: 'Select a start date',
        validate: (value) => value >= today || 'Start date cannot be in the past',
        // При смене даты начала заново проверяем дату окончания
        deps: 'dateTo',
      },
    },
    {
      label: 'dateTo',
      name: 'dateTo',
      type: 'date',
      id: 'date',
      rules: {
        required: 'Select an end date',
        validate: (value) =>
          value > getValues('dateFrom') || 'End date must be after start date',
      },
    },
    {
      label: 'Number of guests',
      name: 'guests',
      placeholder: 'Number of guests',
      type: 'number',
      id: 'guests',
      rules: {
        required: 'Enter the number of guests',
        // Только цифры: отсекает 1.5, -2 и 1e3
        pattern: { value: /^\d+$/, message: 'Enter a whole number' },
        validate: {
          min: (value) => Number(value) >= 1 || 'At least 1 guest',
          max: (value) => Number(value) <= MAX_GUESTS || `Maximum ${MAX_GUESTS} guests`,
        },
      },
      // Подсказки браузеру: шаг стрелочек и цифровая клавиатура на телефоне
      inputProps: {
        min: 1,
        max: MAX_GUESTS,
        step: 1,
        inputMode: 'numeric',
        // Не даём набрать минус, плюс, e, точку и запятую
        onKeyDown: (e) => {
          if (BLOCKED_NUMBER_KEYS.includes(e.key)) e.preventDefault();
        },
        // Не даём вставить текст, в котором есть что-то кроме цифр
        onPaste: (e) => {
          const text = e.clipboardData.getData('text');
          if (!/^\d+$/.test(text)) e.preventDefault();
        },
      },
    },
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Vasya',
      type: 'text',
      id: 'name',
      rules: {
        required: 'Введите имя',
        pattern: {
          value: /^[\p{L}\p{M}][\p{L}\p{M}'\- ]{1,39}$/u,
          message: 'Введите корректное имя (2–40 символов, буквы, пробел, дефис или апостроф)',
        },
      },
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Vasya@gmail.com',
      type: 'email',
      id: 'email',
      rules: {
        required: 'Введите email',
        pattern: {
          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
          message: 'Введите корректный email',
        },
      },
    },
    { label: 'Special requests', name: 'message', placeholder: 'Type here...', type: 'textarea', id: 'textarea' },
  ];

  // Сюда попадаем, только если все поля прошли проверку
  const onSubmit = (data) => {
    setSubmittedData(data);
    // Очищаем поля, ошибки и состояние «форма отправлена»
    reset();
  };

  const onError = (errs) => {
    console.log('validation errors', errs);
  };

  // Открываем попап, когда данные уже отрисованы внутри него
  useEffect(() => {
    if (!submittedData) return;
    dialogRef.current?.showModal();
    // Пока открыт попап, страница под ним не должна прокручиваться
    lenis?.stop();
  }, [submittedData, lenis]);

  const closeDialog = () => dialogRef.current?.close();

  // Срабатывает при любом закрытии: кнопки, Esc, клик по фону
  const handleDialogClose = () => {
    lenis?.start();
    setSubmittedData(null);
  };

  // Клик по затемнённому фону закрывает попап.
  // Клик по фону приходится на сам <dialog>, клик по содержимому — на его детей
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) closeDialog();
  };

  return (
    <>
      {/* noValidate: отключаем встроенные подсказки браузера, все ошибки показываем сами */}
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="request__form"
        ref={ref}
        noValidate
      >
        <div className="request__form-wrapper">
          <div className="request__form-dates">
            {fields
              .filter((f) => f.id === 'date')
              .map((field) => (
                <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
                  {field.label}
                  <input
                    {...register(field.name, field.rules)}
                    className={classNames('request__form-input', `request__form-input--${field.name}`)}
                    type={field.type}
                    min={today}
                    // Помечаем поле с ошибкой: для скринридеров и для красной рамки в CSS
                    aria-invalid={errors[field.name] ? 'true' : 'false'}
                    // Дата не выбрана — красим маску дд.мм.гггг как плейсхолдер
                    data-empty={!watch(field.name)}
                  />
                  {errors[field.name] && <div className="form__error">{errors[field.name].message}</div>}
                </label>
              ))}
          </div>

          {fields
            .filter((f) => f.id !== 'date' && f.id !== 'textarea')
            .map((field) => (
              <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
                {field.label}
                <input
                  {...register(field.name, field.rules)}
                  {...field.inputProps}
                  className={classNames('request__form-input', `request__form-input--${field.name}`)}
                  type={field.type}
                  placeholder={field.placeholder}
                  // Помечаем поле с ошибкой: для скринридеров и для красной рамки в CSS
                  aria-invalid={errors[field.name] ? 'true' : 'false'}
                />
                {errors[field.name] && <div className="form__error">{errors[field.name].message}</div>}
              </label>
            ))}

          {fields
            .filter((f) => f.type === 'textarea')
            .map((field) => (
              <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
                {field.label}
                <textarea
                  {...register(field.name)}
                  className={classNames('request__form-input', `request__form-input--${field.name}`)}
                  placeholder={field.placeholder}
                  rows="4"
                />
              </label>
            ))}

          <div className="request__form-buttons form-buttons">
            <div className="request__form-button">
              <button className="request__form-button-submit" type="submit">Make A Request</button>
            </div>
            <span>OR</span>
            <div className="form-buttons__contacts">
              <a className="form-buttons__phone" href="tel:888888888">Call me back</a>
              <a className="form-buttons__email" href="mailto:Vasya@gmail.com">Email me back</a>
            </div>
          </div>
        </div>
      </form>

      {/* Попап вынесен за пределы формы: он не должен быть её частью */}
      <dialog
        ref={dialogRef}
        className="request-dialog"
        onClose={handleDialogClose}
        onClick={handleDialogClick}
        aria-labelledby="request-dialog-title"
      >
        {submittedData && (
          <div className="request-dialog__inner">
            <button
              type="button"
              className="request-dialog__x"
              onClick={closeDialog}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>

            {/* Ромбики — тот же декор, что под активным пунктом меню */}
            <img
              className="request-dialog__decor"
              src="/images/slides/icon-active.svg"
              alt=""
              width="36"
              height="24"
            />
            <p className="request-dialog__eyebrow">Request received</p>

            <h3 id="request-dialog-title" className="request-dialog__title">
              Thank you, {submittedData.name}!
            </h3>
            <p className="request-dialog__text">
              Our travel advisor will contact you shortly to confirm the details.
            </p>

            <dl className="request-dialog__list">
              <div className="request-dialog__row">
                <dt>Dates</dt>
                <dd>{formatDate(submittedData.dateFrom)} — {formatDate(submittedData.dateTo)}</dd>
              </div>
              <div className="request-dialog__row">
                <dt>Guests</dt>
                <dd>{submittedData.guests}</dd>
              </div>
              <div className="request-dialog__row">
                <dt>Email</dt>
                <dd>{submittedData.email}</dd>
              </div>
              {submittedData.message && (
                <div className="request-dialog__row request-dialog__row--column">
                  <dt>Special requests</dt>
                  <dd>{submittedData.message}</dd>
                </div>
              )}
            </dl>

            <button type="button" className="request-dialog__close" onClick={closeDialog}>
              Close
            </button>
          </div>
        )}
      </dialog>
    </>
  );
});

export default RequestForm;
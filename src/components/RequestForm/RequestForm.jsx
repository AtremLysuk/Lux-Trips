


import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';

const RequestForm = forwardRef((props, ref) => {

  const [isDateValid, setIsDateValid] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ mode: 'onChange' });

  const fields = [
    { label: 'dateFrom', name: 'dateFrom', placeholder: '01-01-2025', type: 'date', id: 'date' },
    { label: 'dateTo', name: 'dateTo', placeholder: '01-01-2025', type: 'date', id: 'date' },
    { label: 'Number of guests', name: 'guests', placeholder: 'Number of guests', type: 'number', id: 'guests' },
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Vasya',
      type: 'text',
      id: 'name',
      validatePattern: {
        value: /^[\p{L}\p{M}][\p{L}\p{M}'\- ]{1,39}$/u,
        message: 'Введите корректное имя (2–40 символов, буквы, пробел, дефис или апостроф)',
      },
      required: 'Введите имя',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Vasya@gmail.com',
      type: 'email',
      id: 'email',
      validatePattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: 'Введите корректный email',
      },
      required: 'Введите email',
    },
    { label: 'Special requests', name: 'message', placeholder: 'Type here...', type: 'textarea', id: 'textarea' },
  ];


  const onSubmit = (data) => {
    const dateFrom = new Date(getValues("dateFrom"))
    const dateTo = new Date(getValues("dateTo"))

    if(dateFrom < dateTo) {
      console.log(data)
    } else {
      throw new Error("wrong date")
    }

  };
  const onError = (errs) => {
    console.log('validation errors', errs);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className="request__form" ref={ref}>
      <div className="request__form-wrapper">
        <div className="request__form-dates">
          {fields
            .filter((f) => f.id === 'date')
            .map((field) => (
              <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
                {field.label}
                <input
                  {...register(field.name, { required: field.required || false })}
                  className={classNames('request__form-input', `request__form-input--${field.name}`)}
                  type={field.type}
                  placeholder={field.placeholder}
                />
                {errors[field.name] && <div className="form__error">{errors[field.name].message || 'Ошибка'}</div>}
              </label>
            ))}
        </div>

        {fields
          .filter((f) => f.id !== 'date' && f.id !== 'textarea')
          .map((field) => (
            <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
              {field.label}
              <input
                {...register(field.name, {
                  required: field.required || false,
                  ...(field.validatePattern ? { pattern: field.validatePattern } : {}),
                })}
                className={classNames('request__form-input', `request__form-input--${field.name}`)}
                type={field.type}
                placeholder={field.placeholder}
              />
              {errors[field.name] && <div className="form__error">{errors[field.name].message || 'Ошибка'}</div>}
            </label>
          ))}

        {fields
          .filter((f) => f.type === 'textarea')
          .map((field) => (
            <label key={field.name} className={classNames('request__form-label', `request__form-label--${field.name}`)}>
              {field.label}
              <textarea
                {...register(field.name, { required: false })}
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
  );
});

export default RequestForm;
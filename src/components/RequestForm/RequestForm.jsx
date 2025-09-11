import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { forwardRef } from 'react';

// import '@/scss/blocks/__request-form.scss';

const RequestForm = forwardRef((props, ref) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onChange' });

  const fields = [
    {
      label: 'dateFrom',
      name: 'dateFrom',
      placeholder: '01-01-2025',
      type: 'date',
      id: 'date',
    },
    {
      label: 'dateTo',
      name: 'dateTo',
      placeholder: '01-01-2025',
      type: 'date',
      id: 'date',
    },
    {
      label: 'Number of guests',
      name: 'guests',
      placeholder: 'Number of guests',
      type: 'number',
      id: 'guests',
    },
    {
      label: 'Name',
      name: 'name',
      placeholder: 'Vasya',
      type: 'text',
      id: 'name',
    },
    {
      label: 'Email',
      name: 'email',
      placeholder: 'Vasya@gmail.com',
      type: 'email',
      id: 'email',
    },
    {
      label: 'Special requests',
      name: 'message',
      placeholder: 'Type here...',
      type: 'textarea',
      id: 'textarea',
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="request__form" ref={ref}>
      <div className="request__form-wrapper">
        <div className="request__form-dates">
          {fields
            .filter((field) => field.id === 'date')
            .map((field) => (
              <label
                className={classNames(
                  'request__form-label',
                  `request__form-label--${field.name}`
                )}
                key={field.name}
              >
                {field.label}
                <input
                  {...register(field.name, { required: true })}
                  className={classNames(
                    'request__form-input',
                    `request__form-input--${field.name}`
                  )}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              </label>
            ))}
        </div>
        {fields
          .filter((field) => field.id !== 'date' && field.id !== 'textarea')
          .map((field) => (
            <label
              className={classNames(
                'request__form-label',
                `request__form-label--${field.name}`
              )}
              key={field.name}
            >
              {field.label}
              <input
                {...register(field.name, { required: true })}
                className={classNames(
                  'request__form-input',
                  `request__form-input--${field.name}`
                )}
                type={field.type}
                placeholder={field.placeholder}
              />
            </label>
          ))}
        {fields
          .filter((field) => field.type === 'textarea')
          .map((field) => (
            <label
              className={classNames(
                'request__form-label',
                `request__form-label--${field.name}`
              )}
              key={field.name}
            >
              {field.label}
              <textarea
                {...register(field.name, { required: true })}
                className={classNames(
                  'request__form-input',
                  `request__form-input--${field.name}`
                )}
                type={field.type}
                placeholder={field.placeholder}
                rows="4"
              />
            </label>
          ))}
        <div className="request__form-buttons form-buttons">
          <div className="request__form-button">
            <button className="request__form-button-submit" type="submit">
              Make A Request
            </button>
          </div>
          <span>OR</span>
          <div className="form-buttons__contacts">
            <a className="form-buttons__phone" href="tel:888888888">
              Call me back
            </a>
            <a className="form-buttons__email" href="mailto:Vasya@gmail.com">
              Email me back
            </a>
          </div>
        </div>
      </div>
    </form>
  );
});

export default RequestForm;

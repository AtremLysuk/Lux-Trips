import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { getToday } from '@/utils/date';

gsap.registerPlugin(useGSAP);

const ActiveTab = ({ item }) => {
  const innerRef = useRef(null);
  const { fields } = item;

  // onBlur — ошибка появляется, когда пользователь ушёл из поля, а не на каждой букве.
  // После первой ошибки проверка идёт при вводе (reValidateMode по умолчанию — onChange),
  // поэтому сообщение исчезает, как только значение исправлено
  const {
    register,
    handleSubmit,
    setFocus,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  // Строки вкладки выезжают слева по очереди.
  // ClientPage передаёт key={activeTab}, поэтому при смене вкладки компонент
  // монтируется заново и анимация запускается сама
  useGSAP(
    () => {
      gsap.fromTo(
        '.tabs-form__tab',
        { xPercent: -50, opacity: 0 },
        {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.08,
        },
      );
    },
    { scope: innerRef },
  );

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="tabs-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="tabs-form__inner" ref={innerRef}>
        {fields.map((field) => {
          const isDate = field.type === 'date';
          const isSelect = field.type === 'select';
          const error = errors[field.name];
          const errorId = `${field.name}-error`;

          // Общее для input и select: регистрация в форме и доступность
          const controlProps = {
            ...register(field.name, field.rules),
            id: field.name,
            autoComplete: field.autoComplete,
            // У даты и списка нет настоящего плейсхолдера —
            // пустое состояние красим как подсказку через data-empty
            'data-empty': isDate || isSelect ? !watch(field.name) : undefined,
            'aria-invalid': error ? 'true' : 'false',
            'aria-describedby': error ? errorId : undefined,
          };

          return (
            <div key={field.name} className="tabs-form__tab">
              <div className="tabs-form__tab-field">
                <label htmlFor={field.name}>{field.label}</label>

                {/* Обёртка — точка отсчёта для текста ошибки под полем */}
                <div className="tabs-form__control">
                  {isSelect ? (
                    <select {...controlProps} defaultValue="">
                      {/* Первый пункт — подсказка: выбрать его снова нельзя */}
                      <option value="" disabled>
                        {field.placeholder}
                      </option>
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      {...controlProps}
                      type={field.type}
                      placeholder={field.placeholder}
                      inputMode={field.inputMode}
                      // Убираем недопустимые символы до того, как значение прочитает react-hook-form
                      onInput={
                        field.sanitize
                          ? (e) => {
                              e.target.value = field.sanitize(e.target.value);
                            }
                          : undefined
                      }
                      // Дата рождения не может быть в будущем
                      max={isDate ? getToday() : undefined}
                    />
                  )}

                  {error && (
                    <p id={errorId} className="tabs-form__error" role="alert">
                      {error.message}
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  // Без уточнения скринридер прочитает несколько одинаковых кнопок «Edit»
                  aria-label={`Edit ${field.label}`}
                  onClick={() => setFocus(field.name)}
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default ActiveTab;
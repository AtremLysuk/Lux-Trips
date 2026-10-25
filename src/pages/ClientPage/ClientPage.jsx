import { useRef, useState } from 'react';
import classNames from 'classnames';
import ActiveTab from './ActiveTab';
import { EMAIL_PATTERN } from '@/constants/validation';
import '@/scss/blocks/_client.scss';

// Поля профиля пустые: placeholder подсказывает, что вводить.
// rules — правила react-hook-form, sanitize — очистка ввода «на лету»,
// options — варианты для выпадающего списка (type: 'select')
const TABS = [
  {
    header: 'Personal Details',
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'Enter your full name',
        autoComplete: 'name',
        rules: {
          minLength: { value: 2, message: 'Name must be at least 2 characters' },
        },
      },
      {
        name: 'email',
        label: 'Email address',
        type: 'email',
        placeholder: 'name@example.com',
        autoComplete: 'email',
        rules: {
          pattern: { value: EMAIL_PATTERN, message: 'Enter a valid email, e.g. name@example.com' },
        },
      },
      {
        name: 'phone',
        label: 'Phone number',
        type: 'tel',
        placeholder: '+380 67 123 4567',
        autoComplete: 'tel',
        // Цифровая клавиатура на телефоне
        inputMode: 'tel',
        // Пропускаем только цифры, +, пробел, скобки и дефис
        sanitize: (value) => value.replace(/[^\d\s()+-]/g, ''),
        rules: {
          // Пустое поле допустимо; заполненное — от 10 до 15 цифр (международный формат)
          validate: (value) => {
            if (!value) return true;
            const digits = value.replace(/\D/g, '').length;
            return (digits >= 10 && digits <= 15) || 'Enter a valid phone number, e.g. +380 67 123 4567';
          },
        },
      },
      { name: 'birthday', label: 'Date of birth', type: 'date', autoComplete: 'bday' },
      {
        name: 'nationality',
        label: 'Nationality',
        type: 'text',
        placeholder: 'Enter your nationality',
        autoComplete: 'country-name',
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        placeholder: 'Select your gender',
        autoComplete: 'sex',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'unknown', label: 'Unknown' },
        ],
      },
      {
        name: 'address',
        label: 'Address',
        type: 'text',
        placeholder: 'Enter your address',
        autoComplete: 'street-address',
      },
    ],
  },
  {
    header: 'Preferences',
    fields: [
      { name: 'currency', label: 'Currency', type: 'text', placeholder: 'Choose your currency' },
      { name: 'language', label: 'Language', type: 'text', placeholder: 'Choose your language' },
    ],
  },
  {
    header: 'Payment Details',
    fields: [
      { name: 'cards', label: 'Payment cards', type: 'text', placeholder: 'Pay with new card' },
    ],
  },
  {
    header: 'My Bookings',
    fields: [
      { name: 'bookings', label: 'Bookings', type: 'text', placeholder: 'You have no bookings yet' },
    ],
  },
  {
    header: 'My documents',
    fields: [
      { name: 'documents', label: 'Documents', type: 'file' },
    ],
  },
];

const ClientPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  // Кнопки вкладок — чтобы переводить на них фокус при навигации стрелками
  const tabRefs = useRef([]);

  // Переключение вкладок с клавиатуры по стандарту WAI-ARIA:
  // стрелки — соседняя вкладка (по кругу), Home/End — первая/последняя
  const handleTabKeyDown = (e) => {
    const last = TABS.length - 1;
    const nextIndex = {
      ArrowDown: activeTab === last ? 0 : activeTab + 1,
      ArrowUp: activeTab === 0 ? last : activeTab - 1,
      Home: 0,
      End: last,
    }[e.key];

    if (nextIndex === undefined) return;

    // Не даём стрелкам прокручивать страницу
    e.preventDefault();
    setActiveTab(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section className="client">
      <div className="client__container container">
        <h2 className="client__title h2">Client Area</h2>

        <div className="client__inner">
          <div className="client__tabs tabs">
            <div
              className="tabs__titles"
              role="tablist"
              aria-label="Client settings"
              aria-orientation="vertical"
            >
              {TABS.map((tab, index) => (
                <button
                  key={tab.header}
                  ref={(el) => (tabRefs.current[index] = el)}
                  className={classNames('tabs__title', activeTab === index && 'tabs__title--active')}
                  type="button"
                  role="tab"
                  id={`tab-${index}`}
                  aria-selected={activeTab === index}
                  aria-controls={`tabpanel-${index}`}
                  // Во вкладки заходят одним Tab, дальше — стрелками
                  tabIndex={activeTab === index ? 0 : -1}
                  onClick={() => setActiveTab(index)}
                  onKeyDown={handleTabKeyDown}
                >
                  {tab.header}
                </button>
              ))}
            </div>

            <div
              className="tabs__content"
              role="tabpanel"
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              {/* key — при смене вкладки форма создаётся заново:
                  свои поля, без остатков от прошлой вкладки */}
              <ActiveTab key={activeTab} item={TABS[activeTab]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPage;
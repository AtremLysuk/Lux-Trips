import '@/scss/blocks/_client.scss';
import {useState} from 'react';
import ActiveTab from './ActiveTab';

const ClientPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [{
    header: 'Personal Details', fields: [{
      name: 'name', label: 'Name', type: 'text', placeholder: 'Igor Vensko',
    }, {
      name: 'email',
      label: 'Email address',
      type: 'email',
      placeholder: 'igor@vensko.net',
    }, {
      name: 'phone',
      label: 'Phone number',
      type: 'tel',
      placeholder: '+01 123 456 789',
    }, {
      name: 'birthday',
      label: 'Date of birth',
      type: 'text',
      placeholder: 'Enter your date of birth',
    }, {
      name: 'nationality',
      label: 'Nationality',
      type: 'text',
      placeholder: "Poland",
    }, {
      name: 'gender', label: 'Gender', type: 'text', placeholder: 'I\'m a man',
    }, {
      name: 'address',
      label: 'Address',
      type: 'text',
      placeholder: 'Poland, Bialsytok',
    },],
  }, {
    header: 'Preferences', fields: [{
      name: 'currency',
      label: 'Currency',
      type: 'text',
      placeholder: 'PLN Polish Zloty',
    }, {
      name: 'language',
      label: 'Language',
      type: 'text',
      placeholder: 'American English',
    },],
  }, {
    header: 'Payment Details', fields: [{
      name: 'cards',
      label: 'Payment cards',
      type: 'text',
      placeholder: 'Pay with new card',
    },],
  }, {
    header: 'My Bookings', fields: [{
      name: 'cards',
      label: 'Payment cards',
      type: 'text',
      placeholder: 'Pay with new card',
    },],
  }, {
    header: 'My documents', fields: [{
      name: 'documents',
      label: 'Documents',
      type: 'file',
      placeholder: 'Upload documents',
    },],
  },];
  const tabsHeaders = tabs.map((tab) => tab.header);
  return (<>
    <section className="client">
      <div className="client__container container">
        <h2 className="client__title h2">Client Area</h2>
        <div className="client__inner">
          <div className="client__tabs tabs">
            <div
              className="tabs__titles"
              role='tablist'
              aria-label='client settings tabs'
            >
              {tabsHeaders.map((tab, index) => (<button
                role='tab'
                id={`tab-${index}`}
                aria-selected={activeTab === index}
                aria-controls={`tabpanel-${index}`}
                tabIndex={activeTab === index ? 0 : -1}
                className={activeTab === index ? 'tabs__title tabs__title--active' : 'tabs__title'}
                key={index}
                onClick={() => {
                  setActiveTab(index);
                }}
              >
                {tab}
              </button>))}
            </div>

            <div


              className="tabs__content"
              role='tabpanel'
              id={`tabpanel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              <ActiveTab
                item={tabs[activeTab]}
                activeTab={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
};
export default ClientPage;

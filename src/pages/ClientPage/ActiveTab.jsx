import '@/scss/blocks/_client.scss';
import { useForm } from 'react-hook-form';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ActiveTab = (props) => {
  const tl = useRef(null)
  const formRef = useRef(null);
  const tabsInnerRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
    reset,
  } = useForm({ mode: 'onBlur' });

  const { fields } = props.item;
  const { activeTab } = props.activeTab;


  useGSAP(
    () => {
      const tabs = gsap.utils.toArray('.tabs-form__tab');

      tl.current = gsap.fromTo(
        tabs,
        { xPercent: -50, opacity: 0 },

        {
          xPercent: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: { each: 0.08, from: 'start' },
        }
      );
    },
    {
      scope: tabsInnerRef,
      dependencies: [fields, activeTab],
      revertOnUpdate: true,
      
    }
  );


  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="tabs-form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
      <div className="tabs-form__inner" ref={tabsInnerRef}>
        {fields.map((field) => (
          <div key={field.name} className="tabs-form__tab">
            <label>
              {field.label}
              <input
                {...register(field.name, { required: true })}
                type={field.type}
                placeholder={field.placeholder}
                minLength={3}
              />
              <button type="button" onClick={() => setFocus(field.name)}>
                Edit
              </button>
            </label>
          </div>
        ))}
      </div>
    </form>
  );
};

export default ActiveTab;

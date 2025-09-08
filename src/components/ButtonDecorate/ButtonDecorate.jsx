import '@/scss/blocks/_button-decorate.scss';

const ButtonDecorate = (props) => {
  const { className, href, title } = props;

  return (
    <div className={`${className}-button`}>
      <a className={`${className}-link`} href={href}>
        {title}
      </a>
    </div>
  );
};

export default ButtonDecorate;

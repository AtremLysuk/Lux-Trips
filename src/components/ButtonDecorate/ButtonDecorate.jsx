import '@/scss/blocks/_button-decorate.scss';



const ButtonDecorate = (props) => {

  const {
    className,
    href,
    title, 
  } = props;

  return (
    <div className="customize__button">
    <a className="customize__link" href={href}>
      {title}
    </a>
  </div>
  )
}

export default ButtonDecorate
import MyIcon from '../MyIcon/MyIcon';

const ContentItem = (props) => {
  const iconsItems = [
    {
      name: 'clock24',
      description: 'Dedicated 24/7 Travel Advisor',
    },
    {
      name: 'location',
      description: 'Personalized itinerary',
    },
    {
      name: 'man',
      description: 'Exclusive services',
    },
    {
      name: 'book',
      description: 'Local guides',
    },
    {
      name: 'yaht',
      description: 'Aquatic entertainment',
    },
    {
      name: 'bag',
      description: 'Accidental damage protection',
    },
    {
      name: 'family',
      description: 'Travel insurance',
    },
    {
      name: 'tickets',
      description: 'Package deals',
    },
    {
      name: 'helicopter',
      description: 'Wide selection of aircrafts',
    },
    {
      name: 'buildings',
      description: 'Exclusive accommodations',
    },
    {
      name: 'car',
      description: 'Wide selection of cars',
    },
    {
      name: 'heart',
      description: 'Dedicated health insurance', 
    }
  ];

  const { name } = props;

  const myIcon = iconsItems.find((el) => el.name === name)


  return (
    <div className="request__content-item">
      <MyIcon name={name} size={60} className="request__content-item-icon" />
      <div className="request__content-item-description">
        {iconsItems.find((el) => el.name === name).description}
      </div>
    </div>
  );
};

export default ContentItem;

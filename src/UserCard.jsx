import PropTypes from 'prop-types';

const UserDetails = [
  {
    name: 'Ajay',
    place: 'Pomdichery',
    description: 'FRONT END DEV',
    online: true,
  },
  {
    name: 'BALA',
    place: 'BAHOUR',
    description: 'FRONT END DEV',
    online: true,
  },
  {
    name: 'jay',
    place: 'Pondichery',
    description: 'FRONT END DEV',
    online: true,
  }
];

function User(props) {
  return (
    <div className="Card-Container">
      <span className={props.Online ? 'online' : 'offline'}>
        {props.Online ? 'ONLINE' : 'OFFLINE'}
      </span>
      <img
        id="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&s"
        alt="User"
      />
      <div className="text">
        <h3>Name : {props.name}</h3>
        <h4>{props.place}</h4>
        <strong>{props.description}</strong>
      </div>
      <div className="button">
        <button id="primary">Message</button>
        <span> </span>
        <button id="primary">Follow</button>
      </div>
      <h4>Skills</h4>
      <div className="skill">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>REACT</li>
          <li>JS</li>
        </ul>
      </div>
    </div>
  );
}

export const UserCard = () => {
  return (
    <div>
        {UserDetails.map((user,index) => (
          <User
            key={index}
            name={user.name}
            place={user.place}
            description={user.description}
            Online={user.online}
          />
        ))}
    </div>
  );
};
 // Correct the import

User.propTypes = {
  name: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};


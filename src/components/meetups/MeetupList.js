import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  console.log("loaded meetups", props.meetups);
  return (
    <ul className={classes.list}>
      {props.meetups.length > 0 ? (
        props.meetups.map((meetup) => {
          return (
            <MeetupItem
              key={meetup.id}
              id={meetup.id}
              image={meetup.image}
              title={meetup.title}
              address={meetup.address}
              description={meetup.description}
            />
          );
        })
      ) : (
        <p> Start adding some events...</p>
      )}
    </ul>
  );
}

export default MeetupList;

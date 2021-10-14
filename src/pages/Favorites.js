import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;
  console.log("1");
  if (favoritesCtx.totalFavorites === 0) {
    console.log("in if");
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    console.log("else");
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {console.log("in return")}
      {content}
    </section>
  );
}

export default FavoritesPage;

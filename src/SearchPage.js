import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>

        <h1>Stays nearby</h1>

        <Button variant="outlined">Cancellation</Button>

        <Button variant="outlined">Type of place</Button>

        <Button variant="outlined">Price</Button>

        <Button variant="outlined">Rooms and beds</Button>

        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img="https://a0.muscache.com/im/pictures/aa2db19d-78c4-4669-aeb3-afb07fa6e0ea.jpg?im_w=960"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$90 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/aa2db19d-78c4-4669-aeb3-afb07fa6e0ea.jpg?im_w=960"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$90 total"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/aa2db19d-78c4-4669-aeb3-afb07fa6e0ea.jpg?im_w=960"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="$30 / night"
        total="$90 total"
      />
    </div>
  );
};

export default SearchPage;

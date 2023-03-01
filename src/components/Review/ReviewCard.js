import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./ReviewCard.module.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ReviewCard = () => {
  let pathName = window.location.pathname.split("/").pop();
  pathName = pathName.replaceAll("%20", " ");

  const [reviewSet, setReviewSet] = useState(
    JSON.parse(localStorage.getItem(pathName))
  );

  const [shuffledSet, setShuffledSet] = useState([]);

  const [showAnswer, setShowAnswer] = useState(false);

  const [cardIndex, setCardIndex] = useState(0);

  const [favorited, setFavorited] = useState(reviewSet[cardIndex].favorite);

  let temp = true;

  const testHandler = () => {
    setReviewSet(JSON.parse(localStorage.getItem(pathName)));
  };

  const showAnswerHandler = () => {
    showAnswer ? setShowAnswer(false) : setShowAnswer(true);
  };

  const cardIndexIncreaser = () => {
    if (cardIndex < reviewSet.length - 1) {
      setCardIndex(cardIndex + 1);
      setShowAnswer(false);
    }
  };

  const cardIndexDecreaser = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      setShowAnswer(false);
      console.log(favorited);
    }
  };

  const favoriteChecker = () => {
    if (reviewSet[cardIndex].favorite === true) {
      setFavorited(true);
    } else {
      setFavorited(false);
    }
  };

  const favoriteHandler = () => {
    favoriteChecker();

    reviewSet[cardIndex].favorite ? (temp = false) : (temp = true);
    console.log(temp);
    setFavorited(temp);
    reviewSet[cardIndex].favorite = temp;
    console.log("Second Console log " + reviewSet[cardIndex].favorite);
    setReviewSet(reviewSet);

    localStorage.setItem(pathName, JSON.stringify(reviewSet));
  };

  useEffect(() => {
    // testHandler();
    favoriteChecker();

    console.log("Use Effect: " + favorited);
  }, [cardIndex, temp]);

  return (
    <div>
      <div className={classes.textalign}>
        <h1>
          {cardIndex + 1}/{reviewSet.length}
        </h1>
        <div className={classes.wrapper}>
          <button onClick={cardIndexDecreaser}>
            <ArrowBackIosIcon fontSize="large" />
          </button>
          <div className={classes.card}>
            <div className={classes.iconSizing}>
              {!favorited && <StarBorderIcon onClick={favoriteHandler} />}
              {favorited && <StarIcon onClick={favoriteHandler} />}
            </div>
            <div className={classes.cardText} onClick={showAnswerHandler}>
              {!showAnswer && <h1>{reviewSet[cardIndex].question}</h1>}
              {showAnswer && <h1>{reviewSet[cardIndex].answer}</h1>}
            </div>
          </div>
          <button onClick={cardIndexIncreaser}>
            <ArrowForwardIosIcon fontSize="large" />
          </button>
        </div>

        <div className={classes.buttonspacing}></div>
      </div>
    </div>
  );
};

export default ReviewCard;

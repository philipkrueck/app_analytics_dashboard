import React, { useState } from 'react'
import StarComponent from '../General/StarComponent';
import { reviewData, averageStars, sortReviewsNewestFirst, sortReviewsPositiveFirst, sortReviewsOldestFirst, sortReviewsNegativeFirst } from './ReviewData';
import Selection from '../General/Selection';
import moment from 'moment';

const sortingOptions = {
    newest: "Neueste", 
    oldest: "Älteste", 
    positiveFirst: "Positivste", 
    negativeFirst: "Negativste"
}

function Reviews() {

    const [selectedSortingOption, setSelectedSortingOption] = useState(sortingOptions.newest);
    const [reviews, setReviews] = useState(reviewData);
    const avgStars = averageStars(reviews);

    function handleSortingOptionChanged(newSortingOption) {
        setSelectedSortingOption(newSortingOption);
        setReviews(sortedReviews(reviews, newSortingOption));
    }

    return (
        <div class={"ReviewPage"}>
            <h1>Bewertung</h1>
            <p>{reviews.length + " Rezensionen | global"}</p>
            <div class={"ReviewStarComponent"}>
                <StarComponent stars={avgStars} />
            </div>
            
            <h3>{avgStars + " Sterne"}</h3>
            <div>
                <Selection options={json2array(sortingOptions)} selectedOption={selectedSortingOption} onChange={(newSortingOption) => handleSortingOptionChanged(newSortingOption)}/>
                {
                    reviews.map((review) => {
                        return (<Review key={review.username} review={review} />)
                    })
                }
            </div>
        </div>
    );
}

function Review(props) {
    const formattedDate = moment(props.review.date).format("dddd, MMMM Do YYYY, h:mm");
    return (
        <div class={"ReviewBlock"}>
            <StarComponent stars={props.review.stars}/>
            <p>{formattedDate + " von " + props.review.username}</p>
            <div class={"ReviewBlockText"}>
                <h3>{props.review.title}</h3>
                <p>{props.review.text}</p>
            </div>
        </div>
    )

}

function sortedReviews(reviews, sortOption) { 
    switch (sortOption) {
        case sortingOptions.newest: 
            return sortReviewsNewestFirst(reviews);
        case sortingOptions.oldest: 
            return sortReviewsOldestFirst(reviews);
        case sortingOptions.positiveFirst:
            return sortReviewsPositiveFirst(reviews);
        case sortingOptions.negativeFirst:
            return sortReviewsNegativeFirst(reviews);
    }
}

export default Reviews;


// copied from SO of course
function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}
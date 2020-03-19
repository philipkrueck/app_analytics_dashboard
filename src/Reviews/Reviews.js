import React, { useState } from 'react'
import StarComponent from '../General/StarComponent';
import { reviewData, averageStars, sortReviewsNewestFirst, sortReviewsPositiveFirst, sortReviewsOldestFirst, sortReviewsNegativeFirst } from './ReviewData';
import Selection from '../General/Selection';

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
        <div>
            <h1>Bewertung</h1>
            <p>{reviews.length + " Rezensionen | global"}</p>
            <StarComponent stars={avgStars} />
            <h3>{avgStars + " Sterne"}</h3>
            <Selection options={json2array(sortingOptions)} selectedOption={selectedSortingOption} onChange={(newSortingOption) => handleSortingOptionChanged(newSortingOption)}/>
            {
                reviews.map((review) => {
                    return (<Review key={review.username} review={review} />)
                })
            }
        </div>
    );
}

function Review(props) {
    return (
        <div>
            <StarComponent stars={props.stars}/>
            <p>{props.review.date + " von " + props.review.username}</p>
            <h3>{props.review.title}</h3>
            <p>{props.review.text}</p>
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
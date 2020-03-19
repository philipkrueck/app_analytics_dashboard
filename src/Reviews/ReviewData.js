
export const reviewData = [
    {
        stars: 4.5,
        date: new Date(2020, 1, 2), 
        username: 'petergriffin',
        title: 'Stabile App', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    }, 
    {
        stars: 5.0,
        date: new Date(2020, 1, 1), 
        username: 'crab',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 4.5,
        date: new Date(2019, 12, 1), 
        username: 'whoosh',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    }, 
    {
        stars: 4.0,
        date: new Date(2019, 7, 7), 
        username: 'foxbase',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 2.5,
        date: new Date(2019, 1, 11), 
        username: 'sympathy',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 3.0,
        date: new Date(2018, 9, 9), 
        username: 'cinnamon',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 5.0,
        date: new Date(2018, 3, 3), 
        username: 'unproven',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 1.0,
        date: new Date(2018, 5, 5), 
        username: 'graham',
        title: 'Seit dem Update läuft garnichts mehr', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 3.5,
        date: new Date(2017, 10, 10), 
        username: 'sheep',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    }
    ,{
        stars: 5.0,
        date: new Date(2016, 11, 11), 
        username: 'esophagus',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    }
    ,{
        stars: 5.0,
        date: new Date(2015, 4, 4), 
        username: 'mrmunch',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    },
    {
        stars: 5.0,
        date: new Date(2014, 8, 8), 
        username: 'mundane',
        title: 'Lorem ipsum dolor', 
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,'
    }
];

// format("dddd, Do")

export const averageStars = (reviewData) => {
    let sum = 0;
    reviewData.forEach((review) => {
        sum += review.stars
    });
    return sum / reviewData.length;
}

export const sortReviewsNewestFirst = (reviewData) => {
    return reviewData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else if (a.date === b.date) {
            return 0
        }
        return -1
    });
}

export const sortReviewsOldestFirst = (reviewData) => {
    return reviewData.sort((a, b) => {
        if (a.date > b.date) {
            return 1
        } else if (a.date === b.date) {
            return 0
        }
        return -1
    });
}

export const sortReviewsPositiveFirst = (reviewData) => {
    return reviewData.sort((a, b) => {
        if (a.stars < b.stars) {
            return 1
        } else if (a.reviews === b.date) {
            return 0
        }
        return -1
    });
}

export const sortReviewsNegativeFirst = (reviewData) => {
    return reviewData.sort((a, b) => {
        if (a.stars > b.stars) {
            return 1
        } else if (a.reviews === b.date) {
            return 0
        }
        return -1
    });
}

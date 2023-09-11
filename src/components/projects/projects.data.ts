import resumeBuilderImg from '../../assets/images/projects/resume-builder.png';
import browserImg from '../../assets/images/projects/movie-browser.png';
import designerImg from '../../assets/images/projects/designer.png';
import recipeImg from '../../assets/images/projects/recipe.png';
import mailTrackerImg from '../../assets/images/projects/mail-tracker.png';
import shopperImg from '../../assets/images/projects/shopper.png';

export const projects = [
    {
        title: 'Resume Builder',
        description: 'A React application with Redux state management, that offers users an unparalleled experience to craft their own personalized resumes.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/resume-builder',
            demo: 'https://dileep8417.github.io/resume-builder'
        },
        image: resumeBuilderImg,
        features: ['Customizable Template', 'Live Preview', 'PDF Generator'],
        theme: '#272838'
    },
    {
        title: 'Designer Portfolio',
        description: 'A responsive & modern portfolio developed for designer to help in promoting the offers and services provide.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/designer_portfolio',
            demo: 'https://gopichand.design/'
        },
        image: designerImg,
        features: ['Responsive', 'Modern'],
        theme: 'rgb(64 64 64)'
    },
    {
        title: 'Movie Browser',
        description: 'A progressive web application developed using React, Redux Toolkit, and webpack to let the users browse the details of latest movies.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/GSIV23_Dileep_Atyam',
            demo: 'https://movie-browser-pwa.netlify.app/'
        },
        image: browserImg,
        features: ['Infinite scrolling', 'Movie Search', 'Detailed Information'],
        theme: 'rgb(104 110 255)'
    },
    {
        title: 'Recipe Finder',
        description: 'An immersive and user-friendly React application designed to help users discover a diverse range of delectable recipes effortlessly.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/my_recipes/',
            demo: 'https://dileep8417.github.io/my_recipes/'
        },
        image: recipeImg,
        features: ['Recipe Search', 'Add to Favourite', 'Cooking Details'],
        theme: '#7E7F9A'
    },
    {
        title: 'Shopper',
        description: 'An e-commerce application developed with React, TypeScript, and Redux Toolkit, providing users with a platform to shop for a wide range of products.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/shopper',
            demo: 'https://dileep8417.github.io/shopper'
        },
        image: shopperImg,
        features: ['Authentication', 'Product Search', 'Whishlist', 'Checkout', 'Accounts'],
        theme: '#225560'
    },
    {
        title: 'Mail Tracker API',
        description: 'A Node.js API powered by MongoDB, to track the status of sent emails, including whether they have been opened by the recipient and if any links were clicked.',
        workLinks: {
            sourceCode: 'https://github.com/dileep8417/mail-tracker-api',
            demo: 'https://mail-tracker-api.onrender.com/'
        },
        image: mailTrackerImg,
        features: ['Mail Tracking', 'Links Tracking'],
        theme: '#427AA1'
    },
];
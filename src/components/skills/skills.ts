import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import jsLogo from '../../assets/images/js.png';
import tsLogo from '../../assets/images/ts.png';
import reactLogo from '../../assets/images/react.png';
import nextLogo from '../../assets/images/next.png';
import jqueryLogo from '../../assets/images/jquery.png';
import bootstrapLogo from '../../assets/images/bootstrap.png';
import nodeLogo from '../../assets/images/node.png';
import javaLogo from '../../assets/images/java.png';
import pythonLogo from '../../assets/images/python.png';
import ciLogo from '../../assets/images/ci.png';
import phpLogo from '../../assets/images/php.png';
import gitLogo from '../../assets/images/git.png';
import mysqlLogo from '../../assets/images/mysql.png';
import mongodbLogo from '../../assets/images/mongodb.png';

type skillCategory = {
    categoryName: string,
    skills: {
        logo: string,
        name: string
    }[]
}[];

export const skillsCategories: skillCategory = [
    {
        categoryName: 'Front-end',
        skills: [
            {
                logo: htmlLogo,
                name: 'HTML',
            },
            {
                logo: cssLogo,
                name: 'CSS',
            },
            {
                logo: bootstrapLogo,
                name: 'Bootstrap',
            },
            {
                logo: jsLogo,
                name: 'JavaScript',
            },
            {
                logo: tsLogo,
                name: 'TypeScript',
            },
            {
                logo: reactLogo,
                name: 'React',
            },
            {
                logo: nextLogo,
                name: 'Next JS',
            },
            {
                logo: jqueryLogo,
                name: 'JQuery',
            },
        ]
    },
    {
        categoryName: 'Back-end',
        skills: [
            {
                logo: nodeLogo,
                name: 'Node JS',
            },
            {
                logo: phpLogo,
                name: 'PHP',
            },
            {
                logo: ciLogo,
                name: 'CodeIgniter',
            },
            {
                logo: mysqlLogo,
                name: 'MySQL',
            },
            {
                logo: mongodbLogo,
                name: 'MongoDB',
            },
        ]
    },
    {
        categoryName: 'Miscellaneous',
        skills: [
            {
                logo: javaLogo,
                name: 'Java',
            },
            {
                logo: pythonLogo,
                name: 'Python',
            },
            {
                logo: gitLogo,
                name: 'Git',
            },
        ]
    },
]; 
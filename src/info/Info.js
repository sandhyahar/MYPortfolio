import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import om from "../img/om.png";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Sandhya",
    lastName: "Harvara",
    Image: om,
    position: "a Java Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '☕',
            link: '#',
            text: 'fueled by Tea'
        },
        {
            emoji: '🌎',
            link: '#',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            link: '#',
            text: "Software Engineer at Dove-Soft LLP."
        },
        {
            emoji: "📧",
            link: 'mailto:sandhyabhanushalisrk@gmail.com',
            text: "sandhyabhanushalisrk@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/om.changela.7",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/om_changela_",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/omchangela",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/om-changela1545",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/changela_o78191",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: "Hello there! I'm sandhya, a dedicated Java developer with a passion for crafting efficient and scalable software solutions. With 1 years of experience in the industry, I've had the opportunity to delve deep into the world of Java development, mastering its intricacies and leveraging its power to build robust applications.My journey in programming began April 2023. Since then, I've been captivated by the endless possibilities that coding offers, constantly seeking new challenges to expand my skills and knowledge base.",
    skills: {
        proficientWith: ['javascript', 'ajax', 'jquery', 'bootstrap', 'html5', 'css3', 'Java'],
        exposedTo: ['SpringBoot', 'struts', 'restApi']
    },
    hobbies: [
        {
            label: 'coding',
            emoji: '👨‍💻'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Travelling',
            emoji: ' ♔ '
        }
    ],
    portfolio: [
        {
            title: "MobiComm Project",
            description: "A mobile communication platform with various features.",
            image: mock1
        },
        {
            title: "Cab Booking Project",
            description: "An app for booking cabs with real-time tracking.",
            image: mock2
        }
        ,
        {
            title: "Notification Project",
            description: "A project focused on sending notifications efficiently.",
            image: mock3
        }
    ]
};

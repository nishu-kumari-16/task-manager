import ProfileOne from "../../assets/icons/portraitOne.png";
import ProfileTwo from "../../assets/icons/portraitTwo.png";
import ProfileThree from "../../assets/icons/portraitThree.png";
import ProfileFour from "../../assets/icons/portraitFour.png";
export const rightDrawerData = {
  callDetails: {
    members: [ProfileOne, ProfileTwo, ProfileThree, ProfileFour],
    duration: "28.35",
  },
  messages: [
    {
      name: "Chris Morich",
      message: "Hi Angelina! How are you?",
      image: ProfileOne,
    },
    {
      name: "Charmie",
      message: "Do you need that design?",
      image: ProfileTwo,
    },
    {
      name: "Jason Mandala",
      message: "What is the price of hourly...",
      image: ProfileThree,
    },
    {
      name: "Charlie Clerk",
      message: "Awsome design!!",
      image: ProfileFour,
    },
  ],
  collaboratorsOptions: [
    {
      id: 1,
      name: "Angela",
      image: ProfileFour,
      isSelected: true,
    },
    {
      id: 2,
      name: "Chris",
      image: ProfileOne,
      isSelected: true,
    },
    {
      id: 3,
      name: "Mark",
      image: ProfileThree,
      isSelected: false,
    },
    {
      id: 4,
      name: "John",
      image: ProfileTwo,
      isSelected: false,
    },
    {
      id: 5,
      name: "Killan",
      image: ProfileFour,
      isSelected: false,
    },
    {
      id: 6,
      name: "Robert",
      image: ProfileOne,
      isSelected: false,
    },
    {
      id: 7,
      name: "James",
      image: ProfileThree,
      isSelected: false,
    },
  ],
};

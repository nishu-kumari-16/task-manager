import { ReactComponent as TaskImage } from "../../assets/icons/task-image.svg";
import ProfileOne from "../../assets/icons/portraitOne.png";
import ProfileTwo from "../../assets/icons/portraitTwo.png";
import ProfileThree from "../../assets/icons/portraitThree.png";
import ProfileFour from "../../assets/icons/portraitFour.png";
import pianoClip from "../../assets/audio/piano.mp3";

export enum TASK_TYPE {
  IN_PROGRESS = "In Progress",
  BACKLOG = "Backlog",
  TO_DO = "To Do",
  REVIEW = "Review",
}

export enum TAG_TYPE {
  PURPLE = "#5051F9",
  BLUE = "#1EA7FF",
  ORANGE = "#E97342",
  YELLOW = "#F59E0B",
}

export enum MESSAGE_TYPE {
  SENT = "sent",
  RECEIVED = "received",
}

export const tasksMetaData = [
  {
    id: 1,
    tag: "Design",
    tagType: TAG_TYPE.PURPLE,
    image: <TaskImage className="rounded-lg w-full h-full" />,
    date: "Aug 20, 2021",
    title: "Create style guide foundation",
    description: "Create content for peaceland App",
    comments: 4,
    fileCount: 11,
    taskType: TASK_TYPE.BACKLOG,
    completedCount: "0/8",
    collaborators: [
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
    ],
  },
  {
    id: 2,
    tag: "Development",
    tagType: TAG_TYPE.YELLOW,
    date: "Oct 10, 2023",
    title: "Implement user authentication",
    description: "Add user authentication functionality to the website",
    completedCount: "0/8",
    taskType: TASK_TYPE.IN_PROGRESS,
    collaborators: [
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
    ],
  },
  {
    id: 3,
    tag: "Planning",
    tagType: TAG_TYPE.ORANGE,
    image: <TaskImage className="rounded-lg w-full h-full" />,
    date: "Oct 30, 2023",
    title: "Update Requirement list",
    description: "To update the existing requirement list",
    comments: 4,
    fileCount: 11,
    taskType: TASK_TYPE.IN_PROGRESS,
  },
  {
    id: 4,
    tag: "Research",
    tagType: TAG_TYPE.BLUE,
    date: "Oct 20, 2023",
    title: "Auditing information architecture",
    description: "check and verify information architecture",
    completedCount: "0/8",
    taskType: TASK_TYPE.TO_DO,
    collaborators: [
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
    ],
  },
  {
    id: 5,
    tag: "Release",
    tagType: TAG_TYPE.YELLOW,
    date: "Oct 10, 2023",
    title: "Implement user logout",
    description: "Add user logout functionality to the website",
    completedCount: "0/8",
    taskType: TASK_TYPE.REVIEW,
    collaborators: [
      {
        id: 2,
        name: "Chris",
        image: ProfileFour,
        isSelected: true,
      },
      {
        id: 3,
        name: "Mark",
        image: ProfileThree,
        isSelected: false,
      },
    ],
  },
  {
    id: 6,
    tag: "Planning",
    tagType: TAG_TYPE.ORANGE,
    image: <TaskImage className="rounded-lg w-full h-full" />,
    date: "Oct 30, 2023",
    title: "Completion list",
    description: "To update the existing requirement list",
    comments: 4,
    fileCount: 11,
    taskType: TASK_TYPE.REVIEW,
  },
  {
    id: 7,
    tag: "L&D",
    tagType: TAG_TYPE.BLUE,
    date: "Sept 10, 2023",
    title: "Prepare PPT for L&D",
    description: "check and verify information architecture",
    completedCount: "0/8",
    taskType: TASK_TYPE.TO_DO,
    collaborators: [
      {
        id: 2,
        name: "Chris",
        image: ProfileThree,
        isSelected: true,
      },
      {
        id: 3,
        name: "Mark",
        image: ProfileTwo,
        isSelected: false,
      },
      {
        id: 1,
        name: "Mark",
        image: ProfileOne,
        isSelected: false,
      },
      {
        id: 4,
        name: "Mark",
        image: ProfileFour,
        isSelected: false,
      },
    ],
  },
];

export const members = [
  {
    id: 1,
    name: "Angela",
    image: ProfileFour,
    isActive: true,
  },
  {
    id: 2,
    name: "Chris",
    image: ProfileOne,
    isActive: true,
  },
  {
    id: 3,
    name: "Mark",
    image: ProfileThree,
    isActive: true,
  },
  {
    id: 4,
    name: "John",
    image: ProfileTwo,
    isActive: true,
  },
  {
    id: 5,
    name: "Killan",
    image: ProfileFour,
    isActive: false,
  },
  {
    id: 6,
    name: "Robert",
    image: ProfileOne,
    isActive: false,
  },
  {
    id: 7,
    name: "James",
    image: ProfileThree,
    isActive: true,
  },
];

export const taskChatsData = {
  membersCount: 25,
  members: [...members].splice(1),
  chats: [
    {
      profile: {
        id: 7,
        name: "James",
        image: ProfileThree,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.RECEIVED,
      message: "Hello!",
      time: "08:00 am",
    },
    {
      profile: {
        id: 2,
        name: "Dio",
        image: ProfileOne,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.SENT,
      message: "Hi Everyone 🔥",
      time: "08:01 am",
    },
    {
      profile: {
        id: 3,
        name: "Kyra",
        image: ProfileFour,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.RECEIVED,
      message: "How are you,What did you do everyone",
      time: "08:03 am",
    },
    {
      profile: {
        id: 2,
        name: "John",
        image: ProfileTwo,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.RECEIVED,
      message: "Good!",
      time: "08:05 am",
    },
    {
      profile: {
        id: 2,
        name: "John",
        image: ProfileTwo,
        isActive: true,
      },
      messageType: MESSAGE_TYPE.RECEIVED,
      audioUrl: pianoClip,
      time: "08:05 am",
    },
  ],
};

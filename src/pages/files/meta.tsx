import { ReactComponent as Media } from "../../assets/icons/media.svg";
import { ReactComponent as Documents } from "../../assets/icons/documents.svg";
import { ReactComponent as Music } from "../../assets/icons/music.svg";
import { ReactComponent as OtherFile } from "../../assets/icons/other-file.svg";

export enum FILE_TYPE {
  PURPLE = "#5051F9",
  BLUE = "#1EA7FF",
  ORANGE = "#FF694A",
  YELLOW = "#F7B000",
  GREEN = "#34D870",
}

export const filesPageData = {
  storageSummary: {
    availableStorage: 130,
    totalStorage: 512,
    percentage: 85,
    folderData: [
      {
        name: "Media",
        size: 86,
        image: <Media />,
        color: FILE_TYPE.PURPLE,
      },
      {
        name: "Documents",
        size: 26,
        image: <Documents />,
        color: FILE_TYPE.YELLOW,
      },
      {
        name: "Music",
        size: 10,
        image: <Music />,
        color: FILE_TYPE.ORANGE,
      },
      {
        name: "Other File",
        size: 18,
        image: <OtherFile />,
        color: FILE_TYPE.BLUE,
      },
    ],
  },
  allFilesData: [
    {
      id: 1,
      name: "Documents",
      type: FILE_TYPE.BLUE,
      count: 22,
      sharedData: [
        { id: 1, name: "A" },
        { id: 1, name: "B" },
      ],
    },
    {
      id: 2,
      name: "Images",
      type: FILE_TYPE.PURPLE,
      count: 15,
      sharedData: [
        { id: 2, name: "X" },
        { id: 2, name: "Y" },
      ],
    },
    {
      id: 3,
      name: "Videos",
      type: FILE_TYPE.ORANGE,
      count: 10,
      sharedData: [{ id: 3, name: "P" }],
    },
    {
      id: 4,
      name: "Music",
      type: FILE_TYPE.BLUE,
      count: 30,
    },
    {
      id: 5,
      name: "Spreadsheets",
      type: FILE_TYPE.GREEN,
      count: 18,
      sharedData: [
        { id: 5, name: "X1" },
        { id: 5, name: "Y1" },
      ],
    },
    {
      id: 6,
      name: "Presentations",
      type: FILE_TYPE.YELLOW,
      count: 12,
      sharedData: [{ id: 6, name: "A" }],
    },
  ],
};

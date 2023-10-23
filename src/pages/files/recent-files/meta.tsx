import { ColumnDef } from "@tanstack/react-table";
import { members } from "../../tasks/meta";
import { ReactComponent as Proposal } from "../../../assets/icons/proposal.svg";
import { ReactComponent as Background } from "../../../assets/icons/background.svg";
import { ReactComponent as ApexWebsite } from "../../../assets/icons/apex-website.svg";
import { ReactComponent as Illustration } from "../../../assets/icons/illustration.svg";
import StackedImages from "../../../components/stacked-images";
import { Box, Typography } from "@mui/material";

export const getRecentFilesData: (palette: any) => ColumnDef<any>[] = (
  palette
) => [
  {
    header: `Name`,
    accessorKey: "name",
    cell: ({ row: { original } }) => (
      <div className="flex gap-3 items-center">
        <Box bgcolor={`${palette.athensGray}`} className="rounded-lg p-2">
          {original.icon}
        </Box>
        <div>{original.name}</div>
      </div>
    ),
    sortColumn: true,
  },
  {
    header: `Size`,
    accessorKey: "size",
    cell: ({ row: { original } }) => {
      return (
        <Typography className="!font-medium" color={palette.slateGray}>
          {original.size}
        </Typography>
      );
    },
    sortColumn: true,
  },
  {
    header: `Last Modified`,
    accessorKey: "lastModified",
    cell: ({ row: { original } }) => {
      return (
        <Typography className="!font-medium" color={palette.slateGray}>
          {original.lastModified}
        </Typography>
      );
    },
    sortColumn: true,
  },
  {
    header: `Members`,
    accessorKey: "membersCount",
    cell: ({ row: { original } }) => {
      return (
        <div>
          <StackedImages images={original.members} width={30} height={30} />
        </div>
      );
    },
    sortColumn: true,
  },
];

export const metaData = [
  {
    name: "Proposal.docx",
    size: "2.9 MB",
    lastModified: "Feb 25, 2022",
    members: [...members].slice(1),
    icon: <Proposal />,
    membersCount: `${[...members].slice(1).length}`,
  },
  {
    name: "Background.jpg",
    size: "3.5 MB",
    lastModified: "Feb 24, 2022",
    members: [...members].slice(2),
    icon: <Background />,
    membersCount: `${[...members].slice(2).length}`,
  },
  {
    name: "Apex website.fig",
    size: "23.5 MB",
    lastModified: "Feb 22, 2022",
    members: [...members].slice(4),
    icon: <ApexWebsite />,
    membersCount: `${[...members].slice(4).length}`,
  },
  {
    name: "Illustration.ai",
    size: "3.5 MB",
    lastModified: "Feb 20, 2022",
    members: [...members].slice(3),
    icon: <Illustration />,
    membersCount: `${[...members].slice(3).length}`,
  },
];

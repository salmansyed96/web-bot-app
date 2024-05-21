import { User, Tooltip, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "../components/icons";
import React from "react";

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
  lastSeen: string;
};

export const columns = [
  {
    key: "name",
    label: "NAME",
  },
  
  
  {
    key: "lastSeen",
    label: "Last Seen",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

export const renderCell = (user: User, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof User];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{ radius: "lg", src: user.image }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      );
    case "lastSeen":
      return <span>{new Date(cellValue).toLocaleDateString()}</span>;
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content="Edit user">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete user">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};

const ExampleTable = ({ users }: { users: User[] }) => {
  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.key}
            align={column.key === "actions" ? "center" : "start"}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.id}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {renderCell(item, column.key)}
              </TableCell>
            ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default ExampleTable;

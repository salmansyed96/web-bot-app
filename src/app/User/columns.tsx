import { Tooltip, User } from "@nextui-org/react"
import { user } from "@nextui-org/theme"
import { DeleteIcon, EditIcon, EyeIcon } from "../components/icons"

export type User ={
    id: string
    name: string
    email: string
    image: string
    lastSeen: string
}

export const  columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "lastSeen",
      label: "Last Seen",
    },
  ];

  
  


  export const renderCell = (user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.image}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user}</p> */}
          </div>
        );
      
        case 'lastSeen':
          return <span>{new Date(cellValue).toLocaleDateString()}</span>
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
  }

//   return (
//   <Table aria-label="Example table with custom cells">
//       <TableHeader columns={columns}>
//         {(column) => (
//           <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
//             {column.name}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody items={users}>
//         {(item) => (
//           <TableRow key={item.id}>
//             {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }

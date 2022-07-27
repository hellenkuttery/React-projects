import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useFetch,DeleteUser} from "../../utils/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export default function Contacts({editHandler}) {

  const {IsLoading,contactList}=useFetch()
  return (
    <div>
    <h1 className="contact-header">Contacts</h1>    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="left">Phone Number</TableCell>
            <TableCell align="left">Gender</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {/* Bilgiler gelmediği durumda Loading yazısı görünsün */}
        { IsLoading ? (
           <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
           <TableCell colSpan={5} align="center">Loading</TableCell>             
         </TableRow>
        ):
                 // { /* Bilgiler olmadığı,boş olduğu  durumda veri bulunamadı mesajı*/}
        contactList?.lenght===0 ?
        (
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
          <TableCell colSpan={5} align="center">Loading</TableCell>             
        </TableRow>
        ):(
              //  {/* Bilgiler geldiği zaman aşağıya yazılacak kodlar çalışsın */}
          contactList?.map((item,index)=>(
            <TableRow key={index}>
            <TableCell textAlign="center" >{item.username.toUpperCase()}  </TableCell>
            <TableCell textAlign="center"sx={{mr:"10"}} >{item.phoneNumber}</TableCell>
            <TableCell textAlign="center">{item.gender}</TableCell> 
            <TableCell textAlign="center" onClick={()=>editHandler(
              item.id, item.username,item.phoneNumber,item.gender
            )}>
             <EditIcon/>
            </TableCell> 
            <TableCell textAlign="center"
            onClick={(()=>{DeleteUser(item.id)})}
            >
              <DeleteIcon/>
            </TableCell> 
           </TableRow> 
           ))
        )
      }

        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

import React from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const AddTodoFormDialog = ({ open, handleClose, onTodoAdd }) => {
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const closeDialog = (e) => {
    setTitle('');
    setDescription('');
    handleClose();
  };

  const onSubmit = (e) => {
    e.preventDefault()


    if(!title) {
        alert('Please add a title')
        return
    }

    if(!description) {
        alert('Please add a description')
        return
    }

    onTodoAdd({ title, description})

    setTitle('')
    setDescription('')
    handleClose()
}


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Todo Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={onSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTodoFormDialog;

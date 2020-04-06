import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const PaginationDisplay =({count,changePage})=>{
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    changePage(value);
  };

  return    <div className={`${classes.root} mt-30 mb-30`}>
  <Pagination count={count} page={page} onChange={handleChange} />
</div>
}

export default PaginationDisplay;
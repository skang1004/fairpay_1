import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import GenderChart from './GenderChart.js';

function GenderCity(props) {
  return (
    <React.Fragment>
      <div hidden={props.value !== props.index}>
        <div className="data_display_div">
          <TableContainer component={Paper}>
            <Table className="table_displays">
              <TableHead className='TableHead'>
                <TableRow>
                  <TableCell>Gender</TableCell>
                  <TableCell align="right">People in City</TableCell>
                  <TableCell align="right">Average Salary</TableCell>
                  <TableCell align="right">Average Annual Bonus</TableCell>
                  <TableCell align="right">Average Stock Options</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.genderList.map((row) => (
                  <TableRow key={row.gender}>
                    <TableCell>{row.gender}</TableCell>
                    <TableCell align="right">{row.count}</TableCell>
                    <TableCell align="right">${row.avg_salary}</TableCell>
                    <TableCell align="right">${row.avg_bonus}</TableCell>
                    <TableCell align="right">${row.avg_stock}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <GenderChart genderList={props.genderList} />
      </div>
    </React.Fragment>
  );
}

export default GenderCity;

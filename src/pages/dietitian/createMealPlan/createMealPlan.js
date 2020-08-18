import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
  Text
} from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'

import React from 'react'

const day = ['brealfast', 'lunch', 'dinner']

const createMealPlan = () => {
  const mealTable = meal => {
    return (
      <Box border width='xlarge'>
        <Text>{meal}</Text>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope='col' border='bottom'>
                Food
              </TableCell>
              <TableCell scope='col' border='bottom'>
                Calories
              </TableCell>
              <TableCell scope='col' border='bottom'>
                Carbohydrates (g)
              </TableCell>
              <TableCell scope='col' border='bottom'>
                Fat (g)
              </TableCell>
              <TableCell scope='col' border='bottom'>
                Protein (g)
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell scope='row'>
                <strong>Steak</strong>
              </TableCell>
              <TableCell>Coconut</TableCell>
            </TableRow>
            <TableRow>
              <TableCell scope='row'>
                <strong>Chris</strong>
              </TableCell>
              <TableCell>Watermelon</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell scope='row'>
                <Button>Add Another</Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Box>
    )
  }

  return (
    <>
      <Box direction='row' justify='center'>
        <CaretPrevious color='brand' size='large' />
        <Box border width='large' justify='center' align='center'>
          <Text>Tuesday, August 18 2020</Text>
        </Box>
        <CaretNext color='brand' size='large' />
      </Box>

      {day.map(day => mealTable(day))}
    </>
  )
}

export default createMealPlan

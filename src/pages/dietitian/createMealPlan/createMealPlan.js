import { Add, Close } from 'grommet-icons'
import {
  Box,
  Button,
  DataTable,
  FormField,
  Heading,
  Layer,
  Select,
  Text,
  TextArea,
  TextInput
} from 'grommet'
import { CaretNext, CaretPrevious } from 'grommet-icons'
import React, { useEffect, useState } from 'react'

const day = ['brealfast', 'lunch', 'dinner']

const CreateMealPlan = () => {
  const [startDate, setstartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [meals, setMeals] = useState([])

  const [open, setOpen] = React.useState(false)
  const [select, setSelect] = React.useState('')

  const onOpen = () => setOpen(true)

  const onClose = () => setOpen(undefined)

  useEffect(() => {
    const newMeals = [
      {
        food: 'ceaf',
        grams: 12,
        calories: 412,
        protein: 13,
        fat: 234,
        carbs: 321,
        meal_time: 'breakfast'
      },
      {
        food: 'ceaf',
        grams: 12,
        calories: 412,
        protein: 13,
        fat: 234,
        carbs: 321,
        meal_time: 'lunch'
      }
    ]
    setMeals([...newMeals])
  }, [])

  const columnsThemeSize = [
    { property: 'food', header: 'Food', size: 'small' },
    { property: 'grams', header: 'Grams', size: 'xsmall' },
    { property: 'calories', header: 'Calories', size: 'xsmall' },
    { property: 'protein', header: 'Protein', size: 'xsmall', align: 'end' },
    { property: 'fat', header: 'Fat', size: 'xsmall', align: 'end' },
    { property: 'carbs', header: 'Carbohydrates', size: 'xsmall', align: 'end' }
  ]

  return (
    <>
      {console.log(meals)}
      <Box direction='row' justify='center'>
        <CaretPrevious color='brand' size='large' />
        <Box border width='large' justify='center' align='center'>
          <Text>Tuesday, August 18 2020</Text>
        </Box>
        <CaretNext color='brand' size='large' />
      </Box>
      <Text>Brekfast</Text>
      <DataTable
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'breakfast')}
        primaryKey={false}
        border={{
          color: 'border',
          side: 'vertical',
          size: '1px'
        }}
      />
      <Text>Lunch</Text>
      <DataTable
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'lunch')}
        primaryKey={false}
        border={{
          color: 'border',
          side: 'vertical',
          size: '1px'
        }}
      />
      <Text>Dinner</Text>

      <DataTable
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'dinner')}
        primaryKey={false}
        border={{
          color: 'border',
          side: 'vertical',
          size: '1px'
        }}
      />
      <Box fill align='center' justify='center'>
        <Button icon={<Add />} label='Add Meal Item' onClick={onOpen} />
        {open && (
          <Layer
            position='right'
            full='vertical'
            modal
            onClickOutside={onClose}
            onEsc={onClose}
          >
            <Box
              as='form'
              fill='vertical'
              overflow='auto'
              width='medium'
              pad='medium'
              onSubmit={onClose}
            >
              <Box flex={false} direction='row' justify='between'>
                <Heading level={2} margin='none'>
                  Add Meal Item
                </Heading>
                <Button icon={<Close />} onClick={onClose} />
              </Box>
              <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
                <FormField label='First'>
                  <TextInput />
                </FormField>
                <FormField label='Second'>
                  <Select
                    options={[
                      'one',
                      'two',
                      'three',
                      'four',
                      'five',
                      'six',
                      'seven',
                      'eight'
                    ]}
                    value={select}
                    onSearch={() => {}}
                    onChange={({ option }) => setSelect(option)}
                  />
                </FormField>
                <FormField label='Third'>
                  <TextArea />
                </FormField>
              </Box>
              <Box flex={false} as='footer' align='start'>
                <Button
                  type='submit'
                  label='Submit'
                  onClick={onClose}
                  primary
                />
              </Box>
            </Box>
          </Layer>
        )}
      </Box>
    </>
  )
}

export default CreateMealPlan

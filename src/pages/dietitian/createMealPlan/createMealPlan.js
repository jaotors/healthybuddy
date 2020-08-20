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

import { calculateTotalCalories } from '../../../utils/calorieCalc'
import { foodData } from '../../../utils/foodData'

const day = ['brealfast', 'lunch', 'dinner']

const defaultOptions = foodData.map(food => food.recipe)

const CreateMealPlan = () => {
  const [startDate, setstartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [meals, setMeals] = useState([])

  const [open, setOpen] = React.useState(false)
  const [select, setSelect] = React.useState('')

  const onOpen = () => setOpen(true)

  const onClose = () => setOpen(undefined)
  const onSubmit = () => {
    onClose()
  }
  const [options, setOptions] = useState(defaultOptions)
  const [value, setValue] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [serving, setServing] = useState(0)

  useEffect(() => {
    const recipe = foodData.find(ele => {
      return ele.recipe === value
    })
    setSelectedRecipe(recipe)
  }, [value])

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
      {console.log(selectedRecipe)}
      <Box direction='row' justify='center'>
        <CaretPrevious color='brand' size='large' />
        <Box border width='large' justify='center' align='center'>
          <Text>Tuesday, August 18 2020</Text>
        </Box>
        <CaretNext color='brand' size='large' />
      </Box>
      <Text>Breakfast</Text>
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
                <FormField label='Food'>
                  <Select
                    size='medium'
                    placeholder='Select'
                    value={value}
                    options={options}
                    onChange={({ option }) => setValue(option)}
                    onClose={() => setOptions(defaultOptions)}
                    onSearch={text => {
                      // The line below escapes regular expression special characters:
                      // [ \ ^ $ . | ? * + ( )
                      const escapedText = text.replace(
                        /[-\\^$*+?.()|[\]{}]/g,
                        '\\$&'
                      )

                      // Create the regular expression with modified value which
                      // handles escaping special characters. Without escaping special
                      // characters, errors will appear in the console
                      const exp = new RegExp(escapedText, 'i')
                      setOptions(defaultOptions.filter(o => exp.test(o)))
                    }}
                  />
                </FormField>
                <FormField label='Grams'>
                  <TextInput
                    value={serving}
                    onChange={event => setServing(event.target.value)}
                  />
                </FormField>
                <FormField label='Meal Time'>
                  <Select
                    options={['breakfast', 'lunch', 'dinner']}
                    value={select}
                    onSearch={() => {}}
                    onChange={({ option }) => setSelect(option)}
                  />
                </FormField>
                <FormField label='calories'>
                  <TextInput
                    disabled
                    value={
                      selectedRecipe &&
                      `${calculateTotalCalories(selectedRecipe, serving)} kcal`
                    }
                  />
                </FormField>
                <FormField label='fat'>
                  <TextInput
                    disabled
                    value={
                      selectedRecipe &&
                      `${(selectedRecipe.fat * serving) / 10} grams`
                    }
                  />
                </FormField>
                <FormField label='protein'>
                  <TextInput
                    disabled
                    value={
                      selectedRecipe &&
                      `${(selectedRecipe.protein * serving) / 10} grams`
                    }
                  />
                </FormField>
                <FormField label='carbohydrates'>
                  <TextInput
                    disabled
                    value={
                      selectedRecipe &&
                      `${(selectedRecipe.carb * serving) / 10} grams`
                    }
                  />
                </FormField>
              </Box>
              <Box flex={false} as='footer' align='start'>
                <Button
                  type='submit'
                  label='Submit'
                  onClick={onSubmit}
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

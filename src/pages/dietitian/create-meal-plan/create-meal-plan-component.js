import { Add, CaretNext, CaretPrevious, Close } from 'grommet-icons'
import {
  Box,
  Button,
  DataTable,
  DateInput,
  FormField,
  Heading,
  Layer,
  Select,
  Text,
  TextInput
} from 'grommet'

import React from 'react'
import { calculateTotalCalories } from '../../../utils/calorieCalc'

export const RangeSelector = ({
  startDate,
  setstartDate,
  endDate,
  setEndDate,
  setMealCreateStart,
  mealCreateStart
}) => {
  return (
    <Box>
      <Text> Select start and end date for meal plan</Text>
      <DateInput
        format='mm/dd/yyyy'
        value={startDate}
        onChange={event => setstartDate(event.value)}
      />
      <DateInput
        format='mm/dd/yyyy'
        value={endDate}
        onChange={event => setEndDate(event.value)}
      />
      <Button onClick={() => setMealCreateStart(!mealCreateStart)}>
        Submit
      </Button>
    </Box>
  )
}

export const MealPlanDataTable = ({
  currDate,
  meals,
  goPreviousDay,
  goNextDay
}) => {
  const columnsThemeSize = [
    { property: 'food', header: 'Food', size: 'small' },
    { property: 'grams', header: 'Grams', size: 'xsmall' },
    { property: 'calories', header: 'Calories', size: 'xsmall' },
    { property: 'protein', header: 'Protein', size: 'xsmall' },
    { property: 'fat', header: 'Fat', size: 'xsmall' },
    { property: 'carb', header: 'Carbohydrates', size: 'xsmall' }
  ]

  return (
    <>
      <Box direction='row' justify='center'>
        <CaretPrevious color='brand' size='large' onClick={goPreviousDay} />
        <Box border width='large' justify='center' align='center'>
          <Text>{currDate}</Text>
        </Box>
        <CaretNext color='brand' size='large' onClick={goNextDay} />
      </Box>
      <Text>Breakfast</Text>
      <DataTable
        pad={{ horizontal: 'medium' }}
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'breakfast')}
        primaryKey={false}
        border
        background={{
          header: 'dark-3',
          body: ['light-1', 'light-3'],
          footer: 'dark-3'
        }}
      />
      <Text>Lunch</Text>
      <DataTable
        pad={{ horizontal: 'medium' }}
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'lunch')}
        primaryKey={false}
        border
        background={{
          header: 'dark-3',
          body: ['light-1', 'light-3'],
          footer: 'dark-3'
        }}
      />
      <Text>Dinner</Text>
      <DataTable
        pad={{ horizontal: 'medium' }}
        columns={columnsThemeSize}
        data={meals.filter(meal => meal.meal_time === 'dinner')}
        primaryKey={false}
        border
        background={{
          header: 'dark-3',
          body: ['light-1', 'light-3'],
          footer: 'dark-3'
        }}
      />
    </>
  )
}

export const AddMealItemForm = ({
  onCloseMealForm,
  searchValue,
  setSearchValue,
  options,
  setOptions,
  defaultOptions,
  serving,
  setServing,
  setMealTime,
  mealTime,
  selectedRecipe,
  onSubmitMealItem
}) => {
  return (
    <>
      <Layer
        position='right'
        full='vertical'
        modal
        onClickOutside={onCloseMealForm}
        onEsc={onCloseMealForm}
      >
        <Box
          as='form'
          fill='vertical'
          overflow='auto'
          width='medium'
          pad='medium'
          onSubmit={onCloseMealForm}
        >
          <Box flex={false} direction='row' justify='between'>
            <Heading level={2} margin='none'>
              Add Meal Item
            </Heading>
            <Button icon={<Close />} onClick={onCloseMealForm} />
          </Box>
          <Box flex='grow' overflow='auto' pad={{ vertical: 'medium' }}>
            <FormField label='Food'>
              <Select
                size='medium'
                placeholder='Select'
                value={searchValue}
                options={options}
                onChange={({ option }) => setSearchValue(option)}
                onCloseMealForm={() => setOptions(defaultOptions)}
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
                value={mealTime}
                onSearch={() => {}}
                onChange={({ option }) => setMealTime(option)}
              />
            </FormField>
            <FormField label='Calories'>
              <TextInput
                disabled
                value={
                  selectedRecipe &&
                  `${calculateTotalCalories(selectedRecipe, serving)} kcal`
                }
              />
            </FormField>
            <FormField label='Fat'>
              <TextInput
                disabled
                value={
                  selectedRecipe &&
                  `${(selectedRecipe.fat * serving) / 10} grams`
                }
              />
            </FormField>
            <FormField label='Protein'>
              <TextInput
                disabled
                value={
                  selectedRecipe &&
                  `${(selectedRecipe.protein * serving) / 10} grams`
                }
              />
            </FormField>
            <FormField label='Carbohydrates'>
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
              primary
              type='submit'
              label='Submit'
              onClick={event => {
                event.preventDefault()
                onSubmitMealItem({
                  food: selectedRecipe.recipe,
                  grams: serving,
                  fat: (selectedRecipe.fat * serving) / 10,
                  protein: (selectedRecipe.protein * serving) / 10,
                  carb: (selectedRecipe.carb * serving) / 10,
                  calories: calculateTotalCalories(selectedRecipe, serving),
                  meal_time: mealTime
                })
              }}
            />
          </Box>
        </Box>
      </Layer>
    </>
  )
}

export const ConfirmationModal = ({
  onCloseConfirmation,
  setOpenConfirmation,
  openConfirmation
}) => {
  return (
    <Layer
      position='center'
      onClickOutside={onCloseConfirmation}
      onEsc={onCloseConfirmation}
    >
      <Box pad='medium' gap='small' width='medium'>
        <Heading level={3} margin='none'>
          Confirm
        </Heading>
        <Text>
          Have you completed filling up the meal plan for all of the days? If
          so, click submit
        </Text>
        <Box
          as='footer'
          gap='small'
          direction='row'
          align='center'
          justify='end'
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Button label='Submit' onClick={null} color='dark-3' />
          <Button
            label={
              <Text color='white'>
                <strong>Cancel</strong>
              </Text>
            }
            onClick={() => setOpenConfirmation(!openConfirmation)}
            primary
            color='status-critical'
          />
        </Box>
      </Box>
    </Layer>
  )
}

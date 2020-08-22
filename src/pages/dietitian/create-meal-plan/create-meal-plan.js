import {} from 'grommet-icons'

import {
  AddMealItemForm,
  ConfirmationModal,
  MealPlanDataTable,
  RangeSelector
} from './create-meal-plan-component'
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
import React, { useEffect, useState } from 'react'

import { Add } from 'grommet-icons'
import { DateInput } from 'grommet'
import { calculateTotalCalories } from '../../../utils/calorieCalc'
import { foodData } from '../../../utils/foodData'

const defaultOptions = foodData.map(food => food.recipe)

const CreateMealPlan = () => {
  // RangeSelector Props
  const [startDate, setstartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [mealCreateStart, setMealCreateStart] = useState(false)
  const [currDate, setCurrDate] = useState('')

  // AddMealItemForm Props
  const [meals, setMeals] = useState([])
  const [openMealForm, setOpenMealForm] = useState(false)
  const [mealTime, setMealTime] = useState('')
  const [options, setOptions] = useState(defaultOptions)
  const [searchValue, setSearchValue] = useState('')
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [serving, setServing] = useState(0)
  const onOpenMealForm = () => setOpenMealForm(true)
  const onCloseMealForm = () => setOpenMealForm(undefined)
  const onSubmitMealItem = newMeal => {
    setMeals([newMeal, ...meals])
    onCloseMealForm()
  }

  // ConfirmationModal Props
  const [openConfirmation, setOpenConfirmation] = useState(false)
  const onOpenConfirmation = () => {
    setOpenConfirmation(true)
  }
  const onCloseConfirmation = () => {
    setOpenConfirmation(undefined)
  }

  useEffect(() => {
    const recipe = foodData.find(ele => {
      return ele.recipe === searchValue
    })
    setSelectedRecipe(recipe)
  }, [searchValue])

  useEffect(() => {
    setCurrDate(startDate)
  }, [startDate])

  return (
    <>
      {mealCreateStart === false ? (
        <RangeSelector
          startDate={startDate}
          setstartDate={setstartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          mealCreateStart={mealCreateStart}
          setMealCreateStart={setMealCreateStart}
        />
      ) : (
        <>
          <MealPlanDataTable currDate={currDate} meals={meals} />

          <Box fill align='center' justify='center'>
            <Button
              icon={<Add />}
              label='Add Meal Item'
              onClick={onOpenMealForm}
            />
            {openMealForm && (
              <AddMealItemForm
                onCloseMealForm={onCloseMealForm}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                options={options}
                setOptions={setOptions}
                defaultOptions={defaultOptions}
                serving={serving}
                setServing={setServing}
                mealTime={mealTime}
                setMealTime={setMealTime}
                selectedRecipe={selectedRecipe}
                onSubmitMealItem={onSubmitMealItem}
              />
            )}

            <Box align='center' pad='medium'>
              <Button label='Submit Meal Plan' onClick={onOpenConfirmation} />
            </Box>

            {openConfirmation && (
              <ConfirmationModal
                onCloseConfirmation={onCloseConfirmation}
                setOpenConfirmation={setOpenConfirmation}
                openConfirmation={openConfirmation}
              />
            )}
          </Box>
        </>
      )}
    </>
  )
}

export default CreateMealPlan

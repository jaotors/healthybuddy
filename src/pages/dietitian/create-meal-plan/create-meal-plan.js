import * as Api from '../../../api'

import {
  AddMealItemForm,
  ConfirmationModal,
  MealPlanDataTable,
  RangeSelector
} from './create-meal-plan-component'
import { Box, Button } from 'grommet'
import React, { useEffect, useState } from 'react'

import { Add } from 'grommet-icons'
import { foodData } from '../../../fixtures/foodData'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

const defaultOptions = foodData.map(food => food.recipe)
const accessToken = localStorage.getItem('access_token')

const CreateMealPlan = () => {
  const { state } = useLocation()

  // RangeSelector Props
  const [startDate, setstartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [mealCreateStart, setMealCreateStart] = useState(false)
  const [currDate, setCurrDate] = useState('')
  const goPreviousDay = () => {
    const previousDate = moment(currDate).subtract(1, 'days')
    const currentDate = moment(currDate)
    setCurrDate(previousDate.format())
  }

  const goNextDay = () => {
    const nextDate = moment(currDate).add(1, 'days')
    const currentDate = moment(currDate)
    setCurrDate(nextDate.format('MM/DD/YYYY'))
  }

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
  // const submitMealPlan = async () => {
  //   console.log('submit')

  //   await Api.createMealPlan(accessToken, {
  //     start_date: '2020-09-18',
  //     end_date: '2020-09-20',
  //     title: 'High Protein Diet, Low Carb Diet',
  //     remarks: 'Please follow diet strictly and eat on time',
  //     description: '80% protein, 20% carb diet for beginners.',
  //     customer_id: 5,
  //     meals: [
  //       {
  //         food_name: 'Caesar Salad',
  //         carb: 10.5,
  //         fat: 5.2,
  //         calories: 120,
  //         meal_time: 'snack',
  //         description: 'Can be after dinner or after lunch',
  //         date: '2020-09-18'
  //       }
  //     ]
  //   })
  // }

  const submitMealPlan = async () => {
    await Api.createMealPlan(accessToken, {
      customer_id: state.user_id,
      start_date: moment(startDate).format('YYYY-MM-DD'),
      end_date: moment(endDate).format('YYYY-MM-DD'),
      meals: meals
    })
    onCloseConfirmation()
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
          <MealPlanDataTable
            currDate={currDate}
            meals={meals}
            goNextDay={goNextDay}
            goPreviousDay={goPreviousDay}
          />

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
                currDate={currDate}
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
                submitMealPlan={submitMealPlan}
              />
            )}
          </Box>
        </>
      )}
    </>
  )
}

export default CreateMealPlan

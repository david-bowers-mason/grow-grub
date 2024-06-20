import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'

import * as db from '../db/growGrub.ts'
import { UserData, User } from '../../models/growGrub.ts'

const router = Router()

//Used to check user exists
router.get('/users', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const userDB = await db.getUserByAuth0Id(auth0Id)
    if (!userDB) return res.json(userDB)
    const user: User = {id: userDB.id, username: userDB.username, location: userDB.location}
    res.json(user)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//For registering a new user
router.post('/users', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  const userData: UserData = req.body
  if (!auth0Id) return res.sendStatus(401)
  if (!userData) return res.sendStatus(400)
  try {
    const userId = await db.addUser({...userData, auth0_id: auth0Id})
    res.json(userId)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//Gets all usernames to help the registering user avoid double ups on usernames (unique in DB) NOT IN USE
router.get('/usernames', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const usernames = await db.getUsernames()
    res.json(usernames)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//Gets all plants NOT IN USE
router.get('/plants', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const plants = await db.getPlants()
    res.json(plants)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//Gets all plants the user desires for their garden(s) NOT IN USE
router.get('/plants/desired', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const plants = await db.getUsersPlantsDesired(auth0Id)
    res.json(plants)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//Get the users gardens NOT IN USE
router.get('/gardens', checkJwt, async (req:JwtRequest, res) => {
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const gardens = await db.getUsersGardens(auth0Id)
    res.json(gardens)  
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
//Gets plots + plants for the garden NOT IN USE
router.get('/gardens/:id', checkJwt, async (req:JwtRequest, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.auth?.sub
  if (!auth0Id) return res.sendStatus(401)
  try {
    const gardenInfoDB = await db.getUserGarden(auth0Id, id)
    const plotsDB: any[] = [] // eslint-disable-line
    gardenInfoDB.forEach(row => {
      if (row.plot_plant_id) {
        plotsDB[row.plot_id] = plotsDB[row.plot_id] || {}
        plotsDB[row.plot_id].plotNumber = row.plot_number
        plotsDB[row.plot_id].shadeLevel = row.shade_level
        plotsDB[row.plot_id].plotType = row.plot_type
        plotsDB[row.plot_id].size = row.size
        plotsDB[row.plot_id].averageWind = row.average_wind
        plotsDB[row.plot_id].name = row.plot_name
        plotsDB[row.plot_id].plants = plotsDB[row.plot_id].plants || []
        plotsDB[row.plot_id].plants.push({
          name: row.plant_name,
          difficulty: row.difficulty,
          wateringFrequency: row.watering_frequency,
          datePlanted: row.date_planted,
          lastWatered: row.last_watered
        })
      }
    })
    const plots = plotsDB.filter(item => item)
    const garden = {
      id: gardenInfoDB[0].garden_id,
      layout: gardenInfoDB[0].layout,
      plots: plots}
    res.json(garden)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})
export default router
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/menu.screen.js'
import LoginScreen from '../screen/login.screen.js'
import userData from '../data/userData.json' with { type: "json"}



describe('My Login application', () => {
    it('should login with invalid credentials', async () => {

        await MenuScreen.accessorLoginScreen()
        await LoginScreen.fillLoginForm(userData.userFail.username,userData.userFail.password)
        await expect($("//*[@text='Provided credentials do not match any user in this service.']")).toHaveText('Provided credentials do not match any user in this service.')


    })

    it('should login with valid credentials', async () => {

        await MenuScreen.accessorLoginScreen()
        await LoginScreen.fillLoginForm(userData.userSuccess.username,userData.userSuccess.password)
        await expect($("//*[@text='Provided credentials do not match any user in this service.']")).toHaveText('Provided credentials do not match any user in this service.')


    })

})


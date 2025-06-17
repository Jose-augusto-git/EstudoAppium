class MenuScreen{
    constructor(){
        this.userNameInput = '~Username input field'
        this.passInput = "~Password input field"
        this.loginButton  = "~Login button"
        this.errorMessage = "//*[@text='Provided credentials do not match any user in this service.']"


    }

    async fillLoginForm(username,password){
        await $("~Username input field").click()
        await $(this.userNameInput).setValue(username)
        await $("~Password input field").click()
        await $(this.passInput).setValue(password)
        await $(this.loginButton).click()

    }
}

export default new MenuScreen()

import React from "react"
import { describe, test, expect} from "vitest"
import {render,screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"


import App from "../src/App"
import { Hero } from "../src/components"
import { LanguageContext, LanguageProvider } from "../src/context/LanguageContext"

describe("<App />", ()=> {
    test("should add item and remove item",()=> {


        render(<LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}> <App/>   </LanguageContext.Provider>) 
        
    })
})
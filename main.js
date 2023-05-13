/*
 * @Descripttion: 
 * @version: 
 * @Author: EVE
 * @Date: 2023-05-13 12:10:27
 * @LastEditors: EVE
 * @LastEditTime: 2023-05-13 12:10:28
 */
const {
    app,
    BrowserWindow
} = require('electron')
const isDev = require('electron-is-dev')

let mainWindow

app.on('ready', () => {
    mainWindow =  new BrowserWindow({
        width:1024,
        height:650,
        minWidth:600,
        webPreference:{
            nodeItergration:true,
            enableRemoteMoule:true
        }
    })

    const urlLocation = isDev ? 'http://localhost:3000' : 'myUrl'

    mainWindow.loadURL(urlLocation)
})
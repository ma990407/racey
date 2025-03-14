let 识别次数 = 0
let 颜色卡1 = 0
let 颜色卡2 = 0
let 颜色卡3 = 0
input.onButtonPressed(Button.A, function () {
    识别次数 += 1
    while (识别次数 == 1 && 颜色卡1 == 0) {
        if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
            颜色卡1 = 1
            basic.showString("G")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.blue)) {
            颜色卡1 = 2
            basic.showString("B")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
            颜色卡1 = 3
            basic.showString("Y")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
            basic.pause(5000)
            basic.showString("R")
            颜色卡1 = 4
        }
    }
    while (颜色卡1 > 0 && (识别次数 == 2 && 颜色卡2 == 0)) {
        if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
            颜色卡2 = 1
            basic.showString("G")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.blue)) {
            颜色卡2 = 2
            basic.showString("B")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
            颜色卡2 = 3
            basic.showString("Y")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
            basic.showString("R")
            颜色卡2 = 4
            basic.pause(5000)
        }
    }
    while (颜色卡1 > 0 && (识别次数 == 3 && 颜色卡2 > 0 && 颜色卡3 == 0)) {
        if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.green)) {
            颜色卡3 = 1
            basic.showString("G")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.blue)) {
            颜色卡3 = 2
            basic.showString("B")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.yellow)) {
            颜色卡3 = 3
            basic.showString("Y")
            basic.pause(5000)
        } else if (PlanetX_Basic.checkColor(PlanetX_Basic.ColorList.red)) {
            basic.showString("R")
            颜色卡3 = 4
            basic.pause(5000)
        }
    }
})
function 路口模块左拐 (布尔值: boolean) {
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9)) {
        nezhaV2.stop(nezhaV2.MotorPostion.M1)
        basic.pause(400)
        while (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_13) || PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_9)) {
            nezhaV2.comboRun(100, nezhaV2.VerticallDirection.Up)
        }
        nezhaV2.stop(nezhaV2.MotorPostion.M1)
        nezhaV2.stop(nezhaV2.MotorPostion.M2)
        // 下降吸铁石
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    } else {
        nezhaV2.comboRun(100, nezhaV2.VerticallDirection.Up)
    }
}
basic.forever(function () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (颜色卡1 > 0 && (input.buttonIsPressed(Button.B) && 颜色卡2 > 0 && 颜色卡3 > 0)) {
        nezhaV2.comboRun(100, nezhaV2.VerticallDirection.Up)
        basic.pause(500)
        nezhaV2.comboStop()
        if (颜色卡1 == 1) {
        	
        } else if (颜色卡1 == 2) {
        	
        } else if (颜色卡1 == 3) {
        	
        } else if (颜色卡1 == 4) {
        	
        }
    }
})

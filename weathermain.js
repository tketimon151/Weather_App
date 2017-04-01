let f_to_c_button = document.getElementById("conversionbutton")
let current_temp_display = document.getElementById("current_temp_degrees")
let f_temp = Number(current_temp_display.textContent)


let convert_f_to_c = function(number) {
  return Math.round(((number - 32) * 5) / 9)
}

conversionbutton.addEventListener("click", function() {
  current_temp_display.textContent = convert_f_to_c(f_temp)  }
)


let r = new XMLHttpRequest()
r.open("GET","http://api.wunderground.com/api/ba5b9bfd895f0fd1/forecast/q/NJ/Union_City.json")
r.send()
r.addEventListener("load", function(){

  let p = JSON.parse(r.responseText)
    document.getElementById("todays_high").textContent = p.forecast.simpleforecast.forecastday[0].high.fahrenheit
    document.getElementById("todays_low").textContent = p.forecast.simpleforecast.forecastday[0].low.fahrenheit

      let r2 = new XMLHttpRequest()
        r2.open("GET","http://api.wunderground.com/api/ba5b9bfd895f0fd1/conditions/q/NJ/Union_City.json")
        r2.send()
        r2.addEventListener("load", function(){

      let p2 = JSON.parse(r2.responseText)
        document.getElementById("current_temp_degrees").textContent = r2.conditions.current_observation.temp_f
      })
}
)

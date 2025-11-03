//priority 0
"use strict";

const registerWEATHER2Recipes = (event) => {
    global.WEATHER2_DISABLED_ITEMS.forEach(item => {
        event.remove({id: item})
    })

    //Fix TFC Compatability Recipes
    event.replaceInput(
        {mod: 'tfcweather'},
        '#tfc:brass_mechanisms',
        'gtceu:small_brass_gear'
    )
    event.replaceInput(
        {mod: 'tfcweather'},
        '#forge:rods/cast_iron',
        '#forge:rods/iron'
    )
    event.replaceInput(
        {mod: 'tfcweather'},
        '#forge:sheets/cast_iron',
        '#forge:sheets/iron'
    )

    //Wind Turbine
    event.remove('weather2:wind_turbine')
    event.shaped('weather2:wind_turbine', [
        'ABA',
        'ACA',
        'DED'
    ], {
        A: 'gtceu:double_black_steel_plate',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:lv_machine_hull',
        D: 'gtceu:lv_electric_motor',
        E: 'gtceu:tin_double_cable'
    }).id('tfgc:weather2/shaped/wind_turbine')

    //Weather Deflector
    event.remove('weather2:weather_deflector')
    event.shaped('weather2:weather_deflector', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:gems',
        B: 'gtceu:steel_plate',
        C: 'gtceu:steel_machine_casing'
    }).id('tfgc:weather2/shaped/weather_deflector')

    //Tornado Sensor
    event.remove('weather2:tornado_sensor')
    event.shaped('weather2:tornado_sensor', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:steel_plate',
        B: 'gtceu:tin_double_cable',
        C: 'vintageimprovements:redstone_module',
        D: 'gtceu:lv_machine_casing'
    }).id('tfgc:weather2/shaped/tornado_sensor')

    //Tornado Siren
    event.remove('weather2:tornado_siren')
    event.shaped('weather2:tornado_siren', [
        ' A ',
        ' B '
    ], {
        A: 'minecraft:note_block',
        B: 'weather2:tornado_sensor'
    }).id('tfgc:weather2/shaped/tornado_siren')

    //TFC Sand Layers Recipes

    global.WEATHER2_TFC_SAND_COLORS.forEach(color => {
        event.shaped(Item.of('tfcweather:sand/sand_layer/' + color, 64), [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'tfc:sand/' + color,
            B: '#rnr:mattocks'
        })
        .damageIngredient('#rnr:mattocks', 8)
        .id('tfgc:tfcweather/shaped/sand_layer/' + color)
    })
}
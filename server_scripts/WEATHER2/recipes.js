//priority 0
"use strict";

const registerWEATHER2Recipes = (event) => {
    global.WEATHER2_DISABLED_ITEMS.forEach(item => {
        event.remove({id: item})
    })

    //Fix TFC Compatability Recipes en masse
    global.WEATHER2_TFC_METAL_TYPES.forEach(metal => {
        //Anemometer
        event.remove({id: 'tfcweather:crafting/blocks/metal/anemometer/' + metal})
        event.shaped('tfcweather:metal/anemometer/' + metal,
            [
                'ABA',
                'ACA'
            ],
            {
                A: '#forge:sheets/' + metal,
                B: 'gtceu:small_brass_gear',
                C: 'gtceu:' + metal + '_rod'
            }
        ).id('tfgc:weather2/shaped/anemometer/' + metal)
        //Wind Vane
        event.remove({id: 'tfcweather:crafting/blocks/metal/wind_vane/' + metal})
        event.shaped('tfcweather:metal/wind_vane/' + metal,
            [
                'ACA',
                'ABA',
                'ACA'
            ],
            {
                A: '#forge:sheets/' + metal,
                B: 'gtceu:small_brass_gear',
                C: 'gtceu:' + metal + '_rod'
            }
        ).id('tfgc:weather2/shaped/wind_vane/' + metal)
    })

    //Stupid ~~cast~~ iron recipes
    event.remove({id: 'tfcweather:crafting/blocks/metal/anemometer/cast_iron'})
        event.shaped('tfcweather:metal/anemometer/cast_iron',
            [
                'A A',
                'ABA',
                'ACA'
            ],
            {
                A: '#forge:sheets/iron',
                B: 'gtceu:small_brass_gear',
                C: 'gtceu:iron_rod'
            }
        ).id('tfgc:weather2/shaped/anemometer/cast_iron')
        //Wind Vane
        event.remove({id: 'tfcweather:crafting/blocks/metal/wind_vane/cast_iron'})
        event.shaped('tfcweather:metal/wind_vane/cast_iron',
            [
                'ACA',
                'ABA',
                'ACA'
            ],
            {
                A: '#forge:sheets/iron',
                B: 'gtceu:small_brass_gear',
                C: 'gtceu:iron_rod'
            }
        ).id('tfgc:weather2/shaped/wind_vane/cast_iron')

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
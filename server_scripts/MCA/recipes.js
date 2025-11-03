// priority: 0
"use strict";
const registerMCARecipes = (event) => {
	
	event.remove({id: 'mca:rose_gold_ingot'})
	event.remove({id: 'mca:rose_gold_dust_from_ingot'})
	event.remove({id: 'mca:rose_gold_block'})
	
	event.replaceInput(
		{ mod: 'mca'},
		'mca:rose_gold_ingot',
		'gtceu:rose_gold_ingot'
	)
	event.replaceInput(
		{ mod: 'mca'},
		'minecraft:stone',
		'#tfc:rock/raw'
	)
	event.replaceInput(
		{ mod: 'mca'},
		'minecraft:cobblestone',
		'#forge:cobblestone'
	)

	//Crib Loop
	global.MCA_COLOR_TYPES.forEach(color => {
		//Fix recipe based off wood type
		global.MCA_WOOD_TYPES.forEach(wood => {
			event.shaped(
				Item.of('mca:'.concat(color, "_", wood, "_crib"))
				[
					'A A',
					'ACA',
					'BBB'
				],
				{
					A: 'tfc:wood/planks/'.concat(wood, "_fence"),
					B: 'tfc:wood/planks/'.concat(wood),
					C: 'minecraft:'.concat(color, '_carpet')
				}
			)
		})
	})
}
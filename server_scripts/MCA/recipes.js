// priority: 0
"use strict";
const registerMCARecipes = (event) => {
	
	//Fix Duplicate Rose Gold
	event.remove({id: 'mca:rose_gold_ingot'})
	event.remove({id: 'mca:rose_gold_dust_from_ingot'})
	event.remove({id: 'mca:rose_gold_block'})
	event.replaceInput(
		{ mod: 'mca'},
		'mca:rose_gold_ingot',
		'gtceu:rose_gold_ingot'
	)

	//Replace stones wiht tfc tags
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
				Item.of("mca:".concat(color, "_", wood[0], "_crib"), 1),
				[
					'A A',
					'ACA',
					'BBB'
				],
				{
					A:  wood[2] + ':wood/planks/' +  wood[1] + '_fence',
					B:  wood[2] + ':wood/lumber/' +  wood[1],
					C: 'minecraft:'.concat(color, '_carpet')
				}
			)
		})
	})
}

StartupEvents.registry('item', e => {
//   // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
//   // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
//   e.create('oddyssey:passion_fruit_seeds').texture('oddyssey:item/passion_fruit_seeds')
//   e.create('oddyssey:gunmetal_ingot').texture('oddyssey:item/gunmetal_ingot')
//   e.create('oddyssey:gunmetal_nugget').texture('oddyssey:item/gunmetal_nugget')

//   e.create('oddyssey:gunmetal_codex').texture('oddyssey:item/gunmetal_codex')

//   e.create('oddyssey:ethereal_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:firestarter_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:skywing_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:waterbearer_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:frostbiter_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:lightrunner_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:shieldbreaker_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:soul_eater_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:unseen_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:gilded_monarch_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:weaver_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:lawgiver_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:thunderbolt_sigil').texture('oddyssey:item/ethereal_sigil')
//   e.create('oddyssey:bombshell_sigil').texture('oddyssey:item/ethereal_sigil')

//   e.create('oddyssey:electrum_lance', 'sword').texture('oddyssey:item/electrum_lance').tier('electrum').attackDamageBaseline(4).speedBaseline(-2.0)
//   e.create('oddyssey:anchorblade', 'pickaxe').texture('oddyssey:item/anchorblade').tier('iron').attackDamageBaseline(7).speedBaseline(-3.0)



})

// //Subscribe to the block registry event.
// //No need to use the item registry event, the item will be created automatically.
StartupEvents.registry('block', e => {
    e.create('oddyssey:grimshale').texture('oddyssey:block/grimshale')



// 	//Syntax : event.create("namespace:block_id", "custommachinery").machine("namespace:machine_id)
//   e.create('oddyssey:gunmetal_block').texture('oddyssey:block/gunmetal_block')
// 	e.create("kubejs:foundry", "custommachinery:custom_machine").machine("custommachinery:foundry")

//   e.create('oddyssey:foundry_block_unlit')
//     .fullBlock(true)
//     .noItem()
//     .soundType('deepslate')
//     .hardness(1.0)
//     .resistance(1.0)
//     .texture('up', 'oddyssey:block/foundry_top')
//     .texture('down', 'oddyssey:block/foundry_bottom')
//     .texture('front', 'oddyssey:block/front')
//     .texture('side', 'oddyssey:block/side')
//   e.create('oddyssey:foundry_block_lit')
//     .fullBlock(true)
//     .noItem()
//     .soundType('deepslate')
//     .hardness(1.0)
//     .resistance(1.0) 
//     .texture('up', 'oddyssey:block/foundry_top')
//     .texture('down', 'oddyssey:block/foundry_bottom')
//     .texture('front', 'oddyssey:block/front_on')
//     .texture('side', 'oddyssey:block/side')
//   e.create('oddyssey:foundry_block_open_unlit')
//     .fullBlock(true)
//     .noItem()
//     .soundType('deepslate')
//     .hardness(1.0)
//     .resistance(1.0)
//     .texture('up', 'oddyssey:block/foundry_top')
//     .texture('down', 'oddyssey:block/foundry_bottom')
//     .texture('front', 'oddyssey:block/front_open')
//     .texture('side', 'oddyssey:block/side')
//   e.create('oddyssey:foundry_block_open_lit')
//     .fullBlock(true)
//     .noItem()
//     .soundType('deepslate')
//     .hardness(1.0)
//     .resistance(1.0) 
//     .texture('up', 'oddyssey:block/foundry_top')
//     .texture('down', 'oddyssey:block/foundry_bottom')
//     .texture('front', 'oddyssey:block/front_open_on')
//     .texture('side', 'oddyssey:block/side')




})

// // ItemEvents.toolTierRegistry(e => {
// //     e.add('lead', tier => {
// //       tier.uses = 500
// //       tier.speed = 4.0
// //       tier.attackDamageBonus = 2.0
// //       tier.level = 2
// //       tier.enchantmentValue = 9
// //       tier.repairIngredient = 'oreganized:lead_block'
// //     })
// //   })
// // ItemEvents.modification(e => {
// //     e.modify('kubejs:anchorblade', item => {
// //       item.rarity = "RARE"
// //     })

// //  e.modify('kubejs:electrum_lance', item => {
// //       item.rarity = "RARE"
// //       item.tier = tier => {
// //       tier.repairIngredient = 'oreganized:electrum_ingot'
// //     }
// //     })
// //   })
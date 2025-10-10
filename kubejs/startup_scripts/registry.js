
StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('passion_fruit_seeds').texture('oddyssey:item/passion_fruit_seeds')
  e.create('gunmetal_ingot').texture('oddyssey:item/gunmetal_ingot')
  e.create('gunmetal_nugget').texture('oddyssey:item/gunmetal_nugget')

  e.create('gunmetal_codex').texture('oddyssey:item/gunmetal_codex')
  e.create('ethereal_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('firestarter_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('skywing_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('waterbearer_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('frostbiter_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('lightrunner_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('shieldbreaker_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('soul_eater_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('unseen_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('gilded_monarch_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('weaver_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('lawgiver_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('thunderbolt_sigil').texture('oddyssey:item/ethereal_sigil')
  e.create('bombshell_sigil').texture('oddyssey:item/ethereal_sigil')

  e.create('electrum_lance', 'sword').texture('oddyssey:item/electrum_lance').tier('electrum').attackDamageBaseline(4).speedBaseline(-2.0)
  e.create('anchorblade', 'pickaxe').texture('oddyssey:item/anchorblade').tier('iron').attackDamageBaseline(7).speedBaseline(-3.0)



})

//Subscribe to the block registry event.
//No need to use the item registry event, the item will be created automatically.
StartupEvents.registry('block', e => {
	//Syntax : event.create("namespace:block_id", "custommachinery").machine("namespace:machine_id)
	e.create("kubejs:foundry", "custommachinery").machine("custommachinery:foundry")
  e.create('gunmetal_block').texture('oddyssey:block/gunmetal_block')

})


// ItemEvents.toolTierRegistry(e => {
//     e.add('lead', tier => {
//       tier.uses = 500
//       tier.speed = 4.0
//       tier.attackDamageBonus = 2.0
//       tier.level = 2
//       tier.enchantmentValue = 9
//       tier.repairIngredient = 'oreganized:lead_block'
//     })
//   })
// ItemEvents.modification(e => {
//     e.modify('kubejs:anchorblade', item => {
//       item.rarity = "RARE"
//     })

//  e.modify('kubejs:electrum_lance', item => {
//       item.rarity = "RARE"
//       item.tier = tier => {
//       tier.repairIngredient = 'oreganized:electrum_ingot'
//     }
//     })
//   })
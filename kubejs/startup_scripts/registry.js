StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('passion_fruit_seeds').texture('oddyssey:item/passion_fruit_seeds')
  e.create('gunmetal_ingot').texture('oddyssey:item/gunmetal_ingot')
  e.create('gunmetal_codex').texture('oddyssey:item/gunmetal_codex')
  e.create('ethereal_sigil').texture('oddyssey:item/ethereal_sigil')

})

//Subscribe to the block registry event.
//No need to use the item registry event, the item will be created automatically.
StartupEvents.registry('block', e => {
	//Syntax : event.create("namespace:block_id", "custommachinery").machine("namespace:machine_id)
	e.create("kubejs:foundry", "custommachinery").machine("custommachinery:foundry")
  e.create('gunmetal_block').texture('oddyssey:block/gunmetal_block')

})
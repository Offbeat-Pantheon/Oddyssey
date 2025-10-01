StartupEvents.registry('item', e => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  e.create('passion_fruit_seeds').texture('oddyssey:item/passion_fruit_seeds')
})

//Subscribe to the block registry event.
//No need to use the item registry event, the item will be created automatically.
StartupEvents.registry('block', event => {
	//Syntax : event.create("namespace:block_id", "custommachinery").machine("namespace:machine_id)
	event.create("kubejs:foundry", "custommachinery").machine("custommachinery:foundry")
  
})
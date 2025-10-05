ServerEvents.recipes(e => {
    e.shaped('custommachinery:custom_machine_item[custommachinery:machine="custommachinery:foundry"]', [
        'TTT',
        'DFD',
        'DDD'
    ], {
        D: 'minecraft:cobbled_deepslate',
        F: 'minecraft:furnace',
        T: 'minecraft:copper_ingot' // change to Tin once C&C ports
    }).id('kubejs:shaped/foundry')
    
  //Craft recipe : 
  e.recipes.custommachinery.custom_machine("kubejs:foundry", 1000)
    .requireFuel()
    .requireItem(Item.of('kubejs:gunmetal_codex'), "codex_slot")
    .requireItemOnEnd('minecraft:copper_ingot')
    .requireItemOnEnd('oreganized:lead_ingot')
    .requireItemOnEnd('minecraft:gunpowder')
    .produceItem('kubejs:gunmetal_ingot')

})
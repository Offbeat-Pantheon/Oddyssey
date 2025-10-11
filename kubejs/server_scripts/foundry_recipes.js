ServerEvents.recipes(e => {
    e.shaped( 
         Item.of('kubejs:foundry', 1),
        [
        'TTT',
        'DFD',
        'DDD'
    ], {
        D: 'minecraft:cobbled_deepslate',
        F: 'minecraft:furnace',
        T: 'minecraft:copper_ingot' // change to Tin once C&C ports
    })
    
  //Craft recipe : 
  e.recipes.custommachinery.custom_machine("custommachinery:foundry", 1000)
    .requireFuel()
    .requireItem('oddyssey:gunmetal_codex', "codex_slot").chance(0)
    .requireItemOnEnd('minecraft:copper_ingot')
    .requireItemOnEnd('oreganized:lead_ingot')
    .requireItemOnEnd('minecraft:gunpowder')
    .produceItem('oddyssey:gunmetal_ingot')

})
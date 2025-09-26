ServerEvents.recipes(e => {
    // new recipes
    e.shaped(
        Item.of('minecraft:elytra', 1), // arg 1: output
        [
            'BCB',
            'PBP', // arg 2: the shape (array of strings)
            'P P'
        ],
        {
        P: 'minecraft:phantom_membrane',
        B: 'minecraft:breeze_rod',  //arg 3: the mapping object
        C: 'minecraft:honeycomb'
        }
    ),

    // - oven recipes
    
    e.custom({
        type: "cookscollection:baking",
        ingredients: [
            {"item": "farmersdelight:wheat_dough"},
            {"tag": "c:foods/milk"},
            {"item": "farmersdelight:wheat_dough"},
            {"item": "farmersdelight:wheat_dough"}
  ],
        result: 
            {id: "farmersdelight:pie_crust", count: 1},
        cookingtime: 200
})
    e.custom({
        type: "cookscollection:baking_shaped",
        pattern: [
          "DMD",
          " D "
        ],
        key: {
          "D": {
            "item": "farmersdelight:wheat_dough"
          },
          "M": {
            "tag": "c:foods/milk"
          }
        },
        result: 
            {id: "farmersdelight:pie_crust", count: 3},
        cookingtime: 200
})

    // - gritsmill recipes
    e.remove({ id: 'bountifulfares:walnut_mulch_from_walnut_milling'})
    e.custom({
        type: "bountifulfares:milling",
        ingredient: 
        {item: "nomansland:walnuts"},
        result: 
        {id: "bountifulfares:walnut_mulch"},
        result_count: 1
})


    //simple recipe changes

    // - vanilla
    e.replaceInput(
         {output: 'minecraft:jukebox' }, 
                    'minecraft:diamond',           
                    'minecraft:amethyst_shard'         
    ),

    // - bountiful fares
    

    // - etched
    e.replaceInput(
         {output: 'etched:etching_table' }, 
                    'minecraft:diamond',           
                    'minecraft:amethyst_shard'         
    ),
    e.replaceInput(
         {output: 'etched:boombox' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:iron_ingot'         
    ),

    // - minersdelight
    e.replaceInput(
         {output: 'minersdelight:copper_pot' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),
    e.replaceInput(
         {output: 'minersdelight:copper_cup' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:brick'         
    ),

    // - no man's land
    e.replaceInput(
         {output: 'nomansland:walnut_palisade' }, 
                    'nomansland:walnut_log',           
                    'bountifulfares:walnut_log'         
    ),
    e.replaceInput(
         {output: 'nomansland:stripped_walnut_palisade' }, 
                    'nomansland:stripped_walnut_log',           
                    'bountifulfares:stripped_walnut_log'         
    ),

    // - farmers delight
    e.replaceInput(
         {output: 'farmersdelight:wheat_dough' }, 
                    'minecraft:wheat',           
                    'bountifulfares:flour'         
    ),


    // - architect's palette


    //complex recipe changes
    //e.remove({ id: 'minecraft:note_block' }),
    //e.shaped(
    //    'minecraft:note_block', 
    //    [
    //        'PAP',
    //        'ARA', 
    //        'PAP'
    //    ],
    //{
    //    P: '#minecraft:planks',
    //    A: 'minecraft:amethyst_shard',
    //    R: 'minecraft:redstone'

    //}),
    e.remove({ id: 'architects_palette:bread_block'})
    e.remove({ id: 'minecraft:bread'})
    e.remove({ id: 'farmersdelight:bread_from_smoking'})
    

    e.remove({ id: 'arts_and_crafts:cork' }),
    e.shaped(
        Item.of('arts_and_crafts:cork', 4), 
        [
            'PPP',
            'PSP',
            'PPP',

        ],
    {
        p: '#minecraft:planks',
        S: 'minecraft:sponge',  
    }
    ),

    e.remove({ id: 'heartstone:heartstone' }),
    e.shaped(
        Item.of('heartstone:heartstone', 2), 
        [
            'HA ',
            'AH ',
        ],
    {
        A: 'minecraft:amethyst_shard',
        H: 'heart_crystals:heart_crystal_shard',  
    }
    ),
    

    

  console.log('Hello! The recipe event has fired!')
})
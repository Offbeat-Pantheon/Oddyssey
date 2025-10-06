ServerEvents.recipes(e => {
    // oddyssey recipes
   

    //simple recipe changes

    // - vanilla
    e.replaceInput(
         {output: 'minecraft:jukebox' }, 
                    'minecraft:diamond',           
                    'minecraft:amethyst_shard'         
    ),

    e.replaceInput(
         {output: 'minecraft:spyglass' }, 
                    'minecraft:amethyst_shard',           
                    'minecraft:quartz'         
    ),

    e.replaceInput(
         {output: 'minecraft:spyglass' }, 
                    'minecraft:copper_ingot',           
                    'minecraft:gold_ingot'         
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
    
    // upgrade aquatic
    e.replaceInput(
         {id: 'upgrade_aquatic:beachgrass_tatch' }, 
                    'upgrade_aquatic:beachgrass',           
                    'nomansland:tall_beachgrass'         
    )
    

  console.log('Hello! The recipe event has fired!')
})
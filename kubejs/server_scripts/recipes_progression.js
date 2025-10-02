ServerEvents.recipes(e => {

    // - Foundry stuff
    ///e.shaped('custommachinery:foundry[custommachinery:machine="custommachinery:foundry"]'), [
    ///    'DDD',
    ///    'DFD',
    ///    'DDD'
    ///], {
    ///    'D': 'minecraft:cobbled_deepslate',
    ///    'F': 'minecraft:furnace'
    ///}

     e.remove({ id: 'minecraft:furnace'})
     e.shaped(
        Item.of('minecraft:furnace', 1),
        [
            'SSS',
            'SCS',
            'SSS'
        ],
        {
            S: '#minecraft:stone_tool_materials',
            C: '#c:coal',
        }
    ),

    e.remove({ id: 'minecraft:campfire'})
    e.shaped(
        Item.of('minecraft:campfire', 1),
        [
            ' w ',
            'WSW',
            'LLL'
        ],
        {
            L: '#minecraft:logs',
            W: 'minecraft:stick',
            S: 'farmersdelight:straw_bale'
        }
    ),

    e.remove({ id: 'minecraft:soul_campfire'})
    e.shaped(
        Item.of('minecraft:soul_campfire', 1),
        [
            ' w ',
            'WSW',
            'LLL'
        ],
        {
            L: '#minecraft:logs',
            W: 'minecraft:bone',
            S: '#minecraft:soul_fire_base_blocks'
        }
    )
})
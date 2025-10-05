ServerEvents.recipes(e => {

    

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


// - custom materials
    e.shaped(
        Item.of('kubejs:gunmetal_block', 1),
        [
            'GGG',
            'GGG',
            'GGG'
        ],
        {
            G: 'kubejs:gunmetal_ingot'
        }
    )
    e.shapeless(
        Item.of('kubejs:gunmetal_ingot', 9),
        [
        'kubejs:gunmetal_block'
        ]
    )
})
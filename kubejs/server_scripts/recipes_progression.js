ServerEvents.recipes(e => {

    
// - vanilla recipe tweaks

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
            ' W ',
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
            ' W ',
            'WSW',
            'LLL'
        ],
        {
            L: '#minecraft:logs',
            W: 'minecraft:bone',
            S: '#minecraft:soul_fire_base_blocks'
        }
    )

// - modded recipe tweaks

    e.remove({ id: 'cold_sweat:boiler'})
    e.shaped(
        Item.of('cold_sweat:boiler', 1),
        [
            'SSS',
            'SCS',
            'DDD'
        ],
        {
            S: 'minecraft:cobblestone',
            D: '#cold_sweat:boiler_craftable_deepslate',
            C: '#c:coal'

        }
    ),

    e.remove({ id: 'cold_sweat:icebox'})
    e.shaped(
        Item.of('cold_sweat:icebox', 1),
        [
            'SSS',
            'PIP',
            'PPP'
        ],
        {
            S: 'minecraft:cobblestone',
            P: '#minecraft:planks',
            I: 'neapolitan:ice_cubes'

        }
    ),

    e.remove({ id: 'cold_sweat:hearth'})
    e.shaped(
        Item.of('cold_sweat:hearth', 1),
        [
            ' s ',
            'BBB',
            'SRS'
        ],
        {
            s: 'cold_sweat:smokestack',
            B: 'minecraft:bricks',
            S: '#minecraft:soul_fire_base_blocks',
            R: 'rubinated_nether:ruby'

        }
    ),

    e.remove({ id: 'musketmod:musket'})
    e.shaped(
        Item.of('musketmod:musket', 1),
        [
            'G  ',
            ' GP',
            ' NW'
        ],
        {
            G: 'oddyssey:gunmetal_ingot',
            P: 'minecraft:gunpowder',
            W: '#minecraft:planks',
            N: 'oddyssey:gunmetal_nugget',
        }
    )
    e.remove({ id: 'musketmod:musket_with_bayonet_smithing'})
    e.shaped(
        Item.of('musketmod:musket_with_bayonet', 1),
        [
            'G  ',
            'KGP',
            ' NW'
        ],
        {
            G: 'oddyssey:gunmetal_ingot',
            K: 'farmersdelight:iron_knife',
            P: 'minecraft:gunpowder',
            W: '#minecraft:planks',
            N: 'oddyssey:gunmetal_nugget'
        }
    )

    e.remove({ id: 'musketmod:musket_with_scope_smithing'})
    e.shaped(
        Item.of('musketmod:musket_with_scope', 1),
        [
            'GS ',
            ' GP',
            ' NW'
        ],
        {
            G: 'oddyssey:gunmetal_ingot',
            S: 'minecraft:spyglass',
            P: 'minecraft:gunpowder',
            W: '#minecraft:planks',
            N: 'oddyssey:gunmetal_nugget'
        }
    )

    e.remove({ id: 'musketmod:blunderbuss'})
    e.shaped(
        Item.of('musketmod:blunderbuss', 1),
        [
            'C  ',
            ' CP',
            ' NW'
        ],
        {
            C: 'minecraft:copper_ingot',
            P: 'minecraft:gunpowder',
            W: '#minecraft:planks',
            N: 'oddyssey:gunmetal_nugget'
        }
    )

    e.remove({ id: 'musketmod:pistol'})
    e.shaped(
        Item.of('musketmod:pistol', 1),
        [
            'GP ',
            'NS ',
        ],
        {
            G: 'oddyssey:gunmetal_ingot',
            P: 'minecraft:gunpowder',
            S: 'minecraft:stick',
            N: 'oddyssey:gunmetal_nugget'
        }
    )

    e.remove({ id: 'musketmod:cartridge'})
    e.shaped(
        Item.of('musketmod:cartridge', 3),
        [
            'NNN',
            'GP ',
        ],
        {
            G: 'minecraft:gunpowder',
            P: 'minecraft:paper',
            N: 'oddyssey:gunmetal_nugget'
        }
    )


// - custom materials
    e.shaped(
        Item.of('oddyssey:gunmetal_block', 1),
        [
            'GGG',
            'GGG',
            'GGG'
        ],
        {
            G: 'oddyssey:gunmetal_ingot'
        }
    )
    e.shapeless(
        Item.of('oddyssey:gunmetal_ingot', 9),
        [
        'oddyssey:gunmetal_block'
        ]
    )

    
})